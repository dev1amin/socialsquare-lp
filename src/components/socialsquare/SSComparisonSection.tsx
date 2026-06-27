import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  ThumbsDown,
  ThumbsUp,
  TrendingDown,
  TrendingUp,
  UserMinus,
  UserPlus,
} from "lucide-react";

const semNotifications = [
  { icon: ThumbsDown, text: "2 curtidas" },
  { icon: UserMinus, text: "-3 seguidores" },
  { icon: TrendingDown, text: "Alcance: 12" },
];

const comNotifications = [
  { icon: Heart, text: "847 curtidas" },
  { icon: UserPlus, text: "+126 seguidores" },
  { icon: TrendingUp, text: "Alcance: 12.4k" },
];

const semItems = [
  "A ideia some antes de virar post",
  "Tela em branco paralisa",
  "Apaga tudo — não ficou bom",
  "Inspiração existe, execução não",
  "Bloco de notas cheio, feed vazio",
];

const comItems = [
  "Captura a ideia → post pronto",
  "Nunca começa do zero",
  "Tom de voz consistente",
  "Criar flui naturalmente",
  "Link vira material publicável",
];

const shareSignals = [
  { icon: Share2, text: "1 compartilhamento", tone: "bad" as const },
  { icon: MessageCircle, text: "0 comentários", tone: "bad" as const },
  { icon: Share2, text: "93 compartilhamentos", tone: "good" as const },
  { icon: MessageCircle, text: "64 comentários", tone: "good" as const },
];

const SSComparisonSection = () => {
  const scrollToCTA = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById("assinar");
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="comparativo" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="eyebrow-chip">Comparativo</span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
            Por que você trava na hora de <span className="font-serif-display italic text-primary">criar conteúdo?</span>
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Não é falta de criatividade. É tentar construir um post começando do nada.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-[2rem] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                  <ThumbsDown className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-destructive">Sem SocialSquare</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {semNotifications.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-destructive/15 bg-destructive/5 px-3 py-1.5 text-xs font-medium text-destructive"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {semItems.map((text) => (
                <div
                  key={text}
                  className="rounded-[1.3rem] border border-destructive/10 bg-white/75 px-4 py-3.5"
                >
                  <p className="text-sm leading-relaxed text-foreground/65">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {shareSignals
                .filter((signal) => signal.tone === "bad")
                .map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {text}
                  </span>
                ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-destructive/12 bg-destructive/[0.04] px-4 py-5 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-destructive/70">Resultado típico</p>
              <p className="mt-3 text-4xl font-bold tracking-[-0.05em] text-destructive/80">0 posts</p>
              <p className="mt-1 text-sm text-muted-foreground">essa semana</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-panel rounded-[2rem] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Com SocialSquare</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {comNotifications.map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {comItems.map((text) => (
                <div
                  key={text}
                  className="rounded-[1.3rem] border border-primary/12 bg-white/82 px-4 py-3.5"
                >
                  <p className="text-sm leading-relaxed text-foreground/76">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {shareSignals
                .filter((signal) => signal.tone === "good")
                .map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/75 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    {text}
                  </span>
                ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-primary/12 bg-primary/[0.05] px-4 py-5 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">Resultado típico</p>
              <p className="mt-3 text-4xl font-bold tracking-[-0.05em] text-primary">7 posts</p>
              <p className="mt-1 text-sm text-muted-foreground">essa semana</p>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={scrollToCTA}
            className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground soft-shadow transition-all hover:bg-primary/92"
          >
            Ver na prática
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SSComparisonSection;
