export type SiteConfig = typeof siteConfig;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://wylliamcantincharawi.dev";

export const siteConfig = {
  name: "Wylliam Cantin Charawi",
  url: siteUrl,
  description:
    "Computer Vision & Graphics Researcher — Differentiable geometry, 3D reconstruction, physically based rendering.",
  links: {
    github: "https://github.com/tiwylli",
    linkedin: "https://linkedin.com/in/wylliamcc/",
  },
};
