"use client";

import React from "react";
import { Eyebrow } from "@/ui/Eyebrow";
import { ProjectCard } from "@/cards/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { Reveal } from "@/ui/Reveal";

export function ConceptWork() {
  return (
    <section
      id="work"
      aria-label="Selected Technical Case Studies"
      className="w-full bg-[#F6F2E9] text-[#111315] border-b-2 border-[#111315] py-20 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-[#111315]">
            <div className="space-y-3">
              <Eyebrow>SELECTED CASE STUDIES</Eyebrow>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#111315] uppercase tracking-tight">
                Engineered Solutions
              </h2>
            </div>
            <p className="text-[#3B4143] text-base sm:text-lg max-w-md">
              Structured technical case studies solving real business problems with measurable outcomes.
            </p>
          </div>
        </Reveal>

        {/* Technical Case Studies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.12}>
              <ProjectCard project={project} isFeatured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
