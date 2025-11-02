"use client";

import { Link } from "@heroui/link";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:me@example.com",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
      >
        <path
          d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m21 7-9 6-9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/wylliamcc",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
      >
        <path
          d="M6.94 19.25V9.56M6.94 6.19a1.31 1.31 0 1 0 0-2.62 1.31 1.31 0 0 0 0 2.62ZM10.62 19.25V9.56m0 0h3.46m-3.46 0V19.25m3.46 0V13.7c0-2 2.62-2.19 3.46-1.07"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/wylliamcc",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
      >
        <path
          d="M21 5.92a6.56 6.56 0 0 1-1.89.52 3.3 3.3 0 0 0 1.45-1.82 6.59 6.59 0 0 1-2.07.79A3.28 3.28 0 0 0 11.5 8.3a9.31 9.31 0 0 1-6.77-3.43 3.28 3.28 0 0 0 1.01 4.38 3.25 3.25 0 0 1-1.49-.41v.04a3.28 3.28 0 0 0 2.63 3.22 3.28 3.28 0 0 1-1.49.06 3.28 3.28 0 0 0 3.06 2.28A6.58 6.58 0 0 1 3 16.29a9.29 9.29 0 0 0 14.23-7.82 6.59 6.59 0 0 0 1.77-1.73Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/wylliamcc",
    icon: (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        viewBox="0 0 24 24"
      >
        <path
          d="M9 19.25c-4 .93-4-2-5-2M14.5 21v-3.18a3.42 3.42 0 0 0-.94-2.65c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 2.77 5.07 5.07 0 0 0 17.91 0S16.74-.35 14.5 1.3a12.32 12.32 0 0 0-5 0C7.26-.35 6.09 0 6.09 0A5.07 5.07 0 0 0 6 2.77 5.44 5.44 0 0 0 4 7.17c0 5.42 3.3 6.61 6.44 7A3.42 3.42 0 0 0 9.5 17.82V21"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-start px-6 pt-28 md:px-12 md:pt-32 lg:px-24 lg:pt-36">
      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-600">
          Hello!{" "}
          <span aria-label="waving hand" role="img">
            👋
          </span>
        </p>
        <h1 className="font-mono text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
          I&apos;m{" "}
          <span className="font-extrabold text-[#1a4fff]">
            Wylliam Cantin Charawi
          </span>
        </h1>
        <p className="font-mono text-sm text-slate-600 md:text-base">
          3D Reconstruction &amp; Rendering Researcher
        </p>
        <div className="flex flex-wrap gap-4 pt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-[#1a4fff] hover:text-[#1a4fff]"
              href={link.href}
              isExternal={link.href.startsWith("http")}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
