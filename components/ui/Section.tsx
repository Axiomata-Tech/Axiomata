import React from "react";
import { cn } from "@/lib/cn";

export type SectionBg = "ivory" | "ink" | "teal-soft" | "paper";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: SectionBg;
  id?: string;
  hasTopBorder?: boolean;
  hasBottomBorder?: boolean;
  noPadding?: boolean;
  containerClassName?: string;
}

export function Section({
  children,
  bg = "ivory",
  id,
  hasTopBorder = false,
  hasBottomBorder = false,
  noPadding = false,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  const getBgClasses = () => {
    switch (bg) {
      case "ink":
        return "bg-[#111315] text-[#F6F2E9] on-dark";
      case "teal-soft":
        return "bg-[#DDF5F1] text-[#111315]";
      case "paper":
      case "ivory":
      default:
        return "bg-[#F6F2E9] text-[#111315]";
    }
  };

  const getBorderColor = () => {
    if (bg === "ink") return "border-[#F6F2E9]";
    return "border-[#111315]";
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        getBgClasses(),
        hasTopBorder && `border-t-2 ${getBorderColor()}`,
        hasBottomBorder && `border-b-2 ${getBorderColor()}`,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1280px]",
          "px-5 sm:px-8 lg:px-12",
          !noPadding && "py-[96px] sm:py-[120px] lg:py-[140px]",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
