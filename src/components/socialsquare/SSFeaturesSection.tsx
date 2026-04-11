import { Zap, Shield, Layers, Users, PenTool, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Zap, title: "Conversão instantânea", description: "De link ou ideia para post pronto em segundos.", stat: "5s", statLabel: "tempo médio" },
  { icon: Shield, title: "Tom de voz único", description: "O sistema aprende como você se comunica.", stat: "100%", statLabel: "personalizado" },
  { icon: Layers, title: "Multi-formato", description: "Posts, carrosséis, legendas, threads. Um clique.", stat: "4+", statLabel: "formatos" },
  { icon: PenTool, title: "Canvas intuitivo", description: "Jogue referências e receba conteúdo estruturado.", stat: "Zero", statLabel: "curva" },
  { icon: BarChart3, title: "Consistência garantida", description: "Publique todo dia sem depender de inspiração.", stat: "7x", statLabel: "semana" },
  { icon: Users, title: "Qualquer nicho", description: "Coach, nutricionista, advogado — se adapta a você.", stat: "50+", statLabel: "nichos" },
];

const SSFeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-28">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Funcionalidades</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Tudo para criar sem <span className="font-serif italic text-primary">travar</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl border border-border bg-background p-6 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Background icon - tilted, with blue glow */}
                <div className="absolute -right-4 -top-4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500">
                  <Icon className="w-32 h-32 text-primary" style={{ transform: "rotate(-15deg)" }} />
                </div>
                {/* Blue glow reaching toward icon */}
                <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-primary/[0.04] blur-2xl group-hover:bg-primary/[0.08] transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-foreground text-[15px] mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

                  <div className="mt-5 pt-4 border-t border-border/50 flex items-baseline gap-1.5">
                    <span className="text-2xl font-bold text-primary">{feature.stat}</span>
                    <span className="text-xs text-muted-foreground">{feature.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SSFeaturesSection;
