import { WorldMap } from "./WorldMap";

/**
 * Decorative animated background for the home hero.
 * Purely visual — aria-hidden, sits behind hero content.
 * Animations are CSS-driven and disabled under prefers-reduced-motion
 * (handled globally in globals.css).
 */
export function HeroBackground({
  variant = "map",
}: {
  /** "map" → full dotted world map (home); "subtle" → glows + grid only. */
  variant?: "map" | "subtle";
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Soft floating amber glow */}
      <div className="animate-blob-a absolute -left-24 -top-24 h-96 w-96 rounded-full bg-amber/20 blur-3xl" />
      {/* Soft floating warm glow lower-right */}
      <div className="animate-blob-b absolute -bottom-32 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-amber-light/15 blur-3xl" />

      {/* Subtle dotted grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F8F5F0 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {variant === "map" && (
        /* Dotted world map with the animated UK → India connection */
        <WorldMap
          className="absolute left-1/2 top-1/2 h-auto w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[115%]"
          dotClassName="fill-cream/25"
        />
      )}
    </div>
  );
}
