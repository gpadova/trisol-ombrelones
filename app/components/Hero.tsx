import Image from "next/image";
import { SunBurst } from "./Brand";
import { whatsappHref, GENERAL_QUOTE_MSG } from "../lib/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      {/* Photograph carries the fold */}
      <div className="load-fade absolute inset-0 -z-10" style={{ ["--load-delay" as string]: "0ms" }}>
        <Image
          src="/models/zuri.jpg"
          alt="Ombrelone lateral TriSol Zuri sombreando um lounge à beira de uma piscina de borda infinita com vista para o mar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        {/* Legibility scrim — bottom-left weighted, keeps the sea bright */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.13 0.006 30 / 0.86) 0%, oklch(0.13 0.006 30 / 0.55) 36%, oklch(0.13 0.006 30 / 0.15) 62%, transparent 80%), linear-gradient(to right, oklch(0.13 0.006 30 / 0.5) 0%, oklch(0.13 0.006 30 / 0.12) 42%, transparent 60%)",
          }}
        />
      </div>

      <div className="shell flex min-h-[100svh] flex-col justify-end pb-[clamp(3rem,8vh,6rem)] pt-28">
        <div className="max-w-[62rem]">
          <div
            className="load mb-6 flex items-center gap-3 text-white"
            style={{ ["--load-delay" as string]: "150ms" }}
          >
            <SunBurst className="h-6 text-white" />
            <span className="eyebrow !text-white/90">Ombrelones · Catálogo 2026</span>
          </div>

          <h1
            className="load display text-white"
            style={{
              ["--load-delay" as string]: "260ms",
              fontSize: "clamp(2.9rem, 1.6rem + 6.4vw, 6rem)",
            }}
          >
            Luz e sombra
            <br />
            em equilíbrio.
          </h1>

          <p
            className="load measure mt-6 text-[1.05rem] leading-relaxed text-white/85 md:text-[1.2rem]"
            style={{ ["--load-delay" as string]: "400ms" }}
          >
            Ombrelones de alta performance que transformam áreas externas em ambientes
            de estar. Estruturas em alumínio e aço inox 304, tecidos técnicos — com o
            estilo elegante e atemporal que marca cada modelo.
          </p>

          <div
            className="load mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ["--load-delay" as string]: "540ms" }}
          >
            <a
              className="btn btn-primary"
              href={whatsappHref(GENERAL_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orçamento
            </a>
            <a className="btn btn-ghost-light" href="#linha">
              Conhecer a linha
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        className="load-fade pointer-events-none absolute bottom-6 right-[clamp(1.25rem,5vw,4rem)] hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70 md:flex"
        style={{ ["--load-delay" as string]: "900ms" }}
      >
        <span>Role</span>
        <span className="block h-8 w-px bg-white/40" />
      </div>
    </section>
  );
}
