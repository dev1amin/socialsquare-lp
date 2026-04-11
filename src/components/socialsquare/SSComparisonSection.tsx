import { motion } from "framer-motion";
import { ArrowRight, ThumbsDown, ThumbsUp, Heart, MessageCircle, Share2, UserMinus, UserPlus, TrendingDown, TrendingUp } from "lucide-react";

const semNotifications = [
  { icon: ThumbsDown, text: "2 curtidas", position: "top-4 -left-16", rotation: "-12deg" },
  { icon: UserMinus, text: "-3 seguidores", position: "top-20 -right-20", rotation: "8deg" },
  { icon: Share2, text: "1 compartilhamento", position: "bottom-32 -left-14", rotation: "-6deg" },
  { icon: MessageCircle, text: "0 comentários", position: "bottom-16 -right-16", rotation: "10deg" },
  { icon: TrendingDown, text: "Alcance: 12", position: "top-40 -left-20", rotation: "-4deg" },
];

const comNotifications = [
  { icon: Heart, text: "847 curtidas", position: "top-4 -right-16", rotation: "10deg" },
  { icon: UserPlus, text: "+126 seguidores", position: "top-20 -left-20", rotation: "-8deg" },
  { icon: Share2, text: "93 compartilhamentos", position: "bottom-32 -right-14", rotation: "6deg" },
  { icon: MessageCircle, text: "64 comentários", position: "bottom-16 -left-16", rotation: "-10deg" },
  { icon: TrendingUp, text: "Alcance: 12.4k", position: "top-40 -right-20", rotation: "4deg" },
];

const PhoneFrame = ({ children, tilt, className = "" }: { children: React.ReactNode; tilt: string; className?: string }) => (
  <div className={`relative ${className}`} style={{ transform: `rotate(${tilt})` }}>
    <div className="w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[2.5rem] border-[6px] border-foreground/10 bg-background shadow-xl overflow-hidden relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-2xl z-10" />
      <div className="pt-10 px-4 h-full overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

const NotificationBubble = ({ icon: Icon, text, position, rotation, variant }: {
  icon: React.ElementType; text: string; position: string; rotation: string; variant: "bad" | "good"
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: Math.random() * 0.4, type: "spring", stiffness: 200 }}
    className={`absolute ${position} z-20 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap text-xs font-medium ${
      variant === "bad"
        ? "bg-destructive/10 text-destructive border border-destructive/20"
        : "bg-primary/10 text-primary border border-primary/20"
    }`}
    style={{ transform: `rotate(${rotation})` }}
  >
    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
    {text}
  </motion.div>
);

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
    <section id="comparativo" className="py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Por que você trava na hora de <span className="font-serif italic text-primary">criar conteúdo?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-[17px] leading-relaxed">
            Não é falta de criatividade. É tentar construir um post começando do nada.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          {/* Phone SEM */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {semNotifications.map((n, i) => (
              <NotificationBubble key={i} {...n} variant="bad" />
            ))}
            <PhoneFrame tilt="0deg">
              <div className="text-center mb-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 mx-auto mb-2 flex items-center justify-center">
                  <ThumbsDown className="w-4 h-4 text-destructive/60" />
                </div>
                <p className="text-[11px] font-semibold text-foreground/40 uppercase tracking-wider">Sem SocialSquare</p>
              </div>
              <div className="space-y-2.5">
                {[
                  "A ideia some antes de virar post",
                  "Tela em branco paralisa",
                  "Apaga tudo — não ficou bom",
                  "Inspiração existe, execução não",
                  "Bloco de notas cheio, feed vazio",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-destructive/[0.04] border border-destructive/[0.08]">
                    <span className="text-destructive/40 text-xs mt-0.5">✕</span>
                    <p className="text-[11px] text-foreground/50 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] text-foreground/30 font-medium">Resultado típico</p>
                <p className="text-2xl font-bold text-destructive/40 mt-1">0 posts</p>
                <p className="text-[10px] text-foreground/30">essa semana</p>
              </div>
            </PhoneFrame>
          </motion.div>

          {/* Phone COM */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {comNotifications.map((n, i) => (
              <NotificationBubble key={i} {...n} variant="good" />
            ))}
            <PhoneFrame tilt="0deg">
              <div className="text-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 mx-auto mb-2 flex items-center justify-center">
                  <ThumbsUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wider">Com SocialSquare</p>
              </div>
              <div className="space-y-2.5">
                {[
                  "Captura a ideia → post pronto",
                  "Nunca começa do zero",
                  "Tom de voz consistente",
                  "Criar flui naturalmente",
                  "Link vira material publicável",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-primary/[0.04] border border-primary/[0.08]">
                    <span className="text-primary text-xs mt-0.5">✓</span>
                    <p className="text-[11px] text-foreground/70 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] text-foreground/50 font-medium">Resultado típico</p>
                <p className="text-2xl font-bold text-primary mt-1">7 posts</p>
                <p className="text-[10px] text-foreground/50">essa semana</p>
              </div>
            </PhoneFrame>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
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
