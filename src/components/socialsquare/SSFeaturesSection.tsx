import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers, Users, PenTool, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Conversão instantânea",
    description:
      "De link, print ou ideia para post pronto em segundos. Sem atrito, sem etapas manuais.",
    stat: "5s",
    statLabel: "tempo médio",
  },
  {
    icon: Shield,
    title: "Tom de voz único",
    description:
      "O sistema aprende como você se comunica e gera conteúdo que soa natural — como se você tivesse escrito.",
    stat: "100%",
    statLabel: "personalizado",
  },
  {
    icon: Layers,
    title: "Multi-formato",
    description:
      "Posts de texto, carrosséis, legendas, threads. Um clique, vários formatos, todas as plataformas.",
    stat: "4+",
    statLabel: "formatos",
  },
  {
    icon: PenTool,
    title: "Canvas intuitivo",
    description:
      "Ambiente visual onde você joga referências e o sistema entrega conteúdo estruturado.",
    stat: "Zero",
    statLabel: "curva de aprendizado",
  },
  {
    icon: BarChart3,
    title: "Consistência garantida",
    description:
      "Publique todo dia sem depender de inspiração. O sistema transforma rotina em crescimento.",
    stat: "7x",
    statLabel: "por semana",
  },
  {
    icon: Users,
    title: "Para qualquer nicho",
    description:
      "Coach, nutricionista, advogado, fotógrafo — o SocialSquare se adapta ao seu mercado.",
    stat: "50+",
    statLabel: "nichos atendidos",
  },
];

const SSFeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Funcionalidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Tudo que você precisa para criar sem travar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cada funcionalidade foi pensada para eliminar o atrito entre a sua ideia e o conteúdo publicado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isWide = i >= 4; // last 2 cards span 3 cols each
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={isWide ? "sm:col-span-1 lg:col-span-1" : ""}
              >
                <Card className="glass-card card-hover h-full border-0">
                  <CardContent className="p-6">
                    {feature.stat && (
                      <div className="mb-4">
                        <span className="text-2xl font-bold gradient-text">{feature.stat}</span>
                        <span className="text-xs text-muted-foreground ml-2">{feature.statLabel}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SSFeaturesSection;
