import React from "react";
import { cn } from "@/lib/cn";

interface ConceptBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  label?: string;
}

export function ConceptBadge({ className, label = "TECHNICAL CASE STUDY", ...props }: ConceptBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 bg-[#111315] text-[#F6F2E9] text-[11px] font-mono font-bold tracking-[0.1em] uppercase border border-[#3B4143] z-20 select-none rounded-[2px]",
        className
      )}
      {...props}
    >
      <span className="inline-block w-1.5 h-1.5 bg-[#00C7B7] rounded-full animate-pulse" aria-hidden="true" />
      {label}
    </div>
  );
}
