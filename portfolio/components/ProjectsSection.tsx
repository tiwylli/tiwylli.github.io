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
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="border border-slate-200">
              <CardHeader className="pb-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>
              </CardHeader>
              <CardBody className="pt-0 text-slate-600">
                <p>{p.description}</p>
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
