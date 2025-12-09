"use client";

/**
 * ProjectsSection
 * - Items come from `data/portfolio.ts`.
 * - Click the card to open GitHub; arrow toggles extra details.
 */
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";

import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";

export default function ProjectsSection() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [videoOn, setVideoOn] = useState<Record<string, boolean>>({});

  return (
    <section className="scroll-mt-24" id="projects">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading title="Projects" />
        <div className="grid gap-6">
          {projects.map((p) => {
            const expanded = Boolean(open[p.title]);
            const hasVideo = Boolean(p.video);
            const useVideo =
              (!p.image && hasVideo) || Boolean(videoOn[p.title]);
            const mediaSrc = useVideo ? p.video : p.image;
            const showMedia = Boolean(mediaSrc);
            const showExpandedMedia = expanded && showMedia;
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
                className={`rounded-xl border border-emerald-200 bg-emerald-50/90 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-800/70 dark:bg-slate-900/70 ${isClickable ? "cursor-pointer" : ""}`}
                {...clickableProps}
              >
                <CardBody className="flex flex-col gap-4 pt-4">
                  <div
                    className={`grid items-start gap-4 lg:items-stretch ${
                      showMedia ? "lg:grid-cols-[1.05fr_1fr]" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 text-slate-700 dark:text-slate-200">
                      <h3 className="heading-card text-slate-900 dark:text-slate-100">
                        {p.title}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-body flex-1 dark:text-slate-200">
                            {p.description}
                          </p>
                          {p.details?.length ? (
                            <Button
                              className="border border-green-200 bg-white/80 text-green-800 dark:border-emerald-800/60 dark:bg-slate-800/70 dark:text-emerald-100"
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
                    {showMedia ? (
                      <div
                        className={`relative w-full overflow-hidden rounded-lg border border-green-100 bg-white/60 dark:border-emerald-800/60 dark:bg-slate-800/60 ${
                          showExpandedMedia
                            ? "h-full min-h-[220px] self-stretch"
                            : "aspect-[16/9] max-h-36"
                        }`}
                      >
                        {hasVideo && (
                          <Button
                            className="absolute right-2 top-2 z-10 border border-green-200 bg-white/90 text-green-800 shadow-sm transition hover:-translate-y-0.5 dark:border-emerald-800/60 dark:bg-slate-800/80 dark:text-emerald-100"
                            size="sm"
                            variant="flat"
                            aria-label={useVideo ? "Show image" : "Show video"}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setVideoOn((prev) => ({
                                ...prev,
                                [p.title]: !useVideo,
                              }));
                            }}
                          >
                            {useVideo ? "Show image" : "Show video"}
                          </Button>
                        )}
                        {hasVideo && useVideo ? (
                          <video
                            autoPlay
                            className="block h-full w-full object-cover"
                            loop
                            muted
                            playsInline
                            controls={showExpandedMedia}
                            preload="metadata"
                            src={p.video}
                          />
                        ) : (
                          <img
                            alt={`${p.title} preview`}
                            className="block h-full w-full object-cover"
                            decoding="async"
                            loading="lazy"
                            src={p.image}
                          />
                        )}
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
