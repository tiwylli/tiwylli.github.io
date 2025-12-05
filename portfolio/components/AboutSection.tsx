/**
 * AboutSection
 * - Content pulled from `data/portfolio.ts` (summary + skills).
 */
import { Chip } from "@heroui/chip";
import { about } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          About
        </h2>
        <p className="max-w-3xl text-slate-600 md:text-lg">{about.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {about.skills.map((s) => (
            <Chip key={s} color="default" variant="flat" radius="full">
              {s}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
