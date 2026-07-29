import { Reveal } from "./Reveal";

const CARE = [
  {
    n: "01",
    title: "Feche em ventos fortes",
    body: "Recolha a cobertura e use a capa de proteção sempre que o ombrelone não estiver em uso.",
  },
  {
    n: "02",
    title: "Limpeza suave",
    body: "Água e sabão neutro no tecido e na estrutura; evite abrasivos e jato de alta pressão.",
  },
  {
    n: "03",
    title: "Base na medida certa",
    body: "Respeite o peso mínimo de base indicado na ficha de cada modelo para garantir a estabilidade.",
  },
];

export function Care() {
  return (
    <section id="cuidados" className="scroll-mt-16 bg-bg py-[clamp(4rem,8vw,7rem)]">
      <div className="shell">
        <Reveal>
          <div className="rule mb-5" />
          <h2
            className="display text-ink"
            style={{ fontSize: "clamp(1.9rem, 1.3rem + 2.6vw, 3rem)" }}
          >
            Cuidados essenciais
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {CARE.map((c, i) => (
            <Reveal key={c.n} delay={i * 100}>
              <div className="border-t-2 border-ink pt-5">
                <div className="text-sm font-extrabold text-red">{c.n}</div>
                <h3 className="mt-3 text-lg font-extrabold tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
