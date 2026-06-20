import type { Metadata } from "next";
import {
  Check,
  Search,
  Rocket,
  ShieldCheck,
  Workflow,
  LineChart,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { ContactForm } from "@/components/ContactForm";
import { StatCounter } from "@/components/StatCounter";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { HeroBackground } from "@/components/HeroBackground";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "SableDesk — Embedded operations for UK PE-backed businesses",
  description:
    "The biggest EBITDA lever your portfolio companies are missing. SableDesk embeds offshore finance, operations, legal, and tech teams into UK PE-backed businesses — reducing back-office payroll by up to 60% and dropping the savings straight to EBITDA.",
  openGraph: {
    title: "SableDesk — Embedded operations for UK PE-backed businesses",
    description:
      "Reduce back-office payroll by up to 60% and convert the saving into EBITDA. Embedded, fully managed offshore operating teams for UK PE-backed businesses.",
  },
};

const heroBullets = [
  { icon: ShieldCheck, label: "6-month guarantee on all hires" },
  {
    icon: Workflow,
    label: "Full-cycle hiring and onboarding, handled end-to-end",
  },
  {
    icon: LineChart,
    label: "Performance, retention & compliance fully managed",
  },
];

const possibilities = [
  "Up to 60% lower payroll costs compared to equivalent UK-based roles",
  "Experienced professionals across sales, customer support, finance, operations, and more",
  "UK-process trained and assessed before deployment, so reporting cadence and communication standards match your existing team exactly",
];

const remoteCards = [
  {
    icon: Search,
    title: "Diagnosed, Not Guessed",
    body: "We assess which roles in each portco can be safely offshored, modelled against real cost and compliance data, before anyone is deployed.",
  },
  {
    icon: Rocket,
    title: "Hassle-Free Deployment",
    body: "Our experienced team handles sourcing, screening, and vetting, so you don't have to.",
  },
  {
    icon: ShieldCheck,
    title: "Deploy With Confidence",
    body: "Our 6-month guarantee ensures peace of mind while your new team member settles into the role.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────── Section 1 — Hero ───────── */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-sable text-cream">
        <HeroBackground />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The biggest{" "}
              <span className="text-gradient">EBITDA lever</span> your portfolio
              companies are missing
            </h1>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-cream/80">
              We embed offshore finance, operations, legal, and tech support
              teams into UK PE-backed businesses, reducing back-office payroll by
              up to 60% and dropping the savings straight to your bottom line.
            </p>

            <ul className="mt-8 space-y-3">
              {heroBullets.map((bullet) => {
                const Icon = bullet.icon;
                return (
                  <li key={bullet.label} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber text-sable-dark"
                      aria-hidden="true"
                    >
                      <Icon size={14} strokeWidth={2.5} />
                    </span>
                    <span className="font-sans text-base text-cream/90">
                      {bullet.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Call-booking form on a cream card for contrast */}
          <div id="book" className="scroll-mt-24 lg:pl-4">
            <ContactForm variant="home" />
          </div>
        </div>
      </section>

      {/* ───────── Section 2 — Core Benefits ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>Why offshore with SableDesk</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Reduce Payroll Costs by Up to 60%
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-warm-gray">
            Access highly skilled global talent across a wide range of roles with
            dramatically lower payroll and overhead costs.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {/* PLACEHOLDER — illustrative figures, replace with real data */}
          <Callout label="Did you know?">
            A portfolio company spending £400k on finance, ops, and back-office
            payroll can typically recover £150k–£250k annually to EBITDA within
            90 days of deployment — adding £1m–£2m to enterprise value.
          </Callout>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <h3 className="font-display text-xl font-bold text-foreground">
            What global hiring makes possible:
          </h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {possibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-border bg-cream p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber/15 text-amber-dark"
                  aria-hidden="true"
                >
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="font-sans text-sm leading-relaxed text-foreground/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ───────── Savings Calculator ───────── */}
      <Section background="sand">
        <Reveal>
          <Eyebrow>Savings Calculator</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Back-office in the UK vs through Sable Desk
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-warm-gray">
            Drag to match your portfolio company&apos;s back-office payroll and
            see the saving land on EBITDA — and what it&apos;s worth at exit.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <SavingsCalculator />
        </Reveal>
      </Section>

      {/* ───────── Section 2b — Remote Hiring, Without the Complexity ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>Remote Hiring, Without the Complexity</Eyebrow>
          <p className="mt-3 max-w-2xl font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            Let us help you embed your next high-performing team member
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {remoteCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="h-full rounded-lg border border-border bg-cream p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/15 text-amber-dark"
                    aria-hidden="true"
                  >
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-warm-gray">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ───────── Section 3 — Numbers & Social Proof ───────── */}
      <Section background="sand">
        <div className="grid gap-12 sm:grid-cols-3">
          <StatCounter
            prefix="£"
            target={1.2}
            decimals={1}
            suffix="m"
            tone="light"
            caption="EBITDA recovered across portfolio companies in 2025"
          />
          <StatCounter
            target={47}
            suffix="%"
            tone="light"
            caption="Average back-office payroll reduction within 90 days"
          />
          <StatCounter
            prefix="£"
            placeholder="5m–£50m"
            tone="light"
            caption="AUM range of PE firms we partner with"
          />
        </div>
      </Section>

      {/* ───────── Final CTA ───────── */}
      <Section background="gradient-sable">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Ready to model the EBITDA impact across your portfolio?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg leading-relaxed text-cream/80">
            Join UK PE firms recovering margin and adding to exit valuation
            through embedded offshore finance, legal, tech and ops teams.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#book" variant="hero" size="lg">
              Contact now
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
