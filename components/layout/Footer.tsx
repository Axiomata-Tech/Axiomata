import React from "react";
import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="w-full bg-ink text-paper border-t-2 border-paper on-dark">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-16 lg:py-20">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block font-heading font-bold text-3xl tracking-[0.04em] text-paper hover:text-green transition-colors"
            >
              {SITE.name}
            </Link>
            <p className="text-muted-dark text-lg max-w-md">
              {SITE.tagline}
            </p>
            <p className="font-mono text-xs text-muted-dark uppercase tracking-wider pt-2">
              Modern digital studio &amp; technology explorations.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-green font-bold">
              Navigation
            </p>
            <ul className="space-y-2.5 font-heading font-semibold text-lg">
              {SITE.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper hover:text-green hover:underline decoration-2 underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-paper hover:text-green hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Social */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-green font-bold">
              Connect
            </p>
            <ul className="space-y-2.5 font-heading font-semibold text-lg">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-paper hover:text-green hover:underline decoration-2 underline-offset-4 transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-green hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper hover:text-green hover:underline decoration-2 underline-offset-4 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Separated by 2px Paper Rule */}
        <div className="pt-8 border-t-2 border-paper flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-dark">
          <p>© 2026 Axiomata. All rights reserved.</p>
          <p className="uppercase tracking-widest text-[11px]">
            Restrained Neo-Brutalist Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
