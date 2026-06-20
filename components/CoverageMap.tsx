import { MapPin } from "lucide-react";

/**
 * Compact UK ↔ India corridor. Deliberately a two-node corridor, not a global
 * map. The connecting arc is prominent and CSS-animated (glow underlay +
 * flowing dash + pulsing endpoints), disabled under prefers-reduced-motion
 * via globals.css.
 */
const hubs = ["Pune", "Ahmedabad", "Hyderabad", "Bangalore"];

export function CoverageMap() {
  return (
    <div className="mx-auto max-w-3xl rounded-lg border border-border bg-cream p-6 shadow-card sm:p-8">
      <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
        {/* UK node */}
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sable text-cream">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-base font-bold text-foreground">
            UK
          </p>
          <p className="font-sans text-xs text-warm-gray">Businesses</p>
        </div>

        {/* Animated connection */}
        <svg
          viewBox="0 0 200 70"
          className="h-16 w-full sm:w-52"
          role="img"
          aria-label="Animated connection between the UK and India"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="corridor-glow" x="-20%" y="-60%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* Glow underlay */}
          <path
            d="M 16 38 Q 100 -6 184 38"
            fill="none"
            stroke="#CE913B"
            strokeWidth={8}
            strokeLinecap="round"
            opacity={0.35}
            filter="url(#corridor-glow)"
          />
          {/* Bright animated dash */}
          <path
            d="M 16 38 Q 100 -6 184 38"
            fill="none"
            stroke="#DDA94E"
            strokeWidth={3.4}
            strokeLinecap="round"
            className="map-arc"
          />

          {/* Pulsing endpoints */}
          <circle cx={16} cy={38} r={6} className="map-ping fill-amber" />
          <circle cx={16} cy={38} r={4} className="fill-amber-dark" />
          <circle cx={184} cy={38} r={6} className="map-ping fill-amber" />
          <circle cx={184} cy={38} r={4} className="fill-amber-dark" />
        </svg>

        {/* India node */}
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-dark text-cream">
            <MapPin size={22} aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-base font-bold text-foreground">
            India
          </p>
          <p className="font-sans text-xs text-warm-gray">Talent hubs</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2 border-t border-border pt-6">
        {hubs.map((hub) => (
          <span
            key={hub}
            className="rounded-full border border-border bg-background px-3.5 py-1.5 font-sans text-xs text-foreground/80"
          >
            {hub}
          </span>
        ))}
      </div>
    </div>
  );
}
