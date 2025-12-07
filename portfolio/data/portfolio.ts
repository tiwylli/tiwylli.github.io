import type {
  EducationItem,
  HeroContent,
  NavItem,
  Project,
  Role,
  SocialLink,
} from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export const hero: HeroContent = {
  name: "Wylliam Cantin Charawi",
  intro: "3D Reconstruction | Computer Vision | Computer Graphics | Researcher & Software Developer",
  ctaPrimary: { label: "View Work", href: "#projects" },
  ctaSecondary: { label: "Get In Touch", href: "#education" },
};

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "#", icon: "mail" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
];

export const about = {
  summary:
    "TODO",
  skills: ["TODO"],
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Responsive personal site built with Next.js and HeroUI.",
    tech: ["Next.js", "HeroUI", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard",
    description: "Analytics dashboard with charts, auth, and theming.",
    tech: ["React", "TypeScript", "API"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Design System",
    description: "Reusable components and tokens for a product suite.",
    tech: ["HeroUI", "Tokens", "Docs"],
    demo: "#",
    repo: "#",
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
