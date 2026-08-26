import { Globe, Instagram, MessageSquare, Newspaper } from "lucide-react";
import { Container, Reveal, Section, SectionHead } from "./primitives";

const sources = [
  {
    icon: Instagram,
    title: "Um post do feed",
    text: "Os perfis que você acompanha, com as métricas de cada post do lado.",
    tint: "bg-blue/10 text-blue",
  },
  {
    icon: Newspaper,
    title: "Uma notícia do dia",
    text: "O que saiu hoje no seu nicho, já filtrado e datado para você.",
    tint: "bg-violet/12 text-violet",
  },
  {
    icon: Globe,
    title: "Um link qualquer",
    text: "Artigo, página de produto, post de blog. Cole a URL e pronto.",
    tint: "bg-sun/25 text-[#8A5D00]",
  },
  {
    icon: MessageSquare,
    title: "Uma ideia no chat",
    text: "Escreva o que você quer dizer e mande gerar. Sem prompt mágico.",
    tint: "bg-blue/10 text-blue",
  },
];

const Sources = () => {
  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <SectionHead
          eyebrow="De onde vem"
          title={
            <>
              Quatro portas de entrada.{" "}
              <span className="text-gradient">Uma saída só.</span>
            </>
          }
          lead="Você nunca começa de uma página em branco — começa de alguma coisa que já existe e já te interessou."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {sources.map((source, index) => {
            const Icon = source.icon;

            return (
              <Reveal key={source.title} delay={index * 0.06}>
                {/* card r=24, padding 24 → nada aninhado além do ícone r=16 */}
                <article className="card h-full p-6">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-md ${source.tint}`}
                  >
                    <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                  </span>
                  <h3 className="h3 mt-6">{source.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
                    {source.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Sources;
