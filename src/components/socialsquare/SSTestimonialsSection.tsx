import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

const testimonials = [
  { text: "Eu usava 3 horas por semana só pra pensar o que postar. Agora em 20 minutos já tenho a semana toda fechada.", name: "Ana Luiza M.", role: "Nutricionista", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { text: "Finalmente um produto que entende que o problema não é falta de ideia, é transformar ideia em post.", name: "Rafael T.", role: "Coach de vendas", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { text: "Antes eu procrastinava todo domingo à noite. Hoje acordo com conteúdo agendado.", name: "Camila F.", role: "Personal trainer", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { text: "O SocialSquare tirou o peso da criação e agora eu posto todo dia.", name: "Lucas B.", role: "Fotógrafo", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  { text: "Meu engajamento dobrou nas primeiras duas semanas. Não pelo conteúdo mais criativo, mas porque ficou constante.", name: "Mariana C.", role: "Terapeuta", image: "https://randomuser.me/api/portraits/women/90.jpg" },
  { text: "Eu desconfiava de ferramentas de IA. Mas isso aqui não é só IA — é um sistema.", name: "João P.", role: "Consultor financeiro", image: "https://randomuser.me/api/portraits/men/46.jpg" },
  { text: "Faz 60 dias que não fico sem postar. Nunca tinha acontecido em 3 anos.", name: "Fernanda R.", role: "Advogada", image: "https://randomuser.me/api/portraits/women/22.jpg" },
  { text: "A parte de carrosséis mudou minha vida. Antes eu nunca tinha tempo pra estruturar.", name: "Bianca A.", role: "Arquiteta", image: "https://randomuser.me/api/portraits/women/56.jpg" },
  { text: "Mostrei pra uma amiga e ela ficou com raiva de não ter criado antes.", name: "Matheus G.", role: "Professor", image: "https://randomuser.me/api/portraits/men/85.jpg" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const SSTestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Quem usou, <span className="font-serif italic text-primary">não volta atrás</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Criadores reais. Resultados reais.</p>
        </motion.div>

        <div className="flex justify-center gap-5 max-h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} duration={20} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={18} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default SSTestimonialsSection;
