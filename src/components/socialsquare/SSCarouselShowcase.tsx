import { useRef, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  { src: "/images/carousel-slide-1.jpg", alt: "Post pronto 1" },
  { src: "/images/carousel-slide-2.jpg", alt: "Post pronto 2" },
  { src: "/images/carousel-slide-3.jpg", alt: "Post pronto 3" },
  { src: "/images/carousel-slide-4.jpg", alt: "Post pronto 4" },
  { src: "/images/carousel-slide-5.jpg", alt: "Post pronto 5" },
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
    const dx = e.clientX - dragStart.current.x;
    scrollRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  };

  const onPointerUp = () => setIsDragging(false);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Formatos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Carrosséis prontos para engajar
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Você escolhe a referência, o SocialSquare estrutura o conteúdo em slides organizados,
            com texto pronto e visual adaptado para cada plataforma.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Conteúdo gerado slide a slide",
              "Formatado para Instagram, LinkedIn e TikTok",
              "Tom e estilo personalizados para você",
              "Pronto para publicar em minutos",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
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
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-4"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-80 rounded-xl glass-card overflow-hidden"
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-2">← Arraste para ver mais →</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SSCarouselShowcase;
