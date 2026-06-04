import { useScrollReveal } from "@/hooks/useScrollReveal";

const amenities = [
  {
    icon: "ri-hotel-bed-line",
    title: "寝具",
    description: "高級羽毛布団とお選びいただける枕。快適な眠りを約束します。",
  },
  {
    icon: "ri-t-shirt-line",
    title: "浴衣・羽織",
    description: "数種類の柄からお選びいただける浴衣と羽織をご用意。",
  },
  {
    icon: "ri-cup-line",
    title: "茶道具",
    description: "部屋に常備された茶道具で、ゆっくりとお茶の時間を。",
  },
  {
    icon: "ri-drop-line",
    title: "アメニティ",
    description: "天然素材のシャンプー・コンディショナー、ボディソープ。",
  },
];

export default function Amenities() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="amenities" className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-900))" }}>
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-primary-400/10" />
      <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-primary-400/10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${titleVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">館内設備・サービス</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${titleVisible ? "is-visible" : ""}`}>
            細部にまで込めた
            <br />
            <span style={{ color: "oklch(var(--primary-400))" }}>おもてなし</span>
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${titleVisible ? "is-visible" : ""}`} />
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 md:p-8 rounded-2xl border border-background-700/50 bg-background-800/50 transition-all duration-500 hover:bg-background-800 hover:border-primary-400/30 animate-fade-in-up ${
                cardsVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/10 mb-5">
                <i className={`${item.icon} text-xl`} style={{ color: "oklch(var(--primary-400))" }} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3" style={{ color: "oklch(var(--foreground-100))" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(var(--foreground-400))" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}