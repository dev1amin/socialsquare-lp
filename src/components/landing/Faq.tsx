import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "./primitives";

const faqs = [
  {
    question: "Preciso saber escrever ou desenhar?",
    answer:
      "Não. Você escolhe a fonte e o template; o texto sai escrito no seu tom e a arte já vem montada. Se quiser mexer, o editor está lá — mas nada obriga você a abrir.",
  },
  {
    question: "O texto vai parecer feito por IA?",
    answer:
      "No primeiro acesso o sistema lê o seu perfil, o seu nicho e as suas legendas antigas. É esse retrato que guia cada carrossel — por isso o resultado soa como você, e não como um modelo genérico.",
  },
  {
    question: "Serve para qual rede?",
    answer:
      "O SocialSquare é feito para o carrossel do Instagram e exporta em 1080×1350 e 1170×1560. Como são imagens, os mesmos arquivos funcionam em qualquer lugar que aceite o formato vertical 4:5.",
  },
  {
    question: "Quantos slides saem por carrossel?",
    answer:
      "Você define antes de gerar, até dez. Também escolhe o tamanho da descrição em cada slide e qual chamada entra no último — comentar, salvar, seguir ou ir para o link.",
  },
  {
    question: "Dá para juntar mais de uma fonte no mesmo carrossel?",
    answer:
      "Sim. Você pode combinar até dois posts do Instagram e até cinco links num carrossel só. O sistema costura tudo numa narrativa única em vez de colar os textos um atrás do outro.",
  },
  {
    question: "E se eu não gostar de um slide?",
    answer:
      "Abra o editor e troque o que precisar: título, texto de apoio, imagem de fundo e enquadramento. A mudança aparece na hora e o download sai já corrigido.",
  },
  {
    question: "Tem teste grátis?",
    answer:
      "Sete dias, sem cartão de crédito. Dá tempo de gerar a sua primeira semana inteira antes de decidir qualquer coisa.",
  },
  {
    question: "Como cancelo?",
    answer:
      "Em um clique, dentro das configurações da conta. Sem fidelidade e sem taxa de saída.",
  },
];

const Faq = () => {
  return (
    <Section id="perguntas" className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow tone="sun">Perguntas</Eyebrow>
            <h2 className="h2 mt-6">O que perguntam antes.</h2>
            <p className="lead">
              Se a sua dúvida não estiver aqui, ela provavelmente se resolve nos
              sete dias de teste.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-line"
              >
                <AccordionTrigger className="py-6 text-left text-[17px] font-bold leading-snug tracking-[-0.02em] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-6 text-[15px] leading-relaxed text-ink-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
