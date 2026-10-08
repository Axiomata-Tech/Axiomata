"use client";

import React from "react";

const SECTORS = [
  "STARTUPS",
  "SMALL BUSINESSES",
  "GROWING TEAMS",
  "INDUSTRIES",
  "WORKFLOW AUTOMATION",
  "AI INTEGRATION",
  "CUSTOM SOFTWARE",
  "DIGITAL FOUNDATIONS",
];

export function AudienceStrip() {
  return (
    <div
      aria-hidden="true"
      className="w-full bg-[#111315] text-[#F6F2E9] border-y-2 border-[#111315] py-4 overflow-hidden select-none"
    >
      <div className="flex w-full whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 px-4 font-mono text-xs font-bold tracking-[0.14em] uppercase">
          {SECTORS.concat(SECTORS).map((sector, index) => (
            <React.Fragment key={`${sector}-${index}`}>
              <span>{sector}</span>
              <span className="text-[#00C7B7] font-black">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
