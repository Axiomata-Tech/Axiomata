import React from "react";
import { Button } from "@/ui/Button";
import { Reveal } from "@/ui/Reveal";
import { SITE } from "@/data/site";

export function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative w-full bg-green text-ink border-b-2 border-ink overflow-hidden"
    >
      {/* Decorative Subtle Line Grid & Background Arrow SVG */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-end overflow-hidden"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-[350px] sm:w-[500px] lg:w-[650px] h-auto text-ink translate-x-[15%]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <line x1="40" y1="200" x2="360" y2="200" />
          <polyline points="240,80 360,200 240,320" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[80px] sm:py-[100px] lg:py-[140px] z-10">
        <div className="max-w-4xl space-y-8">
          <Reveal>
            <h2
              id="cta-heading"
              className="text-[clamp(2.5rem,6.5vw+0.5rem,7rem)] font-heading font-black tracking-[-0.03em] leading-[0.95] text-ink uppercase"
            >
              Let&apos;s build something worth finding.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl sm:text-2xl text-ink font-medium max-w-2xl leading-relaxed">
              Have a business that needs a better digital presence? Tell us what you&apos;re building.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4">
              <Button
                href="/contact"
                variant="dark"
                arrow="right"
                onDark
                className="text-lg px-8 py-4 shadow-card-paper hover:shadow-[8px_8px_0_0_var(--paper)]"
              >
                Start a project
              </Button>

              <div className="flex items-center min-h-[44px]">
                <span className="text-base sm:text-lg font-heading font-medium text-ink">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-bold underline decoration-2 underline-offset-4 hover:text-ink/80 focus-visible:outline-ink inline-flex items-center min-h-[44px]"
                  >
                    {SITE.email}
                  </a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
