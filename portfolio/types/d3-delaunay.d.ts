// Minimal types to satisfy TS for d3-delaunay usage in CvtBackground.
declare module "d3-delaunay" {
  export interface Voronoi<P = any> {
    cellPolygon(index: number): P[] | null;
  }

  export class Delaunay<P = any> {
    static from(
      points: Iterable<P>,
      getX?: (point: P) => number,
      getY?: (point: P) => number,
    ): Delaunay<P>;

    voronoi(bounds: [number, number, number, number]): Voronoi<P>;
  }
}
