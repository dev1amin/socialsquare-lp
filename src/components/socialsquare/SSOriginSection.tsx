import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "O problema", text: "Todo mundo tem ideias. Poucos conseguem transformá-las em posts." },
  { num: "02", title: "A tentativa", text: "Cursos, planners, prompts — todos dizem 'pense em algo e crie'. Mas o bloqueio nunca foi falta de criatividade." },
  { num: "03", title: "A virada", text: "E se você não precisasse começar do zero? E se o sistema fizesse a ponte entre o que te inspira e o que você publica?" },
];

const SSOriginSection = () => {
  const scrollToCTA = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById("assinar");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="origem" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
            Nasceu de uma mudança{" "}
            <span className="font-serif italic text-primary">simples</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
            Parar de criar do zero. Começar a criar do que já existe.
          </p>
        </motion.div>

        {/* Narrative cards - stacked editorial style */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 h-full hover:-translate-y-1 transition-all duration-300">
                {/* Big number background */}
                <span className="absolute -top-4 -right-2 text-[120px] font-bold text-foreground/[0.03] leading-none select-none">
                  {step.num}
                </span>
                <div className="relative z-10">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">{step.num}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl sm:text-2xl font-serif italic text-foreground mb-6">
            "Seu conteúdo a um clique de distância."
          </p>
          <button
            onClick={scrollToCTA}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Comece agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSOriginSection;
