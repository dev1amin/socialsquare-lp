import { Download, Instagram } from "lucide-react";
import { DECK, TEMPLATES } from "./content";
import { Container, Reveal, Section, SectionHead } from "./primitives";

/** Miniatura do perfil que o sistema lê no primeiro acesso. */
function ProfileArt() {
  return (
    <div className="w-full max-w-[17rem] rounded-md bg-white p-4 shadow-float">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-white">
          <Instagram className="h-[18px] w-[18px]" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold">@nutri.camila</p>
          <p className="text-[12px] text-ink-3">1.482 posts lidos</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {["nutrição", "tom direto", "educar"].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-cloud px-2.5 py-1 text-[12px] font-medium text-ink-2"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Três templates reais, em leque. */
function TemplateArt() {
  return (
    <div className="flex items-center justify-center">
      {TEMPLATES.slice(0, 3).map((template, index) => (
        <div
          key={template.code}
          className={`frame frame-45 w-[6.25rem] sm:w-[6.75rem] ${
            index === 0
              ? "-rotate-6"
              : index === 1
                ? "z-10 -mx-3 shadow-float"
                : "rotate-6"
          }`}
        >
          <img
            src={template.image}
            alt={template.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/** O carrossel pronto, com o botão que a pessoa realmente aperta. */
function DownloadArt() {
  return (
    <div className="flex w-full max-w-[17rem] flex-col items-center">
      <div className="flex gap-2.5">
        {DECK.slice(0, 3).map((slide) => (
          <div key={slide} className="frame frame-45 w-[5.5rem]">
            <img src={slide} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <span className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-semibold text-white">
        <Download className="h-4 w-4" />
        Baixar 10 slides
      </span>
    </div>
  );
}

const steps = [
  {
    n: "01",
    title: "Conecte seu Instagram",
    text: "O sistema lê seu perfil, seu nicho e o jeito que você escreve. É por isso que o texto sai com a sua cara, e não com a de todo mundo.",
    art: <ProfileArt />,
  },
  {
    n: "02",
    title: "Escolha a fonte e o template",
    text: "Um post, uma notícia, um link ou uma ideia digitada. Você define quantos slides quer e qual chamada entra no fim.",
    art: <TemplateArt />,
  },
  {
    n: "03",
    title: "Baixe e publique",
    text: "Os slides saem em 1080×1350, prontos para o feed. Se algo precisar mudar, o editor abre slide por slide.",
    art: <DownloadArt />,
  },
];

const HowItWorks = () => {
  return (
    <Section id="como-funciona" className="bg-white">
      <Container>
        <SectionHead
          eyebrow="Como funciona"
          tone="violet"
          title={
            <>
              Três passos — e o primeiro{" "}
              <span className="text-gradient">só acontece uma vez.</span>
            </>
          }
          lead="Do segundo carrossel em diante, a rotina inteira mora entre escolher a fonte e apertar baixar."
        />

        <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper">
                <div className="flex h-[13.5rem] items-center justify-center px-6 sm:h-[15rem]">
                  {step.art}
                </div>

                <div className="flex flex-1 flex-col border-t border-line bg-white p-6 md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="display flex h-9 w-9 items-center justify-center rounded-full bg-blue text-[15px] tracking-normal text-white">
                      {step.n}
                    </span>
                    <h3 className="h3">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                    {step.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
