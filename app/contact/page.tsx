import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/ui/Eyebrow";
import { ContactForm } from "@/forms/ContactForm";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Axiomata",
  description:
    "Start a project inquiry with Axiomata. We design and build modern websites and digital experiences for growing businesses.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-paper text-ink">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-16 sm:py-24 lg:py-28">
        {/* Page Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <Eyebrow>START A PROJECT</Eyebrow>
          <h1 className="text-[clamp(2.75rem,6vw+0.5rem,5.5rem)] font-heading font-black tracking-[-0.03em] leading-[0.98] text-ink uppercase">
            Let&apos;s talk about your business.
          </h1>
        </div>

        {/* 2-Column Desktop Grid (Form 7 cols, Aside 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Sidebar Aside Column (4 cols, col-start-9) */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-8">
            {/* Direct Email Card */}
            <div className="bg-white border-2 border-ink shadow-btn-ink p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-light font-bold">
                Direct Contact
              </span>
              <p className="text-base text-muted-light leading-relaxed">
                Prefer direct correspondence? Email our studio directly:
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="font-heading font-bold text-xl text-ink underline decoration-2 underline-offset-4 hover:text-green-deep block break-all"
              >
                {SITE.email}
              </a>
              <div className="pt-2 border-t border-gray-300">
                <span className="font-mono text-xs text-muted-light">
                  We reply to every inquiry.
                </span>
              </div>
            </div>

            {/* Studio Info Card */}
            <div className="bg-white border-2 border-ink shadow-btn-ink p-6 sm:p-8 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-green-deep font-bold">
                Axiomata Studio
              </span>
              <p className="font-heading font-bold text-xl text-ink">
                {SITE.tagline}
              </p>
              <p className="text-sm text-muted-light leading-relaxed">
                Modern digital foundations designed around your business goals, customer clarity, and technical performance.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
