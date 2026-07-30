import { Reveal } from "./Reveal";
import { Wordmark, SunBurst } from "./Brand";
import {
  whatsappHref,
  GENERAL_QUOTE_MSG,
  WHATSAPP_DISPLAY,
  SITE,
} from "../lib/site";

const NAV = [
  { href: "#linha", label: "A linha" },
  { href: "#modelos", label: "Modelos" },
  { href: "#materiais", label: "Materiais" },
  { href: "#cuidados", label: "Cuidados" },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink text-white">
      {/* Closing CTA */}
      <div className="relative overflow-hidden border-b border-white/10">
        <SunBurst className="pointer-events-none absolute -bottom-28 -left-24 h-[24rem] w-[30rem] text-red/25" />
        <div className="shell relative py-[clamp(4.5rem,9vw,8rem)]">
          <Reveal>
            <p className="eyebrow !text-white/60">Peça seu orçamento</p>
            <h2
              className="display mt-4 max-w-[18ch]"
              style={{ fontSize: "clamp(2.3rem, 1.5rem + 3.6vw, 4.2rem)", color: "#fff" }}
            >
              Vamos encontrar o seu ombrelone.
            </h2>
            <p className="measure mt-6 text-[1.05rem] leading-relaxed text-white/70">
              Diga como é o seu espaço — residencial ou comercial, lateral ou central — e
              a gente indica o modelo certo, com cores, medidas e valores.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="btn btn-primary"
                href={whatsappHref(GENERAL_QUOTE_MSG)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento no WhatsApp
              </a>
              <a className="btn btn-ghost-light" href={SITE.catalogHref} download>
                Baixar catálogo 2026
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer body */}
      <div className="shell py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark invert />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Alta performance em proteção solar para áreas externas. Luz e sombra em
              equilíbrio.
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Navegar
            </span>
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.98rem] text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
              Contato
            </span>
            <a
              href={whatsappHref(GENERAL_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.98rem] text-white/75 transition-colors hover:text-white"
            >
              WhatsApp · {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`https://${SITE.domain}`}
              className="text-[0.98rem] text-white/75 transition-colors hover:text-white"
            >
              {SITE.domain}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TriSol. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <SunBurst className="h-3.5 w-3.5 text-red" /> Catálogo de produtos · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
