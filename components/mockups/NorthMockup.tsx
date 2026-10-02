import React from "react";

export function NorthMockup() {
  return (
    <div className="w-full h-full bg-[#E5EAED] text-[#14181B] p-[4%] flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Mini Nav */}
      <div className="flex items-center justify-between border-b border-[#CCD4D9] pb-[2%]">
        <span className="font-heading font-black tracking-[0.1em] text-xs sm:text-sm text-[#14181B]">
          NORTH &amp; CO.
        </span>
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[10px] text-[#55626B] uppercase tracking-wider">
          <span className="text-[#14181B] font-semibold">Projects</span>
          <span>Studio</span>
          <span>Contact</span>
        </div>
        <span className="font-mono text-[8px] text-[#2B6CB0] font-bold">ARC/2026</span>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-12 gap-2 my-auto items-center py-[2%]">
        <div className="col-span-6 space-y-1 sm:space-y-2">
          <div className="font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#2B6CB0] font-bold">
            Architecture &amp; Interior
          </div>
          <h4 className="font-heading font-bold text-sm sm:text-lg md:text-xl leading-[1.0] tracking-tight text-[#14181B]">
            Spaces with <br />
            <span className="text-[#2B6CB0]">intent.</span>
          </h4>
          <p className="text-[8px] sm:text-[10px] text-[#55626B] leading-snug">
            Precision monolithic architecture grounded in natural light.
          </p>
        </div>

        {/* Flat SVG Architectural Plan & Elevation */}
        <div className="col-span-6 flex justify-center items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#DBE2E6] border border-[#B8C4CC] flex items-center justify-center p-2 relative">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              className="w-full h-full text-[#14181B]"
            >
              {/* Grid Lines */}
              <line x1="10" y1="10" x2="90" y2="10" stroke="#CCD4D9" strokeWidth="0.8" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="#CCD4D9" strokeWidth="0.8" />
              <line x1="10" y1="90" x2="90" y2="90" stroke="#CCD4D9" strokeWidth="0.8" />
              <line x1="10" y1="10" x2="10" y2="90" stroke="#CCD4D9" strokeWidth="0.8" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="#CCD4D9" strokeWidth="0.8" />
              <line x1="90" y1="10" x2="90" y2="90" stroke="#CCD4D9" strokeWidth="0.8" />

              {/* Architectural Elevation Strokes */}
              <rect x="20" y="25" width="60" height="50" stroke="#14181B" strokeWidth="2" fill="none" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="#14181B" strokeWidth="1.5" />
              <rect x="30" y="55" width="16" height="20" stroke="#2B6CB0" strokeWidth="1.5" fill="none" />
              <rect x="54" y="55" width="16" height="20" stroke="#14181B" strokeWidth="1.5" fill="none" />
              <circle cx="50" cy="38" r="8" stroke="#2B6CB0" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="absolute bottom-1 right-1 font-mono text-[6px] text-[#2B6CB0] font-bold">
              PLN-08
            </span>
          </div>
        </div>
      </div>

      {/* Index List of Projects */}
      <div className="border-t border-[#CCD4D9] pt-[2%]">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] font-mono">
          <div className="border-l-2 border-[#2B6CB0] pl-1">
            <span className="text-[#55626B] block text-[6px]">01 / RES</span>
            <span className="text-[#14181B] font-bold truncate block">KVADRAT VILLA</span>
          </div>
          <div className="border-l-2 border-[#14181B] pl-1">
            <span className="text-[#55626B] block text-[6px]">02 / CULT</span>
            <span className="text-[#14181B] font-bold truncate block">PAVILION IX</span>
          </div>
          <div className="border-l-2 border-[#14181B] pl-1">
            <span className="text-[#55626B] block text-[6px]">03 / ADAPT</span>
            <span className="text-[#14181B] font-bold truncate block">NORD MILL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
