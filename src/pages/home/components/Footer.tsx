export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="w-full px-4 md:px-6 py-8 md:py-10" style={{ backgroundColor: "oklch(var(--background-950))" }}>
      {/* Decorative divider */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-primary-400/30" />
          <div className="w-2 h-2 rotate-45 border border-primary-400/30" />
          <div className="w-12 h-px bg-primary-400/30" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        {/* Brand */}
        <a href="#" className="font-heading text-xl tracking-wider mb-3 inline-block">
          <span style={{ color: "oklch(var(--primary-400))" }}>静</span>
          <span style={{ color: "oklch(var(--foreground-100))" }}>寂の宿</span>
        </a>
        <p className="text-xs leading-relaxed mb-4" style={{ color: "oklch(var(--foreground-500))" }}>
          〒605-0001 京都府京都市東山区北御門町
        </p>
        <p className="text-xs leading-relaxed mb-6" style={{ color: "oklch(var(--foreground-500))" }}>
          TEL: 075-123-4567
        </p>

        {/* Simple nav links */}
        <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
          <a href="#kodawari" onClick={(e) => handleClick(e, "#kodawari")} className="text-xs tracking-wider transition-colors hover:text-primary-400 link-hover-underline" style={{ color: "oklch(var(--foreground-400))" }}>
            こだわり
          </a>
          <a href="#cuisine" onClick={(e) => handleClick(e, "#cuisine")} className="text-xs tracking-wider transition-colors hover:text-primary-400 link-hover-underline" style={{ color: "oklch(var(--foreground-400))" }}>
            お料理
          </a>
          <a href="#rooms" onClick={(e) => handleClick(e, "#rooms")} className="text-xs tracking-wider transition-colors hover:text-primary-400 link-hover-underline" style={{ color: "oklch(var(--foreground-400))" }}>
            お部屋
          </a>
          <a href="#faq" onClick={(e) => handleClick(e, "#faq")} className="text-xs tracking-wider transition-colors hover:text-primary-400 link-hover-underline" style={{ color: "oklch(var(--foreground-400))" }}>
            よくある質問
          </a>
          <a href="#reservation" onClick={(e) => handleClick(e, "#reservation")} className="text-xs tracking-wider transition-colors hover:text-primary-400 link-hover-underline" style={{ color: "oklch(var(--foreground-400))" }}>
            ご予約
          </a>
        </div>

        {/* Copyright - centered */}
        <div className="pt-6 border-t" style={{ borderColor: "oklch(var(--background-800))" }}>
          <p className="text-xs" style={{ color: "oklch(var(--foreground-600))" }}>
            &copy; 2024 静寂の宿. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}