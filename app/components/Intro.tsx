import Image from "next/image";
import { Reveal } from "./Reveal";

const TYPES = [
  {
    kind: "Lateral",
    image: "/products/lateral.jpg",
    alt: "Ombrelone lateral TriSol com cobertura preta em mastro deslocado e base com rodízios",
    lead: "A sombra que flutua ao lado.",
    body: "Mastro deslocado e cobertura suspensa: área livre embaixo, sem coluna no meio do ambiente. Inclina e gira 360° para acompanhar o sol.",
    models: "Zuri · Solene",
  },
  {
    kind: "Central",
    image: "/products/central.jpg",
    alt: "Ombrelone central TriSol aberto com cobertura cor areia e mastro central",
    lead: "O clássico que ancora a mesa.",
    body: "Mastro ao centro, encaixe direto na base ou no furo da mesa. Prático de abrir e fechar — do residencial ao alto giro comercial.",
    models: "Vitta · Pub · Brisa",
  },
];

export function Intro() {
  return (
    <section id="linha" className="scroll-mt-20 bg-bg py-[clamp(4.5rem,9vw,8rem)]">
      <div className="shell">
        <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <Reveal>
            <div className="rule mb-6" />
            <h2
              className="display text-ink"
              style={{ fontSize: "clamp(2.1rem, 1.3rem + 3.4vw, 3.6rem)" }}
            >
              Conforto é detalhe.
              <br />E elegância é decisão.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="measure text-[1.05rem] leading-relaxed text-body md:text-[1.12rem]">
              Do lateral premium ao central econômico, cada ombrelone TriSol nasce do
              mesmo princípio: sombra na medida certa, com materiais que resistem ao
              tempo. Escolha o modelo pelo uso — e componha o ambiente com a cor da
              estrutura e da cobertura.
            </p>
          </Reveal>
        </div>

        {/* Lateral × Central — the choosing logic */}
        <div className="mt-[clamp(3rem,6vw,5rem)] grid gap-6 md:grid-cols-2 md:gap-8">
          {TYPES.map((t, i) => (
            <Reveal key={t.kind} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]">
                <div className="photo-zoom relative aspect-[4/3] bg-white">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-8"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    Ombrelone {t.kind}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7 md:p-8">
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-ink">
                    {t.lead}
                  </h3>
                  <p className="measure text-[1rem] leading-relaxed text-body">{t.body}</p>
                  <p className="mt-auto pt-3 text-sm font-semibold text-red">
                    {t.models}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
