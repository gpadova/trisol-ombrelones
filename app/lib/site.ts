// ============================================================
// TriSol Ombrelones — site configuration
//
// ⚠️  WHATSAPP: PLACEHOLDER — troque pelo número real da TriSol.
//     Formato E.164 sem símbolos: 55 (Brasil) + DDD + número.
//     Ex.: "5511999999999". Todos os botões de orçamento usam isto.
// ============================================================
export const WHATSAPP_NUMBER = "5548999632211";

export const SITE = {
  name: "TriSol Ombrelones",
  url: "https://www.trisolombrelones.com.br",
  domain: "trisolombrelones.com.br",
  catalogHref: "/TriSol-Catalogo-2026.pdf", // adicione o PDF em /public quando disponível
};

/** Build a wa.me link with a pre-filled quote message. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_QUOTE_MSG =
  "Olá, TriSol! Gostaria de um orçamento de ombrelones.";

export function modelQuoteMsg(model: string): string {
  return `Olá, TriSol! Tenho interesse no ombrelone ${model} e gostaria de um orçamento.`;
}
