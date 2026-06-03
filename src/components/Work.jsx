import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, Chip, PillButton } from "./ui";

function BrowserFrame({ project, rotate = 0 }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_60px_-28px_rgba(0,0,0,0.3)]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="ml-2 font-mono text-[11px] tracking-wide text-zinc-400">
          {project.url}
        </span>
      </div>
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${project.gradient} opacity-80`}
        style={{ height: 300 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/60">
          Screenshot
        </span>
      </div>
    </div>
  );
}

export default function Work() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-3">
          <ScriptLabel className="text-2xl">selected work</ScriptLabel>
        </Reveal>
        <Reveal as="h2" delay={60} className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          <TwoTone parts={[{ t: "Things I've " }, { t: "shipped", mute: true }]} />
        </Reveal>

        {/* Featured */}
        <Reveal delay={80} className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <BrowserFrame project={featured} rotate={-1.2} />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">{featured.name}</h3>
              <span className="rounded-full bg-zinc-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                {featured.status}
              </span>
            </div>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-zinc-500">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            <div className="mt-7">
              <PillButton href={featured.href} Icon={ArrowUpRight}>View architecture</PillButton>
            </div>
          </div>
        </Reveal>

        {/* Rest */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={60 * i}>
              <BrowserFrame project={p} rotate={i % 2 ? 1 : -1} />
              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{p.name}</h3>
                  <p className="mt-1.5 max-w-sm text-pretty text-[14px] leading-relaxed text-zinc-500">
                    {p.description}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-zinc-200 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {p.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
