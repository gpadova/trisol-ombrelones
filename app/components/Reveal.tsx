"use client";

import { useEffect, useRef, useState, ElementType, ReactNode } from "react";

type Phase = "idle" | "armed" | "in";

/**
 * Reveals children on scroll-into-view. Content renders fully visible on the
 * server and stays visible if JS never runs (see globals.css).
 *
 * Arming is done here, not in CSS: an element is hidden only once React has
 * mounted AND it is still off screen. Hiding something already on screen is
 * what makes a reveal flicker, so anything visible at mount just skips the
 * entrance. Disabled under prefers-reduced-motion.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}) {
  const Tag = as;
  const ref = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // On screen (or scrolled past) already — leave it as it is.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setPhase("armed");

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPhase("in");
          io.disconnect();
        }
      },
      // threshold 0 so elements taller than the viewport still qualify, and a
      // root grown past the fold so the entrance is under way before the
      // element scrolls into view rather than popping once it is there.
      { threshold: 0, rootMargin: "0px 0px 12% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", phase === "armed" && "is-armed", phase === "in" && "is-in", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={{ ["--reveal-delay" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
