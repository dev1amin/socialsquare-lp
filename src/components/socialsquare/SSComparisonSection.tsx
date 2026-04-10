import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const comparisonItems = [
  {
    sem: "A ideia é boa… mas some quando você tenta transformar em post.",
    com: "Você captura a ideia na hora… e ela vira conteúdo pronto em segundos.",
  },
  {
    sem: "Seu bloco de notas está cheio… mas tudo parece \"cru demais\" para publicar.",
    com: "Nenhuma inspiração se perde — post, notícia ou link viram material publicável.",
  },
  {
    sem: "Você abre a tela em branco… e seu cérebro simplesmente desliga.",
    com: "A tela em branco desaparece — porque você nunca começa do zero.",
  },
  {
    sem: "Você começa a escrever… mas apaga tudo porque \"não ficou bom o suficiente\".",
    com: "Seu tom de voz já está configurado — tudo sai consistente e natural.",
  },
  {
    sem: "A inspiração existe… mas a execução nunca acontece.",
    com: "Criar deixa de ser pesado… e começa a fluir.",
  },
];

const SSComparisonSection = () => {
  const scrollToCTA = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById("assinar");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="comparativo" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Por que você realmente trava na hora de criar conteúdo?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Você até tem boas ideias. Você se inspira o dia inteiro. Mas quando finalmente senta para criar… nada anda.
            E não é porque falta criatividade. É porque você está tentando construir um post começando do nada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-destructive mb-4">Sem SocialSquare</h3>
            {comparisonItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl glass-card"
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item.sem}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary mb-4">Com SocialSquare</h3>
            {comparisonItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl glass-card glow-border"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{item.com}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground">
            O problema nunca foi criatividade. Foi a <strong className="text-foreground">distância entre a inspiração e o conteúdo final</strong>.
            E enquanto essa distância existir, você vai continuar travando. Não por incapacidade. Mas por tentar criar a partir de nada.
          </p>
          <button
            onClick={scrollToCTA}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Quer ver esse sistema funcionando na prática?
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSComparisonSection;
