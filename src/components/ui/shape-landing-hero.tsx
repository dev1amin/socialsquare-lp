"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="rounded-full bg-gradient-to-r from-glow-cyan/[0.08] to-glow-blue/[0.06] border border-glow-cyan/[0.08] backdrop-blur-[2px]"
      />
    </motion.div>
  );
}

const rotatingPhrases = [
  "sem esforço.",
  "sem perder tempo.",
  "sem precisar ser criativo todos os dias.",
];

function HeroGeometric({
  badge = "SocialSquare",
  title1 = "Seu conteúdo a um",
  title2 = "clique de distância",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 hero-glow" />

      <ElegantShape className="-left-32 top-[15%]" width={600} height={140} rotate={12} delay={0.3} />
      <ElegantShape className="-right-32 top-[20%]" width={500} height={120} rotate={-15} delay={0.5} />
      <ElegantShape className="left-[15%] bottom-[15%]" width={300} height={80} rotate={-8} delay={0.4} />
      <ElegantShape className="right-[20%] bottom-[20%]" width={200} height={60} rotate={20} delay={0.6} />

      {/* Extra shapes */}
      <ElegantShape className="left-[40%] top-[10%]" width={150} height={40} rotate={25} delay={0.7} />
      <ElegantShape className="right-[5%] top-[50%]" width={250} height={70} rotate={-20} delay={0.8} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-glow-cyan/20 text-foreground/60 backdrop-blur-sm">
            {badge}
          </span>
        </motion.div>

        <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mt-8">
            <span className="text-foreground">{title1}</span>
            <br />
            <span className="gradient-text">{title2}</span>
          </h1>
        </motion.div>

        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Transforme qualquer inspiração em conteúdo{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={phraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="gradient-text font-semibold inline-block"
            >
              {rotatingPhrases[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.p>

        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-10">
          <a
            href="#assinar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-box"
          >
            Assinar agora
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export { HeroGeometric };
