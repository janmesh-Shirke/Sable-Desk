"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
};

/**
 * Scroll-reveal wrapper (fade-up). Respects prefers-reduced-motion.
 *
 * Uses the useInView hook plus a mount fallback: if the element hasn't been
 * seen shortly after mount (e.g. the user deep-linked to an anchor, reloaded
 * mid-page, or jumped via the in-page nav), we reveal it anyway so content is
 * never left permanently hidden.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  // Polymorphic element (div | li | span) — use a generic Element ref.
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 700);
    return () => clearTimeout(t);
  }, []);

  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return (
      <Tag ref={ref as React.Ref<never>} className={className}>
        {children}
      </Tag>
    );
  }

  const show = inView || fallback;

  return (
    <MotionTag
      ref={ref as React.Ref<never>}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Simple fade-in (no translate). */
export function FadeIn({ children, delay = 0, className = "" }: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFallback(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView || fallback ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
