import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  /** Render as a plain span instead of a link (e.g. inside the footer) */
  asLink?: boolean;
};

/**
 * SableDesk wordmark.
 * "sable" takes the foreground/cream colour depending on the surface;
 * "desk" is always amber. Never stretch, rotate, or recolour.
 *
 * variant="light" → for use on light surfaces (foreground "sable")
 * variant="dark"  → for use on dark surfaces (cream "sable")
 */
export function Logo({ variant = "light", className = "", asLink = true }: LogoProps) {
  const sableColor = variant === "dark" ? "text-cream" : "text-foreground";

  const mark = (
    // Clear space ≈ height of the 'd' is preserved via the inline-block + leading
    <span
      className={`font-display text-2xl font-bold leading-none tracking-tight ${className}`}
      aria-label="sabledesk"
    >
      <span className={sableColor}>sable</span>
      <span className="text-amber">desk</span>
    </span>
  );

  if (!asLink) return mark;

  return (
    <Link href="/" className="inline-block" aria-label="SableDesk home">
      {mark}
    </Link>
  );
}
