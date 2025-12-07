"use client";

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
      className="relative isolate flex min-h-screen flex-col overflow-hidden font-tektur"
    >
      {/* Top content (takes remaining height) */}
      <div className="flex flex-1 flex-col justify-center gap-4 pl-2 pr-8 text-left">
        <p className="text-[48px] leading-[1.05] text-slate-900">Hello! 👋</p>
        <h1 className="text-[96px] leading-[0.9] text-slate-900">
          I'm <span className="text-green-700">{hero.name}</span>
        </h1>
        <p className="text-[24px] leading-[1.35] text-slate-700">
          Computer Vision & Graphics Research Engineer
        </p>
      </div>

      {/* Bottom row: social links pinned near bottom of screen */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-start gap-3 pl-2">
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
    </header>
  );
}
