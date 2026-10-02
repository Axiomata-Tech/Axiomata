import React from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  onDark?: boolean;
}

export function Eyebrow({
  children,
  className,
  onDark = false,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-xs sm:text-[13px] tracking-[0.08em] uppercase font-bold select-none",
        onDark ? "text-muted-dark" : "text-muted-light",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
