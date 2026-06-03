export default function Ticker({ items, sep = "✦" }) {
  const Track = () => (
    <div className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="px-7 font-mono text-[12px] uppercase tracking-[0.2em] text-zinc-400">
            {it}
          </span>
          <span className="text-zinc-300">{sep}</span>
        </span>
      ))}
    </div>
  );

  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-zinc-200 bg-white/60 py-4">
      <div className="pf-marquee flex">
        <div className="pf-marquee-track flex">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
