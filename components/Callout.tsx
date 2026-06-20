type CalloutProps = {
  /** Small label shown above the body, e.g. "Did you know?" */
  label?: string;
  children: React.ReactNode;
  className?: string;
};

/** Cream card with an amber left accent border. */
export function Callout({ label, children, className = "" }: CalloutProps) {
  return (
    <div
      className={`rounded-lg border border-border border-l-4 border-l-amber bg-cream p-6 shadow-card sm:p-8 ${className}`}
    >
      {label && (
        <p className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-amber-dark">
          {label}
        </p>
      )}
      <p className="font-sans text-base leading-relaxed text-foreground/90 sm:text-lg">
        {children}
      </p>
    </div>
  );
}
