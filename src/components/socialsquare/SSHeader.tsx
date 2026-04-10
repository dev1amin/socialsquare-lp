import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    { label: "Produto", href: "#produto" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-strong">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">SocialSquare</a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={scrollToCTA}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Começar agora
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { scrollToCTA(); setMobileOpen(false); }}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity mt-2"
              >
                Começar agora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SSHeader;
