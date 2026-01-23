"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import CvtBackground from "@/components/CvtBackground";

const lightPalette = ["#f8fff641", "#ecfff33d", "#e3f9e83d", "#d6f5de4b"];
const darkPalette = ["#020302ff", "#050805ff", "#080d08ff", "#0b0d10"];

type BackgroundDensity = "home" | "detail";

type BackgroundLayerProps = {
  density?: BackgroundDensity;
};

const densityConfig: Record<BackgroundDensity, { numSites: number; iterations: number }> = {
  home: { numSites: 200, iterations: 1000 },
  detail: { numSites: 1000, iterations: 1000 },
};

export function BackgroundLayer({ density = "detail" }: BackgroundLayerProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [baseSize] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 1440, height: 900 };
    }

    return { width: window.innerWidth, height: window.innerHeight };
  });

  const { numSites, iterations } = densityConfig[density];

  return (
    <CvtBackground
      baseHeight={baseSize.height}
      baseWidth={baseSize.width}
      className="absolute inset-0"
      iterations={iterations}
      numSites={numSites}
      palette={isDark ? darkPalette : lightPalette}
      position="fixed"
      strokeColor={
        isDark ? "rgba(52, 211, 153, 0.25)" : "rgba(16, 185, 129, 0.22)"
      }
    />
  );
}
