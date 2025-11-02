type Glyph = {
  char: string;
  style: string;
};

const glyphs: Glyph[] = [
  { char: "</>", style: "top-[12%] left-[18%] rotate-12" },
  { char: "{ }", style: "top-[28%] left-[72%] -rotate-6" },
  { char: "++", style: "top-[46%] left-[40%] rotate-3" },
  { char: "=>", style: "top-[65%] left-[20%] -rotate-8" },
  { char: "::", style: "top-[78%] left-[60%] rotate-2" },
  { char: "//", style: "top-[32%] left-[5%] rotate-4" },
  { char: "fn", style: "top-[15%] right-[12%] -rotate-5" },
  { char: "λ", style: "bottom-[14%] right-[24%] rotate-10" },
];

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,79,255,0.08)_0%,transparent_45%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(30,41,59,0.04)_0,rgba(30,41,59,0.04)_1px,transparent_1px,transparent_80px)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(30,41,59,0.04)_0,rgba(30,41,59,0.04)_1px,transparent_1px,transparent_80px)]" />
      {glyphs.map((glyph) => (
        <span
          key={`${glyph.char}-${glyph.style}`}
          className={`absolute text-[10px] font-mono tracking-[0.35em] text-slate-700/10 ${glyph.style}`}
        >
          {glyph.char}
        </span>
      ))}
    </div>
  );
}
