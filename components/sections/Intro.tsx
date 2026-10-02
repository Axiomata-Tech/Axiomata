import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";

export function Intro() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="w-full bg-ink text-paper border-b-2 border-paper on-dark"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Top Split Layout: Eyebrow + H2 left (5 cols), Paragraph right (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 sm:pb-16 lg:pb-20">
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <Eyebrow onDark>WHY AXIOMATA</Eyebrow>
              <h2
                id="intro-heading"
                className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-paper uppercase mt-3"
              >
                Small business. <br />
                Big digital presence.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex items-center lg:pt-8">
            <Reveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-dark leading-relaxed">
                Your website is often the first interaction someone has with your business. We make sure that first impression feels clear, credible and unmistakably yours.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 2px Paper Rule Separator */}
        <div className="w-full border-t-2 border-paper mb-12 sm:mb-16" />

        {/* Full-width Large Statement */}
        <Reveal delay={0.25}>
          <div className="max-w-5xl">
            <p className="text-[clamp(1.75rem,3.2vw+0.5rem,3.25rem)] font-heading font-bold leading-[1.1] tracking-tight text-paper">
              No bloated solutions. No cookie-cutter websites.{" "}
              <span className="text-green underline decoration-green decoration-4 underline-offset-8">
                Just thoughtful digital experiences.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
