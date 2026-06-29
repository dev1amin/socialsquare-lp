"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import slide01 from "@/assets/slide_01.png";
import slide02 from "@/assets/slide_02.png";
import slide03 from "@/assets/slide_03.png";
import slide05 from "@/assets/hero-carousel/hero-slide-05.png";
import slide06 from "@/assets/hero-carousel/hero-slide-06.png";
import slide07 from "@/assets/hero-carousel/hero-slide-07.png";
import slide08 from "@/assets/hero-carousel/hero-slide-08.png";
import slide09 from "@/assets/hero-carousel/hero-slide-09.webp";

const rotatingPhrases = [
  "sem esfor\u00e7o.",
  "sem perder\ntempo.",
  "sem precisar ser criativo\ntodos os dias.",
];

const platformChips = ["Instagram", "LinkedIn", "TikTok"];

const heroSlides = [
  slide05,
  slide06,
  slide07,
  slide08,
  slide09,
  slide01,
  slide02,
  slide03,
];

const slideOffsets = [
  { rotate: "-4deg", y: 22 },
  { rotate: "3deg", y: 0 },
  { rotate: "-2deg", y: 30 },
  { rotate: "4deg", y: 10 },
];

function HeroGeometric() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [carouselTravel, setCarouselTravel] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTravel = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!viewport || !track) {
        return;
      }

      setCarouselTravel(Math.max(track.scrollWidth - viewport.clientWidth, 0));
    };

    updateTravel();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateTravel);

      return () => window.removeEventListener("resize", updateTravel);
    }

    const observer = new ResizeObserver(updateTravel);

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    window.addEventListener("load", updateTravel);

    return () => {
      observer.disconnect();
      window.removeEventListener("load", updateTravel);
    };
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
              {"Novo: Canvas j\u00e1 dispon\u00edvel"}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="mt-7 max-w-3xl text-balance text-[2.45rem] font-bold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-[4.2rem] lg:text-[5.35rem]"
            >
              <span className="block">{"Seu conte\u00fado a um"}</span>
              <span className="mt-2 block font-serif-display italic text-primary">
                {"clique de dist\u00e2ncia"}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16 }}
              className="mt-7 max-w-xl"
            >
              <p className="text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {"Transforme qualquer inspira\u00e7\u00e3o em conte\u00fado "}
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
                {"Come\u00e7ar gr\u00e1tis"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white/70 px-7 py-4 text-base font-medium text-muted-foreground transition-all hover:border-primary/25 hover:text-foreground"
              >
                {"Ver como funciona"}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="mt-5 text-sm text-muted-foreground/70"
            >
              {"7 dias gr\u00e1tis \u00b7 Sem cart\u00e3o \u00b7 Cancele quando quiser"}
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
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/12 to-transparent" />
              <div className="absolute inset-y-8 left-6 w-20 rounded-full bg-primary/10 blur-[60px]" />
              <div className="absolute inset-y-10 right-8 w-24 rounded-full bg-primary/12 blur-[72px]" />

              <div
                ref={viewportRef}
                className="relative aspect-square overflow-hidden rounded-[1.7rem] border border-white/80 bg-[linear-gradient(135deg,hsl(221_56%_10%),hsl(217_52%_14%)_42%,hsl(223_77%_59%)_100%)] p-4 sm:p-5"
              >
                <motion.div
                  ref={trackRef}
                  animate={carouselTravel > 0 ? { x: [0, -carouselTravel, 0] } : { x: 0 }}
                  transition={
                    carouselTravel > 0
                      ? { duration: 22, repeat: Infinity, ease: "easeInOut" }
                      : undefined
                  }
                  className="flex h-full w-max items-center gap-4 pr-8 sm:gap-5"
                >
                  {heroSlides.map((slide, index) => {
                    const offset = slideOffsets[index % slideOffsets.length];

                    return (
                      <div
                        key={`${slide}-${index}`}
                        className="w-[12.5rem] flex-none rounded-[1.6rem] border border-white/15 bg-white/10 p-2.5 shadow-[0_26px_70px_hsl(223_35%_10%_/_0.28)] backdrop-blur sm:w-[14.5rem]"
                        style={{
                          transform: `translateY(${offset.y}px) rotate(${offset.rotate})`,
                        }}
                      >
                        <img
                          src={slide}
                          alt={`Exemplo ${index + 1} de carrossel criado no SocialSquare`}
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                          className="aspect-[9/16] w-full rounded-[1.1rem] object-cover"
                        />
                      </div>
                    );
                  })}
                </motion.div>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[hsl(221_56%_10%)] via-[hsl(221_56%_10%_/_0.72)] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[hsl(223_77%_59%)] via-[hsl(223_77%_59%_/_0.5)] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[hsl(221_56%_9%_/_0.34)] to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HeroGeometric };
