import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green focus:text-ink focus:border-2 focus:border-ink focus:font-heading focus:font-bold focus:shadow-btn-ink"
    >
      Skip to content
    </a>
  );
}
