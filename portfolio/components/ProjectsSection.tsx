"use client";

/**
 * ProjectsSection
 * - Items come from `data/portfolio.ts`.
 * - Click the card to open GitHub; arrow toggles extra details.
 */
import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { ChevronDown } from "lucide-react";

import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="scroll-mt-24" id="projects">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8 font-tektur text-4xl sm:text-5xl text-slate-900">
          <span className="relative inline-block">
            Pr
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-green-500"
            />
          </span>
          ojects
        </h2>
        <div className="grid gap-6">
          {projects.map((p) => {
            const expanded = open === p.title;
            const targetUrl = p.github ?? p.repo ?? p.demo;

            return (
              <Card
                key={p.title}
                className="border border-green-200 bg-emerald-50/60 min-h-[360px] shadow-none transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                isPressable={Boolean(targetUrl)}
                onClick={() => {
                  if (!targetUrl) return;
                  window.open(targetUrl, "_blank", "noreferrer");
                }}
              >
                <CardHeader className="flex items-center justify-between pb-2">
                  <h3 className="font-tektur heading-card text-slate-900">
                    {p.title}
                  </h3>
                  <Button
                    className="border border-green-200 bg-white/80 text-green-800"
                    isIconOnly
                    size="sm"
                    variant="flat"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpen(expanded ? null : p.title);
                    }}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CardHeader>

                <CardBody className="pt-0">
                  <div className="grid items-start gap-4 lg:grid-cols-2">
                    <div className="space-y-3 text-slate-700">
                      <p className="text-body">{p.description}</p>
                      {expanded && p.details?.length ? (
                        <ul className="list-disc space-y-2 pl-5 text-sm">
                          {p.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div className="relative w-full overflow-hidden rounded-lg">
                      {p.image ? (
                        <div
                          className={`relative ${
                            expanded ? "aspect-[16/9]" : "aspect-[16/4.5]"
                          }`}
                        >
                          <Image
                            alt={`${p.title} preview`}
                            className="h-full w-full object-cover"
                            src={p.image}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </CardBody>

                <CardFooter className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip
                      key={t}
                      className="rounded-md bg-black text-white"
                      size="md"
                      variant="flat"
                    >
                      {t}
                    </Chip>
                  ))}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
