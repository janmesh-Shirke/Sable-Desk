/** Seat Rate Schedule — shared between the Pricing page and the About offering table. */

export type SeatRate = {
  role: string;
  description: string;
  included: string;
  price: string;
};

export const seatRates: SeatRate[] = [
  {
    role: "Back-office & admin support",
    description: "AP/AR, data entry, document handling, coordination",
    included: "Sourced, vetted & UK-process trained",
    price: "FROM £1,600 / month",
  },
  {
    role: "Finance & bookkeeping",
    description: "Bookkeeping, reconciliations, VAT prep, ledgers",
    included: "Compliance & payroll managed end-to-end",
    price: "FROM £2,000 / month",
  },
  {
    role: "FP&A & management accounting",
    description: "Reporting, board packs, budgeting, portfolio analytics",
    included: "6-month replacement guarantee included",
    price: "FROM £2,600 / month",
  },
  {
    role: "Specialist — legal, AI & engineering",
    description: "Legal research, AI/data, software development",
    included: "Performance managed against UK standards",
    price: "FROM £3,200 / month",
  },
];
