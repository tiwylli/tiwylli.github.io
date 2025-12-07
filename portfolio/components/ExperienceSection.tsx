/**
 * ExperienceSection (timeline)
 * - Items come from `data/portfolio.ts`.
 */
import { roles } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="scroll-mt-24" id="experience">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8">Experience</h2>
        <ol className="relative border-s-2 border-slate-200">
          {roles.map((r) => (
            <li key={r.company} className="ms-6 py-6">
              <span className="absolute -start-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow [box-shadow:0_0_0_2px_rgb(226,232,240)]" />
              <h3 className="heading-card">{r.title}</h3>
              <p className="text-muted">
                {r.company} • {r.period}
              </p>
              <p className="text-body mt-2 max-w-3xl">{r.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
