"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Button } from "@/ui/Button";
import { Reveal } from "@/ui/Reveal";

export function CTA() {
  return (
    <section
      aria-label="Call to Action"
      className="w-full bg-[#111315] text-[#F6F2E9] py-24 sm:py-32 lg:py-40 on-dark"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 text-center space-y-8">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <Eyebrow onDark className="justify-center">
              READY TO BUILD?
            </Eyebrow>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-[#F6F2E9] uppercase tracking-tight leading-tight">
              Have a problem worth solving? <br />
              <span className="text-[#00C7B7]">Let&apos;s build something that works.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#A7A39A] max-w-xl mx-auto leading-relaxed">
              Tell us about your business goals, software needs, or operational bottlenecks. We&apos;ll respond with a practical technical proposal.
            </p>

            <div className="pt-6 flex justify-center">
              <Button href="/contact" variant="dark" arrow="right" className="text-lg py-4 px-8">
                Start a conversation
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
