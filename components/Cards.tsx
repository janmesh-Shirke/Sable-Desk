import { Check } from "lucide-react";

/* ---------- TermCard (Commercial Terms) ---------- */

type TermCardProps = {
  title: string;
  value: string;
  description: string;
};

export function TermCard({ title, value, description }: TermCardProps) {
  return (
    <div className="rounded-lg border border-border bg-cream p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <p className="font-sans text-sm font-medium text-warm-gray">{title}</p>
      <p className="mt-2 font-display text-3xl font-bold text-sable">{value}</p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">
        {description}
      </p>
    </div>
  );
}

/* ---------- TierCard (Volume Tiering) ---------- */

type TierCardProps = {
  seats: string;
  discount: string;
  featured?: boolean;
};

export function TierCard({ seats, discount, featured = false }: TierCardProps) {
  if (featured) {
    return (
      <div className="rounded-lg bg-gradient-sable p-8 text-center shadow-card-hover">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-cream/70">
          {seats}
        </p>
        <p className="mt-3 font-display text-4xl font-bold text-amber">
          {discount}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-cream p-8 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-warm-gray">
        {seats}
      </p>
      <p className="mt-3 font-display text-4xl font-bold text-sable">{discount}</p>
    </div>
  );
}

/* ---------- IncludeItem (What Every Seat Includes) ---------- */

type IncludeItemProps = {
  title: string;
  description: string;
};

export function IncludeItem({ title, description }: IncludeItemProps) {
  return (
    <div className="flex gap-4">
      <span
        className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber/15 text-amber-dark"
        aria-hidden="true"
      >
        <Check size={15} strokeWidth={3} />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-1 font-sans text-sm leading-relaxed text-warm-gray">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ---------- StepCard (How It Works) ---------- */

type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative rounded-lg border border-border bg-cream p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <span className="font-display text-4xl font-bold text-amber">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
    </div>
  );
}

/* ---------- PillarCard (About — numbered) ---------- */

type PillarCardProps = {
  number: number;
  title: string;
  description: string;
};

export function PillarCard({ number, title, description }: PillarCardProps) {
  return (
    <div className="rounded-lg border border-border bg-cream p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <span className="font-display text-3xl font-bold text-amber">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">
        {description}
      </p>
    </div>
  );
}
