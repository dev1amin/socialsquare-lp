/**
 * Conteúdo e peças da landing num lugar só. As imagens são arquivos
 * que o próprio SocialSquare exportou — nada aqui é ilustração.
 */
import template2 from "@/assets/templates/template-2.webp";
import template3 from "@/assets/templates/template-3.webp";
import template4 from "@/assets/templates/template-4.webp";
import template5 from "@/assets/templates/template-5.webp";
import template6 from "@/assets/templates/template-6.webp";
import template7 from "@/assets/templates/template-7.webp";
import template8 from "@/assets/templates/template-8.webp";

import deck1 from "@/assets/deck/t3-1.webp";
import deck2 from "@/assets/deck/t3-2.webp";
import deck3 from "@/assets/deck/t3-3.webp";
import deck4 from "@/assets/deck/t3-4.webp";
import deck5 from "@/assets/deck/t3-5.webp";
import deck6 from "@/assets/deck/t3-6.webp";

import news1 from "@/assets/deck/t6-1.webp";
import news2 from "@/assets/deck/t6-2.webp";
import news3 from "@/assets/deck/t6-3.webp";
import news4 from "@/assets/deck/t6-4.webp";

import cover1 from "@/assets/covers/cover-1.webp";
import cover2 from "@/assets/covers/cover-2.webp";
import cover3 from "@/assets/covers/cover-3.webp";
import cover4 from "@/assets/covers/cover-4.webp";
import cover5 from "@/assets/covers/cover-5.webp";
import cover6 from "@/assets/covers/cover-6.webp";

/** Onde a pessoa entra de verdade. */
export const SIGNUP_URL = "https://www.socialsquare.com.br/pricing";
export const LOGIN_URL = "https://www.socialsquare.com.br/login";

export const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Templates", href: "#templates" },
  { label: "O app", href: "#app" },
  { label: "Perguntas", href: "#perguntas" },
];

/** Um carrossel real, na ordem em que os slides saem. */
export const DECK = [deck1, deck2, deck3, deck4, deck5, deck6];

export const NEWS_DECK = [news1, news2, news3, news4];

export const COVERS = [cover1, cover2, cover3, cover4, cover5, cover6];

export type Template = {
  code: string;
  name: string;
  bestFor: string;
  image: string;
};

export const TEMPLATES: Template[] = [
  { code: "03", name: "Manchete preta", bestFor: "Opinião e ranking", image: template3 },
  { code: "04", name: "Notícia escura", bestFor: "Furo e cobertura", image: template4 },
  { code: "02", name: "Editorial claro", bestFor: "Explicação longa", image: template2 },
  { code: "06", name: "Foto no comando", bestFor: "Marca e produto", image: template6 },
  { code: "05", name: "Post claro", bestFor: "Tese curta", image: template5 },
  { code: "07", name: "Thread escura", bestFor: "História em texto", image: template7 },
  { code: "08", name: "Thread clara", bestFor: "Bastidor e case", image: template8 },
];
