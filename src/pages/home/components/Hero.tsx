import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface HeroProps {
  replayKey?: number;
}
function runOpeningSequence(
  setPhase: (p: "opening" | "revealing" | "done") => void
) {
  setPhase("opening");

  const t1 = setTimeout(() => {
    setPhase("revealing");
  }, 2000);

  const t2 = setTimeout(() => {
    setPhase("done");
  }, 3800);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };
}

export default function Hero({ replayKey }: HeroProps) {
  const [phase, setPhase] = useState<"opening" | "revealing" | "done">("opening");
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: "0px",
  });

  useEffect(() => {
    return runOpeningSequence(setPhase);
  }, [replayKey]);

  const handleScrollDown = () => {
    const target = document.querySelector("#kodawari");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[720px] lg:h-[800px] overflow-hidden">
      {/* Background Image - always visible but dark during opening */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20ryokan%20tatami%20room%20interior%20at%20twilight%2C%20warm%20amber%20lantern%20light%2C%20dark%20wood%20shoji%20screens%2C%20soft%20shadows%2C%20calm%20serene%20atmosphere%2C%20muted%20earthy%20tones%2C%20low%20lighting%2C%20peaceful%20zen%20space%2C%20traditional%20architecture%2C%20warm%20golden%20glow%2C%20quiet%20contemplative%20mood%2C%20photography&width=1600&height=900&seq=hero-dark-warm-02&orientation=landscape"
          alt="静寂の宿 和室の内装"
          className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${heroVisible ? "scale-100" : "scale-110"
            }`}
          style={{ objectPosition: "top" }}
        />
        {/* Overlay - darkest during opening */}
        <div
          className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${phase === "opening"
              ? "bg-background-950/85"
              : phase === "revealing"
                ? "bg-gradient-to-b from-black/50 via-black/30 to-black/60"
                : "bg-gradient-to-b from-black/50 via-black/30 to-black/60"
            }`}
        />
      </div>

      {/* Decorative corners */}
      <div className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ${phase === "done" ? "opacity-100" : "opacity-0"}`}>
        {/* Top left corner ornament */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-l border-t border-primary-400/40" />
        </div>
        {/* Top right corner ornament */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-r border-t border-primary-400/40" />
        </div>
        {/* Bottom left corner ornament */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-l border-b border-primary-400/40" />
        </div>
        {/* Bottom right corner ornament */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-r border-b border-primary-400/40" />
        </div>
      </div>

      {/* Opening Phase - Inn Name Only */}
      <div
        className={`absolute inset-0 z-30 flex flex-col items-center justify-center transition-all duration-1000 ${phase === "opening" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="text-center">
          {/* Small decorative text above */}
          <p
            className="text-xs tracking-[0.3em] mb-6 transition-opacity duration-1000"
            style={{ color: "oklch(var(--primary-400))" }}
          >
            SEIJAKU NO YADO
          </p>
          {/* Main inn name */}
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[0.2em] transition-all duration-1000"
            style={{ color: "oklch(var(--foreground-100))" }}
          >
            <span style={{ color: "oklch(var(--primary-400))" }}>静</span>寂の宿
          </h1>
          {/* Gold line below name */}
          <div className="mx-auto mt-8 w-24 h-px bg-primary-400" />
          <p
            className="mt-6 text-sm tracking-[0.2em] transition-opacity duration-1000"
            style={{ color: "oklch(var(--foreground-400))" }}
          >
            京都 東山
          </p>
        </div>
      </div>

      {/* Main Content - Reveals after opening */}
      <div
        ref={heroRef}
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-[1.5s] ease-out ${phase === "done" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-3xl">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-primary-400/50" />
            <div className="w-2 h-2 rotate-45 border border-primary-400/50" />
            <div className="w-16 h-px bg-primary-400/50" />
          </div>

          <p
            className={`section-label mb-6 transition-all duration-1000 ease-out ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            一期一会のおもてなし
          </p>
          <h1
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wider mb-8 transition-all duration-1000 ease-out delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ color: "oklch(var(--foreground-100))" }}
          >
            静寂の宿
          </h1>
          <div
            className={`gold-divider mx-auto mb-8 transition-all duration-1000 ease-out delay-300 ${heroVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
          />
          <p
            className={`text-base md:text-lg leading-relaxed tracking-wide max-w-xl mx-auto transition-all duration-1000 ease-out delay-500 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ color: "oklch(var(--foreground-300))" }}
          >
            古都の風が吹く山あいに佇む、一棟貸しの隠れ家。
            <br />
            日常の喧騒を忘れ、自分と向き合う特別な時間を。
          </p>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-px bg-primary-400/50" />
            <div className="w-2 h-2 rotate-45 border border-primary-400/50" />
            <div className="w-16 h-px bg-primary-400/50" />
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="下へスクロール"
        >
          <span className="text-xs tracking-widest" style={{ color: "oklch(var(--foreground-400))" }}>
            SCROLL
          </span>
          <div className="w-5 h-8 rounded-full border border-foreground-400/40 flex items-start justify-center pt-1">
            <div className="w-1 h-2 rounded-full bg-primary-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}