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
  url = "axiomata.studio",
  ariaLabel = "Website mockup browser preview",
  className,
  children,
}: BrowserFrameProps) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "relative w-full bg-white border-2 border-ink shadow-card-ink overflow-hidden select-none",
        className
      )}
    >
      {/* Browser Chrome Header */}
      <div className="h-9 px-3.5 bg-white border-b-2 border-ink flex items-center justify-between gap-3">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full border border-ink bg-paper inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-ink bg-paper inline-block" />
          <span className="w-2.5 h-2.5 rounded-full border border-ink bg-green inline-block" />
        </div>

        {/* URL Pill */}
        <div
          aria-hidden="true"
          className="flex-1 max-w-[220px] sm:max-w-[280px] h-5 px-2.5 bg-paper border border-ink flex items-center justify-center text-[11px] font-mono text-ink tracking-tight truncate"
        >
          <span className="text-muted-light mr-1">https://</span>
          <span className="font-semibold truncate">{url}</span>
        </div>

        {/* Empty spacer to balance header */}
        <div className="w-8" aria-hidden="true" />
      </div>

      {/* Mockup Canvas */}
      <div
        aria-hidden="true"
        className="relative w-full aspect-[16/10] overflow-hidden bg-paper"
      >
        {children}
      </div>
    </div>
  );
}
