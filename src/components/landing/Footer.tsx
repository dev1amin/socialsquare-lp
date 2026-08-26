import logoSrc from "@/assets/socialsquare-logo.png";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "./content";
import { Container } from "./primitives";

const Footer = () => {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <img src={logoSrc} alt="" className="h-8 w-8" />
              <span className="text-[17px] font-bold tracking-[-0.03em]">
                SocialSquare
              </span>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
              Um sistema de carrosséis para quem precisa publicar toda semana e
              não quer começar do zero toda vez.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-3">
              <p className="text-[13px] font-bold uppercase tracking-wide text-ink-3">
                Navegar
              </p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-ink-2 transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <p className="text-[13px] font-bold uppercase tracking-wide text-ink-3">
                Conta
              </p>
              <a
                href={SIGNUP_URL}
                className="text-[15px] text-ink-2 transition-colors hover:text-ink"
              >
                Começar grátis
              </a>
              <a
                href={LOGIN_URL}
                className="text-[15px] text-ink-2 transition-colors hover:text-ink"
              >
                Entrar
              </a>
              <a
                href="mailto:contato@socialsquare.com.br"
                className="text-[15px] text-ink-2 transition-colors hover:text-ink"
              >
                Falar com a gente
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-3">
            © {new Date().getFullYear()} SocialSquare
          </p>
          <p className="text-[13px] text-ink-3">
            Todos os slides desta página foram gerados pelo produto.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
