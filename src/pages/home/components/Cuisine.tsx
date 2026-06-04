import { useScrollReveal } from "@/hooks/useScrollReveal";

const dishes = [
  {
    title: "季節の先付け",
    description: "旬の食材を使った小さな一品。春は菜の花、夏は冬瓜、秋は松茸、冬は蟹。",
    image: "https://readdy.ai/api/search-image?query=Traditional%20Japanese%20kaiseki%20appetizer%20dish%20on%20dark%20ceramic%20plate%2C%20elegant%20presentation%2C%20warm%20amber%20light%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20seasonal%20ingredients%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-1-dark-02&orientation=landscape",
  },
  {
    title: "炭火で焼く若鶏",
    description: "地元の契約農家から仕入れた新鮮な若鶏を、備長炭で香ばしく焼き上げます。",
    image: "https://readdy.ai/api/search-image?query=Grilled%20Japanese%20chicken%20yakitori%20on%20dark%20slate%20plate%2C%20warm%20amber%20lighting%2C%20charcoal%20smoke%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-2-dark-02&orientation=landscape",
  },
  {
    title: "松茸のお吸い物",
    description: "秋の味覚の王者、松茸の香りを最大限に引き出したお吸い物。",
    image: "https://readdy.ai/api/search-image?query=Japanese%20matsutake%20mushroom%20soup%20in%20lacquer%20bowl%2C%20steam%20rising%2C%20warm%20amber%20light%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-3-dark-02&orientation=landscape",
  },
  {
    title: "季節のお造り",
    description: "毎朝市場で仕入れた鮮魚を、職人の技で丁寧に仕立てます。",
    image: "https://readdy.ai/api/search-image?query=Traditional%20Japanese%20sashimi%20platter%20on%20dark%20ceramic%20plate%2C%20fresh%20seasonal%20fish%2C%20warm%20amber%20light%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-4-dark-02&orientation=landscape",
  },
  {
    title: "京野菜の炊き合わせ",
    description: "京の伝統野菜を、素材の味を大切に炊き上げた一品。",
    image: "https://readdy.ai/api/search-image?query=Japanese%20simmered%20vegetables%20nimono%20in%20dark%20ceramic%20bowl%2C%20warm%20amber%20light%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20seasonal%20Kyoto%20vegetables%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-5-dark-02&orientation=landscape",
  },
  {
    title: "甘味",
    description: "旬のフルーツとわらび餅、または抹茶のアイスクリーム。",
    image: "https://readdy.ai/api/search-image?query=Japanese%20traditional%20wagashi%20dessert%20on%20dark%20ceramic%20plate%2C%20matcha%20ice%20cream%2C%20warm%20amber%20light%2C%20dark%20wood%20table%2C%20minimalist%20zen%20style%2C%20soft%20shadows%2C%20muted%20earth%20tones%2C%20professional%20food%20photography%2C%20understated%20luxury&width=800&height=600&seq=cuisine-6-dark-02&orientation=landscape",
  },
];

export default function Cuisine() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="cuisine" className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-950))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary-400/15" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-primary-400/15" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${titleVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">お料理</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${titleVisible ? "is-visible" : ""}`}>
            五感で味わう、
            <br />
            <span style={{ color: "oklch(var(--primary-400))" }}>季節の饗宴</span>
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${titleVisible ? "is-visible" : ""}`} />
          <p className={`section-body max-w-2xl mx-auto mt-6 animate-fade-in-up stagger-3 ${titleVisible ? "is-visible" : ""}`}>
            地元の食材を使い、季節の移ろいを感じていただける懐石料理。
            お部屋でゆっくりと、目で見て、鼻で嗅いで、舌で味わう。
            そんな五感を使ったお食事をご用意しています。
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.title}
              className={`group overflow-hidden rounded-2xl bg-background-800 border border-background-700/50 transition-all duration-500 hover:border-primary-400/30 animate-fade-in-up ${
                gridVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "top" }}
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: "oklch(var(--foreground-100))" }}>
                  {dish.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(var(--foreground-400))" }}>
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}