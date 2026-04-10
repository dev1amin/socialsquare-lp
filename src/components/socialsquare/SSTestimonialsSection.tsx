import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Eu usava 3 horas por semana só pra pensar o que postar. Agora em 20 minutos já tenho a semana toda fechada.",
    name: "Ana Luiza M.",
    role: "Nutricionista",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Finalmente um produto que entende que o problema não é falta de ideia, é transformar ideia em post.",
    name: "Rafael T.",
    role: "Coach de vendas",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Antes eu procrastinava todo domingo à noite. Hoje acordo com conteúdo agendado. Absurdo como é simples.",
    name: "Camila F.",
    role: "Personal trainer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Nunca consegui manter consistência. O SocialSquare tirou o peso da criação e agora eu posto todo dia.",
    name: "Lucas B.",
    role: "Fotógrafo",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Meu engajamento dobrou nas primeiras duas semanas. Não porque o conteúdo ficou 'mais criativo', mas porque ficou constante.",
    name: "Mariana C.",
    role: "Terapeuta holística",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    text: "Eu desconfiava de ferramentas de IA. Mas isso aqui não é só IA — é um sistema. E sistema funciona.",
    name: "João P.",
    role: "Consultor financeiro",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    text: "Faz 60 dias que não fico sem postar. Isso nunca tinha acontecido nos 3 anos que tenho perfil.",
    name: "Fernanda R.",
    role: "Advogada",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: "Mostrei pra uma amiga que estuda comunicação e ela ficou com raiva de não ter criado antes.",
    name: "Bianca A.",
    role: "Arquiteta",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    text: "A parte de carrosséis mudou minha vida. Eu sempre quis fazer mas nunca tive tempo pra estruturar. Agora sai em 5 minutos.",
    name: "Matheus G.",
    role: "Professor de inglês",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const SSTestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Quem usou, não volta atrás
          </h2>
          <p className="mt-4 text-muted-foreground">Criadores reais. Resultados reais. Consistência real.</p>
        </motion.div>

        <div className="flex justify-center gap-6 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default SSTestimonialsSection;
