import { PROFILE } from "../data/content";
import { Reveal, TwoTone, ScriptLabel } from "./ui";

export default function About() {
  return (
    <section id="about" className="border-t border-zinc-800 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-[0_30px_70px_-30px_rgba(99,102,241,0.2)]">
                {PROFILE.photo ? (
                  <img
                    src={PROFILE.photo}
                    alt={PROFILE.name}
                    className="aspect-[3/4] w-full object-cover object-top"
                  />
                ) : (
                  <div
                    className="flex aspect-[3/4] w-full items-center justify-center bg-gradient-to-br from-indigo-900/40 to-zinc-900"
                  >
                    <span className="text-6xl font-black text-zinc-700">{PROFILE.monogram}</span>
                  </div>
                )}
              </div>
              {/* Floating status chip */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 shadow-lg backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="font-mono text-[12px] text-zinc-300">Available for work</span>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={80} className="pt-6 lg:pt-0">
            <ScriptLabel className="mb-3 text-2xl">a bit about me</ScriptLabel>
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              <TwoTone parts={[{ t: "The person " }, { t: "behind the code.", mute: true }]} />
            </h2>

            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-zinc-400">
              <p>
                I'm a second-year BS Information Technology student at{" "}
                <span className="font-medium text-zinc-200">National University Manila</span>, currently
                interning as an AI Solutions Engineer at{" "}
                <span className="font-medium text-zinc-200">Sofi AI</span>. I started coding because I
                wanted to build things that actually solve problems — from helping tricycle drivers get
                rides faster, to making it easier for small businesses to go fully digital.
              </p>
              <p>
                I lean toward the backend and systems side, but I'm just as comfortable building out full
                UIs and mobile apps. Lately I've been deep in LLM-powered tooling, prompt engineering, and
                figuring out how to make AI outputs actually reliable in production.
              </p>
              <p>
                When I'm not writing code, I'm reading about systems design, security, or whatever AI
                paper just dropped.
              </p>
            </div>

            {/* Education card */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-600">Education</div>
              <div className="mt-3 flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 font-mono text-[11px] font-bold text-zinc-300">
                  NU
                </span>
                <div>
                  <div className="text-[15px] font-semibold text-zinc-100">
                    BS Information Technology
                  </div>
                  <div className="mt-0.5 text-[13px] text-zinc-400">
                    National University Manila · 2023 – 2027
                  </div>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { label: "Current role", value: "AI Solutions Intern" },
                { label: "Location", value: "Manila, PH" },
                { label: "Focus", value: "AI + Full-Stack" },
              ].map((f) => (
                <div key={f.label} className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600">{f.label}</div>
                  <div className="mt-1 text-[13px] font-semibold text-zinc-200">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
