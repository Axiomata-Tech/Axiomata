import React from "react";
import { cn } from "@/lib/cn";

export type SectionBg = "paper" | "green" | "ink" | "gray-200";

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
  bg = "paper",
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
        return "bg-ink text-paper on-dark";
      case "green":
        return "bg-green text-ink";
      case "gray-200":
        return "bg-gray-200 text-ink";
      case "paper":
      default:
        return "bg-paper text-ink";
    }
  };

  const getBorderColor = () => {
    if (bg === "ink") return "border-paper";
    return "border-ink";
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
          "px-5 sm:px-6 lg:px-10",
          !noPadding && "py-[72px] sm:py-[88px] lg:py-[120px]",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
