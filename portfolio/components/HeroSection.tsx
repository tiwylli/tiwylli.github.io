"use client";

import { hero, socialLinks } from "@/data/portfolio";

const iconPaths = {
  mail: "/icons/mail.svg",
  linkedin: "/icons/linkedin.svg",
  github: "/icons/github.svg",
} as const;

export default function HeroSection() {
  return (
    <header
      className="relative isolate flex min-h-screen flex-col overflow-hidden font-tektur"
      id="top"
    >
      {/* Top content (takes remaining height) */}
      <div className="flex flex-1 flex-col justify-center gap-4 pl-2 pr-8 text-left">
        <p className="text-[48px] leading-[1.05] text-slate-900">Hello! 👋</p>
        <h1 className="text-[96px] leading-[0.9] text-slate-900">
          I&apos;m <span className="text-green-700">{hero.name}</span>
        </h1>
        <p className="text-[24px] leading-[1.35] text-slate-700">
          {hero.intro}
        </p>
      </div>

      {/* Bottom row: social links pinned near bottom of screen */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-start gap-3 pl-2">
        {socialLinks.map(({ href, label, icon }) => {
          const iconPath = iconPaths[icon];
          const isEmail = icon === "mail";
          const safeHref =
            isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

          return (
            <a
              key={label}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-800 backdrop-blur transition hover:border-green-600 hover:text-green-700 hover:shadow-lg"
              href={safeHref}
              rel={isEmail ? undefined : "noreferrer noopener"}
              target={isEmail ? undefined : "_blank"}
            >
              <span
                aria-hidden
                className="block h-6 w-6 bg-current"
                style={{
                  maskImage: `url(${iconPath})`,
                  WebkitMaskImage: `url(${iconPath})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </a>
          );
        })}
      </div>
    </header>
  );
}
