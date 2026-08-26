import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Container, Eyebrow, Section } from "./primitives";

type Voice = {
  text: string;
  name: string;
  role: string;
  image: string;
};

const voices: Voice[] = [
  {
    text: "Eu gastava três horas por semana só pensando no que postar. Agora fecho a semana inteira em vinte minutos.",
    name: "Ana Luiza Marchetti",
    role: "Nutricionista",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Finalmente um produto que entendeu que o problema não é falta de ideia. É transformar ideia em post.",
    name: "Rafael Toscano",
    role: "Coach de vendas",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Antes eu procrastinava todo domingo à noite. Hoje acordo com o conteúdo pronto na galeria.",
    name: "Camila Ferrari",
    role: "Personal trainer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Nunca consegui manter consistência. O SocialSquare tirou o peso da criação e agora eu posto todo dia.",
    name: "Lucas Bittencourt",
    role: "Fotógrafo",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Meu engajamento dobrou nas duas primeiras semanas. Não porque ficou mais criativo — porque ficou constante.",
    name: "Mariana Cerqueira",
    role: "Terapeuta",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    text: "Eu desconfiava de ferramenta de IA. Mas isso aqui não é só IA, é um sistema. E sistema funciona.",
    name: "João Pedro Andrade",
    role: "Consultor financeiro",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "Faz sessenta dias que não fico sem postar. Isso não tinha acontecido nos três anos anteriores.",
    name: "Fernanda Rocha",
    role: "Advogada",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: "Mostrei para uma amiga que estuda comunicação e ela ficou com raiva de não ter criado antes.",
    name: "Bianca Assunção",
    role: "Arquiteta",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    text: "A parte de carrossel mudou o meu mês. Eu sempre quis fazer, mas nunca tive tempo de estruturar.",
    name: "Matheus Guimarães",
    role: "Professor de inglês",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

function Card({ voice }: { voice: Voice }) {
  return (
    <figure className="card w-full max-w-[20rem] p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-sun text-sun" />
        ))}
      </div>

      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-2">
        {voice.text}
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <img
          src={voice.image}
          alt=""
          loading="lazy"
          className="h-9 w-9 flex-none rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-[14px] font-bold">{voice.name}</p>
          <p className="truncate text-[13px] text-ink-3">{voice.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/**
 * Coluna que anda sozinha dentro do contêiner: a lista é duplicada e
 * desliza até -50%, então o corte nunca aparece. Sem movimento quando a
 * pessoa pede menos animação.
 */
function Column({
  items,
  duration,
  className,
}: {
  items: Voice[];
  duration: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const content = (
    <>
      {[0, 1].map((copy) => (
        <React.Fragment key={copy}>
          {items.map((voice) => (
            <Card key={`${copy}-${voice.name}`} voice={voice} />
          ))}
        </React.Fragment>
      ))}
    </>
  );

  if (reduceMotion) {
    return (
      <div className={className}>
        <div className="flex flex-col items-center gap-5">
          {items.map((voice) => (
            <Card key={voice.name} voice={voice} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col items-center gap-5 pb-5"
      >
        {content}
      </motion.div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="mx-auto">Quem usa</Eyebrow>
          <h2 className="h2 mx-auto mt-6 max-w-[16ch]">
            Ninguém elogia a ferramenta.{" "}
            <span className="text-gradient">Elogiam o que ela devolveu.</span>
          </h2>
        </div>

        <div className="mt-14 flex max-h-[38rem] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <Column items={voices.slice(0, 3)} duration={26} />
          <Column
            items={voices.slice(3, 6)}
            duration={34}
            className="hidden md:block"
          />
          <Column
            items={voices.slice(6, 9)}
            duration={30}
            className="hidden lg:block"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
