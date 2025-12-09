/**
 * ExperienceSection (timeline)
 * - Items come from `data/portfolio.ts`.
 */
import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";
import { TimelineList } from "@/components/TimelineList";
import { roles } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="scroll-mt-24" id="experience">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading title="Experience" />
        <TimelineList
          items={roles.map((role) => ({
            ...role,
            bullets: role.bullets?.length ? role.bullets : [role.summary],
          }))}
        />
      </div>
    </section>
  );
}
