import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { ContactForm } from "@/components/ContactForm";
import { RateTable } from "@/components/RateTable";
import { HeroBackground } from "@/components/HeroBackground";
import { Reveal } from "@/components/Reveal";
import { TermCard, IncludeItem } from "@/components/Cards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { allFaqs } from "@/components/faqData";

export const metadata: Metadata = {
  title: "Pricing & How It Works",
  description:
    "Priced as a managed function, not a placement. One recurring fee per embedded team member — sourcing, UK-process onboarding, compliance, payroll and performance management on a single P&L line. We model the EBITDA recovery and stay accountable for the outcome.",
  openGraph: {
    title: "Pricing & How It Works · SableDesk",
    description:
      "All-in, fully managed seat rates. We model the EBITDA recovery, deploy the embedded team, and stay accountable across every portfolio company.",
  },
};

const steps = [
  {
    title: "Diagnose",
    description:
      "We map your portfolio company's back-office cost base and identify exactly which roles can be offshored without compliance or process risk.",
  },
  {
    title: "Model",
    description:
      "You see the projected savings and exit-value impact before committing to anything.",
  },
  {
    title: "Deploy",
    description:
      "A vetted, UK-process trained professional is embedded within 3–4 weeks, fully compliant, with payroll and performance managed by us.",
  },
  {
    title: "Recover",
    description:
      "The saving lands on your P&L. We stay accountable for retention and performance for the life of the engagement.",
  },
];

const terms = [
  {
    title: "Refundable deposit",
    value: "£500",
    description:
      "Fully refundable. Begins your search and candidate introductions — credited in full into your monthly seat fee after your final hiring.",
  },
  {
    title: "Minimum term",
    value: "12 months",
    description:
      "Per seat, then rolling monthly. Protects the embedded knowledge you build.",
  },
  {
    title: "Replacement guarantee",
    value: "6 months",
    description:
      "Underperformance replaced at no additional fee. Your numbers stay protected.",
  },
];

const includes = [
  {
    title: "Sourcing & vetting",
    description: "Role-matched, assessed and shortlisted before you see them.",
  },
  {
    title: "UK-process onboarding",
    description: "Trained to your reporting cadence and standards.",
  },
  {
    title: "Compliance & data transfer",
    description: "UK GDPR-compliant agreements, India-side statutory cover.",
  },
  {
    title: "Payroll & EOR handling",
    description: "Contracts, payroll and employment compliance, end-to-end.",
  },
  {
    title: "Performance management",
    description: "Ongoing oversight against agreed output and quality.",
  },
  {
    title: "Retention & replacement",
    description: "Continuity managed, plus the 6-month guarantee.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-sable text-cream">
        <HeroBackground variant="subtle" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-28 text-center sm:px-8 md:pb-24 md:pt-36">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Embedded operations for PE-backed businesses
          </h1>
        </div>
      </section>

      {/* ───────── How It Works ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From cost base to recovered EBITDA
          </h2>
        </Reveal>
        <div className="relative mt-12">
          {/* Connecting line behind the numbered badges (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-amber/30 via-amber/40 to-amber/30 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-amber font-display text-xl font-bold text-sable-dark shadow-hero">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-warm-gray">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ───────── Seat Rate Schedule ───────── */}
      <Section background="sand">
        <Reveal>
          <Eyebrow>Seat Rate Schedule · All-In, Fully Managed</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            One rate per seat. Everything included.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <RateTable />
        </Reveal>
      </Section>

      {/* ───────── Commercial Terms ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>Commercial Terms</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {terms.map((term, i) => (
            <Reveal key={term.title} delay={i * 0.06}>
              <TermCard {...term} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── What Every Seat Includes ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>What Every Seat Includes</Eyebrow>
        </Reveal>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {includes.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.05}>
              <IncludeItem {...item} />
            </Reveal>
          ))}
        </ul>

        {/* PLACEHOLDER — illustrative impact, replace with real data */}
        <Reveal className="mt-12">
          <Callout label="Illustrative impact">
            A portfolio company carrying £400k in back-office payroll typically
            recovers £150k–£250k to EBITDA in year one — £1m–£2m of enterprise
            value at a 6–8× exit multiple.
          </Callout>
        </Reveal>
      </Section>

      {/* ───────── Contact Form ───────── */}
      <Section background="sand" id="contact">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Request your model</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              See the EBITDA recovery before you commit
            </h2>
            <p className="mt-4 max-w-md font-sans text-lg leading-relaxed text-warm-gray">
              Tell us about your portfolio and we&apos;ll model the projected
              recovery — no placement obligation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm variant="full" />
          </Reveal>
        </div>
      </Section>

      {/* ───────── FAQs ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Common questions
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FaqAccordion items={allFaqs} />
        </Reveal>
      </Section>
    </>
  );
}
