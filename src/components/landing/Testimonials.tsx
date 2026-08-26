import { Container, Eyebrow, Reveal, Section } from "./primitives";

type Voice = {
  text: string;
  name: string;
  role: string;
  tint: string;
};

const voices: Voice[] = [
  {
    text: "Eu gastava três horas por semana só pensando no que postar. Agora fecho a semana inteira em vinte minutos.",
    name: "Ana Luiza Marchetti",
    role: "Nutricionista",
    tint: "from-blue to-violet",
  },
  {
    text: "Finalmente um produto que entendeu que o problema não é falta de ideia. É transformar ideia em post.",
    name: "Rafael Toscano",
    role: "Coach de vendas",
    tint: "from-violet to-blue",
  },
  {
    text: "Antes eu procrastinava todo domingo à noite. Hoje acordo com o conteúdo pronto na galeria.",
    name: "Camila Ferrari",
    role: "Personal trainer",
    tint: "from-sun to-blue",
  },
  {
    text: "Meu engajamento dobrou nas duas primeiras semanas. Não porque ficou mais criativo — porque ficou constante.",
    name: "Mariana Cerqueira",
    role: "Terapeuta",
    tint: "from-blue to-sun",
  },
  {
    text: "Eu desconfiava de ferramenta de IA. Mas isso aqui não é só IA, é um sistema. E sistema funciona.",
    name: "João Pedro Andrade",
    role: "Consultor financeiro",
    tint: "from-violet to-sun",
  },
  {
    text: "Faz sessenta dias que não fico sem postar. Isso não tinha acontecido nos três anos anteriores.",
    name: "Fernanda Rocha",
    role: "Advogada",
    tint: "from-blue to-violet",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

function Card({ voice }: { voice: Voice }) {
  return (
    <figure className="card flex h-full flex-col p-6 md:p-7">
      <blockquote className="text-[16px] leading-relaxed text-ink">
        “{voice.text}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gradient-to-br ${voice.tint} text-[13px] font-bold text-white`}
        >
          {initials(voice.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold">{voice.name}</p>
          <p className="truncate text-[13px] text-ink-3">{voice.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

const Testimonials = () => {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Quem usa</Eyebrow>
          <h2 className="h2 mt-6 max-w-[16ch]">
            Ninguém elogia a ferramenta.{" "}
            <span className="text-gradient">Elogiam o que ela devolveu.</span>
          </h2>
        </div>
      </Container>

      {/* Celular: trilho de arrastar. Telas grandes: grade calma. */}
      <div className="rail rail-start rail-gutter mt-12 gap-4 pb-2 md:hidden">
        {voices.map((voice) => (
          <div key={voice.name} className="w-[80vw] max-w-[21rem]">
            <Card voice={voice} />
          </div>
        ))}
      </div>

      <Container className="hidden md:block">
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {voices.map((voice, index) => (
            <Reveal key={voice.name} delay={(index % 3) * 0.07}>
              <Card voice={voice} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
