"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme : theme) === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-green-500 hover:text-green-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-emerald-500",
        className
      )}
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun
        className={cn(
          "absolute h-5 w-5 transition-all duration-200 ease-out",
          isDark
            ? "scale-75 opacity-0 -rotate-45"
            : "scale-100 opacity-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-200 ease-out",
          isDark
            ? "scale-100 opacity-100 rotate-0"
            : "scale-75 opacity-0 rotate-45"
        )}
      />
    </button>
  );
}
