"use client";

import SectionHeader from "@/components/SectionHeader";
import { aboutSummary, researchAreas } from "@/data/about";

type AboutMeSectionProps = {
  isStandalone?: boolean;
};

export default function AboutMeSection({
  isStandalone = false,
}: AboutMeSectionProps) {
  return (
    <section
      className={`bg-neutral-50 py-16 dark:bg-neutral-950 ${
        isStandalone
          ? ""
          : "border-t border-neutral-200 dark:border-neutral-800"
      }`}
      id="about"
    >
      <div className="mx-auto flex max-w-screen-lg flex-col gap-10 px-4">
        <SectionHeader
          align="left"
          eyebrow="About"
          title="Researcher & engineer focused on computational geometry"
        />
        <div className="flex flex-col gap-8 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {aboutSummary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Research areas
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {researchAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
