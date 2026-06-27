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

const SSTestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow-chip">Depoimentos</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            Quem usou, <span className="font-serif-display italic text-primary">não volta atrás</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Criadores reais. Resultados reais.</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="surface-card flex h-full flex-col rounded-[1.8rem] p-5"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <svg key={starIndex} className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="flex-1 text-[15px] leading-relaxed text-foreground/76">{testimonial.text}</p>

              <div className="mt-5 flex items-center gap-3 border-t border-border/80 pt-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSTestimonialsSection;
