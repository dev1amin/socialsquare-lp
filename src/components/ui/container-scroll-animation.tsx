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
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      {/* Full-viewport-width backdrop clipped exactly to card height */}
      {behindCard && (
        <div
          className="absolute left-0 w-screen overflow-hidden pointer-events-none"
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
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#4167B2]/30 p-2 md:p-6 bg-[#f8faff] rounded-[30px] shadow-2xl relative z-10"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-background md:rounded-2xl">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
