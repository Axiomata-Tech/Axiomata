import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame } from "@/ui/BrowserFrame";
import { ConceptBadge } from "@/ui/ConceptBadge";
import { NoireMockup } from "@/mockups/NoireMockup";
import { VeraMockup } from "@/mockups/VeraMockup";
import { NorthMockup } from "@/mockups/NorthMockup";
import { MotifMockup } from "@/mockups/MotifMockup";
import type { ProjectItem } from "@/data/projects";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  isFeatured?: boolean;
}

export function ProjectCard({
  project,
  className,
  isFeatured = false,
}: ProjectCardProps) {
  const renderMockup = () => {
    switch (project.id) {
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
    <Link
      href={`/work#${project.id}`}
      className={cn(
        "group relative flex flex-col justify-between bg-white text-ink border-2 border-ink shadow-card-ink card-interactive p-5 sm:p-6 lg:p-8 block",
        className
      )}
    >
      {/* Top Media Container with Badge */}
      <div className="relative w-full mb-6">
        <ConceptBadge className="absolute top-3 left-3 z-20" />
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:group-hover:scale-100">
          <BrowserFrame url={project.url} ariaLabel={project.ariaLabel}>
            {renderMockup()}
          </BrowserFrame>
        </div>
      </div>

      {/* Project Info Header */}
      <div className="pt-4 border-t-2 border-ink flex flex-col justify-between gap-4 mt-auto">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-base font-bold text-muted-light">
              {project.number}
            </span>
            <h3
              className={cn(
                "font-heading font-bold text-ink tracking-tight uppercase group-hover:text-green-deep transition-colors",
                isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.name}
            </h3>
          </div>

          <div
            aria-hidden="true"
            className="w-10 h-10 rounded-full border-2 border-ink bg-paper flex items-center justify-center transition-colors group-hover:bg-green group-hover:scale-105"
          >
            <ArrowUpRight className="w-5 h-5 text-ink stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted-light">
          <span className="font-semibold text-ink">{project.category}</span>
          <span>{project.meta}</span>
        </div>
      </div>
    </Link>
  );
}
