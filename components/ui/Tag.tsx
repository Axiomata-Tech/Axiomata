import React from "react";
import { cn } from "@/lib/cn";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] font-mono font-medium tracking-wide uppercase bg-[#FFFFFF] text-[#3B4143] border border-[#E2DDD3] rounded-[2px] select-none",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
