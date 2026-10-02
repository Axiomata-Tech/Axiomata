"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { PROCESS_STEPS } from "@/data/process";
import { EASING } from "@/lib/motion";

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full bg-paper text-ink border-b-2 border-ink"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <Reveal>
            <Eyebrow>OUR METHODOLOGY</Eyebrow>
            <h2
              id="process-heading"
              className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-ink uppercase mt-3"
            >
              From idea to online.
            </h2>
          </Reveal>
        </div>

        {/* Desktop Horizontal Timeline (>=1024px) */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting 2px Ink Line */}
          <div className="absolute top-6 left-[6%] right-[6%] h-[2px] bg-ink/20 z-0">
            <motion.div
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: EASING }}
              className="w-full h-[2px] bg-ink origin-left"
            />
          </div>

          {/* 4-Step Ordered List */}
          <ol className="relative z-10 grid grid-cols-4 gap-8 m-0 p-0 list-none">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.step} className="flex flex-col group">
                {/* 48px Square Node */}
                <div className="w-12 h-12 bg-white border-2 border-ink flex items-center justify-center font-mono font-bold text-sm text-ink shadow-[3px_3px_0_0_var(--ink)] transition-colors duration-150 group-hover:bg-green mb-8">
                  {step.step}
                </div>

                {/* Step Content */}
                <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-light text-base leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / Tablet Vertical Timeline (<1024px) */}
        <div className="lg:hidden relative pl-8 sm:pl-10">
          {/* Vertical 2px Ink Line */}
          <div className="absolute top-6 bottom-6 left-6 w-[2px] bg-ink z-0" />

          {/* Ordered List */}
          <ol className="relative z-10 space-y-12 m-0 p-0 list-none">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step} className="relative flex items-start gap-6 group">
                {/* 48px Square Node on the line */}
                <div className="w-12 h-12 flex-shrink-0 -ml-12 bg-white border-2 border-ink flex items-center justify-center font-mono font-bold text-sm text-ink shadow-[3px_3px_0_0_var(--ink)] group-hover:bg-green">
                  {step.step}
                </div>

                {/* Step Content */}
                <div className="pt-1">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-ink mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-light text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
