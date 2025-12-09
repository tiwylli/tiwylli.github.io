"use client";

/**
 * HeaderNav
 * - Fixed header that fades a blur/bg once scrolled.
 * - Menu items come from data (see `data/portfolio.ts`).
 */

import { Link } from "@heroui/link";
import { Menu, X } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";

const SCROLL_OFFSET = 96; // pixels (~6rem)

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_OFFSET);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-30 w-full",
        open
          ? "bg-white shadow-sm dark:bg-slate-950"
          : scrolled
            ? "bg-white/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:bg-slate-950/95"
            : "bg-transparent dark:bg-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end py-3 sm:justify-center sm:py-4">
          <div className="hidden flex-nowrap items-center gap-2 sm:flex sm:gap-3 md:gap-3 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                aria-label={item.label}
                as={NextLink}
                className="nav-link flex-shrink-0 whitespace-nowrap rounded-md px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ml-2 flex items-center gap-2 sm:ml-4">
            <ThemeToggle className="hidden sm:flex" />
            <button
              aria-controls="mobile-nav"
              aria-expanded={open}
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-green-500 hover:text-green-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-emerald-500 sm:hidden"
              type="button"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Menu
                className={cn(
                  "absolute h-5 w-5 transition-all duration-200 ease-out",
                  open
                    ? "scale-75 opacity-0 -rotate-45"
                    : "scale-100 opacity-100 rotate-0",
                )}
              />
              <X
                className={cn(
                  "absolute h-5 w-5 transition-all duration-200 ease-out",
                  open
                    ? "scale-100 opacity-100 rotate-0"
                    : "scale-75 opacity-0 rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </div>

      <button
        aria-hidden={!open}
        aria-label="Close navigation menu"
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ease-out",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        tabIndex={open ? 0 : -1}
        type="button"
        onClick={closeMenu}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            closeMenu();
          }
        }}
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[82vw] max-w-xs transform bg-white px-5 py-6 shadow-xl transition-transform duration-300 ease-in-out dark:bg-slate-900 sm:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        id="mobile-nav"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">
            Menu
          </span>
          <button
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-slate-100 dark:hover:bg-emerald-900/30"
            type="button"
            onClick={closeMenu}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 flex flex-col divide-y divide-emerald-100 dark:divide-emerald-900/50">
          <div className="space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                aria-label={item.label}
                as={NextLink}
                className="nav-link block rounded-md px-2 py-2 text-base font-semibold tracking-normal text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:text-slate-100"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 space-y-3">
            <ThemeToggle className="flex sm:hidden" />
            <Link
              aria-label="Back to top"
              as={NextLink}
              className="nav-link block rounded-md px-2 py-2 text-base font-semibold tracking-normal !text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:!text-emerald-200"
              href="#top"
              onClick={closeMenu}
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
