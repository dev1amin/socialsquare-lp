import { motion } from "framer-motion";
import { Brain, Target, Layout, MessageSquare, Layers, Zap } from "lucide-react";

const painPoints = [
  { icon: Brain, text: "Pensar no tema" },
  { icon: Target, text: "Definir o ângulo" },
  { icon: Layout, text: "Montar a estrutura" },
  { icon: MessageSquare, text: "Escolher o tom" },
  { icon: Layers, text: "Encaixar o posicionamento" },
  { icon: Zap, text: "E fazer tudo isso rápido" },
];

const SSProblemSection = () => {
  return (
    <section className="py-28 brand-gradient-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight text-balance">
            O problema nunca foi <span className="font-serif italic">"não saber criar"</span> — foi começar do zero.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto text-[17px]">
            Criar conteúdo é difícil porque o processo tradicional exige transformar uma inspiração crua em post completo, sozinho, do nada.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 surface-elevated p-8"
        >
          <p className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">Criar do zero exige:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary"
              >
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/70">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 text-center"
        >
          <div className="inline-block surface-elevated px-8 py-5 text-center">
            <p className="text-sm font-medium text-foreground">A verdade é simples:</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Só falta um sistema que transforme <strong className="text-foreground">o que te inspira</strong> no <strong className="text-foreground">que você publica</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SSProblemSection;
