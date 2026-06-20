type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** Uppercase amber label — DM Sans Medium, wide tracking. */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`block font-sans text-xs font-medium uppercase tracking-[0.18em] text-amber-dark ${className}`}
    >
      {children}
    </span>
  );
}
