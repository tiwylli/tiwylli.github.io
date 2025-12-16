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
  resumeUrl: "/WylliamCantinCharawi_Resume.pdf",
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
    title: "Rendering Engine – Monte Carlo Path Tracer",
    date: "",
    description:
      "Physically based Monte Carlo renderer with MIS/NEE, principled BSDFs, hybrid analytic + SDF marching, participating media.",
    tech: ["Rust", "Python", "Blender"],
    github: "https://github.com/tiwylli/PBR-Engine",
    details: [
      "Global illumination integrators with next-event estimation + multiple importance sampling (BSDF/emitter), including a volumetric MIS path tracer for homogeneous media with Henyey–Greenstein scattering.",
      "Principled material stack: GGX microfacet with Fresnel/specular transmission, anisotropy + clearcoat, plus specialty materials (car paint, Oren–Nayar, subsurface/translucent) and analytic emitters/spotlights.",
      "Hybrid scene pipeline combining meshes and raymarched SDFs (noise/fractal caves + CSG ops) with BVH acceleration, plus optional OIDN denoising using albedo/normal AOVs and batch tooling.",
    ],
    image: "/f112.png",
    video: "/render_animation.mp4",
  },
  {
    title: "Numerical Simulation",
    date: "Fall 2022",
    description:
      "C++ linear algebra library plus a 2D mass-spring particle simulator with custom solvers and integration schemes.",
    tech: ["C++"],
    github: "",
    details: [
      "Designed and implemented a full C++ linear algebra library with templates, operator overloading, memory management (stack vs heap), and unit testing.",
      "Developed a 2D mass-spring particle simulation engine with numerical integration (implicit Euler), stiffness/mass matrix assembly, and custom linear solvers (Gauss-Seidel, graph-colored Gauss-Seidel, Cholesky).",
    ],
    image: "/gti320.png",
  },
];

export const research: Project[] = [
  {
    title: "DCCVT: Differentiable Clipped Centroidal Voronoi Tessellation",
    date: "2025",
    description:
      "Novel framework for paving Voronoi diagrams with differentiable clipped centroids to extract high-quality meshes from implicit surfaces using Pytorch, outperforming SotA marching tetrahedra and Voronoi-based extraction methods.",
    tech: ["PyTorch", "Python", "Jupyter Notebook", "CUDA"],
    github: "",
    details: [":)"],
    image: "/dccvt.png",
    video: "/OptimComparison.mp4",
  },
];

export const roles: Role[] = [
  {
    company: "Zebra Technologies",
    title: "Computer Vision Researcher",
    period: "October 2025 — Present",
    summary:
      "Researching novel computer vision and graphics techniques to enhance industrial vision systems.",
  },
  {
    company:
      "CVG Kawasaki Laboratory, Kyushu University | Multimedia Lab & LIVIA, ÉTS",
    title: "Computer Vision and Graphics Researcher",
    period: "May 2024 — Nov 2025",
    summary:
      "Published Differentiable Clipped Centroidal Voronoi Tessellation (DCCVT) to extract high-quality meshes from implicit surfaces with PyTorch.",
    bullets: [
      "Published a paper at 3DV introducing Differentiable Clipped Centroidal Voronoi Tessellation (DCCVT), paving Voronoi diagrams with differentiable clipped centroids to extract high-quality meshes from implicit surfaces in PyTorch, outperforming state-of-the-art marching tetrahedra and Voronoi-based extraction methods.",
    ],
  },
  {
    company:
      "Zebra Technologies | Matrox Imaging Industrial Research Chair, LIVIA",
    title: "Computer Vision Research Developer",
    period: "May 2023 — Aug 2023",
    summary:
      "Built data and benchmarking pipelines and trained hazard label detection models to improve industrial vision accuracy.",
    bullets: [
      "Developed a Python pipeline to augment barcode datasets using C++ and Matrox Imaging Library, generating test files and benchmarks that cut costs by 1,500%.",
      "Captured real-world hazmat label data, built and augmented a dataset, and trained an RTMDet/YOLO model reaching 98.2% accuracy on video feeds.",
    ],
  },
  {
    company: "Loto-Québec, Technologies Nter",
    title: "Analyst Programmer",
    period: "Jan 2022 — Apr 2022",
    summary:
      "Improved Vue.js component performance and refreshed site typography to deliver a more responsive UX.",
    bullets: [
      "Developed and optimized multiple Vue.js components for a fluid and responsive UI.",
      "Proposed a Bootstrap and CSS typography approach that improved responsiveness and consistency.",
      "Implemented Agile practice improvements, introducing story points for clearer planning.",
    ],
  },
  {
    company: "Vokeso - Gold Microsoft Partner",
    title: "Junior Developer",
    period: "May 2021 — Aug 2021",
    summary:
      "Delivered Business Central extensions and web experiences while containerizing services for cleaner deployments.",
    bullets: [
      "Developed and customized Microsoft Dynamics 365 Business Central extensions and reports.",
      "Built a website using HTML, CSS, React.js, PHP, Postman API, and MSSQL.",
      "Containerized databases and processes with Docker and multiple Azure VMs.",
    ],
  },
];

export const leadership: Role[] = [
  {
    company: "École de Technologie Supérieure (ÉTS)",
    title: "Technology Application Technician",
    period: "Sep 2021 — May 2024",
    summary:
      "Tutored students for their mechanical, electrical, and optical physics lab activities (ING150, PHY332, PHY335).",
    bullets: [
      "Tutored students for their mechanical, electrical, and optical physics lab activities (ING150, PHY332, PHY335).",
    ],
  },
  {
    company: "ÉTS Student Association (AÉÉTS)",
    title: "Software Engineering Representative Administrator",
    period: "Sep 2021 — May 2024",
    summary:
      "Sat on the AÉÉTS board of directors, managing a $1M budget and organizing social and technical activities for software engineering students.",
    bullets: [
      "Sat on the AÉÉTS board of directors and managed a $1M budget.",
      "Organized social and technical activities for software engineering students.",
    ],
  },
  {
    company: "274e groupe scout St-Ephrem",
    title: "Scouting Volunteer",
    period: "Sep 2007 — Jan 2023",
    summary:
      "Organized fundraisers, educational activities, and camps for kids.",
    bullets: [
      "Organized fundraisers, educational activities, and camps for kids.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Multimedia Lab & ILLS | École de Technologie Supérieure (ÉTS)",
    degree: "Doctorate of Engineering | Computer Vision & Graphics",
    period: "Expected Graduation Dec 2027",
    summary:
      "Researching computer vision and graphics as part of a fast-track doctoral program.",
  },
  {
    school: "École de Technologie Supérieure (ÉTS)",
    degree: "Bachelor of Software Engineering",
    period: "Graduated Aug 2024",
    summary:
      "Software engineering degree with applied projects across vision, graphics, and systems.",
  },
];
