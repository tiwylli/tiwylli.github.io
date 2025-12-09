import { cn } from "@/lib/utils";

export const sectionWrapper =
  "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20";

type SectionHeadingProps = {
  title: string;
  accentLength?: number;
  className?: string;
};

export function SectionHeading({
  title,
  accentLength = 2,
  className,
}: SectionHeadingProps) {
  const accent = title.slice(0, accentLength);
  const remainder = title.slice(accentLength);

  return (
    <h2
      className={cn(
        "heading-section mb-10 text-4xl sm:text-5xl text-slate-900 dark:text-slate-50",
        className,
      )}
    >
      <span className="relative inline-block">
        {accent}
        <span
          aria-hidden
          className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-green-500 dark:bg-emerald-300"
        />
      </span>
      {remainder}
    </h2>
  );
}
