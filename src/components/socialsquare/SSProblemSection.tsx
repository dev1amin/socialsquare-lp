import { motion } from "framer-motion";

const painPoints = [
  "Pensar no tema",
  "Definir o ângulo",
  "Montar a estrutura",
  "Escolher o tom",
  "Encaixar o posicionamento",
  "E fazer tudo isso rápido",
];

const SSProblemSection = () => {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow-chip">O problema</span>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
              O problema nunca foi{" "}
              <span className="font-serif-display italic text-primary">"não saber criar"</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Foi começar do zero. Sempre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Criar do zero exige
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {painPoints.map((item, index) => (
                <div
                  key={item}
                  className="surface-card rounded-[1.5rem] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="pt-1 text-sm font-medium leading-relaxed text-foreground/76">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-8 rounded-[2rem] border border-primary/10 bg-primary/[0.05] px-5 py-5 sm:px-6"
        >
          <p className="text-sm leading-relaxed text-foreground/78 sm:text-base">
            Só falta um sistema que transforme <strong>o que te inspira</strong> no <strong>que você publica</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSProblemSection;
