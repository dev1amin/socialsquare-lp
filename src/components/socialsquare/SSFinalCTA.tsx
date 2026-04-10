import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SSFinalCTA = () => {
  return (
    <section id="assinar" className="py-28">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight text-balance">
            Pronto para transformar inspiração em <span className="font-serif italic text-primary">conteúdo?</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Mais de mil criadores já pararam de lutar contra o bloqueio criativo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all soft-shadow"
            >
              Começar grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-muted-foreground font-medium hover:text-foreground hover:bg-secondary transition-colors"
            >
              Ver como funciona
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground/50">
            7 dias grátis · Sem cartão · Cancele quando quiser
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSFinalCTA;
