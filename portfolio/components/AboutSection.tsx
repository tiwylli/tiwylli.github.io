/**
 * AboutSection
 * - Content pulled from `data/portfolio.ts` (summary + skills).
 */
import { Chip } from "@heroui/chip";

import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";
import { about } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section className="scroll-mt-24" id="about">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading accentLength={2} className="mb-6" title="About" />
        <p className="text-body max-w-3xl">{about.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {about.skills.map((s) => (
            <Chip key={s} color="default" radius="full" variant="flat">
              {s}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
}
