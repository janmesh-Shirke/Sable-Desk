"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type StatCounterProps = {
  /**
   * Numeric target to count up to. Leave undefined while using a
   * non-numeric placeholder (e.g. "X.X") — the placeholder then just fades in.
   */
  target?: number;
  /** Placeholder string shown when `target` is undefined, e.g. "X.X". */
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  /** Decimal places for the animated number. */
  decimals?: number;
  caption: string;
  /** Caption colour: "dark" for dark backgrounds, "light" for light ones. */
  tone?: "dark" | "light";
};

export function StatCounter({
  target,
  placeholder = "",
  prefix = "",
  suffix = "",
  decimals = 0,
  caption,
  tone = "dark",
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [fallback, setFallback] = useState(false);
  const [display, setDisplay] = useState(
    target === undefined ? placeholder : (0).toFixed(decimals)
  );

  // Reveal/animate even if the viewport observer never fires (deep links,
  // reloads mid-page, or jump-scrolls).
  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (target === undefined) return;
    const visible = inView || fallback;
    if (!visible || reduce) {
      if (reduce) setDisplay(target.toFixed(decimals));
      return;
    }

    let raf = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((target * eased).toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, fallback, target, decimals, reduce]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-bold tracking-tight text-amber sm:text-6xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <p
        className={`mx-auto mt-3 max-w-xs font-sans text-sm leading-relaxed ${
          tone === "light" ? "text-warm-gray" : "text-cream/70"
        }`}
      >
        {caption}
      </p>
    </div>
  );
}
