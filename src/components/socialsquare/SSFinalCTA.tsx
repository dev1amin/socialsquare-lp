import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SSFinalCTA = () => {
  return (
    <section id="assinar" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel relative overflow-hidden rounded-[2.25rem] px-5 py-12 text-center sm:px-10 sm:py-16"
        >
          <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative">
            <span className="eyebrow-chip">Assinar</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
              Pronto para transformar inspiração em <span className="font-serif-display italic text-primary">conteúdo?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Mais de mil criadores já pararam de lutar contra o bloqueio criativo.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground soft-shadow transition-all hover:bg-primary/92"
              >
                Começar grátis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white/80 px-8 py-4 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver como funciona
              </a>
            </div>

            <p className="mt-5 text-sm text-muted-foreground/70">
              7 dias grátis · Sem cartão · Cancele quando quiser
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SSFinalCTA;
