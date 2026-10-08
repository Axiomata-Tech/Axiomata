import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Tag } from "@/ui/Tag";
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
  return (
    <Link
      href={`/work#${project.id}`}
      prefetch={true}
      className={cn(
        "group relative flex flex-col justify-between bg-[#FFFFFF] text-[#111315] border-2 border-[#111315] p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:border-[#00C7B7] block",
        className
      )}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#111315] mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-base font-bold text-[#77766F]">
              [{project.number}]
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00C7B7]">
              {project.category}
            </span>
          </div>
          <div className="w-9 h-9 rounded-full border border-[#111315] bg-[#F6F2E9] flex items-center justify-center transition-colors group-hover:bg-[#00C7B7]">
            <ArrowUpRight className="w-4 h-4 text-[#111315]" />
          </div>
        </div>

        {/* Project Title */}
        <h3
          className={cn(
            "font-heading font-bold text-[#111315] tracking-tight group-hover:text-[#00C7B7] transition-colors mb-1.5",
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          )}
        >
          {project.name}
        </h3>
        <p className="font-mono text-xs text-[#77766F] tracking-wide mb-5">
          Client: {project.clientType}
        </p>

        {/* Structured Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F6F2E9] p-4 border border-[#E2DDD3] rounded-[2px] mb-6 text-sm">
          <div>
            <span className="font-mono text-[11px] font-bold text-[#111315] uppercase block mb-1">
              Problem
            </span>
            <p className="text-[#3B4143] leading-relaxed text-xs sm:text-sm">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="font-mono text-[11px] font-bold text-[#00C7B7] uppercase block mb-1">
              Approach &amp; Solution
            </span>
            <p className="text-[#3B4143] leading-relaxed text-xs sm:text-sm">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Key Outcome Highlight */}
        <div className="flex items-start gap-2.5 bg-[#DDF5F1] p-3.5 border border-[#00C7B7] text-xs sm:text-sm font-semibold text-[#111315] mb-6">
          <CheckCircle2 className="w-5 h-5 text-[#00C7B7] flex-shrink-0 mt-0.5" />
          <span>{project.outcome}</span>
        </div>
      </div>

      {/* Footer Technology Tags */}
      <div className="pt-4 border-t border-[#E2DDD3] flex flex-wrap gap-2 mt-auto">
        {project.technology.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
