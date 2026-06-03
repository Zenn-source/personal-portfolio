import { STACK, REST_STACK } from "../data/content";
import { Reveal, TwoTone, ScriptLabel, AppIcon } from "./ui";

export default function Stack() {
  return (
    <section id="about" className="border-t border-zinc-200 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-3">
          <ScriptLabel className="text-2xl">my toolkit</ScriptLabel>
        </Reveal>
        <Reveal as="h2" delay={60} className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
          <TwoTone parts={[{ t: "The stack I " }, { t: "reach for.", mute: true }]} />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((t, i) => (
            <Reveal
              key={t.name}
              delay={40 * i}
              className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.4)] transition-colors hover:border-zinc-300"
            >
              <AppIcon glyph={t.glyph} />
              <div>
                <div className="text-[17px] font-semibold tracking-tight text-zinc-900">{t.name}</div>
                <div className="mt-0.5 inline-block rounded-full bg-zinc-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                  {t.tag}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="text-[15px] font-semibold text-zinc-700">The rest of my stack</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {REST_STACK.map((r) => (
              <span
                key={r}
                className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 font-mono text-[12px] tracking-wide text-zinc-500"
              >
                {r}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
