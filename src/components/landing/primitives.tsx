import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Peças base da landing. Um único tamanho de botão, um único contêiner,
 * um único ritmo de seção — para que nenhuma tela invente exceção.
 */

/** Coluna de conteúdo: 1280px em toda a página, inclusive na barra. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-content px-[var(--gutter)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Banda de seção. O respiro cresce com a tela, nunca por seção. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28 lg:py-32", className)}>
      {children}
    </section>
  );
}

/** Etiqueta de seção: pílula colorida, sempre do tamanho do texto. */
export function Eyebrow({
  children,
  tone = "blue",
  className,
}: {
  children: ReactNode;
  tone?: "blue" | "violet" | "sun" | "light";
  className?: string;
}) {
  const tones = {
    blue: "bg-blue/10 text-blue",
    violet: "bg-violet/12 text-violet",
    sun: "bg-sun/25 text-[#7A5504]",
    light: "bg-white/15 text-white",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5",
        "text-[13px] font-semibold leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  onClick?: () => void;
};

/**
 * Um tamanho só: 52px de altura, rótulo em uma linha, sem encolher.
 * A hierarquia vem da variante, nunca do tamanho da caixa.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue text-white shadow-blue hover:bg-blue-deep active:translate-y-px",
    secondary:
      "bg-white text-ink border border-line hover:border-ink-3/50 active:translate-y-px",
    light:
      "bg-white text-ink hover:bg-white/90 active:translate-y-px",
  } as const;

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex h-[52px] flex-none items-center justify-center gap-2 whitespace-nowrap",
        "rounded-full px-7 text-[15px] font-semibold transition-all duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Entrada suave ao rolar; quem pede menos movimento recebe estático. */
export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Cabeçalho de seção: etiqueta, título e (opcional) linha de apoio. */
export function SectionHead({
  eyebrow,
  tone,
  title,
  lead,
  align = "start",
  className,
}: {
  eyebrow: string;
  tone?: "blue" | "violet" | "sun";
  title: ReactNode;
  lead?: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto flex flex-col items-center text-center" : "flex flex-col",
        className,
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="h2 mt-6 max-w-[16ch]">{title}</h2>
      {lead ? (
        <p className={cn("lead", align === "center" && "mx-auto")}>{lead}</p>
      ) : null}
    </div>
  );
}
