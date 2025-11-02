"use client";

import SectionHeader from "@/components/SectionHeader";
import { experienceRoles } from "@/data/experience";

type ExperienceSectionProps = {
  limit?: number;
};

export default function ExperienceSection({ limit }: ExperienceSectionProps) {
  const roles =
    typeof limit === "number"
      ? experienceRoles.slice(0, limit)
      : experienceRoles;

  return (
    <section
      className="bg-white py-16 dark:bg-neutral-950 dark:text-neutral-100"
      id="experience"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4">
        <SectionHeader
          align="left"
          description="Hands-on roles spanning academic research collaborations and industrial computer vision deployments."
          eyebrow="Experience"
          title="Applied research and engineering roles"
        />
        <div className="relative border-l border-neutral-200 dark:border-neutral-800">
          <div className="absolute -left-[5px] top-0 bottom-0 hidden w-2 rounded bg-gradient-to-b from-primary-400/60 to-transparent lg:block" />
          <div className="flex flex-col gap-10">
            {roles.map((role, index) => (
              <article key={`${role.title}-${index}`} className="relative pl-8">
                <span className="absolute left-[-10px] top-1.5 h-2.5 w-2.5 rounded-full border border-white bg-primary-500 dark:border-neutral-900" />
                <div className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                  <header className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {role.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {role.organization}
                    </p>
                    <div className="flex flex-col gap-1 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:gap-4">
                      <span>{role.dates}</span>
                      <span className="hidden sm:inline-block">•</span>
                      <span>{role.location}</span>
                    </div>
                  </header>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {role.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
