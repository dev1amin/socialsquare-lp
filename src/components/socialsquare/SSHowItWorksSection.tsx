import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inspiração",
    subtitle: "Capture o que te inspira",
    description: "Uma notícia, um vídeo, uma frase. Você não precisa saber o que vai fazer com isso — só joga no SocialSquare.",
    detail: "O único esforço é notar.",
  },
  {
    number: "02",
    title: "Conversão",
    subtitle: "O sistema transforma em conteúdo",
    description: "Ele entende o contexto, reconhece o seu tom, aplica o formato e monta tudo pronto para publicar.",
    detail: "Você decide. Aprova. Publica.",
  },
  {
    number: "03",
    title: "Consistência",
    subtitle: "Você cresce sem depender de inspiração",
    description: "Toda vez que você entra, sai com conteúdo na mão. É sistema — e sistema é o que separa quem cresce.",
    detail: "Consistência é consequência.",
  },
];

const SSHowItWorksSection = () => {
  return (
    <section id="como-funciona" className="brand-gradient-bg py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow-chip">Como funciona</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            3 passos. Um clique. <span className="font-serif-display italic text-primary">Conteúdo.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel rounded-[1.9rem] p-6 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                {step.number}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm font-semibold text-primary">{step.subtitle}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
              <p className="mt-4 text-sm italic text-foreground/55">{step.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSHowItWorksSection;
