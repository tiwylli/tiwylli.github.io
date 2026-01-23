"use client";

/**
 * ProjectsSection
 * - Items come from `data/portfolio.ts`.
 * - Items link out to details and external sources when available.
 */
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { projects } from "@/data/portfolio";

import { SectionHeading, sectionWrapper } from "@/components/SectionHeading";

export default function ProjectsSection() {
  const [videoOn, setVideoOn] = useState<Record<string, boolean>>({});

  return (
    <section className="scroll-mt-24" id="projects">
      <div className={`${sectionWrapper} text-left`}>
        <SectionHeading title="Projects" />
        <div className="grid gap-6">
          {projects.map((p) => {
            const hasVideo = Boolean(p.video);
            const useVideo =
              (!p.image && hasVideo) || Boolean(videoOn[p.title]);
            const showMedia = Boolean(p.image || p.video);
            const targetUrl = p.github ?? p.repo ?? p.demo;
            const hasExternal = Boolean(targetUrl);
            const externalLabel =
              targetUrl && targetUrl.includes("github.com")
                ? "GitHub"
                : "Project site";

            return (
              <Card
                key={p.title}
                className="rounded-xl border border-emerald-200 bg-emerald-50/90 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-800/70 dark:bg-slate-900/70"
              >
                <CardBody className="flex flex-col gap-4 pt-4">
                  <div
                    className={`grid items-start gap-4 ${
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
                        </div>
                        {p.details?.length ? (
                          <ul className="list-disc space-y-2 pl-5 text-sm">
                            {p.details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-1">
                        <Button
                          as={NextLink}
                          className="border border-emerald-300 bg-white/80 text-emerald-700 dark:border-emerald-800/60 dark:bg-slate-800/70 dark:text-emerald-100"
                          size="sm"
                          variant="flat"
                          href={`/projects/${p.slug}`}
                        >
                          Details
                        </Button>
                        {hasExternal ? (
                          <Button
                            as="a"
                            className="border border-green-200 bg-white/80 text-green-800 dark:border-emerald-800/60 dark:bg-slate-800/70 dark:text-emerald-100"
                            href={targetUrl}
                            rel="noreferrer noopener"
                            size="sm"
                            target="_blank"
                            variant="flat"
                          >
                            {externalLabel}
                          </Button>
                        ) : null}
                      </div>
                    </div>
                    {showMedia ? (
                      <div className="relative w-full overflow-hidden rounded-lg border border-green-100 bg-white/60 dark:border-emerald-800/60 dark:bg-slate-800/60 aspect-[16/9] lg:self-start">
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
