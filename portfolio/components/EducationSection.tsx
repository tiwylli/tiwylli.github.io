/**
 * EducationSection
 * - Items come from `data/portfolio.ts`.
 */
import { education } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Education
        </h2>
        <ul className="space-y-6">
          {education.map((e) => (
            <li key={e.school} className="rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">{e.degree}</h3>
              <p className="text-slate-500">{e.school} • {e.period}</p>
              {e.summary && <p className="mt-2 text-slate-600">{e.summary}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
