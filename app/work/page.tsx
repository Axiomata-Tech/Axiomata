import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/ui/Eyebrow";
import { BrowserFrame } from "@/ui/BrowserFrame";
import { ConceptBadge } from "@/ui/ConceptBadge";
import { Reveal } from "@/ui/Reveal";
import { CTA } from "@/sections/CTA";
import { NoireMockup } from "@/mockups/NoireMockup";
import { VeraMockup } from "@/mockups/VeraMockup";
import { NorthMockup } from "@/mockups/NorthMockup";
import { MotifMockup } from "@/mockups/MotifMockup";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work — Axiomata",
  description:
    "Explore conceptual digital experiences crafted by Axiomata for specialty retail, hospitality, architecture and automotive services.",
};

export default function WorkPage() {
  const renderMockup = (id: string) => {
    switch (id) {
      case "noire":
        return <NoireMockup />;
      case "vera":
        return <VeraMockup />;
      case "north":
        return <NorthMockup />;
      case "motif":
        return <MotifMockup />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-paper text-ink">
      {/* Header Section */}
      <section className="w-full border-b-2 border-ink py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-4">
            <Eyebrow>CONCEPT ARCHIVE</Eyebrow>
            <h1 className="text-[clamp(2.75rem,6vw+0.5rem,5.5rem)] font-heading font-black tracking-[-0.03em] leading-[0.98] text-ink uppercase">
              Selected explorations.
            </h1>
            <p className="text-lg sm:text-xl text-muted-light leading-relaxed pt-2">
              We&apos;re starting with ideas. These concept experiences explore how modern digital products can transform everyday businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stacked Project Case Sections */}
      <div className="divide-y-2 divide-ink">
        {PROJECTS.map((project, index) => (
          <section
            key={project.id}
            id={project.id}
            aria-labelledby={`heading-${project.id}`}
            className="w-full py-16 sm:py-24 lg:py-28 scroll-mt-20"
          >
            <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Visual Preview Column (7 cols) */}
                <div className="lg:col-span-7">
                  <Reveal delay={0.1}>
                    <div className="relative">
                      <ConceptBadge className="absolute top-3 left-3 z-20" />
                      <BrowserFrame
                        url={project.url}
                        ariaLabel={project.ariaLabel}
                        className="shadow-[8px_8px_0_0_var(--ink)]"
                      >
                        {renderMockup(project.id)}
                      </BrowserFrame>
                    </div>
                  </Reveal>
                </div>

                {/* Details Column (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <Reveal delay={0.2}>
                    <div className="flex items-center gap-3 pb-4 border-b-2 border-ink">
                      <span className="font-mono text-sm font-bold text-muted-light">
                        {project.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-light">
                        {project.category}
                      </span>
                    </div>

                    <h2
                      id={`heading-${project.id}`}
                      className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-ink uppercase tracking-tight mt-4"
                    >
                      {project.name}
                    </h2>

                    <p className="text-base sm:text-lg text-muted-light leading-relaxed pt-2">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t-2 border-ink flex items-center justify-between font-mono text-xs text-muted-light">
                      <span>{project.meta}</span>
                      <span className="font-semibold text-ink">SPEC-VERIFIED</span>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA Section */}
      <CTA />
    </div>
  );
}
