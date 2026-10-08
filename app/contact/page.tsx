import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/ui/Eyebrow";
import { ContactForm } from "@/forms/ContactForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Start a Conversation — Axiomata",
  description:
    "Discuss your software engineering, workflow automation, or AI integration requirements with Axiomata.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#F6F2E9] text-[#111315]">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-28">
        {/* Page Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <Eyebrow>START A CONVERSATION</Eyebrow>
          <h1 className="text-[clamp(2.75rem,6vw+0.5rem,5.5rem)] font-heading font-black tracking-[-0.03em] leading-[0.98] text-[#111315] uppercase">
            Have a problem worth solving?
          </h1>
          <p className="text-lg sm:text-xl text-[#3B4143] leading-relaxed pt-2">
            Let&apos;s discuss your business workflows, custom software needs, or technical automation goals.
          </p>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar Aside Column (4 cols) */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-8">
            {/* Direct Email Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-8 space-y-4 rounded-[2px]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#77766F] font-bold">
                Direct Contact
              </span>
              <p className="text-base text-[#3B4143] leading-relaxed">
                Prefer direct email correspondence? Reach out directly to our engineering team:
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-heading font-bold text-xl text-[#111315] underline decoration-2 underline-offset-4 hover:text-[#00C7B7] block break-all"
              >
                {SITE.email}
              </a>
              <div className="pt-2 border-t border-[#E2DDD3]">
                <span className="font-mono text-xs text-[#77766F]">
                  We reply to every technical inquiry within 24 hours.
                </span>
              </div>
            </div>

            {/* Studio Info Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-8 space-y-3 rounded-[2px]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00C7B7] font-bold">
                Axiomata Engineering
              </span>
              <p className="font-heading font-bold text-xl text-[#111315]">
                {SITE.tagline}
              </p>
              <p className="text-sm text-[#3B4143] leading-relaxed">
                Practical software, workflow automation, and digital foundations engineered around the way your business actually operates.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
