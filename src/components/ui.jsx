import { useRef, useEffect, useState } from "react";

/* Scroll-reveal blur-in */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0, style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    const t = setTimeout(() => setShown(true), 1500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transition: "opacity .8s cubic-bezier(.2,.7,.2,1), filter .8s, transform .8s",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        filter: shown ? "blur(0)" : "blur(10px)",
        transform: shown ? "none" : "translateY(8px)",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* Two-tone heading: mute segments render in zinc-400 */
export function TwoTone({ parts, className = "" }) {
  return (
    <span className={className}>
      {parts.map((p, i) => (
        <span key={i} style={{ color: p.mute ? "#52525b" : "#fafafa" }}>{p.t}</span>
      ))}
    </span>
  );
}

/* Sacramento script accent label */
export function ScriptLabel({ children, className = "" }) {
  return (
    <span className={`font-script ${className}`} style={{ lineHeight: 1, color: "#71717a" }}>
      {children}
    </span>
  );
}

/* Glossy black circular icon badge */
export function GlossyIcon({ Icon, size = 52, icon = 22 }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full text-white"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(120% 120% at 30% 22%, #4a4a4a 0%, #1c1c1c 45%, #050505 100%)",
        boxShadow:
          "0 10px 22px -8px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.28), inset 0 -6px 12px rgba(0,0,0,.55)",
      }}
    >
      <Icon size={icon} strokeWidth={1.9} />
    </span>
  );
}

/* Letterspaced caps chip */
export function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/70 px-3.5 py-1.5">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400">
        {children}
      </span>
    </span>
  );
}

/* Filled pill CTA button */
export function PillButton({ children, href = "#", Icon, target }) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-zinc-900 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-all duration-200 hover:opacity-90"
    >
      {children}
      {Icon && (
        <Icon
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}

/* Glyph app icon */
export function AppIcon({ glyph, size = 48 }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 text-zinc-100 shadow-[0_6px_16px_-8px_rgba(0,0,0,0.5)]"
      style={{ width: size, height: size }}
    >
      <span className="text-[15px] font-bold tracking-tight">{glyph}</span>
    </span>
  );
}

/* Brand SVG icons (removed from lucide-react) */
export function Github({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function Linkedin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
