import React from "react";

export function VeraMockup() {
  return (
    <div className="w-full h-full bg-[#F9F8F6] text-[#111111] p-[4%] flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Mini Nav */}
      <div className="flex items-center justify-between border-b border-[#E0DCD6] pb-[2%]">
        <span className="font-heading font-black tracking-[0.25em] text-xs sm:text-sm text-[#111111]">
          VÉRA
        </span>
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[10px] text-[#666666] uppercase tracking-wider">
          <span className="text-[#111111] font-semibold">Shop</span>
          <span>Lookbook</span>
          <span>Studio</span>
        </div>
        <span className="text-[9px] font-mono text-[#C86446] font-bold">[0]</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-12 gap-2 my-auto items-center py-[2%]">
        <div className="col-span-6 space-y-1 sm:space-y-2">
          <div className="font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C86446] font-bold">
            Autumn Edit 2026
          </div>
          <h4 className="font-heading font-bold text-base sm:text-xl md:text-2xl leading-[0.95] tracking-tight text-[#111111]">
            Sculpted <br />
            forms.
          </h4>
          <p className="text-[8px] sm:text-[10px] text-[#555555] leading-snug">
            Heavy wool drape and geometric tailoring.
          </p>
        </div>

        {/* Flat SVG Garment Silhouette Composition */}
        <div className="col-span-6 flex justify-center items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#EFECE6] border border-[#D9D4CC] flex items-center justify-center p-2 relative">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-full h-full text-[#111111]"
            >
              {/* Abstract Garment / Blazer Silhouette */}
              <polygon
                points="30,20 70,20 85,45 72,50 68,90 32,90 28,50 15,45"
                fill="#111111"
              />
              {/* Lapel collar cutout */}
              <polygon points="42,20 58,20 50,48" fill="#F9F8F6" />
              {/* Terracotta accent belt */}
              <rect x="33" y="56" width="34" height="4" fill="#C86446" />
            </svg>
            <span className="absolute bottom-1 right-1 font-mono text-[6px] text-[#666666] uppercase">
              LOOK 04
            </span>
          </div>
        </div>
      </div>

      {/* 3-Up Product Grid */}
      <div className="border-t border-[#E0DCD6] pt-[2%]">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[7px] sm:text-[9px] font-mono">
          <div className="bg-[#EFECE6] p-1 border border-[#D9D4CC]">
            <div className="h-5 sm:h-7 bg-[#E2DED6] flex items-center justify-center mb-1">
              <span className="w-2 h-3 bg-[#111111] inline-block" />
            </div>
            <span className="text-[#111111] font-semibold block truncate">TAILORED COAT</span>
          </div>
          <div className="bg-[#EFECE6] p-1 border border-[#D9D4CC]">
            <div className="h-5 sm:h-7 bg-[#E2DED6] flex items-center justify-center mb-1">
              <span className="w-2 h-4 bg-[#C86446] inline-block" />
            </div>
            <span className="text-[#111111] font-semibold block truncate">SILK BLOUSE</span>
          </div>
          <div className="bg-[#EFECE6] p-1 border border-[#D9D4CC]">
            <div className="h-5 sm:h-7 bg-[#E2DED6] flex items-center justify-center mb-1">
              <span className="w-3 h-3 bg-[#111111] inline-block" />
            </div>
            <span className="text-[#111111] font-semibold block truncate">FOLD TROUSER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
