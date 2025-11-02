"use client";

import NextLink from "next/link";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const contactItems = [
  {
    label: "Email",
    value: "wylliam.cantin-charawi.1@ens.etsmtl.ca",
    href: "mailto:wylliam.cantin-charawi.1@ens.etsmtl.ca",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/wylliamcc",
    href: "https://linkedin.com/in/wylliamcc",
  },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-neutral-50">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-4 py-20 sm:py-24 lg:flex-row lg:items-center">
        <div className="flex w-full flex-1 flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-bold md:text-5xl">
                Wylliam Cantin Charawi, CEP, B.Eng
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
                Computer Vision & Graphics Researcher — Differentiable geometry,
                3D reconstruction, physically based rendering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                as={NextLink}
                color="primary"
                href="/projects"
                radius="sm"
                size="lg"
              >
                Projects
              </Button>
              <Button
                as={NextLink}
                href="/resume.pdf"
                radius="sm"
                size="lg"
                variant="bordered"
              >
                Resume
              </Button>
            </div>
          </div>
          <dl className="flex flex-col gap-4 text-sm text-neutral-300 sm:text-base">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
              >
                <dt className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  {item.label}
                </dt>
                <dd>
                  <Link
                    className="text-neutral-100 underline decoration-neutral-500 underline-offset-4 transition-colors hover:text-primary-300"
                    href={item.href}
                    isExternal={item.href.startsWith("http")}
                  >
                    {item.value}
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex w-full max-w-md flex-1 items-center justify-center self-stretch lg:justify-end">
          <div
            aria-hidden
            className="h-72 w-full max-w-sm rounded-3xl bg-gradient-to-br from-primary-500/30 via-neutral-800 to-primary-900/40 shadow-[0_30px_60px_rgba(59,130,246,0.25)] ring-1 ring-primary-500/20 backdrop-blur"
          >
            <div className="h-full w-full rounded-3xl border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
