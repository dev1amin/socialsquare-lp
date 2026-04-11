import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import slide01 from "@/assets/slide_01.png";
import slide02 from "@/assets/slide_02.png";
import slide03 from "@/assets/slide_03.png";
import slide04 from "@/assets/slide_04.png";

const slides = [
  { image: slide01, title: "Polarização política" },
  { image: slide02, title: "Critérios de representação" },
  { image: slide03, title: "Figuras que ganham força" },
  { image: slide04, title: "Padrão eleitoral previsível" },
];

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
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <section className="py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">Formatos</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
              Carrosséis prontos
              <br />
              para <span className="font-serif italic text-primary">engajar</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-[17px] max-w-md">
              Você escolhe a referência, o SocialSquare estrutura slides organizados com texto pronto para cada plataforma.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Conteúdo gerado slide a slide",
                "Formatado para Instagram, LinkedIn e TikTok",
                "Tom e estilo personalizados",
                "Pronto para publicar em minutos",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-foreground/70"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative lg:-mr-20"
          >
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-2 pl-4"
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-56 sm:w-64 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-muted-foreground/50 mt-3 font-medium">← Arraste →</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SSCarouselShowcase;
