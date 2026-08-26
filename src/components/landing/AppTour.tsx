import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  Download,
  Heart,
  Home,
  Image as ImageIcon,
  LayoutGrid,
  MessageCircle,
  MessageSquare,
  Newspaper,
  Search,
  Settings,
  Sparkles,
} from "lucide-react";
import logoSrc from "@/assets/socialsquare-logo.png";
import { COVERS, DECK, NEWS_DECK } from "./content";
import { Container, Eyebrow, Section } from "./primitives";

type TabId = "feed" | "noticias" | "editor" | "galeria";

const tabs: { id: TabId; label: string; blurb: string }[] = [
  {
    id: "feed",
    label: "Feed",
    blurb:
      "Os perfis que você acompanha, com as métricas de cada post ao lado. Achou um que funcionou? Vira carrossel seu.",
  },
  {
    id: "noticias",
    label: "Notícias",
    blurb:
      "O que saiu hoje no seu nicho, filtrado e datado. Publicar sobre o assunto do dia deixa de depender da sua memória.",
  },
  {
    id: "editor",
    label: "Editor",
    blurb:
      "Slide por slide: título, texto de apoio, imagem e enquadramento. O que você muda aparece na hora.",
  },
  {
    id: "galeria",
    label: "Galeria",
    blurb:
      "Tudo o que você gerou fica salvo. Baixe um slide, um carrossel inteiro ou a semana toda de uma vez.",
  },
];

const sidebar = [
  { icon: Home, label: "Início" },
  { icon: LayoutGrid, label: "Feed" },
  { icon: Newspaper, label: "Notícias" },
  { icon: ImageIcon, label: "Galeria" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Settings, label: "Ajustes" },
];

const activeNav: Record<TabId, string> = {
  feed: "Feed",
  noticias: "Notícias",
  editor: "Galeria",
  galeria: "Galeria",
};

const news = [
  {
    title: "Android deixou de ser só sistema. Agora, é plataforma de IA.",
    meta: "Tecnologia · há 2 horas",
    image: NEWS_DECK[0],
  },
  {
    title: "WhatsApp está prestes a quebrar as barreiras entre apps",
    meta: "Mercado · há 5 horas",
    image: NEWS_DECK[1],
  },
  {
    title: "O relatório que mudou como as marcas medem alcance",
    meta: "Social · ontem",
    image: NEWS_DECK[2],
  },
];

const editorFields = [
  { label: "Título", value: "O Coringa vai além do papel de vilão comum." },
  { label: "Texto de apoio", value: "Ele representa o caos, desafiando o Batman…" },
  { label: "Imagem de fundo", value: "coringa-quadrinhos.jpg" },
];

function Screen({ tab }: { tab: TabId }) {
  if (tab === "feed") {
    return (
      <div>
        <div className="flex items-center justify-between gap-3">
          <h4 className="h3">Feed</h4>
          <div className="flex gap-1.5">
            {["Todos", "Salvos"].map((chip, index) => (
              <span
                key={chip}
                className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                  index === 0 ? "bg-ink text-white" : "bg-cloud text-ink-2"
                }`}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,12rem)_1fr]">
          <div className="frame frame-45">
            <img
              src={COVERS[0]}
              alt="Post de um perfil monitorado"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-[12px] font-bold text-white">
                LO
              </span>
              <div>
                <p className="text-[14px] font-bold">@luan.oak</p>
                <p className="text-[12px] text-ink-3">perfil monitorado</p>
              </div>
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-sm border border-line">
              {[
                { icon: Heart, value: "12,4 mil" },
                { icon: MessageCircle, value: "318" },
                { icon: Bookmark, value: "2.106" },
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.value}
                    className={`px-3 py-2.5 ${index > 0 ? "border-l border-line" : ""}`}
                  >
                    <Icon className="h-3.5 w-3.5 text-ink-3" />
                    <p className="mt-1.5 text-[13px] font-semibold">
                      {metric.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-[13px] leading-relaxed text-ink-2">
              Corrosão e falhas críticas reveladas em inspeção na fábrica da Ypê.
              O laudo aponta seis pontos fora do padrão.
            </p>

            <span className="mt-auto inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full bg-blue px-6 text-[14px] font-semibold text-white">
              <Sparkles className="h-4 w-4" />
              Gerar carrossel
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (tab === "noticias") {
    return (
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="h3">Notícias</h4>
          <div className="flex h-11 items-center gap-2.5 rounded-full border border-line bg-paper px-4 sm:w-[15rem]">
            <Search className="h-4 w-4 flex-none text-ink-3" />
            <span className="text-[14px] text-ink-3">Buscar notícias</span>
          </div>
        </div>

        <ul className="mt-4">
          {news.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-4 border-b border-line py-4 last:border-b-0"
            >
              <div className="h-16 w-16 flex-none overflow-hidden rounded-sm bg-ink">
                <img src={item.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold leading-snug">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] text-ink-3">{item.meta}</p>
              </div>
              <span className="hidden h-10 flex-none items-center rounded-full bg-blue/10 px-4 text-[13px] font-semibold text-blue sm:inline-flex">
                Gerar
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (tab === "editor") {
    return (
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div>
          <div className="frame frame-45 mx-auto max-w-[15rem]">
            <img src={DECK[1]} alt="Slide aberto no editor" loading="lazy" className="h-full w-full object-cover" />
          </div>

          <div className="no-scrollbar mt-4 flex justify-center gap-2 overflow-x-auto">
            {DECK.map((slide, index) => (
              <div
                key={slide}
                className={`h-16 w-[3.2rem] flex-none overflow-hidden rounded-sm ${
                  index === 1 ? "ring-2 ring-blue ring-offset-2" : "opacity-60"
                }`}
              >
                <img src={slide} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {editorFields.map((field) => (
            <div key={field.label} className="rounded-sm border border-line bg-paper px-4 py-3">
              <p className="text-[12px] font-semibold text-ink-3">{field.label}</p>
              <p className="mt-1 truncate text-[14px]">{field.value}</p>
            </div>
          ))}
          <span className="mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 text-[14px] font-semibold text-white">
            <Download className="h-4 w-4" />
            Baixar slides
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="h3">Galeria</h4>
        <span className="text-[13px] text-ink-3">24 carrosséis salvos</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {COVERS.map((cover, index) => (
          <div key={cover} className="frame frame-45">
            <img
              src={cover}
              alt={`Carrossel salvo ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const AppTour = () => {
  const [tab, setTab] = useState<TabId>("feed");
  const current = tabs.find((item) => item.id === tab)!;

  return (
    <Section id="app" className="bg-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow tone="violet">Dentro do app</Eyebrow>
            <h2 className="h2 mt-6 max-w-[14ch]">
              Quatro telas fazem{" "}
              <span className="text-gradient">o trabalho todo.</span>
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-relaxed text-ink-2">
            Nenhuma delas pede que você escreva um prompt. Você clica no que já
            existe e o carrossel aparece na galeria.
          </p>
        </div>

        {/* Chips roláveis: no celular a navegação também é polegar. */}
        <div className="no-scrollbar -mx-[var(--gutter)] mt-10 flex gap-2 overflow-x-auto px-[var(--gutter)] md:mx-0 md:mt-12 md:px-0">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              aria-pressed={tab === item.id}
              className={`h-11 flex-none whitespace-nowrap rounded-full px-5 text-[14px] font-semibold transition-colors ${
                tab === item.id
                  ? "bg-ink text-white"
                  : "border border-line bg-white text-ink-2 hover:border-ink-3/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-2">
          {current.blurb}
        </p>

        {/* Moldura: raio externo 24, padding 8 → raio interno 16. */}
        <div className="mt-6 rounded-lg border border-line bg-paper p-2 shadow-float">
          <div className="overflow-hidden rounded-md bg-white">
            <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="ml-3 truncate rounded-full bg-white px-3 py-1 text-[12px] text-ink-3">
                socialsquare.com.br
              </span>
            </div>

            <div className="flex">
              <nav className="hidden w-[11.5rem] flex-none border-r border-line bg-paper p-3 lg:block">
                <div className="flex items-center gap-2 px-2 py-2">
                  <img src={logoSrc} alt="" className="h-5 w-5" />
                  <span className="text-[13px] font-bold tracking-[-0.02em]">
                    SocialSquare
                  </span>
                </div>

                <ul className="mt-4 space-y-1">
                  {sidebar.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav[tab] === item.label;

                    return (
                      <li key={item.label}>
                        <span
                          className={`flex items-center gap-2.5 rounded-sm px-3 py-2.5 text-[13px] ${
                            isActive
                              ? "bg-blue/10 font-semibold text-blue"
                              : "text-ink-2"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="min-w-0 flex-1 p-5 md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Screen tab={tab} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AppTour;
