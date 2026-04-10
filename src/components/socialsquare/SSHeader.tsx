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
    { label: "Comparativo", href: "#comparativo" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Origem", href: "#origem" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-4xl mt-3 px-4">
        <div className="glass-strong rounded-2xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4167B2] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                <path d="M8 1L14.9282 5V11L8 15L1.07179 11V5L8 1Z" fill="currentColor" fillOpacity="0.9"/>
                <path d="M8 4L11.4641 6V10L8 12L4.5359 10V6L8 4Z" fill="white" fillOpacity="0.3"/>
              </svg>
            </div>
            <span className="text-base font-bold text-foreground">SocialSquare</span>
          </a>

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

          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToCTA}
              className="px-5 py-2 rounded-xl bg-[#4167B2] text-[#f8faff] text-sm font-semibold hover:bg-[#3558A0] transition-colors"
            >
              Assinar agora
            </button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-4xl px-4 mt-2"
          >
            <div className="glass-strong rounded-2xl p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-secondary/30"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { scrollToCTA(); setMobileOpen(false); }}
                className="px-5 py-2.5 rounded-xl bg-[#4167B2] text-[#f8faff] text-sm font-semibold hover:bg-[#3558A0] transition-colors mt-1"
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
