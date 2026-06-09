import { ArrowUpRight, ArrowRight, Code2, Smartphone, ShieldCheck, Zap, Database, Sparkles } from "lucide-react";
import { SERVICES } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, GlossyIcon, PillButton } from "./ui";

const ICON_MAP = { Code2, Smartphone, ShieldCheck, Zap, Database, Sparkles };

export default function Services() {
  return (
    <section className="border-t border-zinc-800 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal className="mb-3">
            <ScriptLabel className="text-2xl">what i do</ScriptLabel>
          </Reveal>
          <Reveal as="h2" delay={60} className="text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
            <TwoTone parts={[{ t: "Building systems that " }, { t: "hold up.", mute: true }]} />
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <PillButton href="#work" Icon={ArrowUpRight}>Explore my work</PillButton>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.iconName];
            return (
              <Reveal
                key={s.label}
                delay={50 * i}
                className="flex items-center gap-5 border-b border-zinc-800 py-5 first:border-t"
              >
                <GlossyIcon Icon={Icon} />
                <div>
                  <div className="text-xl font-semibold tracking-tight text-zinc-100">{s.label}</div>
                  <div className="text-[0.875rem] text-zinc-400">{s.sub}</div>
                </div>
                <ArrowRight size={18} className="ml-auto text-zinc-700" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
