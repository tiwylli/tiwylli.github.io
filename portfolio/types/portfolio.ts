export type NavItem = {
  label: string;
  href: string; // anchor target like #about
};

export type HeroContent = {
  name: string;
  intro: string;
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
  video?: string;
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
  bullets?: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  summary?: string;
};
