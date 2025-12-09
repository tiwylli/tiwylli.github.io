"use client";

import { useTheme } from "next-themes";

import CvtBackground from "@/components/CvtBackground";

const lightPalette = ["#f8fff641", "#ecfff33d", "#e3f9e83d", "#d6f5de4b"];
const darkPalette = ["#020302ff", "#050805ff", "#080d08ff", "#0b0d10"];

export function BackgroundLayer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <CvtBackground
      className="absolute inset-0"
      iterations={1000}
      numSites={1000}
      palette={isDark ? darkPalette : lightPalette}
      strokeColor={
        isDark ? "rgba(52, 211, 153, 0.25)" : "rgba(16, 185, 129, 0.22)"
      }
    />
  );
}
