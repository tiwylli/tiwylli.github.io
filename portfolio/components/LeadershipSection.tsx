/**
 * LeadershipSection (timeline)
 * - Items come from `data/portfolio.ts`.
 */
import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";
import { TimelineList } from "@/components/TimelineList";
import { leadership } from "@/data/portfolio";

export default function LeadershipSection() {
  return (
    <section className="scroll-mt-24" id="leadership">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading title="Leadership" />
        <TimelineList
          items={leadership.map((role) => ({
            ...role,
            bullets: role.bullets?.length ? role.bullets : [role.summary],
          }))}
        />
      </div>
    </section>
  );
}
