import { motion } from "framer-motion";
import { Brain, Target, Layout, MessageSquare, Layers, Zap } from "lucide-react";

const painPoints = [
  { icon: Brain, text: "Você precisa pensar no tema" },
  { icon: Target, text: "Pensar no ângulo" },
  { icon: Layout, text: "Pensar na estrutura" },
  { icon: MessageSquare, text: "Pensar no tom" },
  { icon: Layers, text: "Pensar no posicionamento" },
  { icon: Zap, text: "E ainda fazer tudo isso rápido" },
];

const SSProblemSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            O problema nunca foi "não saber criar",<br />
            foi tentar criar começando do zero.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Criar conteúdo não é difícil porque você não tem criatividade. É difícil porque o
            processo tradicional exige que você transforme uma inspiração crua em um post completo
            — sozinho — do nada. E isso é antinatural.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 glass-card rounded-2xl p-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">Criar do zero é pesado porque:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            É muita coisa para encaixar ao mesmo tempo. É por isso que seu cérebro trava.
            É por isso que você procrastina. É por isso que escrever parece cansativo demais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Você não trava por falta de repertório. Você trava porque <strong className="text-foreground">não existe uma ponte
            entre a inspiração e o conteúdo final.</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            E enquanto essa ponte não existir, você vai continuar vivendo assim:
            com ideias soltas na cabeça… e um feed vazio.
          </p>
          <div className="glass-card rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-sm font-medium text-foreground">A verdade é simples:</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Você já tem tudo o que precisa para criar conteúdo.
              Só falta um sistema que transforme <strong className="text-foreground">o que te inspira</strong> no <strong className="text-foreground">que você publica</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SSProblemSection;
