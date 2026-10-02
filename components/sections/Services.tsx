import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { ServiceCard } from "@/cards/ServiceCard";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-gray-200 text-ink border-b-2 border-ink"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal>
            <Eyebrow>WHAT WE BUILD</Eyebrow>
            <h2
              id="services-heading"
              className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-ink uppercase mt-3"
            >
              Digital foundations designed around your business.
            </h2>
          </Reveal>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.12} className="h-full">
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
