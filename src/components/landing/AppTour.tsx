import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BatteryFull,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Edit3,
  Eye,
  Globe,
  Grid,
  Heart,
  Home,
  Image as ImageIcon,
  Layers,
  MessageCircle,
  Minus,
  MoreVertical,
  Newspaper,
  Plus,
  PlusCircle,
  Redo2,
  RefreshCw,
  Search,
  Send,
  Settings,
  Settings2,
  Share2,
  Signal,
  Sparkles,
  Trash2,
  TrendingUp,
  Trophy,
  Type,
  Undo2,
  User,
  Wifi,
} from "lucide-react";
import logoSrc from "@/assets/socialsquare-logo.png";
import { COVERS, DECK } from "./content";
import { Container, Eyebrow, Section } from "./primitives";

/**
 * Réplica da interface real do SocialSquare — mesmos rótulos, mesmas cores
 * (#4167B2 / #1F3A5F) e os mesmos dois layouts que o produto tem: a barra
 * lateral de 80px no navegador e a barra inferior de 64px no celular.
 * Feita em HTML para ficar nítida em qualquer tela e acompanhar o produto.
 */

type TabId = "inicio" | "feed" | "noticias" | "editor" | "galeria";
type ScreenProps = { phone?: boolean };

const NAVY = "#1F3A5F";
const BLUE = "#4167B2";
const BLUE_LIGHT = "#AEC3E7";

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
      "Os perfis que você acompanha, ordenados por engajamento real. Achou um post que funcionou? Vira carrossel seu.",
  },
  {
    id: "noticias",
    label: "Notícias",
    blurb:
      "O que saiu hoje no seu nicho, com busca e atualização diária. Publicar sobre o assunto do dia deixa de depender da sua memória.",
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

const navItems: { icon: typeof Home; label: string; tab: TabId }[] = [
  { icon: Home, label: "Início", tab: "inicio" },
  { icon: Grid, label: "Feed", tab: "feed" },
  { icon: PlusCircle, label: "Criar", tab: "inicio" },
  { icon: Newspaper, label: "Notícias", tab: "noticias" },
  { icon: ImageIcon, label: "Galeria", tab: "galeria" },
  { icon: Layers, label: "Editor", tab: "editor" },
];

/* ================================================================== */
/* Início                                                              */
/* ================================================================== */

function HomeScreen({ phone }: ScreenProps) {
  const quickActions = ["Feed", "Notícias", "Galeria", "Criar do zero"];

  return (
    <div className={phone ? "px-4 py-6" : "px-8 py-12"}>
      <div className="mx-auto max-w-2xl text-center">
        <h4
          className={`font-bold leading-tight ${phone ? "text-[21px]" : "text-[30px]"}`}
          style={{ color: NAVY }}
        >
          Olá, <span style={{ color: BLUE }}>Luan</span> 👋
        </h4>
        <p
          className={`text-gray-500 ${phone ? "mt-1.5 text-[12px]" : "mt-2 text-[15px]"}`}
        >
          Crie carrosséis incríveis para suas redes sociais em segundos
        </p>

        <div
          className={`flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-md ${
            phone ? "mt-5" : "mt-7"
          }`}
        >
          <span
            className="flex h-9 w-9 flex-none items-center justify-center rounded-xl"
            style={{ backgroundColor: BLUE + "1a" }}
          >
            <Sparkles className="h-4 w-4" style={{ color: BLUE }} />
          </span>
          <span className="flex-1 truncate text-left text-[12px] text-gray-400 sm:text-[13px]">
            Ex: Crie um carrossel sobre dicas de produtividade...
          </span>
          {phone ? null : (
            <span className="flex flex-none items-center gap-1.5 rounded-xl bg-gray-100 px-3 py-2 text-[12px] font-medium text-gray-500">
              <Globe className="h-3.5 w-3.5" />
              Buscar na web
            </span>
          )}
          <span
            className="flex flex-none items-center gap-1.5 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            <Send className="h-4 w-4" />
            {phone ? null : <span>Criar</span>}
          </span>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 ${phone ? "mt-4" : "mt-6"}`}
        >
          {quickActions.map((action) => (
            <span
              key={action}
              className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[12px] font-medium text-gray-600 shadow-sm sm:px-4 sm:py-2 sm:text-[13px]"
            >
              {action}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white/80 shadow-sm ${
          phone ? "mt-6 p-4" : "mt-10 p-7"
        }`}
      >
        <div className="flex items-center justify-between">
          <h5
            className={`font-bold text-gray-900 ${phone ? "text-[15px]" : "text-[19px]"}`}
          >
            Seus Carrosséis
          </h5>
          <span className="text-[12px] text-gray-400">24 salvos</span>
        </div>

        <div
          className={`mt-4 grid gap-3 ${phone ? "grid-cols-3" : "grid-cols-4"}`}
        >
          {COVERS.slice(0, phone ? 3 : 4).map((cover, index) => (
            <div
              key={cover}
              className="aspect-[4/5] overflow-hidden rounded-lg bg-gray-900"
            >
              <img
                src={cover}
                alt={"Carrossel " + (index + 1)}
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

/* ================================================================== */
/* Feed                                                                */
/* ================================================================== */

const posts = [
  {
    likes: "12,4 mil",
    comments: "318",
    shares: "214",
    time: "2h ago",
    image: COVERS[0],
  },
  {
    likes: "9,1 mil",
    comments: "204",
    shares: "163",
    time: "5h ago",
    image: COVERS[1],
  },
  {
    likes: "7,8 mil",
    comments: "147",
    shares: "121",
    time: "9h ago",
    image: COVERS[2],
  },
];

function PostCard({
  post,
  rank,
  phone,
}: {
  post: (typeof posts)[number];
  rank: number;
  phone?: boolean;
}) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-between border-b border-gray-100 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1">
            <Heart className="h-3.5 w-3.5 fill-current" style={{ color: "rgb(255,0,0)" }} />
            <span className="text-[12px] font-bold text-gray-400">{post.likes}</span>
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle
              className="h-3.5 w-3.5 fill-current"
              style={{ color: "rgb(0,171,63)" }}
            />
            <span className="text-[12px] font-bold text-gray-400">{post.comments}</span>
          </span>
          <span className="flex items-center gap-1">
            <Share2
              className="h-3.5 w-3.5 fill-current"
              style={{ color: "rgb(59,130,246)" }}
            />
            <span className="text-[12px] font-bold text-gray-400">{post.shares}</span>
          </span>
        </div>
        <span className="text-[11px] font-bold text-gray-400">{post.time}</span>
      </div>

      <div
        className={`relative w-full overflow-hidden bg-gray-900 ${
          phone ? "pb-[105%]" : "pb-[140%]"
        }`}
      >
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {rank === 0 ? (
          <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900/80 text-white backdrop-blur-sm">
            <Trophy className="h-4 w-4" />
          </span>
        ) : null}
      </div>

      <div className="flex gap-2 border-t border-gray-100 p-3">
        <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 text-[13px] font-medium text-gray-900">
          Salvar
        </span>
        <span className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-[13px] font-medium text-white shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
          Gerar
        </span>
      </div>
    </div>
  );
}

function FeedScreen({ phone }: ScreenProps) {
  return (
    <div className={phone ? "px-4 py-5" : "px-8 py-9"}>
      <h4
        className={`text-center font-bold text-dark ${phone ? "text-[21px]" : "text-[34px]"}`}
        style={{ color: "#222222" }}
      >
        Seu Feed Personalizado
      </h4>

      <div
        className={`rounded-3xl border border-white/50 bg-white/40 shadow-xl backdrop-blur-md ${
          phone ? "mt-4 p-3" : "mt-7 p-7"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          {phone ? null : (
            <p className="text-[18px] font-medium text-gray-600">
              Aqui está o seu feed de posts!
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-white px-3 py-2 text-[13px] font-medium text-gray-800">
              🖼️ Carrosséis
              <ChevronDown className="h-3.5 w-3.5 text-gray-600" />
            </span>
            <span className="flex items-center gap-2 rounded-lg border-2 border-green-500 bg-white px-3 py-2 text-[13px] font-medium text-gray-800">
              <RefreshCw className="h-4 w-4 text-green-500" />
              Atualizar
            </span>
            {phone ? null : (
              <span className="flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-white px-3 py-2 text-[13px] font-medium text-gray-800">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                Maior engajamento
                <ChevronDown className="h-3.5 w-3.5 text-gray-600" />
              </span>
            )}
          </div>
        </div>

        <div
          className={`grid gap-4 ${phone ? "mt-3 grid-cols-1" : "mt-5 grid-cols-3"}`}
        >
          {posts.slice(0, phone ? 1 : 3).map((post, index) => (
            <PostCard key={post.time} post={post} rank={index} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Notícias                                                            */
/* ================================================================== */

const news = [
  {
    title: "Android deixou de ser só sistema. Agora, é plataforma de IA.",
    date: "Aug 26, 2026 7:41 am",
    text: "O anúncio da nova camada de modelos on-device muda quem escreve os aplicativos e quem paga a conta do processamento. Fabricantes já falam em ciclos de atualização menores.",
  },
  {
    title: "WhatsApp está prestes a quebrar as barreiras entre apps",
    date: "Aug 26, 2026 6:02 am",
    text: "A interoperabilidade exigida pela regulação europeia começa a valer em setembro e abre a caixa de entrada do mensageiro para serviços concorrentes.",
  },
  {
    title: "O relatório que mudou como as marcas medem alcance",
    date: "Aug 25, 2026 4:18 pm",
    text: "Três anos de dados de mais de nove mil perfis mostram que a frequência de publicação explica mais resultado do que o formato escolhido.",
  },
];

function NewsScreen({ phone }: ScreenProps) {
  return (
    <div className={phone ? "px-4 py-4" : "px-8 py-8"}>
      <div className="flex items-center gap-3">
        {phone ? (
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-900" />
          </span>
        ) : null}
        <h4
          className={`font-bold text-gray-900 ${phone ? "text-[22px]" : "text-[28px]"}`}
        >
          Notícias
        </h4>
        <span className="flex items-center gap-1.5 rounded-lg border border-purple-200 bg-purple-50 px-3 py-1.5 text-[13px] font-medium text-purple-700">
          <RefreshCw className="h-4 w-4" />
          {phone ? null : <span>Atualizar</span>}
          <span className="text-[11px] text-purple-500">(3/3)</span>
        </span>
      </div>

      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <div className="flex h-11 w-full items-center rounded-lg border border-gray-300 bg-white pl-10 pr-3 text-[14px] text-gray-400">
          Buscar notícias...
        </div>
      </div>

      <ul className="mt-2">
        {news.slice(0, phone ? 2 : 3).map((item) => (
          <li
            key={item.title}
            className={`flex items-start gap-3 border-b border-gray-200 last:border-b-0 sm:gap-4 ${
              phone ? "py-3.5" : "py-5"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 flex-none rounded-full bg-red-500 ${
                phone ? "mt-1.5" : "mt-2"
              }`}
            />

            <div className="min-w-0 flex-1">
              <h5
                className={`font-bold leading-tight text-gray-900 ${
                  phone ? "line-clamp-2 text-[15px]" : "text-[21px]"
                }`}
              >
                {item.title}
              </h5>
              <p
                className={`text-[12px] text-gray-600 ${phone ? "mt-1" : "mt-2"}`}
              >
                · {item.date}
              </p>
              <p
                className={`leading-relaxed text-gray-700 ${
                  phone ? "mt-1.5 line-clamp-2 text-[13px]" : "mt-2 text-[15px]"
                }`}
              >
                {item.text}
              </p>

              <div
                className={`flex flex-wrap items-center gap-3 ${
                  phone ? "mt-2.5" : "mt-4"
                }`}
              >
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-900">
                  Leia mais
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-[13px] font-semibold text-white shadow-md ${
                    phone ? "px-3 py-1.5" : "px-4 py-2"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  Gerar Carrossel
                </span>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================================================================== */
/* Galeria                                                             */
/* ================================================================== */

function GalleryCard({
  image,
  date,
  phone,
}: {
  image: string;
  date: string;
  phone?: boolean;
}) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      <div className="relative w-full bg-black pb-[125%]">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </span>
      </div>

      <div className={`border-t border-gray-200 ${phone ? "p-2" : "p-3"}`}>
        <p
          className={`text-zinc-500 ${phone ? "mb-2 text-[10px]" : "mb-3 text-[11px]"}`}
        >
          {phone ? date.replace(/^(\d+) de (\w+)\..*$/, "$1 $2") : date} • 10
          slides
        </p>
        <div className={phone ? "flex gap-1" : "flex gap-2"}>
          <span
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-100 font-medium text-gray-900 ${
              phone ? "px-2 py-1.5 text-[11px]" : "px-3 py-2 text-[13px]"
            }`}
          >
            <Eye className={phone ? "h-3.5 w-3.5" : "h-4 w-4"} />
            Ver
          </span>
          <span
            className={`flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-white ${
              phone ? "px-2 py-1.5" : "px-3 py-2"
            }`}
          >
            <Download className={phone ? "h-3.5 w-3.5" : "h-4 w-4"} />
          </span>
          {phone ? null : (
            <span className="flex items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-white">
              <Trash2 className="h-4 w-4" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const galleryDates = [
  "26 de ago. de 2026",
  "24 de ago. de 2026",
  "21 de ago. de 2026",
  "19 de ago. de 2026",
];

function GalleryScreen({ phone }: ScreenProps) {
  return (
    <div className={phone ? "px-4 py-4" : "px-8 py-8"}>
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm">
          <ImageIcon className="h-4 w-4 text-purple-500" />
          <span className="text-[13px] font-medium text-purple-600">
            Suas Criações
          </span>
        </span>

        <h4
          className={`font-bold leading-tight ${phone ? "mt-2 text-[22px]" : "mt-3 text-[40px]"}`}
          style={{ color: "#222222" }}
        >
          Sua{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Galeria
          </span>{" "}
          ✨
        </h4>

        {phone ? null : (
          <p className="mx-auto mt-3 max-w-2xl text-[18px] text-gray-600">
            Todos os seus carrosséis incríveis em um só lugar. Visualize, edite
            e baixe suas criações.
          </p>
        )}

        <span
          className={`inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 shadow-sm ${
            phone ? "mt-2.5 px-3 py-1.5" : "mt-4 px-4 py-2"
          }`}
        >
          <Sparkles className="h-4 w-4 text-purple-500" />
          <span className="text-[13px] font-medium text-gray-700">
            24 Carrosséis
          </span>
        </span>
      </div>

      <div
        className={`rounded-3xl border border-white/50 bg-white/40 shadow-xl backdrop-blur-md ${
          phone ? "mt-4 p-3" : "mt-7 p-7"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p
            className={`font-medium text-gray-600 ${phone ? "text-[13px]" : "text-[18px]"}`}
          >
            Seus carrosséis
          </p>
          <span
            className={`flex items-center gap-1.5 rounded-lg border-2 border-blue-500 bg-white font-medium text-gray-800 ${
              phone ? "px-2.5 py-1.5 text-[12px]" : "px-3 py-2 text-[13px]"
            }`}
          >
            <TrendingUp className="h-4 w-4 text-blue-500" />
            Mais recentes
            <ChevronDown className="h-3.5 w-3.5 text-gray-600" />
          </span>
        </div>

        <div
          className={`grid ${phone ? "mt-3 grid-cols-2 gap-2.5" : "mt-5 grid-cols-4 gap-4"}`}
        >
          {DECK.slice(0, phone ? 2 : 4).map((slide, index) => (
            <GalleryCard
              key={slide}
              image={slide}
              date={galleryDates[index]}
              phone={phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Editor                                                              */
/* ================================================================== */

const slidePanel = [
  { kind: "COVER", caption: "As piores coisas que o Coringa já fez." },
  { kind: "CONTENT", caption: "O Coringa vai além do papel de vilão comum." },
  { kind: "CONTENT", caption: "Um dos momentos mais chocantes da série." },
];

/** Editor no celular: cabeçalho de 56px, três abas e a prancheta. */
function EditorScreenPhone() {
  const editorTabs = [
    { label: "Slides", icon: Layers, active: false },
    { label: "Editar", icon: Edit3, active: true },
    { label: "Propriedades", icon: Settings, active: false },
  ];

  return (
    <div className="flex h-full flex-col bg-gray-100">
      <header className="flex h-14 flex-none items-center justify-between border-b border-gray-200 bg-white px-3">
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5 text-gray-700" />
          <span className="text-[14px] font-semibold text-gray-900">
            Slide 1/6
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-700">
          <Layers className="h-5 w-5" />
          <Settings2 className="h-5 w-5" />
          <span className="mx-1 h-6 w-px bg-gray-200" />
          <Undo2 className="h-5 w-5 opacity-40" />
          <Redo2 className="h-5 w-5 opacity-40" />
          <MoreVertical className="h-5 w-5" />
        </div>
      </header>

      <div className="flex-none border-b border-gray-200 bg-white px-3 py-2">
        <div className="grid grid-cols-3 gap-1 rounded-xl bg-gray-100 p-1">
          {editorTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <span
                key={tab.label}
                className={`flex items-center justify-center gap-1 rounded-lg py-2 text-[12px] font-medium ${
                  tab.active
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                <Icon className="h-4 w-4 flex-none" />
                <span className="truncate">{tab.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden p-4">
        <span className="absolute left-3 top-3 rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-gray-800 shadow-md backdrop-blur-sm">
          1080 x 1350
        </span>

        <div className="aspect-[4/5] w-[11rem] overflow-hidden rounded-md bg-gray-900 shadow-lg">
          <img
            src={DECK[0]}
            alt="Slide aberto no editor do SocialSquare"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-300 shadow-lg">
            <ChevronUp className="h-6 w-6" />
          </span>
          <span className="flex h-8 w-11 items-center justify-center rounded-full bg-white text-[12px] font-semibold text-gray-700 shadow-lg">
            1
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg">
            <ChevronDown className="h-6 w-6" />
          </span>
        </div>

        <span className="absolute bottom-3 left-3 rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-gray-800 shadow-md backdrop-blur-sm">
          50%
        </span>
      </div>
    </div>
  );
}

/** Editor no navegador: painel de slides, prancheta e propriedades. */
function EditorScreenDesktop() {
  return (
    <div className="flex h-[34rem] text-gray-900">
      <div className="flex w-[11.5rem] flex-none flex-col border-r border-gray-200 bg-white">
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
            { label: "Editar", icon: Edit3, active: false },
            { label: "Propriedades", icon: Settings, active: false },
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

        <div className="relative flex flex-1 items-center justify-center bg-[#EFEFEF] p-6">
          <div className="aspect-[4/5] w-[13.5rem] max-w-full overflow-hidden rounded-md bg-gray-900 shadow-lg">
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
            <p className="text-[10px] text-gray-500">
              Fonte do Texto Selecionado
            </p>
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

function EditorScreen({ phone }: ScreenProps) {
  return phone ? <EditorScreenPhone /> : <EditorScreenDesktop />;
}

const screens: Record<TabId, (props: ScreenProps) => JSX.Element> = {
  inicio: HomeScreen,
  feed: FeedScreen,
  noticias: NewsScreen,
  editor: EditorScreen,
  galeria: GalleryScreen,
};

/* ================================================================== */
/* Molduras                                                            */
/* ================================================================== */

function Fade({ tab, children }: { tab: TabId; children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/** O app no celular: barra inferior de 64px, como no produto. */
function PhoneFrame({
  tab,
  onTab,
}: {
  tab: TabId;
  onTab: (tab: TabId) => void;
}) {
  const Screen = screens[tab];

  return (
    <div className="mx-auto w-full max-w-[21rem]">
      <div className="overflow-hidden rounded-[2.5rem] border-[7px] border-ink bg-white shadow-float">
        <div className="flex items-center justify-between bg-white px-5 pb-1 pt-2 text-[11px] font-semibold text-ink">
          <span>9:41</span>
          <span className="flex items-center gap-1 text-ink-2">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <BatteryFull className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="h-[34rem] overflow-hidden bg-[#FBFCFE]">
          <Fade tab={tab}>
            <div className="h-full overflow-hidden">
              <Screen phone />
            </div>
          </Fade>
        </div>

        <nav className="flex h-16 items-center justify-around border-t border-slate-200 bg-white px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.tab === tab && item.label !== "Criar";

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => onTab(item.tab)}
                className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-0.5 py-2"
              >
                <Icon
                  className={`h-5 w-5 flex-none ${
                    isActive ? "" : "text-slate-500"
                  }`}
                  style={isActive ? { color: BLUE } : undefined}
                />
                <span
                  className={`w-full truncate text-center text-[9px] font-medium ${
                    isActive ? "" : "text-slate-500"
                  }`}
                  style={isActive ? { color: BLUE } : undefined}
                >
                  {item.label}
                </span>
                {item.label === "Editor" ? (
                  <span className="absolute right-1.5 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[8px] font-bold text-white">
                    1
                  </span>
                ) : null}
              </button>
            );
          })}

          <span className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 px-0.5 py-2 text-slate-500">
            <span
              className="flex h-6 w-6 flex-none items-center justify-center rounded-full"
              style={{ backgroundColor: BLUE_LIGHT + "33" }}
            >
              <User className="h-3.5 w-3.5" style={{ color: BLUE }} />
            </span>
            <span className="w-full truncate text-center text-[9px] font-medium">
              Perfil
            </span>
          </span>
        </nav>
      </div>
    </div>
  );
}

/** O app no navegador: barra lateral de 80px, como no produto. */
function BrowserFrame({
  tab,
  onTab,
}: {
  tab: TabId;
  onTab: (tab: TabId) => void;
}) {
  const Screen = screens[tab];

  return (
    <div className="rounded-lg border border-line bg-paper p-2 shadow-float">
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
          <nav className="flex w-20 flex-none flex-col justify-between border-r border-slate-200 bg-white py-4">
            <div className="flex flex-col gap-2 px-2">
              <span className="mb-2 flex justify-center border-b border-slate-200 pb-4">
                <img src={logoSrc} alt="" className="h-6 w-6" />
              </span>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.tab === tab && item.label !== "Criar";
                const isEditor = item.label === "Editor";

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onTab(item.tab)}
                    className={`relative flex flex-col items-center gap-1 rounded-xl p-2 transition-colors ${
                      isActive
                        ? isEditor
                          ? "bg-purple-100 text-purple-600"
                          : "text-blue-700"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                    style={
                      isActive && !isEditor
                        ? { backgroundColor: BLUE_LIGHT + "33", color: BLUE }
                        : undefined
                    }
                  >
                    <Icon className="h-5 w-5 flex-none" />
                    <span className="whitespace-nowrap text-[10px] font-medium">
                      {item.label}
                    </span>
                    {isEditor ? (
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[9px] font-bold text-white">
                        1
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-200 px-2 pt-2">
              <span className="flex flex-col items-center gap-1 rounded-xl p-2">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: BLUE_LIGHT + "33" }}
                >
                  <User className="h-4 w-4" style={{ color: BLUE }} />
                </span>
                <span className="text-[10px] font-medium text-slate-700">
                  Perfil
                </span>
              </span>
            </div>
          </nav>

          <div className="min-w-0 flex-1 bg-[#FBFCFE]">
            <Fade tab={tab}>
              <Screen />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */

const AppTour = () => {
  const [tab, setTab] = useState<TabId>("editor");
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

        {/* O produto tem dois layouts. A landing mostra os dois. */}
        <div className="mt-8 md:hidden">
          <PhoneFrame tab={tab} onTab={setTab} />
        </div>
        <div className="mt-8 hidden md:block">
          <BrowserFrame tab={tab} onTab={setTab} />
        </div>
      </Container>
    </Section>
  );
};

export default AppTour;
