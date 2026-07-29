import { Reveal } from "./Reveal";
import { SunBurst } from "./Brand";

const PILLARS = [
  {
    title: "Estrutura em alumínio",
    body: "Parafusos e rebites em aço inox 304 em toda a linha. Leveza que não abre mão de resistência — pensada para viver ao ar livre.",
    metric: "Aço inox 304",
    metricLabel: "em toda a linha",
  },
  {
    title: "Tecidos técnicos",
    body: "Olefin e Poliéster Pro, tramas que enfrentam o sol sem entregar a cor. Reforço em couro nos modelos premium.",
    metric: "36 meses",
    metricLabel: "de garantia contra desbotamento",
  },
  {
    title: "Resistência ao vento",
    body: "Cada modelo é testado para o uso a que se destina. Recolha a cobertura em rajadas fortes e conte com a base certa.",
    metric: "30–80 km/h",
    metricLabel: "com o produto fixado ao solo",
  },
];

export function Materials() {
  return (
    <section
      id="materiais"
      className="scroll-mt-16 relative overflow-hidden bg-ink text-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      {/* faint oversized burst, echoing the catalog watermark */}
      <SunBurst className="pointer-events-none absolute -right-24 -top-24 h-[30rem] w-[38rem] text-white/[0.05]" />

      <div className="shell relative">
        <Reveal>
          <div className="rule mb-6" />
          <h2
            className="display max-w-[20ch]"
            style={{ fontSize: "clamp(2.1rem, 1.4rem + 3.2vw, 3.6rem)", color: "#fff" }}
          >
            Feito para durar ao sol, à chuva e ao vento.
          </h2>
          <p className="measure mt-6 text-[1.05rem] leading-relaxed text-white/75">
            A TriSol desenvolve ombrelones de alta performance para transformar áreas
            externas em ambientes de estar. Materiais que resistem ao tempo, com o estilo
            atemporal que marca cada produto da linha.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="h-full">
              <div className="flex h-full flex-col bg-ink p-7 md:p-8">
                <div className="rule" />
                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.01em] text-white">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-white/70">
                  {p.body}
                </p>
                <div className="mt-7 border-t border-white/12 pt-5">
                  <div className="text-3xl font-extrabold tracking-[-0.02em] text-white">
                    {p.metric}
                  </div>
                  <div className="mt-1 text-sm text-white/55">{p.metricLabel}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
