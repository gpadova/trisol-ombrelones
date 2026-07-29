import { CSSProperties } from "react";

const maskBase = (src: string): CSSProperties => ({
  display: "inline-block",
  backgroundColor: "currentColor",
  WebkitMaskImage: `url(${src})`,
  maskImage: `url(${src})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
});

/** Real TriSol sun mark (rays over horizon). Tinted via `currentColor`
 *  — set the color with a text-* class. Aspect ratio locked to the asset. */
export function SunBurst({
  className,
  style,
  title,
}: {
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  return (
    <span
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      style={{ aspectRatio: "276 / 221", ...maskBase("/logo/trisol-mark.png"), ...style }}
    />
  );
}

/** Real TriSol logo lockup: red sun mark + "TriSol®" wordmark.
 *  `invert` switches the wordmark to white for dark backgrounds. */
export function Wordmark({
  className,
  invert = false,
  markClass = "h-7 text-red",
  style,
}: {
  className?: string;
  invert?: boolean;
  markClass?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      style={style}
      role="img"
      aria-label="TriSol"
    >
      <SunBurst className={markClass} />
      <span
        aria-hidden
        style={{
          height: "1.02rem",
          aspectRatio: "589 / 164",
          color: invert ? "#fff" : "var(--color-ink)",
          ...maskBase("/logo/trisol-word.png"),
        }}
      />
    </span>
  );
}
