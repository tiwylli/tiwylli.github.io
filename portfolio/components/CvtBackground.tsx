"use client";
import { useEffect, useMemo, useState } from "react";
import { Delaunay } from "d3-delaunay";
import { motion } from "framer-motion";

type Point = [number, number];

interface CvtBackgroundProps {
  numSites?: number; // number of Voronoi sites
  iterations?: number; // Lloyd iterations for CVT
  palette?: string[]; // optional color palette
  className?: string; // to control size/position via CSS
  strokeColor?: string; // optional color for cell borders
  baseWidth?: number; // cached geometry width
  baseHeight?: number; // cached geometry height
  position?: "absolute" | "fixed"; // rendering position
}

interface Cell {
  path: string;
  fill: string;
}

interface CellGeometry {
  path: string;
  colorIndex: number;
}

const defaultPalette = [
  "#0f172a", // slate-900
  "#111827", // gray-900
  "#1e293b", // slate-800
  "#020617", // slate-950
  "#0b1120", // navy-ish
];

const BASE_WIDTH = 2560;
const BASE_HEIGHT = 1440;
const geometryCache = new Map<string, CellGeometry[]>();

function getCacheKey(
  numSites: number,
  iterations: number,
  width: number,
  height: number,
) {
  return `${numSites}:${iterations}:${width}:${height}`;
}

function polygonToPath(poly: Point[]): string {
  if (!poly.length) return "";
  const [x0, y0] = poly[0];
  let d = `M ${x0} ${y0}`;

  for (let i = 1; i < poly.length; i++) {
    const [x, y] = poly[i];

    d += ` L ${x} ${y}`;
  }

  return d + " Z";
}

// Area-weighted polygon centroid
function polygonCentroid(poly: Point[]): Point {
  let area = 0;
  let cx = 0;
  let cy = 0;

  // Ensure polygon is closed
  const n = poly.length;

  if (n < 3) return poly[0] ?? [0, 0];

  for (let i = 0; i < n - 1; i++) {
    const [x1, y1] = poly[i];
    const [x2, y2] = poly[i + 1];
    const cross = x1 * y2 - x2 * y1;

    area += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }

  area *= 0.5;
  if (area === 0) {
    // Degenerate polygon; fallback to average of points
    let sx = 0;
    let sy = 0;

    for (const [x, y] of poly) {
      sx += x;
      sy += y;
    }

    return [sx / n, sy / n];
  }

  cx /= 6 * area;
  cy /= 6 * area;

  return [cx, cy];
}

function buildGeometry(
  numSites: number,
  iterations: number,
  width: number,
  height: number,
): CellGeometry[] {
  if (width <= 0 || height <= 0 || numSites <= 0) return [];

  // 1. Initialize random sites
  let sites: Point[] = [];

  for (let i = 0; i < numSites; i++) {
    sites.push([Math.random() * width, Math.random() * height]);
  }

  // 2. Lloyd relaxation for CVT
  for (let iter = 0; iter < iterations; iter++) {
    const delaunay = Delaunay.from(
      sites,
      (p) => p[0],
      (p) => p[1],
    );
    const voronoi = delaunay.voronoi([0, 0, width, height]);

    const newSites: Point[] = [];

    for (let i = 0; i < sites.length; i++) {
      const poly = voronoi.cellPolygon(i) as Point[] | null;

      if (!poly || poly.length < 3) {
        newSites.push(sites[i]);
        continue;
      }
      const centroid = polygonCentroid(poly);

      newSites.push(centroid);
    }
    sites = newSites;
  }

  // 3. Build final Voronoi diagram for rendering
  const delaunay = Delaunay.from(
    sites,
    (p) => p[0],
    (p) => p[1],
  );
  const voronoi = delaunay.voronoi([0, 0, width, height]);

  const newCells: CellGeometry[] = [];

  for (let i = 0; i < sites.length; i++) {
    const poly = voronoi.cellPolygon(i) as Point[] | null;

    if (!poly || poly.length < 3) continue;

    const path = polygonToPath(poly);

    newCells.push({ path, colorIndex: i });
  }

  return newCells;
}

const CvtBackground: React.FC<CvtBackgroundProps> = ({
  numSites = 120,
  iterations = 3,
  palette = defaultPalette,
  className = "",
  strokeColor = "none",
  baseWidth = BASE_WIDTH,
  baseHeight = BASE_HEIGHT,
  position = "absolute",
}) => {
  const resolvedPalette = palette.length ? palette : defaultPalette;
  const cacheKey = getCacheKey(numSites, iterations, baseWidth, baseHeight);
  const [geometry, setGeometry] = useState<CellGeometry[] | null>(
    geometryCache.get(cacheKey) ?? null,
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cachedGeometry = geometryCache.get(cacheKey);

    if (cachedGeometry) {
      setGeometry(cachedGeometry);
      return;
    }

    setGeometry(null);

    let cancelled = false;
    const timeoutId = window.setTimeout(() => {
      const nextGeometry = buildGeometry(
        numSites,
        iterations,
        baseWidth,
        baseHeight,
      );

      geometryCache.set(cacheKey, nextGeometry);
      if (!cancelled) {
        setGeometry(nextGeometry);
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [baseHeight, baseWidth, cacheKey, iterations, numSites]);

  const cells = useMemo(() => {
    if (!geometry?.length) return [];

    const paletteLength = resolvedPalette.length;
    const fallbackColor = resolvedPalette[paletteLength - 1] ?? "#0f172a";

    return geometry.map((cell) => ({
      path: cell.path,
      fill:
        resolvedPalette[cell.colorIndex % paletteLength] ?? fallbackColor,
    }));
  }, [geometry, resolvedPalette]);

  // Enable a smooth entrance once cells are ready
  useEffect(() => {
    if (cells.length === 0) {
      setIsVisible(false);

      return;
    }

    const id = requestAnimationFrame(() => setIsVisible(true));

    return () => cancelAnimationFrame(id);
  }, [cells.length]);

  return (
    <div
      className={className}
      style={{
        position,
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: position === "fixed" ? 0 : -1,
      }}
    >
      {cells.length > 0 && (
        <motion.svg
          animate={
            isVisible
              ? {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }
              : { opacity: 0, scale: 1.015 }
          }
          height="100%"
          initial={{ opacity: 0, scale: 1.015 }}
          preserveAspectRatio="xMidYMid slice"
          viewBox={`0 0 ${baseWidth} ${baseHeight}`}
          width="100%"
        >
          {cells.map((cell, idx) => (
            <path
              key={idx}
              d={cell.path}
              fill={cell.fill}
              opacity={0.9}
              stroke={strokeColor}
              strokeWidth={1}
            />
          ))}
        </motion.svg>
      )}
    </div>
  );
};

export default CvtBackground;
