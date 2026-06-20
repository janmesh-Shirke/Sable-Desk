"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "How it works" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // The home hero is dark; other pages have a light hero so the bar should
  // start solid there. We treat scrolled OR non-home as "solid".
  const isHome = pathname === "/";
  const solid = scrolled || !isHome || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkColor = solid
    ? "text-foreground/80 hover:text-foreground"
    : "text-cream/85 hover:text-cream";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/95 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo variant={solid ? "light" : "dark"} />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/pricing#contact" variant={solid ? "sable" : "secondary"} size="sm">
            Book a Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`md:hidden ${solid ? "text-foreground" : "text-cream"}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="animate-fade-in border-t border-border bg-cream md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 font-sans text-base font-medium text-foreground/90 hover:bg-background"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/pricing#contact" variant="sable" className="mt-2 w-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
