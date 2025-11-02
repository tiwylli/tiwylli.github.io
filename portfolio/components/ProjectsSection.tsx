"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";

import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

type ProjectsSectionProps = {
  limit?: number;
};

export default function ProjectsSection({ limit }: ProjectsSectionProps) {
  const displayedProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="bg-neutral-100 py-16 dark:bg-neutral-900" id="projects">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4">
        <SectionHeader
          align="left"
          description="Selected systems-level projects spanning differentiable geometry, rendering, and scientific computing."
          eyebrow="Projects"
          title="Recent research and engineering work"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <Card
              key={project.title}
              className="h-full border border-neutral-200 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
            >
              <CardHeader className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {project.techStack}
                </p>
              </CardHeader>
              <CardBody>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Link
                  className="text-sm font-medium text-primary-500 hover:text-primary-400"
                  href="#"
                >
                  {project.ctaLabel}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
