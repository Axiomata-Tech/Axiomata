"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-[background-color,border-color,box-shadow] duration-200 ease-out",
          isScrolled
            ? "bg-paper border-b-2 border-ink shadow-[0_4px_0_0_var(--ink)]"
            : "bg-transparent border-b-2 border-transparent shadow-none"
        )}
      >
        <div className="mx-auto w-full max-w-[1280px] h-[72px] px-5 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            href="/"
            className="font-heading font-bold text-2xl tracking-[0.04em] text-ink select-none hover:opacity-90"
          >
            {SITE.name}
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-heading font-semibold text-[17px] text-ink transition-colors hover:text-ink focus-visible:outline-3 py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" variant="primary" arrow="right">
              Start a project
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="lg:hidden w-11 h-11 flex items-center justify-center bg-white border-2 border-ink text-ink shadow-btn-ink hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] transition-transform"
          >
            <Menu className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        triggerRef={hamburgerRef}
      />
    </>
  );
}
