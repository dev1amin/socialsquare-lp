import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { question: "Preciso ter experiência com conteúdo?", answer: "Não. Se você consegue notar algo interessante no seu dia a dia, o sistema faz o resto." },
  { question: "O conteúdo vai parecer gerado por IA?", answer: "Não. O SocialSquare aprende o seu tom e estilo. O resultado parece seu — porque é baseado nas suas ideias." },
  { question: "Funciona para qualquer nicho?", answer: "Sim. Coach, nutricionista, advogado, fotógrafo — o sistema se adapta ao seu mercado e audiência." },
  { question: "Quais plataformas são suportadas?", answer: "Instagram, LinkedIn, TikTok e Twitter/X. Posts de texto, carrosséis e legendas para vídeos." },
  { question: "Quanto tempo preciso dedicar por semana?", answer: "Entre 20 e 40 minutos. Alguns fazem tudo em uma sessão de domingo à noite." },
  { question: "Posso cancelar quando quiser?", answer: "Sim. Sem fidelidade, sem taxas. Cancele com um clique." },
  { question: "Tem período de teste?", answer: "Sim. 7 dias grátis, sem cartão de crédito." },
  { question: "Como funciona o Canvas?", answer: "É o ambiente central onde você joga referências e o sistema converte em conteúdo estruturado. Simples e intuitivo." },
];

const SSFAQSection = () => {
  return (
    <section id="faq" className="brand-gradient-bg py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-chip">FAQ</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            Perguntas <span className="font-serif-display italic text-primary">frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="surface-card overflow-hidden rounded-[1.5rem] border-0 px-5"
            >
              <AccordionTrigger className="py-5 text-left text-[15px] font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SSFAQSection;
