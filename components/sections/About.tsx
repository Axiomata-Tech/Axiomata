"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-label="About Axiomata"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Statement */}
            <div className="lg:col-span-6 space-y-6">
              <Eyebrow>ABOUT AXIOMATA</Eyebrow>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#111315] uppercase tracking-tight leading-tight">
                Practical engineering for the businesses that need it most.
              </h2>
              <p className="text-lg text-[#3B4143] leading-relaxed">
                Axiomata exists to make technology more useful. We bridge the gap between complex software engineering and everyday business operations — building systems that are clean, maintainable, and built for growth.
              </p>
            </div>

            {/* Right Credibility Metrics Box */}
            <div className="lg:col-span-6 bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-10 space-y-6 rounded-[2px]">
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[#E2DDD3]">
                <div>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-[#111315] block">
                    100%
                  </span>
                  <span className="font-mono text-xs text-[#77766F] uppercase tracking-wider block mt-1">
                    Custom Engineering
                  </span>
                </div>
                <div>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-[#00C7B7] block">
                    &lt;50ms
                  </span>
                  <span className="font-mono text-xs text-[#77766F] uppercase tracking-wider block mt-1">
                    Target API Latency
                  </span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#111315]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
                  <span>Maintainable, documented codebases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
                  <span>Zero-vendor lock-in architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
                  <span>Long-term system maintenance &amp; support</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
