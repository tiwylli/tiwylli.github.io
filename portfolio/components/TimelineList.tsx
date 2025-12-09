import type { Role } from "@/types/portfolio";

import { cn } from "@/lib/utils";

type TimelineItem = Pick<Role, "company" | "period" | "title"> & {
  bullets: string[];
};

type TimelineListProps = {
  items: TimelineItem[];
  className?: string;
};

export function TimelineList({ items, className }: TimelineListProps) {
  return (
    <ol
      className={cn(
        "relative isolate space-y-10 sm:space-y-12 before:absolute before:inset-y-4 before:left-1/2 before:-z-10 before:-translate-x-1/2 before:w-px before:bg-emerald-200 before:content-[''] dark:before:bg-emerald-800/60",
        className,
      )}
    >
      {items.map(({ company, title, period, bullets }) => (
        <li key={`${company}-${title}`} className="relative">
          <article className="relative z-10 w-full rounded-xl border border-emerald-200 bg-emerald-50/90 px-6 py-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-within:-translate-y-0.5 focus-within:shadow-md dark:border-emerald-800/70 dark:bg-slate-900/70">
            <span className="absolute left-1/2 top-0 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-900/60" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="heading-card text-slate-900 dark:text-slate-100">{title}</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-900/70 dark:text-emerald-200/80">
                {period}
              </span>
            </div>
            <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-200">
              {company}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
