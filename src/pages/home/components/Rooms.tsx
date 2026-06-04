import { useScrollReveal } from "@/hooks/useScrollReveal";

const rooms = [
  {
    name: "山吹",
    type: "露天風呂付き特別室",
    capacity: "2名",
    size: "52㎡",
    description: "檜の露天風呂と庭園を眺める広縁が付いた特別室。落ち着いた空間で、温泉を独り占めできます。",
    image: "https://readdy.ai/api/search-image?query=Traditional%20Japanese%20ryokan%20room%20with%20private%20open%20air%20onsen%20bath%2C%20hinoki%20wood%20bathtub%2C%20tatami%20floor%2C%20shoji%20screens%2C%20garden%20view%2C%20warm%20amber%20light%2C%20dark%20wood%20furniture%2C%20calm%20serene%20atmosphere%2C%20muted%20earthy%20tones%2C%20luxury%20ryokan%20interior%2C%20professional%20photography&width=800&height=600&seq=room-1-dark-02&orientation=landscape",
  },
  {
    name: "紅葉",
    type: "庭園ビュー和室",
    capacity: "2〜4名",
    size: "38㎡",
    description: "四季折々の庭園が一望できる和室。夕暮れ時の庭園を眺めながら、お茶を楽しむのがおすすめです。",
    image: "https://readdy.ai/api/search-image?query=Traditional%20Japanese%20ryokan%20room%20with%20garden%20view%2C%20tatami%20floor%2C%20shoji%20screens%2C%20autumn%20foliage%2C%20warm%20amber%20light%2C%20dark%20wood%20furniture%2C%20calm%20serene%20atmosphere%2C%20muted%20earthy%20tones%2C%20zen%20interior%2C%20professional%20photography&width=800&height=600&seq=room-2-dark-02&orientation=landscape",
  },
  {
    name: "青松",
    type: "スタンダード和室",
    capacity: "2名",
    size: "28㎡",
    description: "シンプルで落ち着いた空間。初めての方にもおすすめの、静寂の宿のスタンダードルームです。",
    image: "https://readdy.ai/api/search-image?query=Minimal%20Japanese%20ryokan%20room%2C%20tatami%20floor%2C%20shoji%20screens%2C%20simple%20zen%20interior%2C%20warm%20amber%20light%2C%20dark%20wood%20furniture%2C%20calm%20serene%20atmosphere%2C%20muted%20earthy%20tones%2C%20clean%20lines%2C%20professional%20photography&width=800&height=600&seq=room-3-dark-02&orientation=landscape",
  },
];

export default function Rooms() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="rooms" className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-900))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-400/15" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-400/15" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${titleVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">お部屋</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${titleVisible ? "is-visible" : ""}`}>
            静寂に包まれた、
            <br />
            <span style={{ color: "oklch(var(--primary-400))" }}>特別な空間</span>
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${titleVisible ? "is-visible" : ""}`} />
          <p className={`section-body max-w-2xl mx-auto mt-6 animate-fade-in-up stagger-3 ${titleVisible ? "is-visible" : ""}`}>
            すべてのお部屋に、檜の香りが漂います。
            窓の外には庭園、風に揺れる木々の音。
            日常を忘れ、心を整える時間がここにあります。
          </p>
        </div>

        {/* Room Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`group overflow-hidden rounded-2xl bg-background-800 border border-background-700/50 transition-all duration-500 hover:border-primary-400/30 animate-fade-in-up ${
                cardsVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "top" }}
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold" style={{ color: "oklch(var(--foreground-100))" }}>
                    {room.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary-500/10 text-primary-400">
                    {room.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3 text-xs" style={{ color: "oklch(var(--foreground-500))" }}>
                  <span className="flex items-center gap-1">
                    <i className="ri-user-line" />
                    {room.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-ruler-line" />
                    {room.size}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(var(--foreground-400))" }}>
                  {room.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}