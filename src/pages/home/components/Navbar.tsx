import { useState, useEffect } from "react";

const navLinks = [
  { href: "#kodawari", label: "こだわり" },
  { href: "#cuisine", label: "お料理" },
  { href: "#rooms", label: "お部屋" },
  { href: "#amenities", label: "設備" },
  { href: "#faq", label: "よくある質問" },
  { href: "#access", label: "アクセス" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background-950/95 backdrop-blur-md "
        : "bg-transparent"
        }`}
    >
      <nav className="w-full px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="font-heading text-lg md:text-xl tracking-wider"
            style={{ color: "oklch(var(--foreground-100))" }}
          >
            <span className="text-primary-400">静</span>寂の宿
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm tracking-wider transition-colors hover:text-primary-400 link-hover-underline"
                style={{ color: "oklch(var(--foreground-300))" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, "#reservation")}
              className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
            >
              <i className="ri-calendar-check-line text-sm" aria-hidden="true" />
              <span>ご予約</span>
            </a>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-xl`} style={{ color: "oklch(var(--foreground-100))" }} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background-950/98 backdrop-blur-md border-t border-background-800/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm tracking-wider py-2 w-fit transition-colors hover:text-primary-400 link-hover-underline"
                style={{ color: "oklch(var(--foreground-300))" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => handleNavClick(e, "#reservation")}
              className="btn-primary text-xs px-5 py-2.5 flex items-center gap-2"
            >
              <i className="ri-calendar-check-line text-sm" />
              ご予約
            </a>
          </div>
        </div>
      )}
    </header>
  );
}