import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/ui/Eyebrow";
import { ProjectCard } from "@/cards/ProjectCard";
import { Reveal } from "@/ui/Reveal";
import { CTA } from "@/sections/CTA";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work & Technical Case Studies — Axiomata",
  description:
    "Explore engineered IT solutions, custom software, workflow automation, and AI integrations built by Axiomata.",
};

export default function WorkPage() {
  return (
    <div className="w-full bg-[#F6F2E9] text-[#111315]">
      {/* Header Section */}
      <section className="w-full border-b-2 border-[#111315] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <Eyebrow>SELECTED CASE STUDIES</Eyebrow>
            <h1 className="text-[clamp(2.75rem,6vw+0.5rem,5.5rem)] font-heading font-black tracking-[-0.03em] leading-[0.98] text-[#111315] uppercase">
              Engineered Solutions.
            </h1>
            <p className="text-lg sm:text-xl text-[#3B4143] leading-relaxed pt-2">
              Explore how we solve operational challenges, automate complex processes, and integrate AI into real business workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} isFeatured={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTA />
    </div>
  );
}
