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
    <section id="origem" className="py-28">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">A origem</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Nasceu de uma mudança <span className="font-serif italic text-primary">simples</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-[17px] leading-relaxed">
            As pessoas não precisam de mais ideias — precisam de um sistema que transforme as ideias que já têm em execução.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-[16px]"
        >
          <p>
            Durante anos, o mercado tentou resolver criação de conteúdo com cursos, planners e prompts — todos baseados no mesmo paradigma: <em className="text-foreground">"pense em algo e crie."</em>
          </p>
          <p>
            A rotina real mostrava outra coisa: as pessoas já estavam cheias de ideias. O que faltava não era criatividade — <strong className="text-foreground">era um sistema.</strong>
          </p>

          <div className="surface-elevated p-8 my-10">
            <p className="text-foreground font-semibold text-sm uppercase tracking-wide mb-5">A camada que faltava:</p>
            <div className="space-y-2.5">
              {capabilities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary"
                >
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {["Sem esforço.", "Sem atrito.", "No seu ritmo."].map((text, i) => (
                <span key={i} className="text-xs font-medium text-primary px-3 py-1.5 rounded-full bg-primary/[0.06]">
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-[15px]">
            <p>Ele não nasceu para criar ideias. <strong className="text-foreground">Nasceu para dar forma às que você já tem.</strong></p>
            <p>Não compete com sua criatividade. <strong className="text-foreground">Liberta você do peso da criação diária.</strong></p>
          </div>

          <p className="text-center text-foreground font-semibold text-lg mt-8 font-serif italic">
            "Seu conteúdo a um clique de distância."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSOriginSection;
