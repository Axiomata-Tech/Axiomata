import React from "react";

export function NoireMockup() {
  return (
    <div className="w-full h-full bg-[#160F0B] text-[#F5EFEB] p-[4%] flex flex-col justify-between select-none font-sans overflow-hidden">
      {/* Mini Nav */}
      <div className="flex items-center justify-between border-b border-[#3D2C22] pb-[2%] text-[10px] sm:text-xs">
        <span className="font-heading font-black tracking-[0.2em] text-[#E8D8C8]">
          NOIRÉ
        </span>
        <div className="flex items-center gap-3 sm:gap-4 font-mono text-[8px] sm:text-[10px] text-[#A8988B] uppercase tracking-wider">
          <span className="text-[#F5EFEB]">Menu</span>
          <span>Beans</span>
          <span>Visit</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-[#D4A373]" />
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-12 gap-2 my-auto items-center py-[2%]">
        <div className="col-span-7 space-y-1 sm:space-y-2">
          <div className="font-mono text-[7px] sm:text-[9px] uppercase tracking-[0.2em] text-[#D4A373]">
            Micro-Roastery &amp; Pour Bar
          </div>
          <h4 className="font-heading font-bold text-sm sm:text-lg md:text-xl leading-[1.05] tracking-tight text-[#FAF7F2]">
            Slow coffee, <br />
            <span className="text-[#D4A373]">sharp edges.</span>
          </h4>
          <p className="text-[8px] sm:text-[10px] text-[#A8988B] leading-relaxed line-clamp-2">
            Single-origin lots roasted with thermal precision.
          </p>
          <div className="pt-1">
            <span className="inline-block px-2.5 py-1 bg-[#D4A373] text-[#160F0B] font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider">
              View menu →
            </span>
          </div>
        </div>

        {/* Flat SVG Coffee Cup Illustration */}
        <div className="col-span-5 flex justify-center items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#261A13] border border-[#4A372C] flex items-center justify-center p-2">
            <svg
              viewBox="0 0 80 80"
              fill="none"
              className="w-full h-full text-[#D4A373]"
            >
              {/* Saucer */}
              <rect x="12" y="62" width="56" height="4" fill="#D4A373" />
              {/* Cup body */}
              <path
                d="M18 24 H62 V48 C62 56 54 60 40 60 C26 60 18 56 18 48 Z"
                fill="#F5EFEB"
              />
              {/* Coffee liquid surface */}
              <ellipse cx="40" cy="28" rx="18" ry="4" fill="#160F0B" />
              {/* Handle */}
              <path
                d="M62 30 H68 C72 30 74 34 74 38 C74 44 70 46 62 46"
                stroke="#F5EFEB"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Steam lines */}
              <path
                d="M34 16 C34 12 38 10 38 6"
                stroke="#D4A373"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M46 18 C46 14 50 12 50 8"
                stroke="#D4A373"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bean Origins Row */}
      <div className="border-t border-[#3D2C22] pt-[2%]">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[7px] sm:text-[9px] font-mono">
          <div className="bg-[#241710] p-1 sm:p-1.5 border border-[#3D2C22]">
            <span className="text-[#D4A373] block text-[6px] sm:text-[7px]">01 // LOT</span>
            <span className="text-[#F5EFEB] font-bold block truncate">YIRGACHEFFE</span>
          </div>
          <div className="bg-[#241710] p-1 sm:p-1.5 border border-[#3D2C22]">
            <span className="text-[#D4A373] block text-[6px] sm:text-[7px]">02 // LOT</span>
            <span className="text-[#F5EFEB] font-bold block truncate">HUILA PINK</span>
          </div>
          <div className="bg-[#241710] p-1 sm:p-1.5 border border-[#3D2C22]">
            <span className="text-[#D4A373] block text-[6px] sm:text-[7px]">03 // LOT</span>
            <span className="text-[#F5EFEB] font-bold block truncate">ANTIGUA SHB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
