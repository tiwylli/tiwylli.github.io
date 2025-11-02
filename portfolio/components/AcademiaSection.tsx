"use client";

import SectionHeader from "@/components/SectionHeader";
import { education, researchFocus } from "@/data/academia";

export default function AcademiaSection() {
  return (
    <section
      className="bg-neutral-100 py-16 dark:bg-neutral-900 dark:text-neutral-100"
      id="academia"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-12 px-4">
        <SectionHeader
          align="left"
          description="Graduate studies and collaborative research efforts centered on differentiable geometry and physically based rendering."
          eyebrow="Academia"
          title="Education & research collaborations"
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((entry) => (
                <li
                  key={entry.program}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                    {entry.program}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {entry.school}
                    {entry.affiliation ? (
                      <>
                        <br />
                        <span>{entry.affiliation}</span>
                      </>
                    ) : null}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {entry.location}
                    <br />
                    <span>{entry.timeline}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              Research Focus
            </h3>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <div className="space-y-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                {researchFocus.map((topic) => (
                  <p key={topic}>{topic}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
