"use client";

/**
 * ResearchSection
 * - Items come from `data/portfolio.ts`.
 * - Same interaction as ProjectsSection.
 */
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ChevronDown } from "lucide-react";

import { research } from "@/data/portfolio";

export default function ResearchSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section className="scroll-mt-24" id="research">
      <div className="w-full pl-2 pr-8 py-16 text-left">
        <h2 className="heading-section mb-8 font-tektur text-4xl sm:text-5xl text-slate-900">
          <span className="relative inline-block">
            Re
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-green-500"
            />
          </span>
          search
        </h2>
        <div className="grid gap-6">
          {research.map((p) => {
            const expanded = Boolean(open[p.title]);
            const showImage = Boolean(p.image);
            const showExpandedMedia = expanded && showImage;
            const targetUrl = p.github ?? p.repo ?? p.demo;
            const isClickable = Boolean(targetUrl);
            const clickableProps = isClickable
              ? ({
                  as: "a",
                  href: targetUrl,
                  target: "_blank",
                  rel: "noreferrer noopener",
                } as const)
              : ({ as: "div" } as const);

            return (
              <Card
                key={p.title}
                className={`border border-green-200 bg-emerald-50 shadow-none transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isClickable ? "cursor-pointer" : ""
                }`}
                {...clickableProps}
              >
                <CardBody className="pt-4">
                  <div
                    className={`grid items-start lg:items-stretch gap-4 ${
                      showImage ? "lg:grid-cols-[1.05fr_1fr]" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 text-slate-700">
                      <h3 className="font-tektur heading-card text-slate-900">
                        {p.title}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-body flex-1">{p.description}</p>
                          {p.details?.length ? (
                            <Button
                              className="border border-green-200 bg-white/80 text-green-800"
                              isIconOnly
                              size="sm"
                              variant="flat"
                              aria-label={
                                expanded ? "Collapse details" : "Expand details"
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setOpen((prev) => ({
                                  ...prev,
                                  [p.title]: !prev[p.title],
                                }));
                              }}
                            >
                              <ChevronDown
                                className={`h-4 w-4 ${
                                  expanded ? "rotate-180" : ""
                                }`}
                              />
                            </Button>
                          ) : null}
                        </div>
                        {expanded && p.details?.length ? (
                          <ul className="list-disc space-y-2 pl-5 text-sm">
                            {p.details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap gap-2">
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
                      </div>
                    </div>
                    {showImage ? (
                      <div
                        className={`relative w-full overflow-hidden rounded-lg border border-green-100 bg-white/60 ${
                          showExpandedMedia
                            ? "flex items-center justify-center self-stretch"
                            : "aspect-[16/9] max-h-36"
                        }`}
                      >
                        <img
                          alt={`${p.title} preview`}
                          className={`block w-full ${
                            showExpandedMedia
                              ? "h-auto object-contain"
                              : "h-full object-cover"
                          }`}
                          decoding="async"
                          loading="lazy"
                          src={p.image}
                        />
                      </div>
                    ) : null}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
