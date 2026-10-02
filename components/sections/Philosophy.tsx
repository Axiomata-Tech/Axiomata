import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { PRINCIPLES } from "@/data/principles";

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="w-full bg-ink text-paper border-b-2 border-paper on-dark"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <Reveal>
            <Eyebrow onDark>CORE PHILOSOPHY</Eyebrow>
            <h2
              id="philosophy-heading"
              className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-paper uppercase mt-3"
            >
              Your business isn&apos;t a template. Your website shouldn&apos;t be either.
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Grid with 2px Paper Vertical Dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t-2 lg:border-t-0 border-paper">
          {PRINCIPLES.map((principle, index) => (
            <div
              key={principle.number}
              className={`py-10 lg:py-4 px-0 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-paper last:border-b-0 last:border-r-0 ${
                index === 0 ? "lg:pr-10" : index === 1 ? "lg:px-10" : "lg:pl-10"
              }`}
            >
              <Reveal delay={index * 0.15}>
                {/* Giant Numeral */}
                <div className="font-heading font-black text-[72px] sm:text-[96px] lg:text-[120px] leading-none text-green tracking-tighter select-none mb-6">
                  {principle.number}
                </div>

                {/* Label in Space Mono */}
                <div className="font-mono text-xs sm:text-[13px] uppercase tracking-[0.1em] font-bold text-muted-dark mb-4">
                  {principle.label}
                </div>

                {/* Statement in Inter 20px */}
                <p className="text-lg sm:text-[20px] leading-snug font-medium text-paper">
                  {principle.statement}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
