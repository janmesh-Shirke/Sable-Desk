export type FaqItem = {
  question: string;
  answer: string;
};

export const allFaqs: FaqItem[] = [
  {
    question: "How is this different from a recruitment agency?",
    answer:
      "A recruiter is paid once and walks away. We're paid monthly for as long as the seat performs, which means our incentive is the same as yours — the deployment has to keep working, we don't just close.",
  },
  {
    question: "How quickly can a seat be deployed?",
    answer:
      "Typically 3–4 weeks from signed agreement to a fully onboarded, UK-process trained professional starting work.",
  },
  {
    question: "What happens if a placement isn't working out?",
    answer:
      "Covered under our 6-month replacement guarantee — we replace the person at no additional fee. Your cost base and reporting continuity aren't put at risk.",
  },
  {
    question: "How do you handle data protection and compliance?",
    answer:
      "Every engagement runs under a UK GDPR-compliant Data Processing Agreement with Standard Contractual Clauses, and all employment is handled through an Indian Employer of Record — so there's no entity setup and no compliance burden on your side.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "A 12-month minimum term per seat, then rolling monthly. This protects the embedded process knowledge being built into your operations.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "One recurring monthly fee per seat — all-in, covering sourcing, onboarding, compliance, payroll, and performance management. A one-time refundable deposit fee applies per seat, which kicks off our search. This is later credited into the monthly fee after your final hiring.",
  },
  {
    question: "Can this work across multiple portfolio companies?",
    answer:
      "Yes — this is built for exactly that. Volume tiering applies from 3+ seats across a portfolio, with discounts scaling at 5+ seats.",
  },
  {
    question: "What functions can be safely offshored?",
    answer:
      "Finance and management accounting, FP&A and reporting, bookkeeping, legal research support, and operations coordination are the strongest fits — anything with clear process documentation and limited need for in-person presence.",
  },
];
