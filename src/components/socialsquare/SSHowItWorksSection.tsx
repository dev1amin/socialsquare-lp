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
    <section id="como-funciona" className="py-28 brand-gradient-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Como funciona</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            3 passos. Um clique. <span className="font-serif italic text-primary">Conteúdo.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[23px] top-12 bottom-0 w-px bg-border" />
              )}

              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold relative z-10">
                {step.number}
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{step.subtitle}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
                <p className="mt-2 text-sm text-foreground/50 font-serif italic">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSHowItWorksSection;
