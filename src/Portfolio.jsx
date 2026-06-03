import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { TECH_TICKER, LIFE_TICKER } from "./data/content";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f0efed] font-sans text-zinc-900 antialiased">
      <div className="mx-auto max-w-[1400px] border-zinc-200 sm:border-x">
        <Nav />
        <main>
          <Hero />
          <Ticker items={TECH_TICKER} sep="✦" />
          <Work />
          <Services />
          <Stack />
          <Philosophy />
          <Experience />
          <Ticker items={LIFE_TICKER} sep="✦" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
