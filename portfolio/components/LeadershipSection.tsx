/**
 * LeadershipSection (timeline)
 * - Items come from `data/portfolio.ts`.
 */
import { leadership } from "@/data/portfolio";

export default function LeadershipSection() {
  return (
    <section className="scroll-mt-24" id="leadership">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8 font-tektur text-4xl sm:text-5xl text-slate-900">
          <span className="relative inline-block">
            Le
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-green-500"
            />
          </span>
          adership
        </h2>
        <ol className="relative z-0 space-y-14 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[3px] before:-translate-x-1/2 before:rounded-full before:bg-emerald-200 before:content-[''] before:-z-10">
          {leadership.map((r) => {
            const bullets = r.bullets?.length ? r.bullets : [r.summary];

            return (
              <li key={`${r.company}-${r.title}`} className="relative">
                <div className="relative z-10 mx-auto w-full rounded-xl border border-green-200 bg-emerald-50 px-6 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="absolute left-1/2 top-0 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
                  </span>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-tektur heading-card text-slate-900">
                      {r.title}
                    </h3>
                    <span className="text-xs font-medium text-emerald-900/60">
                      {r.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-emerald-700">
                    {r.company}
                  </p>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-slate-700">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
