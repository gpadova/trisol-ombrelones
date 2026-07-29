"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { whatsappHref, GENERAL_QUOTE_MSG } from "../lib/site";

const LINKS = [
  { href: "#linha", label: "A linha" },
  { href: "#modelos", label: "Modelos" },
  { href: "#materiais", label: "Materiais" },
  { href: "#cuidados", label: "Cuidados" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 transition-colors duration-500"
      style={{
        zIndex: "var(--z-nav)",
        background: solid || open ? "rgba(255,255,255,0.86)" : "transparent",
        backdropFilter: solid || open ? "blur(14px) saturate(1.4)" : "none",
        borderBottom: solid || open ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <nav className="shell flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#top" aria-label="TriSol Ombrelones — início" className="shrink-0">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-[0.92rem] font-medium text-ink">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-red"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary !min-h-[2.6rem] !px-5 text-sm"
            href={whatsappHref(GENERAL_QUOTE_MSG)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir orçamento
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className="absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300"
              style={{ top: open ? "7px" : "2px", transform: open ? "rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-[7px] block h-0.5 w-6 bg-ink transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300"
              style={{ top: open ? "7px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="shell flex flex-col gap-1 pb-6 pt-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg font-semibold text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              className="btn btn-primary mt-4 w-full"
              href={whatsappHref(GENERAL_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
