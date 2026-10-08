import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "dark" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  arrow?: "right" | "down" | "none";
  onDark?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  href,
  arrow = "right",
  onDark = false,
  fullWidth = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    if (disabled) {
      return "bg-[#E2DDD3] text-[#77766F] border-[#E2DDD3] cursor-not-allowed opacity-70";
    }

    switch (variant) {
      case "primary":
        // Ink background, Warm Ivory text -> Hover Electric Teal background, Ink text
        return cn(
          "bg-[#111315] text-[#F6F2E9] border-2 border-[#111315]",
          "hover:bg-[#00C7B7] hover:text-[#111315] hover:border-[#00C7B7]"
        );
      case "secondary":
        // Outlined Warm Ivory background
        return cn(
          "bg-transparent text-[#111315] border-2 border-[#111315]",
          "hover:bg-[#111315] hover:text-[#F6F2E9]"
        );
      case "dark":
        // On dark background primary button
        return cn(
          "bg-[#F6F2E9] text-[#111315] border-2 border-[#F6F2E9]",
          "hover:bg-[#00C7B7] hover:text-[#111315] hover:border-[#00C7B7]"
        );
      case "outline":
        return cn(
          "bg-transparent text-[#111315] border border-[#E2DDD3]",
          "hover:border-[#111315] hover:text-[#00C7B7]"
        );
    }
  };

  const arrowSymbol = arrow === "right" ? "→" : arrow === "down" ? "↓" : null;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrowSymbol && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5"
        >
          {arrowSymbol}
        </span>
      )}
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 min-h-[50px]",
    "font-heading font-semibold text-[16px] leading-tight select-none rounded-[2px]",
    "transition-colors duration-200 ease-out",
    "focus-visible:outline-3 focus-visible:outline-[#111315] focus-visible:outline-offset-[3px]",
    fullWidth ? "w-full" : "w-auto",
    getVariantStyles(),
    className
  );

  if (href && !disabled) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} prefetch={true} className={baseClasses}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type || "button"}
      disabled={disabled}
      className={baseClasses}
      {...props}
    >
      {content}
    </button>
  );
}
