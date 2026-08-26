import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { DECK, SIGNUP_URL } from "./content";
import { Button, Container, Eyebrow } from "./primitives";

const guarantees = ["7 dias grátis", "Sem cartão", "Cancela num clique"];

/**
 * O herói é o gesto do produto: um carrossel de verdade que se arrasta
 * com o polegar. Trilho nativo com scroll-snap — no celular isso dá
 * inércia e “tato” que nenhum drag em JavaScript reproduz.
 */
const Hero = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const middle = rail.scrollLeft + rail.clientWidth / 2;
    const cards = Array.from(rail.children) as HTMLElement[];

    let closest = 0;
    let smallest = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const center = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - middle);
      if (distance < smallest) {
        smallest = distance;
        closest = index;
      }
    });

    setActive(closest);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    syncActive();
    rail.addEventListener("scroll", syncActive, { passive: true });
    return () => rail.removeEventListener("scroll", syncActive);
  }, [syncActive]);

  const goTo = (index: number) => {
    const rail = railRef.current;
    const card = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !card) return;

    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-10 pt-[calc(var(--nav-h)+96px)] md:pb-14"
    >
      {/* Luz de fundo: cor da marca, difusa, sem virar ilustração. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px]">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--blue)/0.18),transparent)]" />
        <div className="absolute right-[-160px] top-[60px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--violet)/0.16),transparent)]" />
        <div className="absolute left-[-140px] top-[220px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--sun)/0.18),transparent)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-20">
          <div className="min-w-0">
            <Eyebrow>
              <Sparkles className="h-3.5 w-3.5" />
              Para quem precisa postar toda semana
            </Eyebrow>

            <h1 className="h1 mt-6 max-w-[13ch]">
              Você escolhe.
              <br />O carrossel <span className="sticker">sai pronto</span>.
            </h1>

            <p className="lead">
              Pegue um post do seu feed, uma notícia do dia ou cole um link. O
              SocialSquare devolve capa, dez slides e legenda escritos no seu
              tom — prontos para publicar.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={SIGNUP_URL} className="w-full sm:w-auto">
                Começar grátis
              </Button>
              <Button href="#templates" variant="secondary" className="w-full sm:w-auto">
                Ver os templates
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {guarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[14px] font-medium text-ink-2"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue/12 text-blue">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* O deck arrastável. */}
          <div className="relative min-w-0 -mx-[var(--gutter)] lg:mx-0">
            <div
              ref={railRef}
              className="rail gap-4 px-[var(--gutter)] py-4 lg:px-2"
              aria-label="Slides gerados pelo SocialSquare"
            >
              {DECK.map((slide, index) => (
                <figure
                  key={slide}
                  className={`frame frame-45 w-[66vw] max-w-[17.5rem] transition-all duration-300 sm:w-[16rem] lg:w-[17.5rem] ${
                    index === active
                      ? "scale-100 opacity-100"
                      : "scale-[0.94] opacity-70"
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Slide ${index + 1} de um carrossel gerado no SocialSquare`}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>

            {/* Selo colado por cima, como um adesivo de story. */}
            <div className="pointer-events-none absolute -top-1 left-[var(--gutter)] hidden rotate-[-4deg] items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-float sm:flex lg:left-0">
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="text-[13px] font-semibold">
                gerado no SocialSquare
              </span>
            </div>

            <div className="mt-4 flex items-center gap-4 px-[var(--gutter)] lg:px-2">
              <div className="flex gap-1.5">
                {DECK.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Ver slide ${index + 1}`}
                    className="h-6 py-2.5"
                  >
                    <span
                      className={`block h-1 rounded-full transition-all duration-300 ${
                        index === active ? "w-6 bg-blue" : "w-1.5 bg-ink/15"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="display text-[14px] tracking-normal text-ink-3">
                {active + 1} de {DECK.length}
              </p>
              <p className="ml-auto text-[13px] text-ink-3 lg:hidden">
                arraste →
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
