"use client";

import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "./Button";

/**
 * Back-office cost comparison: UK in-house vs SableDesk.
 *
 * Assumptions (illustrative — tune as real benchmarks land):
 *  - SableDesk delivers ~60% lower payroll cost, so the embedded cost
 *    is ~40% of the equivalent UK payroll.
 *  - Annual saving drops straight to EBITDA; enterprise-value uplift is
 *    the saving × the chosen exit multiple.
 * PLACEHOLDER — replace assumption rates with verified figures.
 */
const SAVING_RATE = 0.6; // 60% reduction

function formatGBP(value: number): string {
  if (value >= 1_000_000) {
    return `£${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}m`;
  }
  return `£${Math.round(value / 1000)}k`;
}

export function SavingsCalculator() {
  const [ukCost, setUkCost] = useState(400_000);
  const [multiple, setMultiple] = useState(7);

  const sableCost = Math.round(ukCost * (1 - SAVING_RATE));
  const annualSaving = ukCost - sableCost;
  const evUplift = annualSaving * multiple;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-cream shadow-card">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Inputs */}
        <div className="border-b border-border p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <div className="space-y-8">
            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="calc-uk"
                  className="font-sans text-sm font-medium text-foreground/80"
                >
                  Current UK back-office payroll
                </label>
                <span className="font-display text-lg font-bold text-sable">
                  {formatGBP(ukCost)}
                </span>
              </div>
              <input
                id="calc-uk"
                type="range"
                min={100_000}
                max={1_000_000}
                step={25_000}
                value={ukCost}
                onChange={(e) => setUkCost(Number(e.target.value))}
                className="mt-4 w-full accent-amber"
              />
              <div className="mt-1 flex justify-between font-sans text-xs text-warm-gray">
                <span>£100k</span>
                <span>£1m</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor="calc-mult"
                  className="font-sans text-sm font-medium text-foreground/80"
                >
                  Target exit multiple
                </label>
                <span className="font-display text-lg font-bold text-sable">
                  {multiple}×
                </span>
              </div>
              <input
                id="calc-mult"
                type="range"
                min={6}
                max={8}
                step={1}
                value={multiple}
                onChange={(e) => setMultiple(Number(e.target.value))}
                className="mt-4 w-full accent-amber"
              />
              <div className="mt-1 flex justify-between font-sans text-xs text-warm-gray">
                <span>6×</span>
                <span>8×</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-sable p-7 text-cream sm:p-9">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-cream/60">
                UK in-house
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-cream/90">
                {formatGBP(ukCost)}
              </p>
            </div>
            <div>
              <p className="font-sans text-xs uppercase tracking-wider text-cream/60">
                With SableDesk
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-amber">
                {formatGBP(sableCost)}
              </p>
            </div>
          </div>

          <div className="my-6 h-px w-full bg-cream/15" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-cream/80">
                Annual saving to EBITDA
              </span>
              <span className="font-display text-xl font-bold text-amber">
                {formatGBP(annualSaving)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-sans text-sm text-cream/80">
                <TrendingUp size={16} className="text-amber" aria-hidden="true" />
                Enterprise value added
              </span>
              <span className="font-display text-2xl font-bold text-amber">
                {formatGBP(evUplift)}
              </span>
            </div>
          </div>

          <Button href="#book" variant="hero" className="mt-7 w-full">
            Model this for my portfolio
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </div>

      <p className="border-t border-border px-7 py-4 font-sans text-xs text-warm-gray sm:px-9">
        Illustrative model based on a ~60% payroll reduction. Actual recovery is
        scoped per portfolio company during diagnosis.
      </p>
    </div>
  );
}
