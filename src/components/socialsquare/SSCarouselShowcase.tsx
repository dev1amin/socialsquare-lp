import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import slide01 from "@/assets/slide_01.png";
import slide02 from "@/assets/slide_02.png";
import slide03 from "@/assets/slide_03.png";
import slide04 from "@/assets/slide_04.png";

const slides = [
  { image: slide01, title: "Polarização política" },
  { image: slide02, title: "Critérios de representação" },
  { image: slide03, title: "Figuras que ganham força" },
  { image: slide04, title: "Padrão eleitoral previsível" },
];

const benefits = [
  "Conteúdo gerado slide a slide",
  "Formatado para Instagram, LinkedIn e TikTok",
  "Tom e estilo personalizados",
  "Pronto para publicar em minutos",
];

const SSCarouselShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollSlides = (direction: -1 | 1) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth * 0.86 * direction,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-chip">Formatos</span>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
              Carrosséis prontos
              <br />
              para <span className="font-serif-display italic text-primary">engajar</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Você escolhe a referência, o SocialSquare estrutura slides organizados com texto pronto para cada plataforma.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white/70 px-4 py-3 text-sm font-medium text-foreground/75"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-[2rem] p-4 sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Biblioteca visual</p>
                <p className="mt-1 text-sm text-muted-foreground">Deslize para ver os exemplos.</p>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollSlides(-1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                  aria-label="Ver slides anteriores"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlides(1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                  aria-label="Ver próximos slides"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 [scrollbar-gutter:stable] [touch-action:pan-x] overscroll-x-contain"
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.title}
                  className="surface-card group min-w-[80vw] max-w-[20rem] snap-center overflow-hidden rounded-[1.75rem] sm:min-w-[18.5rem]"
                >
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="aspect-[0.92/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      draggable={false}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold leading-tight text-white">{slide.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
              <p className="text-xs text-muted-foreground">Arraste para o lado</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollSlides(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-foreground"
                  aria-label="Ver slides anteriores"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlides(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80 text-foreground"
                  aria-label="Ver próximos slides"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SSCarouselShowcase;
