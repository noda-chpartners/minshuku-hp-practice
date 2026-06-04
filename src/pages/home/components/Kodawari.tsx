import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  { icon: "ri-fire-line", label: "温泉" },
  { icon: "ri-wifi-line", label: "Wi-Fi" },
  { icon: "ri-parking-line", label: "駐車場" },
  { icon: "ri-prohibited-line", label: "全室禁煙" },
  { icon: "ri-walk-line", label: "ペット不可" },
];

export default function Kodawari() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="kodawari" className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-950))" }}>
      {/* Decorative top ornament */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-12 bg-primary-400/20" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title Area */}
        <div ref={titleRef} className="text-center mb-16 md:mb-20">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${titleVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">こだわり</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl mb-6 animate-fade-in-up stagger-1 ${titleVisible ? "is-visible" : ""}`}>
            古き良き日本の美を、
            <br />
            現代に伝える
          </h2>
          <div className={`gold-divider mx-auto mb-6 animate-fade-in-up stagger-2 ${titleVisible ? "is-visible" : ""}`} />
          <p className={`section-body max-w-2xl mx-auto animate-fade-in-up stagger-3 ${titleVisible ? "is-visible" : ""}`}>
            創業以来、変わらぬ思いでおもてなしを続けてまいりました。
            季節の移ろいを感じる庭園、職人の技が光る建築、
            心を込めたお料理。すべてが「一期一会」の精神を体現しています。
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up stagger-4 ${titleVisible ? "is-visible" : ""}`}>
            <a href="#rooms" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" }); }}>
              お部屋を見る
            </a>
            <a href="#cuisine" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#cuisine")?.scrollIntoView({ behavior: "smooth" }); }}>
              料理を見る
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`bg-background-800 rounded-xl p-6 md:p-8 flex flex-col items-center gap-3 transition-all duration-700 hover:bg-background-700 animate-fade-in-up ${
                cardsVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <i className={`${feature.icon} text-2xl`} style={{ color: "oklch(var(--primary-400))" }} />
              </div>
              <span className="text-sm tracking-wider" style={{ color: "oklch(var(--foreground-200))" }}>
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative bottom ornament */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-12 bg-primary-400/20" />
      </div>
    </section>
  );
}