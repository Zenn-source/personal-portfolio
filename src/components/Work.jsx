import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, Chip, PillButton } from "./ui";

function BrowserFrame({ project, rotate = 0 }) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="group/frame relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_32px_70px_-20px_rgba(99,102,241,0.25)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="ml-2 font-mono text-[11px] tracking-wide text-zinc-600">
            {project.url}
          </span>
        </div>
        {/* Image or gradient placeholder */}
        <div className="relative" style={{ height: 300 }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div
              className={`h-full w-full bg-gradient-to-br ${project.gradient}`}
              style={{ opacity: 0.75 }}
            />
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/frame:bg-black/40">
            <div className="flex items-center gap-2 translate-y-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/frame:translate-y-0 group-hover/frame:opacity-100">
              <span className="text-[13px] font-semibold text-white">View project</span>
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="work" className="border-t border-zinc-800 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-3">
          <ScriptLabel className="text-2xl">selected work</ScriptLabel>
        </Reveal>
        <Reveal as="h2" delay={60} className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          <TwoTone parts={[{ t: "Things I've " }, { t: "shipped", mute: false }]} />
        </Reveal>

        {/* Featured */}
        <Reveal delay={80} className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <BrowserFrame project={featured} rotate={-1.2} />
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-100">{featured.name}</h3>
              <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-900">
                {featured.status}
              </span>
            </div>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-zinc-400">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((t) => <Chip key={t}>{t}</Chip>)}
            </div>
            <div className="mt-7">
              <PillButton href={featured.href} Icon={ArrowUpRight}>View project</PillButton>
            </div>
          </div>
        </Reveal>

        {/* Rest */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={60 * i}>
              <a href={p.href} className="group/card block">
                <BrowserFrame project={p} rotate={i % 2 ? 1 : -1} />
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-100 transition-colors group-hover/card:text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-pretty text-[14px] leading-relaxed text-zinc-400">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => <Chip key={t}>{t}</Chip>)}
                    </div>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                    {p.status}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
