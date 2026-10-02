import React from "react";
import { cn } from "@/lib/cn";

interface ConceptBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function ConceptBadge({ className, ...props }: ConceptBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink text-paper text-[11px] font-mono font-bold tracking-[0.08em] uppercase border-2 border-paper z-20 select-none shadow-[2px_2px_0_0_rgba(0,0,0,1)]",
        className
      )}
      {...props}
    >
      <span className="inline-block w-1.5 h-1.5 bg-green rounded-full" aria-hidden="true" />
      AXIOMATA CONCEPT
    </div>
  );
}
