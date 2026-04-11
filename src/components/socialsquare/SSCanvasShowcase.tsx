import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

const generateStars = (count: number) => {
  const stars: { x: number; y: number; size: number; rotation: number; opacity: number; type: number }[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 8 + Math.random() * 16,
      rotation: Math.random() * 360,
      opacity: 0.06 + Math.random() * 0.1,
      type: i % 3,
    });
  }
  return stars;
};

const stars = generateStars(20);

const StarShape = ({ size, rotation, opacity, type }: { size: number; rotation: number; opacity: number; type: number }) => {
  if (type === 0) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" opacity={opacity} />
      </svg>
    );
  }
  if (type === 1) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
        <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z" fill="currentColor" opacity={opacity} />
      </svg>
    );
  }
  return (
    <svg width={size * 0.7} height={size} viewBox="0 0 16 24" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
      <path d="M8 0L10 10L8 24L6 10Z" fill="currentColor" opacity={opacity} />
      <path d="M0 12L8 10L16 12L8 14Z" fill="currentColor" opacity={opacity * 0.7} />
    </svg>
  );
};

const SSCanvasShowcase = () => {
  return (
    <section id="produto" className="overflow-hidden relative">
      {/* Subtle stars background */}
      <div className="absolute inset-0 pointer-events-none text-primary">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.5 }}
          >
            <StarShape size={star.size} rotation={star.rotation} opacity={star.opacity} type={star.type} />
          </motion.div>
        ))}
      </div>

      <ContainerScroll
        titleComponent={
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Conheça o <span className="font-serif italic text-primary">Canvas</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
              O ambiente onde inspiração vira conteúdo.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-secondary">
          <img
            src="https://i.imgur.com/gHsvRkQ.png"
            alt="SocialSquare Canvas"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default SSCanvasShowcase;
