import React from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { AUDIENCE_SECTION_ITEMS } from "@/data/audiences";

export function Audience() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="w-full bg-gray-200 text-ink border-b-2 border-ink select-none overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <Reveal>
            <Eyebrow>WHO WE SERVE</Eyebrow>
            <h2
              id="audience-heading"
              className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-ink uppercase mt-3"
            >
              Built for businesses like yours.
            </h2>
          </Reveal>
        </div>

        {/* Desktop View: Stacked Rows with Shift & Color Flip (>=1024px) */}
        <ul className="hidden lg:block border-t-2 border-ink m-0 p-0 list-none">
          {AUDIENCE_SECTION_ITEMS.map((item, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");
            return (
              <li
                key={item}
                className="group relative flex items-center justify-between py-6 px-6 border-b-2 border-ink transition-transform duration-150 ease-out hover:translate-x-3 hover:bg-green"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-base font-bold text-muted-light group-hover:text-ink">
                    {indexNumber}
                  </span>
                  <span className="text-[clamp(2rem,4vw,3.75rem)] font-heading font-black tracking-tight text-ink uppercase">
                    {item}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div
                  aria-hidden="true"
                  className="w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                >
                  <ArrowRight className="w-8 h-8 text-ink stroke-[2.5]" />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mobile / Tablet View: 2-Column Grid of Bordered Tiles (<1024px) */}
        <ul className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none">
          {AUDIENCE_SECTION_ITEMS.map((item, index) => {
            const indexNumber = String(index + 1).padStart(2, "0");
            return (
              <li
                key={item}
                className="min-h-[88px] bg-white border-2 border-ink shadow-btn-ink p-5 flex flex-col justify-between"
              >
                <span className="font-mono text-xs font-bold text-muted-light">
                  {indexNumber}
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-ink uppercase tracking-tight">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
