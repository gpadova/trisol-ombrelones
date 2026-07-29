import { MODELS } from "../lib/models";
import { Reveal } from "./Reveal";

const COLS = ["Modelo", "Tipo", "Tamanhos", "Abertura", "Vento*", "Tecido · Garantia"];

function tipoLabel(m: (typeof MODELS)[number]) {
  return m.kindNote ? `${m.kind} · ${m.kindNote}` : m.kind;
}

export function Comparison() {
  return (
    <section className="bg-paper py-[clamp(4rem,8vw,7rem)]">
      <div className="shell">
        <Reveal>
          <div className="rule mb-5" />
          <h2
            className="display text-ink"
            style={{ fontSize: "clamp(1.9rem, 1.3rem + 2.6vw, 3rem)" }}
          >
            Guia rápido — compare os modelos
          </h2>
        </Reveal>

        {/* Desktop / tablet: real table */}
        <Reveal delay={100}>
          <div className="mt-9 hidden overflow-hidden rounded-2xl border border-line bg-bg md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-line-strong">
                  {COLS.map((c) => (
                    <th
                      key={c}
                      scope="col"
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr
                    key={m.slug}
                    className="border-b border-line last:border-0 transition-colors hover:bg-red-wash/60"
                  >
                    <th scope="row" className="px-5 py-4">
                      <span className="mr-2 text-sm font-extrabold text-red">{m.index}</span>
                      <span className="text-base font-extrabold uppercase tracking-[0.02em] text-ink">
                        {m.name}
                      </span>
                    </th>
                    <td className="px-5 py-4 text-sm text-body">{tipoLabel(m)}</td>
                    <td className="px-5 py-4 text-sm text-body">{m.specs.tamanhos}</td>
                    <td className="px-5 py-4 text-sm text-body">{m.specs.abertura}</td>
                    <td className="px-5 py-4 text-sm font-semibold text-ink">{m.specs.vento}</td>
                    <td className="px-5 py-4 text-sm text-body">
                      {m.specs.tecido} · {m.specs.garantia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="mt-8 grid gap-3.5 md:hidden">
          {MODELS.map((m, i) => (
            <Reveal key={m.slug} delay={i * 60}>
              <a
                href={`#${m.slug}`}
                className="block rounded-xl border border-line bg-bg p-5"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-extrabold text-red">{m.index}</span>
                  <span className="text-lg font-extrabold uppercase text-ink">{m.name}</span>
                  <span className="ml-auto text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {tipoLabel(m)}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div>
                    <dt className="text-xs text-muted">Tamanhos</dt>
                    <dd className="font-medium text-body">{m.specs.tamanhos}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Abertura</dt>
                    <dd className="font-medium text-body">{m.specs.abertura}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Vento*</dt>
                    <dd className="font-semibold text-ink">{m.specs.vento}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Tecido · Garantia</dt>
                    <dd className="font-medium text-body">
                      {m.specs.tecido} · {m.specs.garantia}
                    </dd>
                  </div>
                </dl>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-xs text-faint">
          *Resistência ao vento com o produto fixado ao solo.
        </p>
      </div>
    </section>
  );
}
