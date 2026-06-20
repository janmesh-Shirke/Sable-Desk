import { seatRates } from "./rateData";

/**
 * Seat Rate Schedule. Renders as a three-column row layout on desktop and
 * collapses to stacked cards on mobile.
 */
export function RateTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-cream shadow-card">
      {/* Desktop header */}
      <div className="hidden grid-cols-12 gap-4 border-b border-border bg-background px-6 py-4 md:grid">
        <div className="col-span-5 font-sans text-xs font-medium uppercase tracking-wider text-warm-gray">
          Role
        </div>
        <div className="col-span-4 font-sans text-xs font-medium uppercase tracking-wider text-warm-gray">
          What&apos;s included
        </div>
        <div className="col-span-3 text-right font-sans text-xs font-medium uppercase tracking-wider text-warm-gray">
          Price
        </div>
      </div>

      <ul>
        {seatRates.map((rate, i) => (
          <li
            key={rate.role}
            className={`flex flex-col gap-3 p-6 md:grid md:grid-cols-12 md:items-center md:gap-4 ${
              i !== 0 ? "border-t border-border" : ""
            }`}
          >
            <div className="md:col-span-5">
              <h3 className="font-display text-base font-bold text-foreground">
                {rate.role}
              </h3>
              <p className="mt-1 font-sans text-sm text-warm-gray">
                {rate.description}
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="font-sans text-sm text-foreground/80">
                {rate.included}
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <p className="font-display text-base font-bold text-sable">
                {rate.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
