"use client";

import NextLink from "next/link";
import { Link } from "@heroui/link";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "EDUCATION", href: "/academia" },
];

export default function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-20 flex justify-end px-6 pb-4 pt-6 md:px-12 lg:px-24">
      <div className="flex flex-wrap items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-slate-700 md:gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            aria-label={item.label}
            as={NextLink}
            className="text-slate-600 transition-colors hover:text-[#1a4fff]"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
