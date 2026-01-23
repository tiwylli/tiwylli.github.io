import { siteConfig } from "@/config/site";

export default function Head() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      jobTitle: "Computer Vision & Graphics Researcher",
      sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "en",
    },
  ];

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as a string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
