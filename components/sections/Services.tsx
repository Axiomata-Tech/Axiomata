"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { ServiceCard } from "@/cards/ServiceCard";
import { SERVICES } from "@/data/services";
import { Reveal } from "@/ui/Reveal";

export function Services() {
  return (
    <section
      id="services"
      aria-label="Capabilities and Services"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#111315]">
            <div className="space-y-3">
              <Eyebrow>CAPABILITY MODEL</Eyebrow>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#111315] tracking-tight leading-[1.12]">
                Custom Software, Automation &amp; AI
              </h2>
            </div>
            <p className="text-[#3B4143] text-lg sm:text-xl max-w-lg leading-relaxed font-normal">
              We design and develop core technology solutions engineered for real business growth.
            </p>
          </div>
        </Reveal>

        {/* 2x2 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
