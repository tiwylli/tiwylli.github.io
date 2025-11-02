export type Project = {
  title: string;
  techStack: string;
  highlights: string[];
  ctaLabel: string;
};

export const projects: Project[] = [
  {
    title: "Voronoify",
    techStack: "Python, CUDA C++, Rust (Oct 2025)",
    highlights: [
      "Engineered multiple high-performance implementations of a Voronoi image generator across CPU, multi-core CPU, and GPU to analyze performance trade-offs.",
      "CUDA C++ Jump Flooding Algorithm (JFA) for label propagation + custom parallel reduction kernel for color averaging to remove host–device transfer bottlenecks.",
      "Rust version with Rayon for safe parallelism on machines without a GPU.",
    ],
    ctaLabel: "View details →",
  },
  {
    title: "Rendering Engine – Monte Carlo Path Tracer",
    techStack: "Rust (Sept 2025 – Present)",
    highlights: [
      "Physically based Monte Carlo path tracer in Rust: from ray generation and geometric intersections to global illumination with MIS.",
      "Implemented BSDFs with Fresnel effects, cosine-weighted sampling, analytical PDF evaluation.",
      "Integrated direct + indirect lighting with emitter sampling, hierarchical light selection, and MIS variance reduction.",
    ],
    ctaLabel: "View details →",
  },
  {
    title: "Numerical Simulation",
    techStack: "C++ (Fall 2022)",
    highlights: [
      "Wrote a full C++ linear algebra library with templates, operator overloading, stack vs heap memory control, and unit tests.",
      "Built a 2D mass–spring particle simulation engine: implicit Euler integration, stiffness/mass matrix assembly.",
      "Implemented custom linear solvers (Gauss–Seidel, graph-colored Gauss–Seidel, Cholesky).",
    ],
    ctaLabel: "View details →",
  },
];
