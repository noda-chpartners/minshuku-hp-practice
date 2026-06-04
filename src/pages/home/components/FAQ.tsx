import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqData = [
  {
    question: "チェックイン・チェックアウトの時間は何時ですか？",
    answer: "チェックインは15時から、チェックアウトは11時までとなっております。早めのチェックインや遅めのチェックアウトをご希望の場合は、事前にお問い合わせください。空室状況によってはご対応可能です。",
  },
  {
    question: "お食事は部屋でいただけますか？",
    answer: "はい、お食事はすべてお部屋食でご用意いたします。朝食・夕食ともに、季節の食材を使った懐石料理をお部屋でゆっくりとお召し上がりいただけます。アレルギーなどのご要望も事前にお知らせください。",
  },
  {
    question: "温泉はありますか？",
    answer: "はい、館内に露天風呂と内風呂をご用意しております。檜の香りが漂う内風呂と、庭園を眺めながら入れる露天風呂が自慢です。貸切風呂もございますので、ご希望の方はフロントまでお申し出ください。",
  },
  {
    question: "駐車場はありますか？",
    answer: "無料の駐車場をご用意しております。ご予約時に駐車場のご利用をお知らせください。JR京都駅からは送迎サービスもご利用いただけます（要予約）。",
  },
  {
    question: "Wi-Fiは利用できますか？",
    answer: "全館で無料Wi-Fiをご利用いただけます。お部屋でもロビーでも、快適にインターネットをご利用いただけます。パスワードはチェックイン時にお伝えいたします。",
  },
  {
    question: "キャンセルポリシーを教えてください",
    answer: "ご宿泊日の7日前までのキャンセルは無料です。6日前〜2日前のキャンセルは宿泊料金の30％、前日のキャンセルは50％、当日のキャンセルは100％のキャンセル料が発生いたします。詳細は宿泊約款をご確認ください。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 md:py-28 lg:py-32 px-4 md:px-6" style={{ backgroundColor: "oklch(var(--background-900))" }}>
      <div ref={sectionRef} className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`flex items-center justify-center gap-4 mb-4 animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`}>
            <div className="w-12 h-px bg-primary-400" />
            <p className="section-label">FAQ</p>
            <div className="w-12 h-px bg-primary-400" />
          </div>
          <h2 className={`section-title text-2xl md:text-3xl lg:text-4xl animate-fade-in-up stagger-1 ${sectionVisible ? "is-visible" : ""}`}>
          よくあるご質問
          </h2>
          <div className={`gold-divider mx-auto mt-6 animate-fade-in-up stagger-2 ${sectionVisible ? "is-visible" : ""}`} />
        </div>

        {/* FAQ Accordion */}
        <div
          className="space-y-3"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div className="border border-background-700/50 rounded-xl overflow-hidden bg-background-800/50 transition-all duration-300 hover:border-background-600">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500/10 shrink-0">
                      <span className="text-xs font-bold text-primary-400">Q</span>
                    </div>
                    <span
                      className="text-sm md:text-base font-medium"
                      style={{ color: "oklch(var(--foreground-100))" }}
                      itemProp="name"
                    >
                      {item.question}
                    </span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-background-700/50 shrink-0 transition-transform duration-300">
                    <i
                      className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      style={{ color: "oklch(var(--primary-400))" }}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-16">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-500/10 shrink-0">
                        <span className="text-xs font-bold text-accent-400">A</span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(var(--foreground-400))" }}
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <span itemProp="text">{item.answer}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-10 md:mt-12 animate-fade-in-up ${sectionVisible ? "is-visible" : ""}`} style={{ transitionDelay: "0.9s" }}>
          <p className="text-sm mb-4" style={{ color: "oklch(var(--foreground-400))" }}>
            その他のご質問は、お電話またはお問い合わせフォームからお気軽にどうぞ
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:075-123-4567" className="btn-outline gap-2">
              <i className="ri-phone-line text-sm" />
              075-123-4567
            </a>
            <a href="#reservation" className="btn-primary gap-2" onClick={(e) => { e.preventDefault(); document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" }); }}>
              ご予約はこちら
              <i className="ri-arrow-right-line text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}