import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { TECH_TICKER, LIFE_TICKER } from "./data/content";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f0f14] font-sans text-zinc-50 antialiased">
      <Nav />
      <main>
        <Hero />
        <Ticker items={TECH_TICKER} sep="✦" />
        <Experience />
        <Work />
        <Stack />
        <About />
        <Services />
        <Philosophy />
        <Ticker items={LIFE_TICKER} sep="✦" />
      </main>
      <Footer />
    </div>
  );
}
