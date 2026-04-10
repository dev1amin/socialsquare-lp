import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Preciso ter experiência com conteúdo para usar o SocialSquare?",
    answer:
      "Não. O SocialSquare foi criado exatamente para quem não tem tempo, habilidade técnica ou rotina de criação. Se você consegue notar algo interessante no seu dia a dia, o sistema faz o resto.",
  },
  {
    question: "O conteúdo vai parecer gerado por IA?",
    answer:
      "Não. O SocialSquare aprende o seu tom, vocabulário e estilo de comunicação. O resultado é conteúdo que parecer seu — porque, de certa forma, é. Você fornece a inspiração, o sistema estrutura.",
  },
  {
    question: "Funciona para qualquer nicho?",
    answer:
      "Sim. O SocialSquare é agnóstico de nicho. Seja você coach, nutricionista, advogado, fotógrafo, professor ou empreendedor, o sistema se adapta ao seu mercado e audiência.",
  },
  {
    question: "Quais plataformas são suportadas?",
    answer:
      "O SocialSquare gera conteúdo otimizado para Instagram, LinkedIn, TikTok e Twitter/X. Os formatos incluem posts de texto, carrosséis e legendas para vídeos.",
  },
  {
    question: "Quanto tempo preciso dedicar por semana?",
    answer:
      "A maioria dos usuários dedica entre 20 e 40 minutos por semana para programar o conteúdo de toda a semana. Alguns fazem isso em uma única sessão de domingo à noite.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Sem fidelidade, sem taxas de cancelamento. Se em qualquer momento o SocialSquare deixar de fazer sentido para você, basta cancelar pela plataforma com um clique.",
  },
  {
    question: "Tem período de teste?",
    answer:
      "Sim. Oferecemos acesso gratuito por 7 dias sem necessidade de cartão de crédito. Você pode explorar todas as funcionalidades e só assina se fizer sentido.",
  },
  {
    question: "Como funciona o Canvas?",
    answer:
      "O Canvas é o ambiente central do SocialSquare onde você joga suas referências (links, textos, ideias) e o sistema converte em conteúdo estruturado. É simples, visual e intuitivo — sem curva de aprendizado.",
  },
];

const SSFAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Dúvidas frequentes</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Perguntas e respostas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tudo o que você precisa saber antes de começar.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card rounded-xl border-0 px-6">
              <AccordionTrigger className="text-left text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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
