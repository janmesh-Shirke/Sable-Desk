import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { PillarCard } from "@/components/Cards";
import { CoverageMap } from "@/components/CoverageMap";
import { HeroBackground } from "@/components/HeroBackground";
import { FaqAccordion } from "@/components/FaqAccordion";
import { allFaqs } from "@/components/faqData";
import { seatRates } from "@/components/rateData";

export const metadata: Metadata = {
  title: "About — Why Choose Us",
  description:
    "Sable Desk is an offshore operating partner private equity firms use to expand portfolio company EBITDA. Compliance-led, EBITDA-focused, UK-process trained — not a recruitment agency.",
  openGraph: {
    title: "About Sable Desk — We Believe In Borderless Talent",
    description:
      "We convert payroll cost into margin. Compliance-led, EBITDA-focused offshore operating teams for UK PE-backed businesses.",
  },
};

const pillars = [
  {
    title: "EBITDA Impact, Not Cost-Cutting",
    description:
      "We don't sell cheaper labour — we sell margin. Every engagement is modelled against the financial outcome: cost recovered, EBITDA improved, and the resulting effect on exit valuation at the fund's target multiple. This is built for operating partners and CFOs, not hiring managers.",
  },
  {
    title: "Compliance-Led, Not Recruitment-Led",
    description:
      "We manage the full legal and operational architecture of offshoring — UK GDPR data transfer mechanisms, Indian employment law via Employer of Record structures, contracts, and onboarding — so portfolio companies inherit zero compliance risk and zero administrative burden. This isn't a CV-matching service; it's an operating function.",
  },
  {
    title: "UK-Process Fidelity",
    description:
      "Every professional we deploy is trained and assessed against UK working standards, reporting cadence, and communication expectations before deployment — ensuring the offshore team integrates as a seamless extension of the existing finance or ops function, not a bolt-on outsourcing experiment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ───────── Lead narrative ───────── */}
      <section className="relative -mt-16 overflow-hidden bg-gradient-sable text-cream">
        <HeroBackground variant="subtle" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-20 pt-28 sm:px-8 md:pb-24 md:pt-36">
          <span className="block font-sans text-xs font-medium uppercase tracking-[0.18em] text-amber-light">
            About Sable Desk
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            We Believe In Borderless Talent
          </h1>
          <div className="mt-8 space-y-5 font-sans text-lg leading-relaxed text-cream/80">
            <p>
              Sable Desk is an offshore operating partner private equity firms
              use to expand portfolio company EBITDA. We embed highly skilled
              India-based finance, operations, legal-support, AI and technology
              professionals directly into UK businesses — converting payroll cost
              into margin, not just headcount into a cheaper line item.
            </p>
            <p>
              Unlike a recruitment agency, we don&apos;t hand over a CV and walk
              away. We diagnose which back-office functions in a portfolio company
              can be safely and compliantly offshored, deploy fully vetted talent
              within weeks, and manage the ongoing compliance, performance, and
              retention — so the EBITDA gain shows up on the P&amp;L and stays
              there through to exit.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── Mission ───────── */}
      <Section background="background">
        {/* PLACEHOLDER — mission statement, editable */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span
            className="mx-auto block h-1 w-12 rounded-full bg-gradient-amber"
            aria-hidden="true"
          />
          <Eyebrow className="mt-6">Our Mission</Eyebrow>
          <p className="mt-5 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
            To make UK private equity portfolios leaner without making them
            riskier — turning offshore operational capacity into a repeatable
            EBITDA lever, not a one-off cost hack.
          </p>
        </Reveal>
      </Section>

      {/* ───────── Three Pillars ───────── */}
      <Section background="sand">
        <Reveal>
          <Eyebrow>Why Choose Us</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <PillarCard number={i + 1} {...pillar} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────── The Corridor (compact, animated) ───────── */}
      <Section background="background" flush className="py-16 md:py-20">
        <Reveal className="text-center">
          <Eyebrow>The Corridor</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            One corridor, done properly
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-sm leading-relaxed text-warm-gray">
            Built on one corridor, done properly — UK businesses, India-based
            operating talent.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <CoverageMap />
        </Reveal>
      </Section>

      {/* ───────── Team & leadership ───────── */}
      <Section background="sand">
        <Reveal>
          <Eyebrow>Team &amp; Leadership</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 max-w-2xl">
            <p className="font-sans text-lg leading-relaxed text-foreground/85">
              Built on direct experience in data and operations analysis, and a
              close understanding of how mid-market PE firms model offshoring
              economics.
            </p>
            <a
              href="https://www.linkedin.com/in/janmesh-shirke-837546144"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-amber-dark transition-colors hover:text-amber"
            >
              <Linkedin size={18} aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ───────── Condensed offering table ───────── */}
      <Section background="background">
        <Reveal>
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Embedded roles, all-in
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-lg border border-border bg-cream shadow-card">
            <ul>
              {seatRates.map((rate, i) => (
                <li
                  key={rate.role}
                  className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between ${
                    i !== 0 ? "border-t border-border" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {rate.role}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-warm-gray">
                      {rate.description}
                    </p>
                  </div>
                  <p className="font-display text-base font-bold text-sable sm:text-right">
                    {rate.price}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium text-amber-dark hover:text-amber"
          >
            See full pricing
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      {/* ───────── FAQs ───────── */}
      <Section background="sand">
        <Reveal>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The questions operating partners ask
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <FaqAccordion items={allFaqs} />
        </Reveal>
      </Section>
    </>
  );
}
