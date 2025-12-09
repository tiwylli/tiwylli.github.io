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
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-6 px-4 pb-28 pt-28 text-left sm:px-6 sm:gap-8 sm:pb-32 sm:pt-36 lg:px-8">
        <p className="text-3xl font-semibold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Hello! 👋
        </p>
        <h1 className="text-4xl font-semibold leading-[1.05] text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
          I&apos;m{" "}
          <span className="text-green-700 dark:text-emerald-300">
            {hero.name}
          </span>
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl">
          {hero.intro}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-10 sm:bottom-14 md:bottom-16">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6 lg:px-8">
          {socialLinks.map(({ href, label, icon }) => {
            const iconPath = iconPaths[icon];
            const isEmail = icon === "mail";
            const safeHref =
              isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

            return (
              <a
                key={label}
                aria-label={label}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-300/80 bg-white/80 text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-green-600 hover:text-green-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-emerald-400"
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
      </div>
    </header>
  );
}
