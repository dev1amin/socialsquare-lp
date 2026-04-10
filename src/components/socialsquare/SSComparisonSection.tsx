import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const comparisonItems = [
  {
    sem: "A ideia é boa… mas some quando você tenta transformar em post.",
    com: "Você captura a ideia na hora — e ela vira conteúdo pronto em segundos.",
  },
  {
    sem: "Seu bloco de notas está cheio… mas tudo parece \"cru demais\" para publicar.",
    com: "Post, notícia ou link viram material publicável automaticamente.",
  },
  {
    sem: "Você abre a tela em branco… e seu cérebro simplesmente desliga.",
    com: "A tela em branco desaparece — você nunca começa do zero.",
  },
  {
    sem: "Você começa a escrever… mas apaga tudo porque \"não ficou bom\".",
    com: "Seu tom de voz já está configurado — tudo sai consistente.",
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
    <section id="comparativo" className="py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Por que você trava na hora de <span className="font-serif italic text-primary">criar conteúdo?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[17px] leading-relaxed">
            Não é falta de criatividade. É tentar construir um post começando do nada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-2 h-2 rounded-full bg-destructive/60" />
              <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">Sem SocialSquare</span>
            </div>
            {comparisonItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-destructive/[0.03] border border-destructive/[0.08]"
              >
                <X className="w-4 h-4 text-destructive/50 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/60 leading-relaxed">{item.sem}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Com SocialSquare</span>
            </div>
            {comparisonItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-primary/[0.03] border border-primary/[0.08]"
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item.com}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={scrollToCTA}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
          >
            Ver na prática
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSComparisonSection;
