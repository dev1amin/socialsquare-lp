import { Check, Sparkles } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { DECK, EDITOR_VIDEO, SIGNUP_URL } from "./content";
import { Button, Container, Eyebrow } from "./primitives";

const guarantees = ["7 dias grátis", "Sem cartão", "Cancela num clique"];

/**
 * O herói mostra o produto rodando: a gravação real do editor, dentro de
 * uma janela, com dois slides prontos encostados nas bordas. Quem chega
 * vê a ferramenta e o resultado na mesma tela.
 */
const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative overflow-hidden pb-16 pt-[calc(var(--nav-h)+96px)] md:pb-24"
    >
      {/* Luz de fundo: cor da marca, difusa, sem virar ilustração. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px]">
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--blue)/0.20),transparent)]" />
        <div className="absolute right-[-180px] top-[80px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--violet)/0.18),transparent)]" />
        <div className="absolute left-[-180px] top-[200px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,hsl(var(--sun)/0.20),transparent)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5" />
            Para quem precisa postar toda semana
          </Eyebrow>

          <h1 className="h1 mt-6">
            Você escolhe.
            <br />O carrossel <span className="sticker">sai pronto</span>.
          </h1>

          <p className="lead mx-auto text-center">
            Pegue um post do seu feed, uma notícia do dia ou cole um link. O
            SocialSquare devolve capa, dez slides e legenda escritos no seu tom
            — prontos para publicar.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={SIGNUP_URL} className="w-full sm:w-auto">
              Começar grátis
            </Button>
            <Button href="#app" variant="secondary" className="w-full sm:w-auto">
              Ver o app por dentro
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
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

        {/* A janela do produto. */}
        <div className="relative mx-auto mt-14 max-w-[70rem] md:mt-20">
          {/* Slides prontos encostados na janela, só onde há espaço. */}
          <div className="pointer-events-none absolute -left-16 top-16 z-20 hidden w-[8.5rem] -rotate-[7deg] xl:block">
            <div className="frame frame-45">
              <img
                src={DECK[0]}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 bottom-12 z-20 hidden w-[8.5rem] rotate-[7deg] xl:block">
            <div className="frame frame-45">
              <img
                src={DECK[2]}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Moldura: raio externo 32, padding 8 → raio interno 24. */}
          <figure className="relative overflow-hidden rounded-xl border border-line bg-white p-2 shadow-float">
            <div className="overflow-hidden rounded-lg bg-[#F4F5F8]">
              <div className="flex items-center gap-2 border-b border-line bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
                <span className="ml-3 truncate rounded-full bg-paper px-3 py-1 text-[12px] text-ink-3">
                  socialsquare.com.br/editor
                </span>
              </div>

              {/* No celular a janela inteira ficaria ilegível: aproxima
                  na prancheta e volta ao enquadramento cheio a partir de md. */}
              <div className="overflow-hidden">
              {reduceMotion ? (
                <img
                  src={EDITOR_VIDEO.poster}
                  alt="Editor do SocialSquare com um carrossel aberto"
                  className="w-[250%] max-w-none -translate-x-[24%] md:w-full md:translate-x-0"
                />
              ) : (
                <video
                  className="w-[250%] max-w-none -translate-x-[24%] md:w-full md:translate-x-0"
                  poster={EDITOR_VIDEO.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Gravação do editor do SocialSquare montando um carrossel"
                >
                  <source src={EDITOR_VIDEO.webm} type="video/webm" />
                  <source src={EDITOR_VIDEO.mp4} type="video/mp4" />
                </video>
              )}
              </div>
            </div>
          </figure>

          <figcaption className="mt-4 text-center text-[14px] text-ink-3">
            O editor de verdade, gravado durante o uso.
          </figcaption>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
