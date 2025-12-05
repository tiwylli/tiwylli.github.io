"use client";

/**
 * HeroSection
 * - Content pulled from `data/portfolio.ts` for easy editing.
 * - The blue accent uses Tailwind `text-blue-600` and radial overlays below.
 */

import { Github, Linkedin, Mail } from "lucide-react";
import { hero } from "@/data/portfolio";

const socialLinks = [
  { label: "Email", href: "#", Icon: Mail },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "GitHub", href: "#", Icon: Github },
];

export default function HeroSection() {
  return (
    <header
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 " />
      <div className="absolute inset-0 -z-10 " />
      <div className="flex h-full w-full flex-col justify-left gap-12 pl-2 pr-8 py-16 text-left">
        <div className="flex max-w-3xl flex-1 flex-col gap-4">
          <p className="font-display text-[48px] leading-[1.05] text-slate-900">
            Hello! 👋
          </p>
          <h1 className="font-display text-[96px] leading-[0.9] text-slate-900">
            I'm {hero.name}
          </h1>
          <p className="text-[24px] leading-[1.35] text-slate-700">
            Computer Vision & Graphics Researcher
          </p>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-10">
        <div className="flex w-full items-center justify-between pl-2 pr-8">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-800 backdrop-blur transition hover:border-green-600 hover:text-green-700 hover:shadow-lg"
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
