import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { Reveal } from "@/ui/Reveal";
import { ProjectCard } from "@/cards/ProjectCard";
import { PROJECTS } from "@/data/projects";

export function ConceptWork() {
  const [noire, vera, north, motif] = PROJECTS;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full bg-paper text-ink border-b-2 border-ink"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 py-[72px] sm:py-[88px] lg:py-[120px]">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Reveal>
            <Eyebrow>SELECTED EXPLORATIONS</Eyebrow>
            <h2
              id="work-heading"
              className="text-[clamp(2.25rem,4.5vw+0.5rem,4.5rem)] font-heading font-black tracking-[-0.03em] leading-[1.0] text-ink uppercase mt-3 mb-4"
            >
              What your business could look like online.
            </h2>
            <p className="text-lg sm:text-xl text-muted-light leading-relaxed">
              We&apos;re starting with ideas. These concept experiences explore how modern digital products can transform everyday businesses.
            </p>
          </Reveal>
        </div>

        {/* Editorial Grid:
            Desktop: 12-col layout (1-8, 9-12, 1-5, 6-12)
            Tablet: 2-col (Noire spans 2 cols, others in grid)
            Mobile: 1-col
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {/* 1. NOIRÉ (Featured: Cols 1-8 desktop, col-span-2 tablet) */}
          <div className="md:col-span-2 lg:col-span-8 flex flex-col">
            <Reveal delay={0.1} className="h-full">
              <ProjectCard project={noire} isFeatured className="h-full" />
            </Reveal>
          </div>

          {/* 2. VÉRA (Cols 9-12 desktop, col-span-1 tablet) */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col">
            <Reveal delay={0.2} className="h-full">
              <ProjectCard project={vera} className="h-full" />
            </Reveal>
          </div>

          {/* 3. NORTH & CO. (Cols 1-5 desktop, col-span-1 tablet) */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col">
            <Reveal delay={0.3} className="h-full">
              <ProjectCard project={north} className="h-full" />
            </Reveal>
          </div>

          {/* 4. MOTIF (Cols 6-12 desktop, col-span-2 md / col-span-7 lg) */}
          <div className="md:col-span-2 lg:col-span-7 flex flex-col">
            <Reveal delay={0.4} className="h-full">
              <ProjectCard project={motif} isFeatured className="h-full" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
