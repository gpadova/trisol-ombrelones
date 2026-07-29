import { MODELS } from "../lib/models";
import { SunBurst } from "./Brand";

/** Model-name band — a running index of the five ombrelones. Decorative + anchored. */
export function Marquee() {
  const items = MODELS.map((m) => m.name);
  const line = [...items, ...items]; // duplicated for seamless loop

  return (
    <div
      className="marquee overflow-hidden border-y border-line bg-paper py-4 select-none"
      aria-hidden="true"
    >
      <div className="marquee-track whitespace-nowrap">
        {line.map((name, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-6 text-lg font-extrabold uppercase tracking-[0.04em] text-ink md:mx-9 md:text-xl">
              {name}
            </span>
            <SunBurst className="h-3.5 w-3.5 text-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
