import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { PRINCIPLES, PROFILE } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, PillButton } from "./ui";

function AccordionItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-[0.8125rem] text-zinc-600">{item.n}</span>
          <span className="text-[1.1875rem] font-semibold tracking-tight text-zinc-100">{item.title}</span>
        </span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-zinc-500">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="min-h-0">
          <p className="pb-5 pl-9 pr-10 text-pretty text-[0.9375rem] leading-relaxed text-zinc-400">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const [open, setOpen] = useState(0);

  return (
    <section id="process" className="border-t border-zinc-800 bg-zinc-900/40 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal className="mb-3">
            <ScriptLabel className="text-2xl">design philosophy</ScriptLabel>
          </Reveal>
          <Reveal as="h2" delay={60} className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
            <TwoTone parts={[{ t: "How I think " }, { t: "about my work", mute: true }]} />
          </Reveal>
          <div className="mt-10">
            {PRINCIPLES.map((p, i) => (
              <AccordionItem
                key={p.n}
                item={p}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-lg font-semibold text-zinc-900">
              {PROFILE.monogram}
            </span>
            <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight">
              <span className="text-zinc-600">Curious about my work?</span>
              <br />
              <span className="text-zinc-100">Find me on LinkedIn</span>
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-zinc-400">
              Always up for a conversation about secure systems, real-time apps, or whatever you're building.
            </p>
            <div className="mt-7">
              <PillButton href={PROFILE.linkedin} target="_blank" Icon={ArrowUpRight}>
                Connect on LinkedIn
              </PillButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
