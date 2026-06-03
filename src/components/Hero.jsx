import { Mail, Download, ArrowUpRight } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/content";
import { Reveal } from "./ui";

/* Three fanned project cards — center front, two behind */
function FanStack() {
  const cards = [
    { rotate: -10, tx: -28, ty: 24, scale: 0.87, z: 0, gradient: PROJECTS[1].gradient },
    { rotate: 7,  tx:  36, ty: -16, scale: 0.84, z: 1, gradient: PROJECTS[2].gradient },
    { rotate: -2, tx:   4, ty:   0, scale: 1,    z: 2, gradient: PROJECTS[0].gradient },
  ];

  return (
    <div className="relative flex items-center justify-center" style={{ height: 520 }}>
      {cards.map((c, i) => (
        <div
          key={i}
          className={`absolute rounded-[22px] bg-gradient-to-br ${c.gradient} overflow-hidden`}
          style={{
            width: 380,
            height: 460,
            transform: `rotate(${c.rotate}deg) translateX(${c.tx}px) translateY(${c.ty}px) scale(${c.scale})`,
            zIndex: c.z,
            boxShadow: c.z === 2
              ? "0 40px 80px -20px rgba(0,0,0,0.45)"
              : "0 20px 40px -16px rgba(0,0,0,0.35)",
          }}
        >
          {/* Browser chrome dots */}
          <div className="flex items-center gap-1.5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            {c.z === 2 && (
              <span className="ml-2 font-mono text-[10px] text-white/40 tracking-wide">
                {PROJECTS[0].url}
              </span>
            )}
          </div>
          {/* Placeholder grid lines to suggest UI content */}
          <div className="mx-4 space-y-3 opacity-20">
            <div className="h-8 rounded-lg bg-white/60" />
            <div className="flex gap-2">
              <div className="h-24 flex-1 rounded-xl bg-white/40" />
              <div className="h-24 flex-1 rounded-xl bg-white/40" />
            </div>
            <div className="h-5 w-3/4 rounded bg-white/40" />
            <div className="h-5 w-1/2 rounded bg-white/40" />
            <div className="flex gap-2">
              <div className="h-16 flex-1 rounded-xl bg-white/30" />
              <div className="h-16 flex-1 rounded-xl bg-white/30" />
              <div className="h-16 flex-1 rounded-xl bg-white/30" />
            </div>
          </div>
          {c.z === 2 && (
            <div className="absolute bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
              <div className="h-8 w-8 rounded-xl bg-white/30" />
              <div className="flex-1 space-y-1">
                <div className="h-2.5 w-24 rounded bg-white/40" />
                <div className="h-2 w-16 rounded bg-white/25" />
              </div>
              <div className="h-7 w-16 rounded-full bg-white/30" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const firstName = PROFILE.name.split(" ")[0];

  return (
    <section
      id="top"
      className="flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <Reveal>
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[14px] font-medium text-zinc-700">Open to opportunities</span>
          </div>

          {/* Headline */}
          <h1 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.2rem]">
            <span className="text-zinc-400">Hi ✦ I'm {firstName}.</span>
            <br />
            {PROFILE.title.map((line, i) => (
              <span key={i} className="block font-black text-zinc-900">
                {line}
              </span>
            ))}
          </h1>

          {/* Sub-copy */}
          <div className="mt-8 max-w-md">
            <p className="text-[16px] font-semibold leading-relaxed text-zinc-900">
              {PROFILE.tagline}
            </p>
            <p className="mt-2 text-[16px] leading-relaxed text-zinc-500">{PROFILE.intro}</p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-zinc-900 px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.45)] transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </Reveal>

        {/* Right — fanned project cards */}
        <Reveal delay={120}>
          <FanStack />
        </Reveal>
      </div>
    </section>
  );
}
