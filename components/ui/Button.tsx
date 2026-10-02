import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "dark";

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
      return "bg-gray-300 text-muted-light border-ink cursor-not-allowed shadow-none opacity-80";
    }

    switch (variant) {
      case "primary":
        // Green background, ink text
        return cn(
          "bg-green text-ink border-2 border-ink",
          onDark ? "shadow-btn-paper hover:shadow-[7px_7px_0_0_var(--paper)] active:shadow-[2px_2px_0_0_var(--paper)]" : "shadow-btn-ink hover:shadow-[7px_7px_0_0_var(--ink)] active:shadow-[2px_2px_0_0_var(--ink)]",
          "hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px]"
        );
      case "secondary":
        // White background, ink text
        return cn(
          "bg-white text-ink border-2 border-ink",
          onDark ? "shadow-btn-paper hover:shadow-[7px_7px_0_0_var(--paper)] active:shadow-[2px_2px_0_0_var(--paper)]" : "shadow-btn-ink hover:shadow-[7px_7px_0_0_var(--ink)] active:shadow-[2px_2px_0_0_var(--ink)]",
          "hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px]"
        );
      case "dark":
        // Ink background, paper text
        return cn(
          "bg-ink text-paper border-2",
          onDark ? "border-paper shadow-btn-paper hover:shadow-[7px_7px_0_0_var(--paper)]" : "border-ink shadow-btn-ink hover:shadow-[7px_7px_0_0_var(--ink)]",
          "hover:-translate-x-[3px] hover:-translate-y-[3px] active:translate-x-[2px] active:translate-y-[2px]"
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
          className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-1.5"
        >
          {arrowSymbol}
        </span>
      )}
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-3 px-6 py-3 min-h-[52px]",
    "font-heading font-semibold text-[17px] leading-tight select-none",
    "transition-[transform,box-shadow,background-color] duration-150 ease-out",
    "focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-[3px]",
    fullWidth ? "w-full" : "w-auto",
    getVariantStyles(),
    className
  );

  if (href && !disabled) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={baseClasses}>
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
