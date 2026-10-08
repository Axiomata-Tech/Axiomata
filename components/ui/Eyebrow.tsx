import React from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  onDark?: boolean;
  hasSignal?: boolean;
}

export function Eyebrow({
  children,
  className,
  onDark = false,
  hasSignal = true,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs sm:text-[13px] tracking-[0.12em] uppercase font-bold select-none",
        onDark ? "text-[#A7A39A]" : "text-[#77766F]",
        className
      )}
      {...props}
    >
      {hasSignal && (
        <span className="inline-block w-2 h-2 rounded-full bg-[#00C7B7]" aria-hidden="true" />
      )}
      <span>{children}</span>
    </p>
  );
}
