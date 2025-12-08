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
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
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
    date: "Oct 2025",
    description:
      "High-performance Voronoi image generator across CPU, multi-core CPU, and GPU pipelines to compare performance trade-offs.",
    tech: ["Python", "CUDA C++", "Rust"],
    github: "https://github.com/tiwylli/voronoify",
    details: [
      "CUDA JFA labeling plus custom reduction kernel to avoid host-device transfers",
      "Rayon-backed Rust path for GPU-less systems",
      "Benchmarked CPU, multi-core, and GPU variants to profile trade-offs",
    ],
    image: "/vercel.svg",
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

export const education: EducationItem[] = [
  {
    school: "University Name",
    degree: "B.Sc. in Computer Science",
    period: "2015 — 2019",
    summary: "Focused on software engineering, HCI, and web technologies.",
  },
];
