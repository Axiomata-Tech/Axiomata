"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Tag } from "@/ui/Tag";
import { AUDIENCES } from "@/data/audiences";
import { Reveal } from "@/ui/Reveal";

export function Audience() {
  return (
    <section
      aria-label="Who We Work With"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="space-y-3">
            <Eyebrow>TARGETED PARTNERSHIPS</Eyebrow>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#111315] uppercase tracking-tight">
              Built for Every Operational Stage
            </h2>
          </div>
        </Reveal>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUDIENCES.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <div className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-8 flex flex-col justify-between h-full rounded-[2px] transition-colors hover:border-[#00C7B7]">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD3] mb-6">
                    <span className="font-mono text-xs font-bold text-[#00C7B7] uppercase tracking-wider">
                      STAGE // {item.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-[#111315] uppercase mb-2">
                    {item.tagline}
                  </h3>
                  <p className="text-[#3B4143] text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD3] flex flex-wrap gap-2 mt-auto">
                  {item.capabilities.map((cap) => (
                    <Tag key={cap}>{cap}</Tag>
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
