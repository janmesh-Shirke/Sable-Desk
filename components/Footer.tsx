import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const utilityLinks = [
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="bg-sable-dark text-cream">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo variant="dark" />
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">
              Embedded operations for PE-backed businesses
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/sable-desk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SableDesk on LinkedIn"
                className="rounded-md p-2 text-cream/70 transition-colors hover:bg-sable/40 hover:text-cream"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:janmesh@sabledesk.co.uk"
                aria-label="Email SableDesk"
                className="rounded-md p-2 text-cream/70 transition-colors hover:bg-sable/40 hover:text-cream"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <p className="font-sans text-xs leading-relaxed text-cream/55">
            UK GDPR-compliant data-transfer agreements on all offshore deployments.
          </p>
          <p className="mt-2 font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} SableDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
