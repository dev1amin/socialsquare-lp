import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Globe,
  Grid,
  Heart,
  Home,
  Image as ImageIcon,
  Layers,
  MessageCircle,
  Minus,
  Newspaper,
  Plus,
  Redo2,
  Search,
  Send,
  Sparkles,
  Type,
  Undo2,
} from "lucide-react";
import logoSrc from "@/assets/socialsquare-logo.png";
import { COVERS, DECK, NEWS_DECK } from "./content";
import { Container, Eyebrow, Section } from "./primitives";

/**
 * Réplica da interface real do SocialSquare — mesma barra lateral, mesmos
 * rótulos, mesmas cores (#1F3A5F e #4167B2) e o mesmo editor que aparece
 * na gravação do topo. Construída em HTML para ficar nítida em qualquer
 * tela e fácil de atualizar quando o produto mudar.
 */

type TabId = "inicio" | "feed" | "noticias" | "editor" | "galeria";

const tabs: { id: TabId; label: string; blurb: string }[] = [
  {
    id: "inicio",
    label: "Início",
    blurb:
      "A tela que abre quando você entra: uma linha de texto e o carrossel começa a ser montado.",
  },
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
      "Slide por slide: fonte, texto, imagem e enquadramento. Tudo o que você muda aparece no preview na hora.",
  },
  {
    id: "galeria",
    label: "Galeria",
    blurb:
      "Tudo o que você gerou fica salvo. Baixe um slide, um carrossel inteiro ou a semana toda de uma vez.",
  },
];

const railItems: { icon: typeof Home; label: string; tab: TabId }[] = [
  { icon: Home, label: "Início", tab: "inicio" },
  { icon: Grid, label: "Feed", tab: "feed" },
  { icon: Plus, label: "Criar", tab: "inicio" },
  { icon: Newspaper, label: "Notícias", tab: "noticias" },
  { icon: ImageIcon, label: "Galeria", tab: "galeria" },
  { icon: Layers, label: "Editor", tab: "editor" },
];

const NAVY = "#1F3A5F";
const BLUE = "#4167B2";

/* ------------------------------------------------------------------ */
/* Telas                                                               */
/* ------------------------------------------------------------------ */

function HomeScreen() {
  const quickActions = ["Feed", "Notícias", "Galeria", "Criar do zero"];

  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h4
          className="text-[22px] font-bold leading-tight sm:text-[30px]"
          style={{ color: NAVY }}
        >
          Olá, <span style={{ color: BLUE }}>Luan</span> 👋
        </h4>
        <p className="mt-2 text-[13px] text-gray-500 sm:text-[15px]">
          Crie carrosséis incríveis para suas redes sociais em segundos
        </p>

        {/* Campo de criação, igual ao do app */}
        <div className="mt-7 flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-md">
          <span
            className="flex h-9 w-9 flex-none items-center justify-center rounded-xl"
            style={{ backgroundColor: `${BLUE}1a` }}
          >
            <Sparkles className="h-4 w-4" style={{ color: BLUE }} />
          </span>
          <span className="flex-1 truncate text-left text-[13px] text-gray-400">
            Ex: Crie um carrossel sobre dicas de produtividade...
          </span>
          <span className="hidden flex-none items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-2 text-[12px] font-medium text-gray-500 sm:flex">
            <Globe className="h-3.5 w-3.5" />
            Buscar na web
          </span>
          <span
            className="flex flex-none items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Criar</span>
          </span>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {quickActions.map((action) => (
            <span
              key={action}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-600 shadow-sm"
            >
              {action}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm sm:p-7">
        <div className="flex items-center justify-between">
          <h5 className="text-[16px] font-bold text-gray-900 sm:text-[19px]">
            Seus Carrosséis
          </h5>
          <span className="text-[12px] text-gray-400">24 salvos</span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COVERS.slice(0, 4).map((cover, index) => (
            <div key={cover} className="frame frame-45">
              <img
                src={cover}
                alt={`Carrossel ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedScreen() {
  return (
    <div className="p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-[20px] font-bold text-gray-900">Feed</h4>
        <div className="flex gap-1.5">
          {["Todos", "Salvos"].map((chip, index) => (
            <span
              key={chip}
              className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                index === 0
                  ? "text-white"
                  : "border border-gray-200 bg-white text-gray-500"
              }`}
              style={index === 0 ? { backgroundColor: NAVY } : undefined}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,13rem)_1fr]">
        <div className="frame frame-45">
          <img
            src={COVERS[0]}
            alt="Post de um perfil monitorado"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold text-white"
              style={{ backgroundColor: NAVY }}
            >
              LO
            </span>
            <div>
              <p className="text-[14px] font-bold text-gray-900">@luan.oak</p>
              <p className="text-[12px] text-gray-400">perfil monitorado</p>
            </div>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
            {[
              { icon: Heart, value: "12,4 mil", label: "curtidas" },
              { icon: MessageCircle, value: "318", label: "comentários" },
              { icon: Bookmark, value: "2.106", label: "salvamentos" },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.value}
                  className={`px-3 py-3 ${index > 0 ? "border-l border-gray-200" : ""}`}
                >
                  <Icon className="h-3.5 w-3.5 text-gray-400" />
                  <p className="mt-1.5 text-[14px] font-bold text-gray-900">
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-gray-400">{metric.label}</p>
                </div>
              );
            })}
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
              Descrição
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">
              Corrosão e falhas críticas reveladas em inspeção na fábrica da Ypê.
              O laudo aponta seis pontos fora do padrão.
            </p>
          </div>

          <div className="mt-auto flex items-center gap-2">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <ChevronLeft className="h-5 w-5" />
            </span>
            <span
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-[14px] font-semibold text-white"
              style={{ backgroundColor: BLUE }}
            >
              <Sparkles className="h-4 w-4" />
              Gerar Carrossel
            </span>
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gray-100 text-gray-500">
              <ChevronRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function NewsScreen() {
  return (
    <div className="p-5 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-[20px] font-bold text-gray-900">Notícias</h4>
        <div className="flex h-11 items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 sm:w-[16rem]">
          <Search className="h-4 w-4 flex-none text-gray-400" />
          <span className="text-[13px] text-gray-400">Buscar notícias...</span>
        </div>
      </div>

      <ul className="mt-2">
        {news.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-4 border-b border-gray-200 py-4 last:border-b-0"
          >
            <div className="h-16 w-16 flex-none overflow-hidden rounded-xl bg-gray-900">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold leading-snug text-gray-900">
                {item.title}
              </p>
              <p className="mt-1 text-[12px] text-gray-400">{item.meta}</p>
            </div>
            <span
              className="hidden h-10 flex-none items-center rounded-full px-4 text-[13px] font-semibold text-white sm:inline-flex"
              style={{ backgroundColor: BLUE }}
            >
              Gerar Carrossel
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const slidePanel = [
  { kind: "COVER", caption: "As piores coisas que o Coringa já fez." },
  { kind: "CONTENT", caption: "O Coringa vai além do papel de vilão comum." },
  { kind: "CONTENT", caption: "Um dos momentos mais chocantes da série." },
];

/** Réplica do editor — a mesma tela da gravação lá em cima. */
function EditorScreen() {
  return (
    <div className="flex h-[30rem] text-gray-900 sm:h-[34rem]">
      {/* Painel de slides */}
      <div className="hidden w-[11.5rem] flex-none flex-col border-r border-gray-200 bg-white md:flex">
        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2.5">
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-700">
            Slides
            <span className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
              6
            </span>
          </span>
          <ChevronLeft className="h-3.5 w-3.5 text-gray-400" />
        </div>

        <div className="flex-1 space-y-2 overflow-hidden p-2">
          {slidePanel.map((slide, index) => (
            <div
              key={slide.caption}
              className={`rounded-lg border bg-white p-1.5 ${
                index === 0 ? "border-blue-400" : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between px-0.5 pb-1.5">
                <span className="flex items-center gap-1">
                  <span className="rounded bg-gray-100 px-1 text-[8px] font-bold text-gray-500">
                    {index + 1}
                  </span>
                  <span className="text-[8px] font-bold tracking-wide text-gray-400">
                    {slide.kind}
                  </span>
                </span>
                <span className="h-2.5 w-2.5 rounded-sm bg-emerald-500/80" />
              </div>
              <div className="overflow-hidden rounded bg-gray-900">
                <img
                  src={DECK[index]}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <p className="mt-1.5 line-clamp-2 px-0.5 text-[8px] leading-tight text-gray-500">
                {slide.caption}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-2">
          <span className="flex h-8 w-full items-center justify-center gap-1.5 rounded-lg bg-gray-100 text-[11px] font-medium text-gray-600">
            <ChevronLeft className="h-3 w-3" />
            Voltar ao Setup
          </span>
        </div>
      </div>

      {/* Área central */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3 py-2.5">
          <span className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4 text-gray-400" />
            <span className="text-[12px] font-semibold text-gray-700">
              Slide 1/6
            </span>
          </span>

          <span className="flex items-center gap-2">
            <Undo2 className="h-4 w-4 text-gray-300" />
            <Redo2 className="h-4 w-4 text-gray-300" />
            <span className="flex h-8 items-center gap-1.5 rounded-lg bg-emerald-600 px-3 text-[12px] font-semibold text-white">
              <Download className="h-3.5 w-3.5" />
              Baixar
              <ChevronDown className="h-3 w-3" />
            </span>
          </span>
        </div>

        <div className="flex gap-1.5 border-b border-gray-200 bg-white px-3 py-2">
          {[
            { label: "Slides", icon: Layers, active: true },
            { label: "Editar", icon: Type, active: false },
            { label: "Propriedades", icon: Sparkles, active: false },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <span
                key={tab.label}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${
                  tab.active ? "bg-blue-50 text-blue-700" : "text-gray-500"
                }`}
              >
                <Icon className="h-3 w-3" />
                {tab.label}
              </span>
            );
          })}
        </div>

        {/* Prancheta */}
        <div className="relative flex flex-1 items-center justify-center bg-[#EFEFEF] p-6">
          <div className="frame frame-45 w-[10.5rem] max-w-full sm:w-[12.5rem]">
            <img
              src={DECK[0]}
              alt="Slide aberto no editor do SocialSquare"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
            <Minus className="h-3 w-3 text-gray-400" />
            <span className="text-[11px] font-medium text-gray-600">50%</span>
            <Plus className="h-3 w-3 text-gray-400" />
          </span>
        </div>
      </div>

      {/* Painel de propriedades */}
      <div className="hidden w-[13rem] flex-none flex-col border-l border-gray-200 bg-white lg:flex">
        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2.5">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700">
            <Sparkles className="h-3 w-3 text-gray-400" />
            Configurações Globais
          </span>
          <ChevronRight className="h-3 w-3 text-gray-400" />
        </div>

        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-2.5">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700">
            <Type className="h-3 w-3 text-gray-400" />
            Configurações do Slide
          </span>
          <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-600">
            F1
          </span>
        </div>

        <div className="space-y-3 p-3">
          <div>
            <p className="text-[10px] text-gray-500">Fonte do Slide</p>
            <span className="mt-1 flex h-8 items-center justify-between rounded-md border border-gray-200 px-2 text-[11px] text-gray-700">
              Fonte padrão do template
              <ChevronDown className="h-3 w-3 text-gray-400" />
            </span>
          </div>

          <div>
            <p className="text-[10px] text-gray-500">Fonte do Texto Selecionado</p>
            <span className="mt-1 flex h-8 items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-2 text-[11px] text-gray-400">
              Fonte padrão do template
              <ChevronDown className="h-3 w-3 text-gray-300" />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <Type className="h-6 w-6 text-gray-300" />
          <p className="mt-2 text-[11px] font-medium text-gray-500">
            Selecione um elemento
          </p>
          <p className="mt-1 text-[10px] leading-snug text-gray-400">
            Clique em um elemento no preview para editar
          </p>
        </div>
      </div>
    </div>
  );
}

function GalleryScreen() {
  return (
    <div className="p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <h4 className="text-[20px] font-bold text-gray-900">Galeria</h4>
        <div className="flex gap-1.5">
          {["Recentes", "Por template"].map((chip, index) => (
            <span
              key={chip}
              className={`rounded-full px-3 py-1.5 text-[12px] font-semibold ${
                index === 0
                  ? "text-white"
                  : "border border-gray-200 bg-white text-gray-500"
              }`}
              style={index === 0 ? { backgroundColor: NAVY } : undefined}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {[...COVERS, ...DECK.slice(0, 6)].slice(0, 12).map((cover, index) => (
          <div key={`${cover}-${index}`} className="frame frame-45">
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

const screens: Record<TabId, () => JSX.Element> = {
  inicio: HomeScreen,
  feed: FeedScreen,
  noticias: NewsScreen,
  editor: EditorScreen,
  galeria: GalleryScreen,
};

/* ------------------------------------------------------------------ */

const AppTour = () => {
  const [tab, setTab] = useState<TabId>("editor");
  const Screen = screens[tab];
  const current = tabs.find((item) => item.id === tab)!;

  return (
    <Section id="app" className="bg-white">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow tone="violet">Dentro do app</Eyebrow>
            <h2 className="h2 mt-6 max-w-[14ch]">
              Cinco telas fazem{" "}
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
            <div className="flex items-center gap-2 border-b border-gray-200 bg-[#FAFBFD] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
              <span className="ml-3 truncate rounded-full bg-white px-3 py-1 text-[12px] text-ink-3">
                socialsquare.com.br
              </span>
            </div>

            <div className="flex">
              {/* Barra lateral de ícones, como no app */}
              <nav className="hidden w-[3.75rem] flex-none flex-col items-center justify-between border-r border-gray-200 bg-white py-3 sm:flex">
                <div className="flex flex-col items-center gap-1">
                  <img src={logoSrc} alt="" className="mb-2 h-6 w-6" />

                  {railItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.tab === tab && item.label !== "Criar";

                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setTab(item.tab)}
                        className="relative flex w-full flex-col items-center gap-0.5 rounded-lg px-1 py-1.5"
                      >
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                            isActive ? "bg-blue-50 text-blue-600" : "text-gray-400"
                          }`}
                        >
                          <Icon className="h-[15px] w-[15px]" />
                        </span>
                        <span
                          className={`text-[8px] ${
                            isActive ? "font-semibold text-blue-600" : "text-gray-400"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.label === "Editor" ? (
                          <span className="absolute right-1.5 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 text-[7px] font-bold text-white">
                            1
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: NAVY }}
                  >
                    LU
                  </span>
                  <span className="text-[8px] text-gray-400">luan</span>
                </div>
              </nav>

              <div className="min-w-0 flex-1 bg-[#FBFCFE]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    <Screen />
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
