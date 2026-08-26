import { useRef } from "react";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import { TEMPLATES } from "./content";
import { Container, Eyebrow, Reveal, Section } from "./primitives";

const Templates = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const nudge = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({ left: 340 * direction, behavior: "smooth" });
  };

  return (
    <Section id="templates" className="overflow-hidden">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow tone="sun">Templates</Eyebrow>
            <h2 className="h2 mt-6 max-w-[15ch]">
              Oito estilos.{" "}
              <span className="text-gradient">Nenhum com cara de IA.</span>
            </h2>
            <p className="lead">
              Manchete, editorial, thread, foto no comando. Você escolhe antes
              de gerar e troca quando quiser — o texto se adapta ao formato.
            </p>
          </div>

          <div className="hidden flex-none gap-2 lg:flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Ver templates anteriores"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink-3/50"
            >
              <ArrowLeft className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="Ver próximos templates"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink-3/50"
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </Container>

      {/* Prateleira: começa alinhada ao texto e sangra até a borda. */}
      <div
        ref={railRef}
        className="rail rail-start rail-gutter mt-12 gap-4 pb-2 md:mt-16"
      >
        {TEMPLATES.map((template, index) => (
          <Reveal
            key={template.code}
            delay={Math.min(index, 4) * 0.05}
            className="w-[68vw] max-w-[19rem] sm:w-[17rem] lg:w-[19rem]"
          >
            <article className="group">
              <div className="frame frame-45 transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={template.image}
                  alt={`Template ${template.code}: ${template.name}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[16px] font-bold tracking-[-0.02em]">
                    {template.name}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-ink-3">
                    {template.bestFor}
                  </p>
                </div>
                <span className="mt-0.5 rounded-full bg-cloud px-2.5 py-1 text-[12px] font-semibold text-ink-2">
                  {template.code}
                </span>
              </div>
            </article>
          </Reveal>
        ))}

        <div className="flex w-[68vw] max-w-[19rem] items-stretch sm:w-[17rem] lg:w-[19rem]">
          <div className="flex w-full flex-col justify-end rounded-md border border-dashed border-ink-3/35 bg-white/60 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-violet/12 text-violet">
              <Palette className="h-[22px] w-[22px]" />
            </span>
            <h3 className="h3 mt-5">E o oitavo abre no app</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
              Templates novos entram sozinhos. Você não precisa atualizar nada.
            </p>
          </div>
        </div>
      </div>

      <Container>
        <p className="mt-8 text-[14px] text-ink-3">
          Todas as artes acima saíram do próprio SocialSquare, sem retoque.
        </p>
      </Container>
    </Section>
  );
};

export default Templates;
