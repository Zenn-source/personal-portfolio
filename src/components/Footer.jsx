import { PROFILE, NAV } from "../data/content";
import { Github, Linkedin } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();
  const wordmark = PROFILE.name.split(" ").pop().toUpperCase();

  return (
    <footer id="contact" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
          <span className="text-white">Let's build something </span>
          <span className="text-zinc-600">solid together.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">Email</div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 inline-block text-lg text-zinc-200 transition-colors hover:text-white"
            >
              {PROFILE.email}
            </a>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">Social</div>
            <div className="mt-3 flex gap-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-900 transition-transform hover:-translate-y-0.5"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-zinc-800" />

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">Menu</div>
            <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2">
              {NAV.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[15px] text-zinc-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="font-mono text-[12px] text-zinc-600">© {year} {PROFILE.name}</div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="pointer-events-none select-none px-2 pb-2">
        <div
          className="text-center font-semibold leading-[0.8] tracking-[-0.03em] text-white"
          style={{
            fontSize: "clamp(4rem, 19vw, 19rem)",
            textShadow: "0 0 80px rgba(255,255,255,0.2)",
          }}
        >
          {wordmark}
        </div>
      </div>
    </footer>
  );
}
