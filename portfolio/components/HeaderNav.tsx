"use client";

/**
 * HeaderNav
 * - Fixed header (hidden on mobile) that fades a blur/bg once scrolled.
 * - Menu items come from data (see `data/portfolio.ts`).
 */

import { Link } from "@heroui/link";
import NextLink from "next/link";
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
      className={`fixed top-0 left-0 right-0 z-30 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            aria-label={item.label}
            as={NextLink}
            className="nav-link"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
