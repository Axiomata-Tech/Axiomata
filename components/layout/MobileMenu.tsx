"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { SITE } from "@/data/site";
import { Button } from "@/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ isOpen, onClose, triggerRef }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab") {
        if (!menuRef.current) return;
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-[#F6F2E9] flex flex-col justify-between p-6 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between h-14 border-b-2 border-[#111315] pb-4">
        <Link
          href="/"
          onClick={onClose}
          className="font-heading font-extrabold text-2xl tracking-[0.03em] text-[#111315] flex items-center gap-2"
        >
          <span>{SITE.name}</span>
          <span className="w-2 h-2 rounded-full bg-[#00C7B7]" />
        </Link>
        <button
          type="button"
          onClick={() => {
            onClose();
            triggerRef.current?.focus();
          }}
          aria-label="Close menu"
          className="w-11 h-11 flex items-center justify-center bg-[#FFFFFF] border-2 border-[#111315] text-[#111315] rounded-[2px]"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Nav Links Stack */}
      <nav className="flex flex-col my-auto py-6" aria-label="Mobile Navigation">
        {SITE.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block py-4 text-[32px] sm:text-[38px] font-heading font-bold text-[#111315] hover:text-[#00C7B7] border-b border-[#E2DDD3] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="pt-4 border-t-2 border-[#111315]">
        <Button
          href="/contact"
          variant="primary"
          arrow="right"
          fullWidth
          onClick={onClose}
          className="text-lg py-4"
        >
          Start a conversation
        </Button>
      </div>
    </div>
  );
}
