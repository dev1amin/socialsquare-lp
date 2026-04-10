import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inspiração",
    subtitle: "Você captura o que te inspira",
    description:
      "Uma notícia que leu, um vídeo que assistiu, uma palavra que ouviu, um dado que achou interessante. Você não precisa saber o que vai fazer com isso. Só escolhe e joga no SocialSquare.",
    detail: "É o começo. O único esforço é notar.",
  },
  {
    number: "02",
    title: "Conversão",
    subtitle: "O SocialSquare transforma em conteúdo",
    description:
      "A inteligência do sistema entra em ação. Ele entende o contexto, reconhece o seu tom, aplica o formato que você escolheu e monta o conteúdo pronto para publicar.",
    detail: "Você não escreve. Você decide. Aprova. Publica.",
  },
  {
    number: "03",
    title: "Consistência",
    subtitle: "Você cresce sem depender de inspiração",
    description:
      "Toda vez que você entra no SocialSquare, sai com conteúdo na mão. Não é talento. Não é disciplina. É sistema. E sistema é o que separa quem cresce de quem estagna.",
    detail: "Consistência não é esforço. É consequência.",
  },
];

const SSHowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Como funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            3 passos. Um clique. Conteúdo.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Não tem fórmula complexa. Não tem curva de aprendizado. Só um fluxo
            que qualquer pessoa consegue seguir todos os dias.
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />
              )}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-primary mt-1">{step.subtitle}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                  <p className="mt-2 text-sm text-foreground/60 italic">{step.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSHowItWorksSection;
