import { useState, useEffect } from "react";
import { PROFILE, NAV } from "../data/content";
import { Github, Linkedin } from "./ui";

const VERBS = ["build", "create", "ship", "craft", "design"];

export default function Footer() {
  const year = new Date().getFullYear();
  const [verbIdx, setVerbIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVerbIdx((i) => (i + 1) % VERBS.length), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
        <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-6xl">
          <span className="text-white">
            Let's{" "}
            <span
              key={verbIdx}
              className="word-in inline-block text-indigo-400"
            >
              {VERBS[verbIdx]}
            </span>{" "}
            something{" "}
          </span>
          <span className="text-zinc-600">solid together.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <div className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-zinc-600">Email</div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 inline-block text-lg text-zinc-200 transition-colors hover:text-white"
            >
              {PROFILE.email}
            </a>
          </div>
          <div>
            <div className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-zinc-600">Social</div>
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

        <div className="mt-14 h-px w-full bg-zinc-700" />

        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-zinc-600">Menu</div>
            <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2">
              {NAV.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[0.9375rem] text-zinc-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="font-mono text-[0.75rem] text-zinc-600">© {year} {PROFILE.name}</div>
        </div>
      </div>
    </footer>
  );
}
