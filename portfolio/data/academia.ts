export type EducationEntry = {
  program: string;
  school: string;
  affiliation?: string;
  location: string;
  timeline: string;
};

export const education: EducationEntry[] = [
  {
    program: "Fast-track Doctorate of Engineering | Computer Vision & Graphics",
    school: "École de Technologie Supérieure (ÉTS), Multimedia Lab & LIVIA",
    affiliation: "CVG Kawasaki Laboratory, Kyushu University",
    location: "Montreal, QC",
    timeline: "Expected Graduation: December 2028",
  },
  {
    program: "Bachelor of Software Engineering",
    school: "École de Technologie Supérieure (ÉTS)",
    location: "Montreal, QC",
    timeline: "Graduated: August 2024",
  },
];

export const researchFocus = [
  "Differentiable Clipped Centroidal Voronoi Tessellation (DCCVT): paving Voronoi diagrams using differentiable clipped centroids to extract clean meshes from implicit surfaces.",
  "Physically based rendering and Monte Carlo light transport pipelines implemented in Rust.",
  "High-performance geometry pipelines across CUDA, Rust (Rayon), and PyTorch for large-scale 3D reconstruction.",
];
