import { useState } from "react";
import { Mail, Download } from "lucide-react";
import { PROFILE, PROJECTS } from "../data/content";
import { Reveal } from "./ui";

const POSITIONS = [
  { rotate: -10, tx: -28, ty: 24, scale: 0.87, z: 0 }, // back-left
  { rotate: 7, tx: 36, ty: -16, scale: 0.84, z: 1 }, // back-right
  { rotate: -2, tx: 4, ty: 0, scale: 1, z: 2 }, // front
];

function getPos(projectIdx, frontIdx) {
  const offset = (projectIdx - frontIdx + PROJECTS.length) % PROJECTS.length;
  return POSITIONS[[2, 0, 1][offset]];
}

function FanStack() {
  const [front, setFront] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative flex cursor-pointer select-none items-center justify-center"
        style={{ height: "32.5rem", width: "100%" }}
        onClick={() => setFront((f) => (f + 1) % PROJECTS.length)}
      >
        {PROJECTS.map((project, i) => {
          const pos = getPos(i, front);
          const isFront = pos.z === 2;
          return (
            <div
              key={project.name}
              className={`absolute rounded-[22px] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              style={{
                width: "23.75rem",
                height: "28.75rem",
                transform: `rotate(${pos.rotate}deg) translateX(${pos.tx / 16}rem) translateY(${pos.ty / 16}rem) scale(${pos.scale})`,
                zIndex: pos.z,
                boxShadow: isFront
                  ? "0 40px 80px -20px rgba(0,0,0,0.7)"
                  : "0 20px 40px -16px rgba(0,0,0,0.5)",
                transition: "transform 0.5s cubic-bezier(0.34, 1.15, 0.64, 1), box-shadow 0.4s ease",
              }}
            >
              {/* Full-card image (when available) */}
              {(project.heroImage || project.image) && (
                <div className="absolute inset-0">
                  <img
                    src={project.heroImage || project.image}
                    alt={project.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>
              )}

              {/* Chrome bar */}
              <div className="relative flex items-center gap-1.5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                {isFront && (
                  <span className="ml-2 font-mono text-[0.625rem] tracking-wide text-white/60">
                    {project.url}
                  </span>
                )}
              </div>

              {/* UI skeleton — only when no image */}
              {!project.image && (
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
              )}

              {/* Front card bottom bar */}
              {isFront && (
                <div className="absolute bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="h-8 w-8 rounded-xl bg-white/30" />
                  <div className="flex-1 space-y-1">
                    <div className="h-2.5 w-24 rounded bg-white/40" />
                    <div className="h-2 w-16 rounded bg-white/25" />
                  </div>
                  <div className="h-7 w-16 rounded-full bg-white/30" />
                </div>
              )}

              {/* Project name label — front only */}
              {/* {isFront && (
                <div className="absolute left-4 top-[52px] rounded-full bg-black/30 px-3 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[11px] font-semibold text-white/90">
                    {project.name}
                  </span>
                </div>
              )} */}
            </div>
          );
        })}
      </div>

      {/* Dot indicators + hint */}
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.625rem] text-zinc-600">click to explore</span>
        <div className="flex gap-1.5">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setFront(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === front ? "w-5 bg-white/60" : "w-1.5 bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const firstName = PROFILE.name.split(" ")[0];
  const gmailHref = `https://mail.google.com/mail/?view=cm&to=${PROFILE.email}`;

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(99,102,241,0.18), transparent)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <Reveal>
          {/* Status badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[0.875rem] font-medium text-zinc-300">Open to work</span>
          </div>

          {/* Headline */}
          <h1 className="text-[3rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.2rem]">
            <span className="text-zinc-600">Hi! I'm {firstName}.</span>
            <br />
            {PROFILE.title.map((line, i) => (
              <span key={i} className="block font-black text-white">
                {line}
              </span>
            ))}
          </h1>

          {/* Sub-copy */}
          <div className="mt-8 max-w-md">
            <p className="text-[1rem] font-semibold leading-relaxed text-zinc-100">
              {PROFILE.tagline}
            </p>
            <p className="mt-2 text-[1rem] leading-relaxed text-zinc-400">{PROFILE.intro}</p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={gmailHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[0.9375rem] font-semibold text-zinc-900 shadow-[0_10px_24px_-8px_rgba(255,255,255,0.15)] transition-opacity hover:opacity-90"
            >
              <Mail size={16} />
              Get in touch
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3.5 text-[0.9375rem] font-semibold text-zinc-100 transition-colors hover:bg-zinc-800"
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
