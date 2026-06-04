import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Reservation() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="reservation"
      className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20mountain%20village%20at%20dusk%2C%20warm%20amber%20light%20from%20wooden%20houses%2C%20misty%20forest%2C%20dark%20silhouettes%2C%20calm%20serene%20atmosphere%2C%20muted%20earthy%20tones%2C%20quiet%20peaceful%20landscape%2C%20soft%20shadows%2C%20warm%20golden%20glow%2C%20understated%20beauty%2C%20photography&width=1600&height=700&seq=reservation-mountain-dark-02&orientation=landscape"
          alt="山あいの景色"
          className="w-full h-full object-cover"
          style={{ objectPosition: "top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Decorative corners */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-6 left-6 md:top-10 md:left-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-l border-t border-primary-400/40" />
        </div>
        <div className="absolute top-6 right-6 md:top-10 md:right-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-r border-t border-primary-400/40" />
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-l border-b border-primary-400/40" />
        </div>
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <div className="w-12 h-12 md:w-16 md:h-16 border-r border-b border-primary-400/40" />
        </div>
      </div>

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-primary-400/50" />
          <div className="w-2 h-2 rotate-45 border border-primary-400/50" />
          <div className="w-16 h-px bg-primary-400/50" />
        </div>

        <h2
          className={`font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed mb-6 animate-fade-in-up ${
            sectionVisible ? "is-visible" : ""
          }`}
          style={{ color: "oklch(var(--foreground-100))" }}
        >
          静かな山あいの、隠れ家へ
        </h2>

        <p
          className={`text-sm md:text-base leading-relaxed mb-8 animate-fade-in-up stagger-1 ${
            sectionVisible ? "is-visible" : ""
          }`}
          style={{ color: "oklch(var(--foreground-300))" }}
        >
          JR京都駅よりお車で10分 / 送迎あり
          <br />
          ご予約はお電話またはオンラインで24時間受付中
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-2 ${
            sectionVisible ? "is-visible" : ""
          }`}
        >
          <a href="tel:075-123-4567" className="btn-light gap-2">
            <i className="ri-phone-line text-sm" />
            075-123-4567
          </a>
          <a href="#" className="btn-primary gap-2">
            ご予約はこちら
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-background-950">
              <i className="ri-arrow-right-line text-xs text-white" />
            </span>
          </a>
        </div>

        {/* Decorative bottom */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 h-px bg-primary-400/50" />
          <div className="w-2 h-2 rotate-45 border border-primary-400/50" />
          <div className="w-16 h-px bg-primary-400/50" />
        </div>
      </div>
    </section>
  );
}