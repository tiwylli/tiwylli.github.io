"use client";

/**
 * HeaderNav
 * - Fixed header (hidden on mobile) that fades a blur/bg once scrolled.
 * - Menu items come from data (see `data/portfolio.ts`).
 */

import NextLink from "next/link";
import { Link } from "@heroui/link";

import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 hidden w-full md:block transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/80" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <Link as={NextLink} href="#top" className="font-mono text-xs tracking-[0.25em] text-slate-700">
          DEVPORTFOLIO
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              as={NextLink}
              href={item.href}
              aria-label={item.label}
              className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
