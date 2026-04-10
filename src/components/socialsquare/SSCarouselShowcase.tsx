import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Instagram, Linkedin, Twitter } from "lucide-react";

const slides = [
  {
    title: "Como construir autoridade",
    platform: "Instagram",
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/20",
  },
  {
    title: "5 erros que travam seu crescimento",
    platform: "LinkedIn",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
  },
  {
    title: "O segredo da consistência",
    platform: "Instagram",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/20",
  },
  {
    title: "Storytelling que converte",
    platform: "Twitter/X",
    color: "from-sky-500/20 to-indigo-500/20",
    borderColor: "border-sky-500/20",
  },
  {
    title: "Rotina de criação em 20min",
    platform: "LinkedIn",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20",
  },
];

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "Instagram": return <Instagram className="w-3.5 h-3.5" />;
    case "LinkedIn": return <Linkedin className="w-3.5 h-3.5" />;
    case "Twitter/X": return <Twitter className="w-3.5 h-3.5" />;
    default: return null;
  }
};

const SSCarouselShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: scrollRef.current.scrollLeft };
    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-primary/20 text-primary mb-6">
              Formatos
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
              Carrosséis prontos<br />para <span className="gradient-text">engajar</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Você escolhe a referência, o SocialSquare estrutura o conteúdo em slides organizados,
              com texto pronto e visual adaptado para cada plataforma.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Conteúdo gerado slide a slide",
                "Formatado para Instagram, LinkedIn e TikTok",
                "Tom e estilo personalizados para você",
                "Pronto para publicar em minutos",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-foreground/80"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — draggable carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-4 px-2"
            >
              {slides.map((slide, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex-shrink-0 w-56 h-72 rounded-2xl glass-card overflow-hidden p-5 flex flex-col justify-between card-hover ${slide.borderColor}`}
                >
                  <div>
                    <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${slide.color} mb-4 flex items-center justify-center`}>
                      <div className="w-8 h-1 rounded-full bg-foreground/20" />
                      <div className="w-12 h-1 rounded-full bg-foreground/10 ml-2" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground leading-snug">{slide.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <PlatformIcon platform={slide.platform} />
                    {slide.platform}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-3">← Arraste para ver mais →</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SSCarouselShowcase;
