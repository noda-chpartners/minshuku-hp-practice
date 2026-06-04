import { useEffect, useState } from "react";

interface FloatingReservationProps {
  onBackToHero?: () => void;
}

export default function FloatingReservation({
  onBackToHero,
}: FloatingReservationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    onBackToHero?.();
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-lg btn-primary"
        aria-label="ご予約へ"
      >

        <span className="text-sm font-medium">⇧TOPへ戻る</span>
      </button>
    </div>
  );
}