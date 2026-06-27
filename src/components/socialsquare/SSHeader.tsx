import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSrc from "@/assets/socialsquare-logo.png";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;
  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const SSHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      smoothScrollTo(offset);
    }
    setMobileOpen(false);
  }, []);

  const scrollToCTA = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById("assinar");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      smoothScrollTo(offset);
    }
  };

  const navLinks = [
    { label: "Comparativo", href: "#comparativo" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Origem", href: "#origem" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto mt-5 max-w-6xl px-4">
        <div className="glass-panel rounded-[1.75rem] border border-white/70 px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={logoSrc} alt="SocialSquare" className="w-8 h-8" />
            <span className="text-[16px] font-semibold text-foreground tracking-tight">SocialSquare</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-white/60 px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToCTA}
              className="rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Assinar agora
            </button>
          </div>

          <button
            className="md:hidden rounded-full border border-border/70 bg-white/70 p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mx-auto mt-3 max-w-6xl px-4"
          >
            <div className="glass-panel flex flex-col gap-1 rounded-[1.5rem] p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-2xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { scrollToCTA(); setMobileOpen(false); }}
                className="mt-1 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Assinar agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SSHeader;
