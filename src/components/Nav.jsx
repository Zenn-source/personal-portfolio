import { useState, useEffect } from "react";
import { PROFILE, NAV } from "../data/content";


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) setCompact(false);
      else if (y > lastY) setCompact(true);
      else setCompact(false);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-800/80 bg-[#0f0f14]/90 px-2 py-1.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300">
        {/* Avatar + name */}
        <a href="#top" className="flex items-center gap-2.5 rounded-full px-2 py-1 transition-colors hover:bg-zinc-800">
          <span className="flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
            {PROFILE.photo ? (
              <img src={PROFILE.photo} alt={PROFILE.name} className="h-full w-full object-cover object-top" />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-[10px] font-bold text-zinc-400">
                {PROFILE.monogram}
              </span>
            )}
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
            {PROFILE.name.split(" ")[0]}{" "}
            {PROFILE.name.split(" ")[1]?.[0]}.
          </span>
        </a>

        {/* Collapsible section: dividers + links + connect */}
        <div
          className={`flex items-center gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
            compact ? "max-w-0 opacity-0" : "max-w-xl opacity-100"
          }`}
        >
          <span className="mx-1 h-5 w-px bg-zinc-700" />

          {/* Desktop nav links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <span className="mx-1 hidden h-5 w-px bg-zinc-700 md:block" />

          {/* Connect — outlined */}
          <a
            href="#contact"
            className="hidden items-center rounded-full border border-zinc-600 bg-zinc-900 px-5 py-2 text-[14px] font-semibold text-zinc-100 transition-all hover:bg-zinc-800 md:inline-flex"
          >
            Connect
          </a>
        </div>

        {/* Mobile dots — always visible */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-800 md:hidden"
        >
          <span className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
            <span className="h-1 w-1 rounded-full bg-zinc-400" />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="pointer-events-auto absolute top-[4.5rem] w-[min(92vw,300px)] rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-xl md:hidden">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-zinc-300 hover:bg-zinc-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 block rounded-xl border border-zinc-600 px-4 py-3 text-center text-[15px] font-semibold text-zinc-100 hover:bg-zinc-800"
          >
            Connect
          </a>
        </div>
      )}
    </div>
  );
}
