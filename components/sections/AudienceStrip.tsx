import React from "react";
import { AUDIENCE_STRIP_ITEMS } from "@/data/audiences";

export function AudienceStrip() {
  return (
    <section
      aria-label="Audience Overview"
      className="w-full bg-green text-ink border-b-2 border-ink select-none overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Desktop View: Horizontal Flex Row with Vertical Rules */}
        <div className="hidden lg:flex items-center min-h-[64px]">
          {/* Left Label */}
          <div className="px-6 py-4 border-r-2 border-ink flex-shrink-0">
            <span className="font-mono text-xs uppercase tracking-[0.1em] font-bold text-ink">
              WE BUILD FOR
            </span>
          </div>

          {/* Items */}
          <ul className="flex-1 flex items-stretch m-0 p-0 list-none">
            {AUDIENCE_STRIP_ITEMS.map((item, index) => (
              <li
                key={item}
                className="flex-1 flex items-center justify-center px-4 py-4 border-r-2 border-ink last:border-r-0 text-center"
              >
                <span className="font-heading font-bold text-base tracking-wider uppercase text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile / Tablet View: Label Above + 2-Column Grid */}
        <div className="lg:hidden flex flex-col">
          <div className="px-5 py-3 border-b-2 border-ink bg-green">
            <span className="font-mono text-xs uppercase tracking-[0.1em] font-bold text-ink">
              WE BUILD FOR
            </span>
          </div>
          <ul className="grid grid-cols-2 m-0 p-0 list-none">
            {AUDIENCE_STRIP_ITEMS.map((item, index) => (
              <li
                key={item}
                className={`flex items-center justify-center p-3.5 border-b-2 border-ink text-center ${
                  index % 2 === 0 ? "border-r-2 border-ink" : ""
                } ${index === AUDIENCE_STRIP_ITEMS.length - 1 && AUDIENCE_STRIP_ITEMS.length % 2 !== 0 ? "col-span-2 border-r-0" : ""}`}
              >
                <span className="font-heading font-bold text-sm tracking-wider uppercase text-ink">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
