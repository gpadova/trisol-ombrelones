import Image from "next/image";
import { MODELS, type Model, type Finish } from "../lib/models";
import { Reveal } from "./Reveal";
import { whatsappHref, modelQuoteMsg } from "../lib/site";

function Swatch({ f }: { f: Finish }) {
  return (
    <span
      className="block h-6 w-6 rounded-full border-2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
      title={`estrutura ${f.label.split(" · ")[0]} · cobertura ${f.label.split(" · ")[1]}`}
      style={{
        borderColor: `var(${f.structure})`,
        background: `var(${f.cover})`,
      }}
    />
  );
}

function SpecChips({ m }: { m: Model }) {
  const chips = [
    { k: "Tamanhos", v: m.specs.tamanhos },
    { k: "Abertura", v: m.specs.abertura },
    { k: "Vento*", v: m.specs.vento },
    { k: "Tecido", v: m.specs.tecido },
    { k: "Garantia", v: m.specs.garantia },
  ];
  return (
    <dl className="flex flex-wrap gap-2.5">
      {chips.map((c) => (
        <div key={c.k} className="chip">
          <dt className="chip-k">{c.k}</dt>
          <dd className="chip-v">{c.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function ModelRow({ m, i }: { m: Model; i: number }) {
  const flip = i % 2 === 1;
  return (
    <article
      id={m.slug}
      className="scroll-mt-24 border-t border-line py-[clamp(3rem,6vw,5.5rem)] first:border-t-0"
    >
      <div className="grid items-center gap-x-14 gap-y-8 lg:grid-cols-2">
        {/* Photograph */}
        <Reveal className={flip ? "lg:order-2" : ""}>
          <figure className="photo-zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper shadow-[var(--shadow-photo)]">
            <Image
              src={m.image}
              alt={m.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
              Ombrelone {m.kind}
              {m.kindNote ? ` · ${m.kindNote}` : ""}
            </span>
          </figure>
        </Reveal>

        {/* Content */}
        <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
          <div>
            <div className="flex items-baseline gap-4">
              <span className="text-lg font-extrabold text-red">{m.index}</span>
              <span className="h-px flex-1 bg-line" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {m.positioning}
              </span>
            </div>

            <h3
              className="display mt-4 uppercase text-ink"
              style={{ fontSize: "clamp(2.6rem, 1.6rem + 4.2vw, 4.6rem)" }}
            >
              {m.name}
            </h3>

            <p className="measure mt-5 text-[1.02rem] leading-relaxed text-body">
              {m.description}
            </p>

            <div className="mt-7">
              <SpecChips m={m} />
            </div>

            <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {m.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[0.95rem] leading-snug text-body">
                  <span
                    aria-hidden
                    className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-red"
                  />
                  {h}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted">{m.material}</p>

            {/* Finishes */}
            <div className="mt-6">
              {m.finishes.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Cores
                  </span>
                  <div className="flex gap-2.5">
                    {m.finishes.map((f) => (
                      <Swatch key={f.label} f={f} />
                    ))}
                  </div>
                </div>
              )}
              {m.finishNote && (
                <p className="mt-2.5 text-xs leading-relaxed text-faint">{m.finishNote}</p>
              )}
            </div>

            <div className="mt-8">
              <a
                className="btn btn-primary"
                href={whatsappHref(modelQuoteMsg(m.name))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento do {m.name}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export function Models() {
  return (
    <section id="modelos" className="scroll-mt-16 bg-bg py-[clamp(3rem,6vw,5rem)]">
      <div className="shell">
        <Reveal className="mb-4 flex flex-col gap-4 md:mb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="rule mb-5" />
            <h2
              className="display text-ink"
              style={{ fontSize: "clamp(2rem, 1.3rem + 3vw, 3.4rem)" }}
            >
              Cinco modelos. Um só padrão.
            </h2>
          </div>
          <p className="measure text-[1rem] leading-relaxed text-body md:max-w-sm md:text-right">
            Escolha pelo uso e pelo espaço. Cada modelo traz ficha técnica, medidas e
            acabamentos — do desejo ao orçamento em um toque.
          </p>
        </Reveal>

        <div className="mt-6">
          {MODELS.map((m, i) => (
            <ModelRow key={m.slug} m={m} i={i} />
          ))}
        </div>

        <p className="mt-6 text-xs text-faint">
          *Resistência ao vento com o produto fixado ao solo.
        </p>
      </div>
    </section>
  );
}
