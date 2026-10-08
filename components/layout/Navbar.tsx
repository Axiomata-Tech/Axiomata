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
      if (window.scrollY > 20) {
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
          "sticky top-0 z-40 w-full transition-[background-color,border-color] duration-200 ease-out",
          isScrolled
            ? "bg-[#F6F2E9]/92 backdrop-blur-md border-b border-[#E2DDD3]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-[1280px] h-[72px] px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Wordmark */}
          <Link
            href="/"
            className="font-heading font-extrabold text-2xl tracking-[0.03em] text-[#111315] select-none hover:opacity-90 flex items-center gap-2"
          >
            <span>{SITE.name}</span>
            <span className="w-2 h-2 rounded-full bg-[#00C7B7]" aria-hidden="true" />
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
                className="relative font-heading font-medium text-[15px] text-[#111315] transition-colors hover:text-[#00C7B7] py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00C7B7] scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" variant="primary" arrow="right">
              Start a conversation
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
            className="lg:hidden w-11 h-11 flex items-center justify-center bg-[#FFFFFF] border-2 border-[#111315] text-[#111315] rounded-[2px] transition-colors hover:bg-[#00C7B7]"
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
