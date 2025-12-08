import type {
  EducationItem,
  HeroContent,
  NavItem,
  Project,
  Role,
  SocialLink,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  //{ label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
];

export const hero: HeroContent = {
  name: "Wylliam Cantin Charawi",
  intro: "Computer Vision & Graphics Research Engineer",
};

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "wylliam.cantin.charawi@gmail.com", icon: "mail" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wylliamcc/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/tiwylli", icon: "github" },
];

export const about = {
  summary: "TODO",
  skills: ["TODO"],
};

export const projects: Project[] = [
  {
    title: "Voronoify",
    date: "",
    description:
      "High-performance Voronoi image generator across CPU, multi-core CPU, and GPU pipelines to compare performance trade-offs.",
    tech: ["Python", "Rust", "CUDA", "C++"],
    github: "https://github.com/tiwylli/voronoify",
    details: [
      "Engineered multiple high-performance implementations of a Voronoi image generator, targeting CPU, multi-core CPU, and GPU architectures to analyze performance trade-offs.",
      "Developed a native CUDA C++ solution using the Jump Flooding Algorithm (JFA) for labeling and a custom parallel reduction kernel for color averaging, eliminating host-device transfer bottlenecks.",
      "Built a memory-safe, parallel version in Rust with Rayon, providing an alternative for systems without a GPU.",
    ],
    image: "/voronoify.png",
  },
  {
    title: "Monte Carlo Path Tracer",
    date: "Sep 2025 - Present",
    description:
      "Physically based Monte Carlo path tracer in Rust with MIS, Fresnel-aware BSDFs, and emitter sampling for global illumination.",
    tech: ["Rust", "Path Tracing", "MIS", "BSDF"],
    github: "https://github.com/tiwylli/rust-path-tracer",
    details: [
      "Implements ray generation, intersections, and Fresnel-aware BRDF/BTDF sampling",
      "Direct and indirect lighting via modular path tracing with emitter sampling",
      "Variance reduction through MIS and hierarchical light selection",
    ],
    image: "/next.svg",
  },
  {
    title: "Numerical Simulation Toolkit",
    date: "Fall 2022",
    description:
      "C++ linear algebra library plus a 2D mass-spring particle simulator with custom solvers and integration schemes.",
    tech: ["C++", "Linear Algebra", "Simulation"],
    github: "https://github.com/tiwylli/numerical-sim",
    details: [
      "Template-based matrix library with operator overloading and memory management",
      "Mass-spring engine with implicit Euler integration and stiffness/mass assembly",
      "Custom solvers including Gauss-Seidel, graph-colored Gauss-Seidel, and Cholesky",
    ],
    image: "/next.svg",
  },
];

export const research: Project[] = [
  {
    title: "Neural Implicit Reconstruction",
    date: "2024 — Present",
    description:
      "Exploring neural implicit surfaces (SDFs/NeRFs) for real-time reconstruction of small-scale objects under sparse views.",
    tech: ["PyTorch", "CUDA", "NeRF", "SDF"],
    github: "https://github.com/tiwylli/nerf-implicit",
    details: [
      "Implemented mixed-precision training with occupancy grids for faster convergence on constrained GPUs.",
      "Benchmarked multi-resolution hash encodings against sinusoidal positional encodings for view consistency.",
    ],
    image: "/next.svg",
  },
  {
    title: "Robust Pose Estimation",
    date: "2023",
    description:
      "Evaluating robust loss functions and RANSAC variants for camera pose estimation on noisy keypoints.",
    tech: ["Python", "OpenCV", "Ceres"],
    github: "https://github.com/tiwylli/robust-pose",
    details: [
      "Compared PnP solvers (EPnP, RPnP) under increasing outlier ratios with synthetic and real benchmarks.",
      "Introduced Tukey and Geman-McClure losses into bundle adjustment to improve stability in cluttered scenes.",
    ],
    image: "/next.svg",
  },
];

export const roles: Role[] = [
  {
    company: "Acme Corp",
    title: "Senior Frontend Engineer",
    period: "2022 — Present",
    summary:
      "Led the development of a component library and migrated key apps to Next.js, improving performance and DX.",
  },
  {
    company: "Globex",
    title: "Frontend Engineer",
    period: "2020 — 2022",
    summary:
      "Built dashboards and optimized critical rendering paths, reducing bundle size and TTI across projects.",
  },
];

export const leadership: Role[] = [
  {
    company: "AI Research Society",
    title: "President",
    period: "2024 — Present",
    summary:
      "Led a cross-disciplinary team to host technical workshops, mentorship programs, and hackathons focused on AI safety and computer vision.",
  },
  {
    company: "Open Source Guild",
    title: "Organizer",
    period: "2022 — 2024",
    summary:
      "Coordinated contributor onboarding and release planning, growing active membership and maintaining healthy project velocity.",
  },
];

export const education: EducationItem[] = [
  {
    school: "University Name",
    degree: "B.Sc. in Computer Science",
    period: "2015 — 2019",
    summary: "Focused on software engineering, HCI, and web technologies.",
  },
];
