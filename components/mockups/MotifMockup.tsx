import React from "react";

export function MotifMockup() {
  return (
    <div className="w-full h-full bg-[#101214] text-[#F3F4F6] p-[4%] flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Mini Nav */}
      <div className="flex items-center justify-between border-b border-[#2A2E33] pb-[2%]">
        <span className="font-heading font-black tracking-[0.2em] text-xs sm:text-sm text-[#F5E023]">
          MOTIF
        </span>
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[10px] text-[#8E96A0] uppercase tracking-wider">
          <span className="text-[#F3F4F6] font-semibold">Services</span>
          <span>Gallery</span>
          <span>Studio</span>
        </div>
        <div className="px-1.5 py-0.5 bg-[#F5E023] text-[#101214] font-mono text-[7px] sm:text-[8px] font-black uppercase">
          BOOK
        </div>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-12 gap-2 my-auto items-center py-[2%]">
        <div className="col-span-6 space-y-1 sm:space-y-2">
          <div className="font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#F5E023] font-bold">
            Precision Auto Detailing
          </div>
          <h4 className="font-heading font-black text-base sm:text-xl md:text-2xl leading-[0.95] tracking-tighter text-[#FFFFFF] uppercase">
            Detail, <br />
            <span className="text-[#F5E023]">perfected.</span>
          </h4>
          <p className="text-[8px] sm:text-[10px] text-[#8E96A0] leading-snug">
            Paint correction and multi-stage ceramic coatings.
          </p>
          <div className="pt-0.5">
            <span className="inline-block px-2 py-0.5 bg-white text-[#101214] font-mono text-[8px] font-bold uppercase tracking-wider">
              Book detail →
            </span>
          </div>
        </div>

        {/* Flat SVG Car Silhouette */}
        <div className="col-span-6 flex justify-center items-center">
          <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-36 md:h-24 bg-[#1C2024] border border-[#323840] flex items-center justify-center p-2 relative">
            <svg
              viewBox="0 0 120 60"
              fill="none"
              className="w-full h-full text-[#F5E023]"
            >
              {/* Car Side Profile Geometric Silhouette */}
              <path
                d="M12 40 L18 30 L35 22 L75 22 L92 30 L108 34 L110 42 L100 42 C100 36 92 36 92 42 L32 42 C32 36 24 36 24 42 L10 42 Z"
                fill="#2E353D"
                stroke="#F5E023"
                strokeWidth="1.5"
              />
              {/* Windows */}
              <polygon points="38,24 55,24 55,32 32,32" fill="#101214" />
              <polygon points="59,24 74,24 86,32 59,32" fill="#101214" />
              {/* Wheel Rims */}
              <circle cx="28" cy="42" r="6" fill="#101214" stroke="#F5E023" strokeWidth="1.5" />
              <circle cx="28" cy="42" r="2" fill="#F5E023" />
              <circle cx="96" cy="42" r="6" fill="#101214" stroke="#F5E023" strokeWidth="1.5" />
              <circle cx="96" cy="42" r="2" fill="#F5E023" />
            </svg>
            <span className="absolute top-1 left-1.5 font-mono text-[6px] text-[#8E96A0]">
              STAGE 03
            </span>
          </div>
        </div>
      </div>

      {/* Service Tiers Row */}
      <div className="border-t border-[#2A2E33] pt-[2%]">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] font-mono">
          <div className="bg-[#1C2024] p-1 border border-[#2A2E33]">
            <span className="text-[#8E96A0] block text-[6px]">TIER 01</span>
            <span className="text-[#FFFFFF] font-bold block truncate">EXPRESS DECON</span>
          </div>
          <div className="bg-[#1C2024] p-1 border border-[#2A2E33]">
            <span className="text-[#8E96A0] block text-[6px]">TIER 02</span>
            <span className="text-[#FFFFFF] font-bold block truncate">FULL CORRECTION</span>
          </div>
          <div className="bg-[#1C2024] p-1 border border-[#F5E023]">
            <span className="text-[#F5E023] block text-[6px]">TIER 03</span>
            <span className="text-[#F5E023] font-bold block truncate">CERAMIC MATRIX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
