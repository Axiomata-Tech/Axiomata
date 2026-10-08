import React from "react";
import { cn } from "@/lib/cn";

export interface BrowserFrameProps {
  title?: string;
  url?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode;
}

export function BrowserFrame({
  url = "system.axiomata.in",
  ariaLabel = "System application interface preview",
  className,
  children,
}: BrowserFrameProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "relative w-full bg-[#111315] border-2 border-[#111315] shadow-sm rounded-[2px] overflow-hidden select-none",
        className
      )}
    >
      {/* Chrome Header Bar */}
      <div className="h-9 px-3.5 bg-[#171A1D] border-b border-[#3B4143] flex items-center justify-between gap-3">
        {/* Status Indicators */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#00C7B7]" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-[#00C7B7] inline-block" />
          <span className="font-bold tracking-wider">LIVE APPLICATION</span>
        </div>

        {/* URL Pill */}
        <div
          aria-hidden="true"
          className="flex-1 max-w-[240px] sm:max-w-[300px] h-5 px-3 bg-[#111315] border border-[#3B4143] flex items-center justify-center text-[11px] font-mono text-[#F6F2E9] tracking-tight truncate rounded-[2px]"
        >
          <span className="text-[#77766F] mr-1">https://</span>
          <span className="font-semibold text-[#F6F2E9] truncate">{url}</span>
        </div>

        {/* Action Marker */}
        <div className="text-[10px] font-mono text-[#77766F]" aria-hidden="true">
          [SYS]
        </div>
      </div>

      {/* Frame Canvas */}
      <div
        aria-hidden="true"
        className="relative w-full aspect-[16/10] overflow-hidden bg-[#1A1D20]"
      >
        {children}
      </div>
    </div>
  );
}
