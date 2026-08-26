import { Check } from "lucide-react";
import { DECK, SIGNUP_URL } from "./content";
import { Button, Container, Section } from "./primitives";

const guarantees = ["7 dias grátis", "Sem cartão", "Cancela num clique"];

const FinalCta = () => {
  return (
    <Section id="assinar" className="pb-20 md:pb-28">
      <Container>
        {/* O único bloco alto-contraste da página: o convite. */}
        <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,hsl(var(--blue)),hsl(var(--violet)))] px-6 py-14 md:px-14 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-[22rem] w-[22rem] rounded-full bg-white/[0.07]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
            <div>
              <h2 className="h2 max-w-[15ch] text-white">
                Seu próximo carrossel já podia estar{" "}
                <span className="sticker text-ink">pronto</span>.
              </h2>

              <p className="lead text-white/85">
                Comece pelo teste de sete dias, gere a semana inteira e decida
                depois. Não pedimos cartão para isso.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={SIGNUP_URL} variant="light" className="w-full sm:w-auto">
                  Começar grátis
                </Button>
                <Button
                  href="#como-funciona"
                  className="w-full border border-white/35 bg-white/10 text-white shadow-none hover:bg-white/20 sm:w-auto"
                >
                  Ver como funciona
                </Button>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {guarantees.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[14px] font-medium text-white/85"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Três slides reais, em leque, fechando a página. */}
            <div className="hidden justify-center gap-3 lg:flex">
              {DECK.slice(0, 3).map((slide, index) => (
                <div
                  key={slide}
                  className={`frame frame-45 w-[8.5rem] ${
                    index === 1 ? "-translate-y-5" : "translate-y-2"
                  }`}
                >
                  <img
                    src={slide}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCta;
