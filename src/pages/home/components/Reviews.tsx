import { useState, useEffect, useCallback, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";


const reviews = [
  {
    text: "古い友人の家に招かれたような、不思議と肩の力が抜ける空間でした。お料理の一つ一つに季節を感じ、檜風呂でゆっくりとした時間を過ごせました。年末にも、また来たいと思います。",
    name: "佐藤 美智子",
    info: "65歳 / 東京都",
    rating: 5,
    image: "https://readdy.ai/api/search-image?query=Portrait%20of%20elegant%20elderly%20Japanese%20woman%2C%20gentle%20calm%20smile%2C%20warm%20soft%20studio%20light%2C%20dark%20muted%20background%2C%20understated%20warm%20tones%2C%20quiet%20dignified%20atmosphere%2C%20minimal%20composition%2C%20soft%20shadows%2C%20amber%20glow%2C%20serene%20expression%2C%20photography&width=200&height=200&seq=review-person-dark-02&orientation=squarish",
  },
  {
    text: "夫婦で初めての民泊でしたが、とても居心地が良く、3泊しました。庭園を眺めながらの朝食は格別で、庭を散策するのも毎日の楽しみでした。送迎もしてくださり、本当にありがとうございました。",
    name: "田中 文雄",
    info: "72歳 / 大阪府",
    rating: 5,
    image: "https://readdy.ai/api/search-image?query=Portrait%20of%20elderly%20Japanese%20man%2C%20warm%20calm%20smile%2C%20soft%20studio%20lighting%2C%20dark%20muted%20background%2C%20understated%20warm%20tones%2C%20quiet%20dignified%20atmosphere%2C%20minimal%20composition%2C%20soft%20shadows%2C%20amber%20glow%2C%20peaceful%20expression%2C%20photography&width=200&height=200&seq=review-person2-dark-02&orientation=squarish",
  },
  {
    text: "ビジネスで疲れた心が癒されました。静かな環境で読書をするのに最適で、夜は満点の星空が見えました。お部屋の温度や湿度も絶妙で、寝心地が最高でした。",
    name: "山本 健一",
    info: "58歳 / 愛知県",
    rating: 5,
    image: "https://readdy.ai/api/search-image?query=Portrait%20of%20middle%20aged%20Japanese%20man%2C%20calm%20confident%20smile%2C%20warm%20soft%20studio%20light%2C%20dark%20muted%20background%2C%20understated%20warm%20tones%2C%20quiet%20professional%20atmosphere%2C%20minimal%20composition%2C%20soft%20shadows%2C%20amber%20glow%2C%20serene%20expression%2C%20photography&width=200&height=200&seq=review-person3-dark-02&orientation=squarish",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const AUTO_INTERVAL_MS = 4000;
  const TRANSITION_MS = 500;

  
  
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  
  const changeReview = useCallback((getNextIndex: (prev: number) => number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsChanging(true);

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(getNextIndex);
      setIsChanging(false);
    }, TRANSITION_MS);
  }, []);

  const nextReview = useCallback(() => {
    changeReview((prev) => (prev + 1) % reviews.length);
  }, [changeReview]);

  const prevReview = () => {
    changeReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const selectReview = (index: number) => {
    if (index === currentIndex) return;
    changeReview(() => index);
  };

  useEffect(() => {
    const id = setInterval(nextReview, AUTO_INTERVAL_MS);

    return () => {
      clearInterval(id);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [nextReview]);

  const review = reviews[currentIndex];

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-50))" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-600/20" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="w-px h-16 bg-primary-600/20" />
      </div>

      <div ref={sectionRef} className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-600" />
            <p className="section-label" style={{ color: "oklch(var(--primary-600))" }}>お客様の声</p>
            <div className="w-12 h-px bg-primary-600" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${sectionVisible ? "is-visible" : ""}`} style={{ color: "oklch(var(--foreground-950))" }}>
            心に残る、特別な時間
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${sectionVisible ? "is-visible" : ""}`} style={{ backgroundColor: "oklch(var(--primary-600))" }} />
        </div>

        {/* Rating Badge */}
        <div className={`flex justify-center mb-8 animate-fade-in-up stagger-2 ${sectionVisible ? "is-visible" : ""}`}>
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-background-950">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-sm" style={{ color: "oklch(var(--primary-500))" }} />
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: "oklch(var(--foreground-100))" }}>
              4.9 / 5.0
            </span>
          </div>
        </div>

        {/* Review Content */}
        <div className={`text-center animate-fade-in-up stagger-3 ${sectionVisible ? "is-visible" : ""}`}>
          {/* Decorative quotes */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-double-quotes-l text-2xl" style={{ color: "oklch(var(--primary-600))" }} />
            </div>
          </div>
          <div
            className={`mb-8 transition-opacity duration-500 ease-out ${
              isChanging ? "opacity-0" : "opacity-100"
            }`}
          >
            
            <p className="font-heading text-base md:text-lg leading-relaxed italic" style={{ color: "oklch(var(--foreground-900))" }}>
              {review.text}
            </p>
          </div>

          {/* User Info */}
          <div
            className={`flex items-center justify-center gap-4 mb-10 transition-opacity duration-500 ease-out ${
              isChanging ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={review.image} alt={review.name} className="w-full h-full object-cover" style={{ objectPosition: "top" }} />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium" style={{ color: "oklch(var(--foreground-900))" }}>
                {review.name}
              </p>
              <p className="text-xs" style={{ color: "oklch(var(--foreground-500))" }}>
                {review.info}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prevReview}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-background-300 hover:border-primary-400 transition-colors"
              aria-label="前のレビュー"
            >
              <i className="ri-arrow-left-line text-sm" style={{ color: "oklch(var(--foreground-700))" }} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectReview(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-background-950 w-4" : "bg-background-300"
                  }`}
                  aria-label={`レビュー ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-950 hover:bg-primary-600 transition-colors"
              aria-label="次のレビュー"
            >
              <i className="ri-arrow-right-line text-sm text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}