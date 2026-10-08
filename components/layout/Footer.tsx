import React from "react";
import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#111315] text-[#F6F2E9] border-t-2 border-[#F6F2E9] on-dark">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-heading font-black text-3xl tracking-[0.06em] text-[#F6F2E9] hover:text-[#00C7B7] transition-colors"
            >
              <span>{SITE.name}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C7B7]" />
            </Link>
            <p className="text-[#A7A39A] text-lg max-w-md">
              {SITE.tagline}
            </p>
            <p className="font-mono text-xs text-[#77766F] uppercase tracking-wider pt-2">
              Practical technology solutions for growing businesses.
            </p>
          </div>

          {/* Column 2: Capability Solutions */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#00C7B7] font-bold">
              Solutions
            </p>
            <ul className="space-y-2.5 font-heading font-semibold text-base">
              <li>
                <Link href="/#services" className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors">
                  Digital Foundations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Social */}
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#00C7B7] font-bold">
              Connect
            </p>
            <ul className="space-y-2.5 font-heading font-semibold text-base">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6F2E9] hover:text-[#00C7B7] transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Separated by 2px Paper Rule */}
        <div className="pt-8 border-t-2 border-[#F6F2E9] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A7A39A]">
          <p>© 2026 Axiomata. All rights reserved.</p>
          <p className="text-[11px] text-[#77766F]">ENG // INDUSTRIAL DIGITAL</p>
        </div>
      </div>
    </footer>
  );
}
