/**
 * EducationSection
 * - Items come from `data/portfolio.ts`.
 */
import { education } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8">Education</h2>
        <ul className="space-y-6">
          {education.map((e) => (
            <li
              key={e.school}
              className="rounded-lg border border-slate-200 p-6"
            >
              <h3 className="heading-card">{e.degree}</h3>
              <p className="text-muted">
                {e.school} • {e.period}
              </p>
              {e.summary && (
                <p className="text-body mt-2">{e.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
