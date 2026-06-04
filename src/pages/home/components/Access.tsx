import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Access() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="access" className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-950))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-400/15" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-400/15" />
      </div>

      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">アクセス</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${sectionVisible ? "is-visible" : ""}`}>
          静かな山あいの、隠れ家へ
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${sectionVisible ? "is-visible" : ""}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className={`rounded-2xl overflow-hidden border border-background-700/50 animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`}>
            <div className="w-full h-[300px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398539!2d135.7726713152581!3d35.01156498035442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001088e0c0e3e65%3A0x2e3b07e4b2c0a5d0!2z5Lqs6YO96aeF5p2x5p2x6a2a5a2Q6Kaz!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="静寂の宿 地図"
              />
            </div>
          </div>

          {/* Info */}
          <div className={`flex flex-col justify-center animate-fade-in-up stagger-1 ${sectionVisible ? "is-visible" : ""}`}>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/10">
                    <i className="ri-map-pin-line text-sm" style={{ color: "oklch(var(--primary-400))" }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold" style={{ color: "oklch(var(--foreground-100))" }}>
                    住所
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-11" style={{ color: "oklch(var(--foreground-400))" }}>
                  〒605-0001
                  <br />
                  京都府京都市東山区北御門町
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/10">
                    <i className="ri-train-line text-sm" style={{ color: "oklch(var(--primary-400))" }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold" style={{ color: "oklch(var(--foreground-100))" }}>
                    交通アクセス
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-11" style={{ color: "oklch(var(--foreground-400))" }}>
                  JR京都駅よりお車で約20分
                  <br />
                  京阪祇園四条駅より徒歩約12分
                  <br />
                  送迎サービスあり（要予約）
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/10">
                    <i className="ri-phone-line text-sm" style={{ color: "oklch(var(--primary-400))" }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold" style={{ color: "oklch(var(--foreground-100))" }}>
                    お問い合わせ
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-11" style={{ color: "oklch(var(--foreground-400))" }}>
                  TEL: 075-123-4567
                  <br />
                  受付時間: 9:00〜20:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}