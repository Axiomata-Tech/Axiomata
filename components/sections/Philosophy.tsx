"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { PRINCIPLES } from "@/data/principles";
import { Reveal } from "@/ui/Reveal";

export function Philosophy() {
  return (
    <section
      aria-label="Engineering Philosophy"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-4 max-w-3xl">
            <Eyebrow>ENGINEERING PHILOSOPHY</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#111315] uppercase tracking-tight leading-tight">
              Technology should make work simpler, not more complicated.
            </h2>
          </div>
        </Reveal>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 0.1}>
              <div className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-8 flex flex-col justify-between h-full rounded-[2px]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD3] mb-6">
                    <span className="font-mono text-xl font-bold text-[#77766F]">
                      [{principle.number}]
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#111315] uppercase mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-[#3B4143] text-base leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
