"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  behindCard,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  behindCard?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardTop, setCardTop] = React.useState(300);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const measure = () => {
      if (cardRef.current) setCardTop(cardRef.current.offsetTop);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      className="h-[40rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-20 overflow-hidden"
      ref={containerRef}
    >
      {behindCard && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-screen max-w-[100vw] overflow-hidden pointer-events-none"
          style={{ top: cardTop, height: `calc(100% - ${cardTop}px)` }}
        >
          {behindCard}
        </div>
      )}

      <div
        className="py-10 md:py-40 w-full relative"
        style={{ perspective: "1050px" }}
      >
        {titleComponent}
        <motion.div
          ref={cardRef}
          style={{
            rotateX: rotate,
            scale,
            boxShadow: "0 8px 40px hsl(220 20% 10% / 0.08), 0 2px 8px hsl(220 20% 10% / 0.04)",
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border border-border p-2 md:p-4 bg-card rounded-2xl relative z-10"
        >
          <div className="h-full w-full overflow-hidden rounded-xl bg-secondary">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
