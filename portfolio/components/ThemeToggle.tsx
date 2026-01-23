"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const ariaLabel = "Toggle theme";

  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/90 text-slate-800 shadow-sm backdrop-blur hover:border-green-500 hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-emerald-500",
        className,
      )}
      type="button"
      onClick={() => {
        setTheme(nextTheme);
      }}
    >
      <Sun
        className={cn(
          "absolute h-5 w-5",
          "hidden dark:block"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5",
          "block dark:hidden"
        )}
      />
    </button>
  );
}
