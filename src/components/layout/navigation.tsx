"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Acasa", href: "#" },
  { label: "Rute", href: "#rute" },
  { label: "Flota", href: "#flota" },
  { label: "Despre Noi", href: "#incredere" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span
              className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              MARIVA
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${
                isScrolled ? "text-muted" : "text-white/70"
              }`}
            >
              Travel
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.dispatchPhoneE164}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-muted" : "text-white/80"
              }`}
            >
              {siteConfig.dispatchPhoneDisplay}
            </a>
            <a
              href={`tel:${siteConfig.dispatchPhoneE164}`}
              className="inline-flex h-10 items-center justify-center rounded-none border border-accent bg-accent px-6 text-sm font-medium text-foreground transition-all duration-300 hover:bg-transparent hover:text-accent"
            >
              Rezerva Acum
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.dispatchPhoneE164}`}
              className="mt-4 inline-flex h-12 items-center justify-center border border-accent bg-accent text-base font-medium text-foreground transition-all hover:bg-transparent hover:text-accent"
            >
              Suna: {siteConfig.dispatchPhoneDisplay}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
