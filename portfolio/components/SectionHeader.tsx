"use client";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
};

const alignmentClasses: Record<Required<SectionHeaderProps>["align"], string> =
  {
    left: "items-start text-left",
    center: "items-center text-center",
  };

export default function SectionHeader({
  title,
  eyebrow,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-2 ${alignmentClasses[align]}`}>
      {eyebrow ? (
        <span className="text-xs font-medium tracking-[0.28em] uppercase text-neutral-500 dark:text-neutral-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
