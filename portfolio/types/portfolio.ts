export type NavItem = {
  label: string;
  href: string; // anchor target like #about
};

export type HeroContent = {
  name: string;
  intro: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  date?: string;
  github?: string;
  image?: string;
  details?: string[];
  demo?: string;
  repo?: string;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  summary?: string;
};
