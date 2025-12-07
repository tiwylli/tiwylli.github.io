/**
 * ProjectsSection
 * - Items come from `data/portfolio.ts`.
 * - To show thumbnails, extend the `Project` type with an `image`.
 */
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { projects } from "@/data/portfolio";

// Data imported; no inline array here.

export default function ProjectsSection() {
  return (
    <section className="scroll-mt-24" id="projects">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8">Projects</h2>
        <div className="grid gap-6 grid-cols-1">
          {projects.map((p) => (
            <Card key={p.title} className="border border-slate-200">
              <CardHeader className="pb-1">
                <h3 className="heading-card">{p.title}</h3>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-body">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="gap-3">
                {p.demo && (
                  <Button as={Link} href={p.demo} size="sm" variant="flat">
                    Demo
                  </Button>
                )}
                {p.repo && (
                  <Button as={Link} href={p.repo} size="sm" variant="bordered">
                    Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
