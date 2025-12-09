"use client";

/**
 * HeaderNav
 * - Fixed header that fades a blur/bg once scrolled.
 * - Menu items come from data (see `data/portfolio.ts`).
 */

import { Link } from "@heroui/link";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";

const SCROLL_OFFSET = 96; // pixels (~6rem)

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_OFFSET);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-30 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-3 sm:gap-6 sm:px-6 lg:px-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            aria-label={item.label}
            as={NextLink}
            className="nav-link rounded-md px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
