"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import slide01 from "@/assets/slide_01.png";

const rotatingPhrases = [
  "sem esforço.",
  "sem perder\ntempo.",
  "sem precisar ser criativo\ntodos os dias.",
];

const proofCards = [
  { value: "5s", label: "Conversão instantânea", detail: "tempo médio" },
  { value: "100%", label: "Tom de voz único", detail: "seu" },
];

const platformChips = ["Instagram", "LinkedIn", "TikTok"];

function HeroGeometric() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="grid-backdrop absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-5rem] top-[14rem] h-48 w-48 rounded-full bg-primary/10 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="eyebrow-chip"
            >
              Novo: Canvas já disponível
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="mt-7 max-w-3xl text-balance text-[2.45rem] font-bold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[4.2rem] lg:text-[5.35rem]"
            >
              <span className="block">Seu conteúdo a um</span>
              <span className="mt-2 block font-serif-display italic text-primary">clique de distância</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-7 max-w-xl"
            >
              <p className="text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Transforme qualquer inspiração em conteúdo{" "}
                <span className="inline-block align-top">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={phraseIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                      className="inline-block whitespace-pre-line font-semibold text-foreground"
                    >
                      {rotatingPhrases[phraseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#assinar"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground soft-shadow transition-all hover:bg-primary/92"
              >
                Começar grátis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white/70 px-7 py-4 text-base font-medium text-muted-foreground transition-all hover:border-primary/25 hover:text-foreground"
              >
                Ver como funciona
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-5 text-sm text-muted-foreground/70"
            >
              7 dias grátis · Sem cartão · Cancele quando quiser
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {platformChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/80 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-foreground/75"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="relative mx-auto w-full max-w-full sm:max-w-[35rem] lg:ml-auto"
          >
            <div className="absolute inset-x-8 top-10 hidden h-56 rounded-full bg-primary/15 blur-[90px] sm:block" />

            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/10 to-transparent" />

              <div className="relative flex items-center justify-between rounded-[1.4rem] border border-white/80 bg-white/75 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Canvas</p>
                  <p className="mt-1 text-sm font-medium text-foreground/70">O ambiente onde inspiração vira conteúdo.</p>
                </div>
                <div className="hidden rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex">
                  SocialSquare
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-border/80 bg-slate-950 p-3">
                <img
                  src={slide01}
                  alt="Prévia de carrossel criado no SocialSquare"
                  className="aspect-[1.08/1] w-full rounded-[1rem] object-cover"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {proofCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[1.4rem] border border-border/80 bg-white/80 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold tracking-[-0.04em] text-foreground">{card.value}</p>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{card.detail}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-foreground">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-[1.4rem] border border-white/75 bg-white/80 px-4 py-3 shadow-[0_22px_45px_hsl(223_30%_16%_/_0.1)] backdrop-blur sm:left-auto sm:right-6 sm:w-72">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Como funciona</p>
              <p className="mt-2 text-sm font-medium text-foreground">3 passos. Um clique. Conteúdo.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HeroGeometric };
