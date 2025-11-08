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

export type Project = {
  title: string;
  description: string;
  tech: string[];
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

