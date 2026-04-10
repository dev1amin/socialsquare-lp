import { motion } from "framer-motion";
import { Eye, Cpu, Mic, Layout, Sparkles } from "lucide-react";

const capabilities = [
  { icon: Eye, text: "Capturar o que você vê" },
  { icon: Cpu, text: "Processar o que você sabe" },
  { icon: Mic, text: "Entender o seu tom" },
  { icon: Layout, text: "Estruturar a sua visão" },
  { icon: Sparkles, text: "E transformar tudo isso em conteúdo pronto" },
];

const SSOriginSection = () => {
  return (
    <section id="origem" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">A origem</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            O SocialSquare nasceu de uma mudança simples:
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            As pessoas não precisam de mais ideias, precisam de um sistema que ajude a transformar
            as ideias que já tem em execução.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            Durante anos, o mercado tentou resolver criação de conteúdo com cursos, planners,
            metodologias e agora até com prompts, todos baseados no mesmo paradigma: <em>"pense em algo e crie."</em>
          </p>
          <p>
            Só que a rotina real das pessoas que querem começar a produzir conteúdo mostrava outra coisa:
            elas já estavam cheias de ideias, referências, notícias, prints, links e inspirações.
            O que faltava não era criatividade — <strong className="text-foreground">era um sistema.</strong>
          </p>

          <div className="glass-card rounded-2xl p-8 my-8">
            <p className="text-foreground font-medium mb-4">O ponto cego sempre foi o mesmo:</p>
            <p className="text-sm text-muted-foreground mb-6">
              Ninguém tinha criado a camada intermediária entre a inspiração e o conteúdo final.
              Uma camada capaz de:
            </p>
            <div className="space-y-3">
              {capabilities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              {["Sem esforço.", "Sem atrito.", "No seu ritmo."].map((text, i) => (
                <span key={i} className="text-xs font-medium text-primary px-3 py-1 rounded-full border border-primary/20">
                  {text}
                </span>
              ))}
            </div>
          </div>

          <p>
            Foi esse insight, <strong className="text-foreground">a ausência dessa camada</strong>,
            que deu origem ao SocialSquare.
          </p>

          <div className="space-y-4 mt-8">
            <p>Ele não nasceu para criar ideias. <strong className="text-foreground">Nasceu para dar forma às ideias que você já tem.</strong></p>
            <p>Ele não nasceu para competir com a sua criatividade. <strong className="text-foreground">Nasceu para libertá-lo do peso da criação diária.</strong></p>
            <p>Ele não nasceu para ser "mais uma ferramenta de conteúdo". <strong className="text-foreground">Nasceu para te mostrar uma nova forma de criar.</strong></p>
          </div>

          <p className="text-center text-foreground font-medium mt-8">
            Seu conteúdo a um clique de distância não é uma promessa, é a nossa missão.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSOriginSection;
