import { motion } from "framer-motion";

const timeline = [
  { emoji: "👀", label: "Capturar", desc: "o que você vê" },
  { emoji: "🧠", label: "Processar", desc: "o que você sabe" },
  { emoji: "🎙️", label: "Entender", desc: "o seu tom" },
  { emoji: "🏗️", label: "Estruturar", desc: "a sua visão" },
  { emoji: "✨", label: "Entregar", desc: "conteúdo pronto" },
];

const SSOriginSection = () => {
  return (
    <section id="origem" className="py-28 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.015] blur-3xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
            Nasceu de uma mudança{" "}
            <span className="relative">
              <span className="font-serif italic text-primary">simples</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-1 left-0 h-[2px] bg-primary/30"
              />
            </span>
          </h2>
        </motion.div>

        {/* Big quote card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="bg-foreground text-background rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-4 left-6 text-6xl font-serif text-background/10 leading-none">"</div>
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto text-center">
              <p className="text-lg sm:text-xl leading-relaxed font-light">
                As pessoas não precisam de mais ideias — precisam de um sistema que transforme as ideias que já têm em{" "}
                <strong className="font-semibold">execução.</strong>
              </p>
              <p className="text-sm text-background/50">
                O mercado tentou resolver com cursos, planners e prompts. Todos baseados no mesmo paradigma:{" "}
                <em>"pense em algo e crie."</em>
              </p>
            </div>
            <div className="absolute bottom-4 right-6 text-6xl font-serif text-background/10 leading-none rotate-180">"</div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8 text-center"
          >
            A camada que faltava
          </motion.p>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-8 left-0 right-0 h-[2px] bg-border" />

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-2">
              {timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border shadow-sm mx-auto mb-3 flex items-center justify-center text-2xl relative z-10">
                    {step.emoji}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["Sem esforço", "Sem atrito", "No seu ritmo"].map((text, i) => (
            <span key={i} className="px-5 py-2 rounded-full text-sm font-medium text-primary bg-primary/[0.06] border border-primary/10">
              {text} ✦
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-foreground font-semibold text-xl mt-14 font-serif italic"
        >
          "Seu conteúdo a um clique de distância."
        </motion.p>
      </div>
    </section>
  );
};

export default SSOriginSection;
