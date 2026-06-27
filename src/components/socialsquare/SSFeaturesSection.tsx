import { ArrowRight, BarChart3, Layers, PenTool, Shield, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Conversão instantânea", description: "Cole um link, jogue uma ideia — o post sai pronto.", stat: "5s", statLabel: "tempo médio" },
  { icon: Shield, title: "Tom de voz único", description: "O sistema aprende como você fala e mantém a consistência.", stat: "100%", statLabel: "seu" },
  { icon: Layers, title: "Multi-formato", description: "Post, carrossel, legenda, thread. Tudo num clique.", stat: "4+", statLabel: "formatos" },
  { icon: PenTool, title: "Canvas intuitivo", description: "Arraste referências e receba conteúdo estruturado.", stat: "0", statLabel: "curva" },
  { icon: BarChart3, title: "Consistência garantida", description: "Publique todo dia sem depender de inspiração.", stat: "7x", statLabel: "por semana" },
  { icon: Users, title: "Qualquer nicho", description: "Coach, advogado, nutricionista — se adapta a você.", stat: "50+", statLabel: "nichos" },
];

const SSFeaturesSection = () => {
  const scrollToPrecos = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("precos") || document.getElementById("assinar");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="funcionalidades" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow-chip">Funcionalidades</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            Tudo para criar sem <span className="font-serif-display italic text-primary">travar</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cada funcionalidade pensada para tirar você do bloqueio.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="surface-card rounded-[1.8rem] p-5 sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="rounded-[1.15rem] border border-primary/12 bg-primary/[0.05] px-3 py-2 text-right">
                    <p className="text-xl font-bold tracking-[-0.04em] text-primary">{feature.stat}</p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{feature.statLabel}</p>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={scrollToPrecos}
            className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground soft-shadow transition-all hover:bg-primary/92"
          >
            Ver planos e preços
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSFeaturesSection;
