import { motion } from "framer-motion";

const canvasHighlights = [
  "Capture o que te inspira",
  "O sistema transforma em conteúdo",
  "Você decide. Aprova. Publica.",
];

const SSCanvasShowcase = () => {
  return (
    <section id="produto" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-chip">Canvas</span>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
              Conheça o <span className="font-serif-display italic text-primary">Canvas</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              O ambiente onde inspiração vira conteúdo.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {canvasHighlights.map((item, index) => (
                <div
                  key={item}
                  className="surface-card rounded-[1.5rem] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-foreground/78">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute left-8 right-8 top-10 h-48 rounded-full bg-primary/15 blur-[90px]" />

            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-3 sm:p-4">
                <img
                  src="https://i.imgur.com/gHsvRkQ.png"
                  alt="SocialSquare Canvas"
                  className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-border/80 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Inspiração</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    Uma notícia, um vídeo, uma frase.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-border/80 bg-white/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Consistência</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    Toda vez que você entra, sai com conteúdo na mão.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SSCanvasShowcase;
