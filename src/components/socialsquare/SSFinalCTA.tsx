import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SSFinalCTA = () => {
  return (
    <section id="assinar" className="py-24">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
            Pronto para transformar inspiração em conteúdo?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Mais de mil criadores já pararam de lutar contra o bloqueio criativo.
            O próximo passo é seu.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-box"
            >
              <Sparkles className="w-5 h-5" />
              Assinar agora
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary/50 transition-colors"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            7 dias grátis · Sem cartão · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSFinalCTA;
