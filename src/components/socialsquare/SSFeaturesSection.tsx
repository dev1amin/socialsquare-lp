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
    <section id="funcionalidades" className="py-28 brand-gradient-bg">
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
                className="surface-elevated p-6 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-foreground">{feature.stat}</span>
                    <span className="text-[10px] text-muted-foreground ml-1">{feature.statLabel}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-[15px]">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SSFeaturesSection;
