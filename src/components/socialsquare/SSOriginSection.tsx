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
    <section id="origem" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow-chip">Origem</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            Nasceu de uma mudança <span className="font-serif-display italic text-primary">simples</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Parar de criar do zero. Começar a criar do que já existe.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="surface-card relative rounded-[1.9rem] p-6 sm:p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{step.num}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{step.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 rounded-[2rem] border border-border/80 bg-white/70 px-5 py-6 text-center backdrop-blur sm:px-8"
        >
          <p className="text-2xl italic text-foreground sm:text-3xl">
            <span className="font-serif-display">"Seu conteúdo a um clique de distância."</span>
          </p>
          <button
            onClick={scrollToCTA}
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/85"
          >
            Comece agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSOriginSection;
