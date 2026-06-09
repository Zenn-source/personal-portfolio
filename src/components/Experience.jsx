import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { EXPERIENCE } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, AppIcon } from "./ui";

function ExperienceCard({ job, open, onToggle }) {
  return (
    <Reveal className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_12px_34px_-26px_rgba(0,0,0,0.6)]">
      <button onClick={onToggle} className="flex w-full items-center gap-4 p-5 text-left">
        <AppIcon glyph={job.glyph} size={44} />
        <div className="min-w-0 flex-1">
          <div className="truncate text-[1.0625rem] font-semibold tracking-tight text-zinc-100">
            {job.role}
          </div>
          <div className="mt-0.5 flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-zinc-500">
            <span>{job.range}</span>
            <span className="text-zinc-700">✦</span>
            <span className="truncate">{job.org}</span>
          </div>
        </div>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-zinc-500">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="min-h-0">
          <div className="border-t border-zinc-800 px-5 py-5 sm:pl-16">
            <p className="text-[0.875rem] font-semibold leading-relaxed text-zinc-300">{job.summary}</p>
            <ul className="mt-3 space-y-2">
              {job.points.map((pt, j) => (
                <li key={j} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-zinc-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                  <span className="text-pretty">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="border-t border-zinc-800 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-3">
          <ScriptLabel className="text-2xl">the change-log</ScriptLabel>
        </Reveal>
        <Reveal as="h2" delay={60} className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          <TwoTone parts={[{ t: "Where I've " }, { t: "deployed.", mute: true }]} />
        </Reveal>
        <div className="mt-12 flex flex-col gap-4">
          {EXPERIENCE.map((job, i) => (
            <ExperienceCard
              key={i}
              job={job}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
