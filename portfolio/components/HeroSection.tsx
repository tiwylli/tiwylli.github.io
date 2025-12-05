"use client";

/**
 * HeroSection
 * - Content pulled from `data/portfolio.ts` for easy editing.
 * - The blue accent uses Tailwind `text-blue-600` and radial overlays below.
 */

import NextLink from "next/link";
import { Button } from "@heroui/button";
import { hero } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden py-24 md:min-h-screen"
    >
      <div className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 " />
      <div className="absolute inset-0 -z-10 " />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center md:h-full md:justify-center md:px-8 md:py-28">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Hi, I'm <span className="text-blue-600">{hero.name}</span>.
        </h1>
        <p className="max-w-3xl text-balance text-slate-600 md:text-lg">
          {hero.intro}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            as={NextLink}
            href={hero.ctaPrimary.href}
            color="primary"
            variant="solid"
          >
            {hero.ctaPrimary.label}
          </Button>
          <Button
            as={NextLink}
            href={hero.ctaSecondary.href}
            variant="bordered"
          >
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
