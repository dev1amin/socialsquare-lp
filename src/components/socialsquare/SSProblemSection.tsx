import { motion } from "framer-motion";

const painPoints = [
  { emoji: "🧠", text: "Pensar no tema" },
  { emoji: "🎯", text: "Definir o ângulo" },
  { emoji: "🏗️", text: "Montar a estrutura" },
  { emoji: "🗣️", text: "Escolher o tom" },
  { emoji: "🧩", text: "Encaixar o posicionamento" },
  { emoji: "⚡", text: "E fazer tudo isso rápido" },
];

const SSProblemSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Diagonal stripe accent */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/[0.03] rotate-12 rounded-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/[0.02] -rotate-12 rounded-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
            O problema nunca foi{" "}
            <span className="relative inline-block">
              <span className="font-serif italic">"não saber criar"</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-1 left-0 w-full h-[3px] bg-primary/30 origin-left"
              />
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto text-lg">
            Foi começar do zero. Sempre.
          </p>
        </motion.div>

        {/* Staggered horizontal scroll-like cards */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 text-center"
          >
            Criar do zero exige →
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotate: (i % 2 === 0 ? -2 : 2) }}
                whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -1 : 1) }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                className="px-5 py-3 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="text-lg mr-2">{item.emoji}</span>
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-primary/[0.05] border border-primary/10">
            <span className="text-2xl">💡</span>
            <p className="text-sm text-foreground">
              Só falta um sistema que transforme <strong>o que te inspira</strong> no <strong>que você publica</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SSProblemSection;
