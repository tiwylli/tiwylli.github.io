/**
 * EducationSection
 * - Items come from `data/portfolio.ts`.
 */
import { education } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section className="scroll-mt-24" id="education">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8 font-tektur text-4xl sm:text-5xl text-slate-900">
          <span className="relative inline-block">
            Ed
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-green-500"
            />
          </span>
          ucation
        </h2>
        <ul className="space-y-14">
          {education.map((e) => {
            const bullets = e.summary ? [e.summary] : [];

            return (
              <li key={`${e.school}-${e.degree}`} className="relative">
                <div className="relative z-10 mx-auto w-full rounded-xl border border-green-200 bg-emerald-50 px-6 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-tektur heading-card text-slate-900">
                      {e.degree}
                    </h3>
                    <span className="text-xs font-medium text-emerald-900/60">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-emerald-700">
                    {e.school}
                  </p>
                  {bullets.length ? (
                    <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-slate-700">
                      {bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
