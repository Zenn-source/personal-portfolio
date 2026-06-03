import { useState } from "react";
import { PROFILE, NAV } from "../data/content";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200 bg-white/92 px-2 py-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {/* Avatar + name */}
        <a href="#top" className="flex items-center gap-2.5 rounded-full px-2 py-1 transition-colors hover:bg-zinc-50">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 text-[10px] font-bold text-zinc-500">
            {PROFILE.monogram}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
            {PROFILE.name.split(" ")[0]}{" "}
            {PROFILE.name.split(" ")[1]?.[0]}.
          </span>
        </a>

        <span className="mx-1 h-5 w-px bg-zinc-200" />

        {/* Desktop nav links — always visible */}
        <div className="hidden items-center gap-0.5 md:flex">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-zinc-200 md:block" />

        {/* Connect — outlined */}
        <a
          href="#contact"
          className="hidden items-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-[14px] font-semibold text-zinc-900 transition-all hover:bg-zinc-50 md:inline-flex"
        >
          Connect
        </a>

        {/* Mobile dots */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 md:hidden"
        >
          <span className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="pointer-events-auto absolute top-[4.5rem] w-[min(92vw,300px)] rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl md:hidden">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 block rounded-xl border border-zinc-200 px-4 py-3 text-center text-[15px] font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Connect
          </a>
        </div>
      )}
    </div>
  );
}
