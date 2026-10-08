"use client";

import React from "react";
import { Reveal } from "@/ui/Reveal";
import { Eyebrow } from "@/ui/Eyebrow";

export function Intro() {
  return (
    <section
      aria-label="Positioning Statement"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b border-[#E2DDD3] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-4xl space-y-6">
            <Eyebrow>POSITIONING</Eyebrow>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111315] leading-[1.12] tracking-tight">
              We turn business challenges into practical technology.
            </h2>
            <p className="text-xl sm:text-2xl text-[#3B4143] leading-relaxed max-w-3xl font-normal pt-2">
              From internal operational tools to customer-facing platforms, Axiomata builds digital solutions engineered directly around the way your business actually operates.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
