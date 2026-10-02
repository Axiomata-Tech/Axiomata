import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-ink text-paper border-b-2 border-paper on-dark"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Eyebrow + H2 */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <Eyebrow onDark>ABOUT AXIOMATA</Eyebrow>
              <h2
                id="about-heading"
                className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-paper uppercase mt-3"
              >
                We&apos;re starting with websites. We&apos;re building much more.
              </h2>
            </Reveal>
          </div>

          {/* Right Column: Body paragraph and highlighted closing block */}
          <div className="lg:col-span-7 space-y-10">
            <Reveal delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-dark leading-relaxed">
                Axiomata is a growing technology company focused on creating useful digital experiences for businesses and people. We&apos;re beginning by helping businesses establish a stronger presence online. As we grow, our ambitions go beyond websites — into products, technology and solutions that solve real problems.
              </p>
            </Reveal>

            {/* Large closing statement in green block */}
            <Reveal delay={0.3}>
              <div className="inline-block p-6 sm:p-8 bg-green text-ink border-2 border-paper shadow-card-paper">
                <p className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight uppercase leading-none">
                  This is only the beginning.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
