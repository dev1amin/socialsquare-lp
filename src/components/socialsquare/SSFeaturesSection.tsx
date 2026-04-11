import { Zap, Shield, Layers, PenTool, BarChart3, Users, ArrowRight } from "lucide-react";
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
    <section id="funcionalidades" className="py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
            Tudo para criar sem <span className="font-serif italic text-primary">travar</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            Cada funcionalidade pensada para tirar você do bloqueio.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isLarge = i === 0 || i === 5;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`relative overflow-hidden rounded-2xl border border-border bg-background group hover:-translate-y-0.5 transition-all duration-300 ${
                  isLarge ? "col-span-2 lg:col-span-1 p-8" : "p-6"
                }`}
              >
                {/* Large tilted icon in background */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                  <Icon className="w-40 h-40 text-primary" style={{ transform: "rotate(-20deg)" }} />
                </div>
                {/* Blue glow */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-primary/[0.03] blur-3xl group-hover:bg-primary/[0.07] transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Stat badge top-right */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-primary/[0.08] flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-primary leading-none">{feature.stat}</span>
                      <p className="text-[10px] text-muted-foreground">{feature.statLabel}</p>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground text-[15px] mb-1">{feature.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={scrollToPrecos}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
          >
            Ver planos e preços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSFeaturesSection;
