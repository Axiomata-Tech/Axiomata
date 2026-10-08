"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { PROCESS_STEPS } from "@/data/process";
import { Reveal } from "@/ui/Reveal";

export function Process() {
  return (
    <section
      id="process"
      aria-label="Execution Process"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#111315]">
            <div className="space-y-3">
              <Eyebrow>EXECUTION MODEL</Eyebrow>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#111315] tracking-tight leading-[1.12]">
                How We Engineer Solutions
              </h2>
            </div>
            <p className="text-[#3B4143] text-lg sm:text-xl max-w-lg leading-relaxed font-normal">
              A structured 4-phase methodology ensuring clarity, speed, and software quality from day one.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.12}>
              <div className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-8 flex flex-col justify-between h-full rounded-[2px] relative group hover:border-[#00C7B7] transition-colors">
                <div>
                  {/* Step Phase Marker */}
                  <div className="flex items-center justify-between pb-4 border-b-2 border-[#111315] mb-6">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#111315]">
                      {step.number}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#00C7B7] uppercase tracking-wider">
                      {step.phase}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111315] tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#3B4143] text-[15px] sm:text-base leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#E2DDD3] space-y-1.5 mt-auto">
                  <span className="font-mono text-[10px] text-[#77766F] uppercase tracking-wider block font-bold mb-2">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-[#111315]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C7B7]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
