type Background =
  | "background"
  | "cream"
  | "sand"
  | "gradient-sable"
  | "sable-dark";

type SectionProps = {
  background?: Background;
  className?: string;
  containerClassName?: string;
  id?: string;
  children: React.ReactNode;
  /** Removes default vertical padding when true */
  flush?: boolean;
};

const backgrounds: Record<Background, string> = {
  background: "bg-background text-foreground",
  cream: "bg-cream text-foreground",
  sand: "bg-sand text-foreground",
  "gradient-sable": "bg-gradient-sable text-cream",
  "sable-dark": "bg-sable-dark text-cream",
};

export function Section({
  background = "background",
  className = "",
  containerClassName = "",
  id,
  children,
  flush = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${flush ? "" : "py-20 md:py-28"} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
