# SableDesk Website

Marketing site for **SableDesk** — the offshore operating partner UK private
equity firms use to expand portfolio company EBITDA.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v3** with the full brand token system in [`tailwind.config.ts`](tailwind.config.ts)
- **next/font/google** — Space Grotesk (display/logo) + DM Sans (body)
- **Framer Motion** — scroll-reveal + stat count-up (respects `prefers-reduced-motion`)
- **lucide-react** — icons (used sparingly)
- **react-hook-form** — contact forms with client-side validation

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx        Root layout — fonts, global metadata/OG, Navbar + Footer
  globals.css       Tailwind layers, focus ring, reduced-motion
  page.tsx          Home (/)
  pricing/page.tsx  Pricing & How It Works (/pricing)
  about/page.tsx    About / Why Choose Us (/about)
components/
  Logo, Navbar, Footer
  Button, Section, Eyebrow, Callout
  Reveal (fade-up + FadeIn, with deep-link fallback)
  StatCounter (count-up on scroll)
  RateTable, Cards (TermCard/TierCard/IncludeItem/StepCard/PillarCard)
  FaqAccordion, ContactForm, CoverageMap
  rateData.ts, faqData.ts   shared content
```

## Placeholders to replace with real data

All marked in source with `{/* PLACEHOLDER — replace with real data */}`:

- **Home — stat counters** (`app/page.tsx`): `£X.Xm`, `XX%`, `£XXXm+`. Pass real
  numbers to `<StatCounter target=… decimals=… />` to enable the count-up.
- **Home — "Did you know?" callout**: illustrative £ figures.
- **Pricing — "Illustrative impact" callout**: illustrative £ figures.
- **About — lead narrative / mission**: editable copy.
- **About — coverage map** (`components/CoverageMap.tsx`): UK–India corridor diagram.
- **About — testimonials**: two draft placeholder quotes.
- **About — founder bio + headshot slot**: `[Founder Name]` and the headshot box.
- **About — social impact**: optional copy.
- **Footer links** (`components/Footer.tsx`): LinkedIn / X URLs and Terms / Privacy /
  Cookie pages currently point to `#`.

## Wiring up the contact form

`components/ContactForm.tsx` is client-side only. The submit handler has a clearly
marked `// TODO` — point `onSubmit` at a server action / API route or a form
service (Formspree, Resend, etc.). Both variants (`compact` hero form, `full`
EBITDA-model form) share validation and a confirmation state.
