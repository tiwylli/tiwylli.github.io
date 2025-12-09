/**
 * EducationSection
 * - Items come from `data/portfolio.ts`.
 */
import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";
import { education } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section className="scroll-mt-24" id="education">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading title="Education" />
        <ul className="space-y-8 sm:space-y-10">
          {education.map((item) => {
            const bullets = item.summary ? [item.summary] : [];

            return (
              <li key={`${item.school}-${item.degree}`}>
                <article className="rounded-xl border border-emerald-200 bg-emerald-50/90 px-6 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md dark:border-emerald-800/70 dark:bg-slate-900/70">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="heading-card text-slate-900 dark:text-slate-100">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-900/70 dark:text-emerald-200/80">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-200">
                    {item.school}
                  </p>
                  {bullets.length ? (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                      {bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
