import type { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";

import { BackgroundLayer } from "@/components/BackgroundLayer";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/portfolio";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const title = project.title;
  const description = project.description;
  const canonical = `/projects/${project.slug}`;
  const image = project.image
    ? [{ url: project.image, alt: project.title }]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      images: image,
      type: "article",
    },
    twitter: {
      card: project.image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? image.map((item) => item.url) : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${siteConfig.url}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: projectUrl,
    image: project.image ? `${siteConfig.url}${project.image}` : undefined,
    keywords: project.tech?.length ? project.tech.join(", ") : undefined,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="relative z-0 min-h-screen">
        <BackgroundLayer />
        <div className="relative z-10 px-8 sm:px-12 md:px-24">
          <header className="mx-auto flex w-full max-w-5xl items-center justify-between pt-10 text-sm text-slate-600 dark:text-slate-300">
            <NextLink
              className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
              href="/#projects"
            >
              ← Back to projects
            </NextLink>
            <NextLink
              className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
              href="/"
            >
              Home
            </NextLink>
          </header>

          <article className="mx-auto flex w-full max-w-5xl flex-col gap-6 pb-20 pt-10">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">
                Project
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                {project.description}
              </p>
              {project.date ? (
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                  {project.date}
                </p>
              ) : null}
            </div>

            {project.tech?.length ? (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}

            {project.image || project.video ? (
              <div className="w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white/70 dark:border-emerald-900/60 dark:bg-slate-900/70">
                {project.video ? (
                  <video
                    autoPlay
                    className="block h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    src={project.video}
                    title={`${project.title} demo video`}
                  />
                ) : project.image ? (
                  <img
                    alt={`${project.title} preview`}
                    className="block h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={project.image}
                  />
                ) : null}
              </div>
            ) : null}

            {project.details?.length ? (
              <div className="rounded-2xl border border-emerald-100 bg-white/80 p-6 text-slate-700 shadow-sm dark:border-emerald-900/60 dark:bg-slate-900/70 dark:text-slate-200">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Highlights
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-sm">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {project.github ? (
                <a
                  className="rounded-full border border-emerald-300 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-800/60 dark:bg-slate-900/70 dark:text-emerald-100"
                  href={project.github}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {project.github.includes("github.com")
                    ? "View on GitHub"
                    : "Project site"}
                </a>
              ) : null}
              {project.demo ? (
                <a
                  className="rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:-translate-y-0.5 hover:border-green-400 hover:text-green-900 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-800/60 dark:bg-slate-900/70 dark:text-emerald-100"
                  href={project.demo}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live demo
                </a>
              ) : null}
              {project.repo ? (
                <a
                  className="rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:-translate-y-0.5 hover:border-green-400 hover:text-green-900 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-800/60 dark:bg-slate-900/70 dark:text-emerald-100"
                  href={project.repo}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Repository
                </a>
              ) : null}
            </div>
          </article>
        </div>
      </div>
      <script
        type="application/ld+json"
        // JSON-LD must be injected as a string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
