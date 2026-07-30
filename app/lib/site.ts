// ============================================================
// TriSol Ombrelones — site configuration
//
// WhatsApp de orçamentos — formato E.164 sem símbolos:
// 55 (Brasil) + DDD + número. Todos os botões de orçamento usam isto.
// ============================================================
export const WHATSAPP_NUMBER = "5548991375030";

/** Mesmo número, formatado para leitura humana. */
export const WHATSAPP_DISPLAY = "(48) 99137-5030";

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
