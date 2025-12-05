/**
 * AboutSection
 * - Content pulled from `data/portfolio.ts` (summary + skills).
 */
import { Chip } from "@heroui/chip";
import { about } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-6">About</h2>
        <p className="text-body max-w-3xl">{about.summary}</p>
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
