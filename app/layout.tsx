import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sabledesk.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SableDesk — Embedded operations for UK PE-backed businesses",
    template: "%s · SableDesk",
  },
  description:
    "SableDesk is the offshore operating partner UK private equity firms use to expand portfolio company EBITDA — embedding India-based finance, operations, legal-support, and technology professionals into UK PE-backed businesses.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "SableDesk",
    title: "SableDesk — Embedded operations for UK PE-backed businesses",
    description:
      "Convert back-office payroll cost into EBITDA. SableDesk embeds vetted, UK-process trained offshore teams into UK PE-backed businesses, fully managed and compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SableDesk — Embedded operations for UK PE-backed businesses",
    description:
      "Convert back-office payroll cost into EBITDA. Embedded, fully managed offshore operating teams for UK PE-backed businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
