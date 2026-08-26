import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoSrc from "@/assets/socialsquare-logo.png";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "./content";
import { Button, Container } from "./primitives";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu aberto trava o corpo: nada rola atrás da folha.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        lifted || open
          ? "border-b border-line bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="SocialSquare">
          <img src={logoSrc} alt="" className="h-8 w-8" />
          <span className="text-[17px] font-bold tracking-[-0.03em]">
            SocialSquare
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-ink-2 transition-colors hover:bg-cloud hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LOGIN_URL}
            className="hidden px-3 text-[15px] font-semibold text-ink-2 transition-colors hover:text-ink sm:block"
          >
            Entrar
          </a>
          <a
            href={SIGNUP_URL}
            className="hidden h-11 flex-none items-center justify-center whitespace-nowrap rounded-full bg-blue px-5 text-[14px] font-semibold text-white shadow-blue transition-colors hover:bg-blue-deep sm:inline-flex"
          >
            Começar grátis
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-paper lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3.5 text-[17px] font-semibold text-ink"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 flex flex-col gap-2.5">
                <Button href={SIGNUP_URL} className="w-full">
                  Começar grátis
                </Button>
                <Button href={LOGIN_URL} variant="secondary" className="w-full">
                  Entrar
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
