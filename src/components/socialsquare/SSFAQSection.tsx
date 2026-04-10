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
    <section id="faq" className="py-28 brand-gradient-bg">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Perguntas <span className="font-serif italic text-primary">frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="surface-elevated border-0 px-5 rounded-xl overflow-hidden">
              <AccordionTrigger className="text-left text-[15px] text-foreground hover:no-underline py-4 font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
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
