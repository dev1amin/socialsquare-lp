"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const rotatingPhrases = [
  "sem esforço.",
  "sem perder\ntempo.",
  "sem precisar ser criativo\ntodos os dias.",
];

function HeroGeometric() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(220 20% 10%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 20% 10%) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Soft brand glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-light/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-light text-primary border border-brand-medium">
            Novo: Canvas já disponível
          </span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 text-balance">
          <span className="block text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-foreground leading-[1.08]">
            Seu conteúdo a um
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-[4.5rem] font-serif italic text-primary leading-[1.08] mt-1">
            clique de distância
          </span>
        </motion.h1>

        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 max-w-xl mx-auto">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Transforme qualquer inspiração em conteúdo
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-foreground font-semibold inline-block whitespace-pre-line"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </p>
        </motion.div>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#assinar"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all soft-shadow"
          >
            Começar grátis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-muted-foreground font-medium text-base hover:text-foreground hover:bg-secondary transition-all"
          >
            Ver como funciona
          </a>
        </motion.div>

        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-5 text-xs text-muted-foreground/60">
          7 dias grátis · Sem cartão · Cancele quando quiser
        </motion.p>
      </div>
    </div>
  );
}

export { HeroGeometric };
