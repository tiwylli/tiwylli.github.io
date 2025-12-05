/**
 * ExperienceSection (timeline)
 * - Items come from `data/portfolio.ts`.
 */
import { roles } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Experience
        </h2>
        <ol className="relative border-s-2 border-slate-200">
          {roles.map((r) => (
            <li key={r.company} className="ms-6 py-6">
              <span className="absolute -start-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow [box-shadow:0_0_0_2px_rgb(226,232,240)]" />
              <h3 className="text-lg font-semibold text-slate-900">
                {r.title}
              </h3>
              <p className="text-slate-500">
                {r.company} • {r.period}
              </p>
              <p className="mt-2 max-w-3xl text-slate-600">{r.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
