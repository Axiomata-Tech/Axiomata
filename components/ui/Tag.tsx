import React from "react";
import { cn } from "@/lib/cn";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium tracking-wide uppercase bg-white text-ink border-2 border-ink select-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
