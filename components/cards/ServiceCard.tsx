import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/ui/Tag";
import type { ServiceItem } from "@/data/services";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between bg-white text-ink border-2 border-ink shadow-card-ink",
        "p-6 sm:p-8 lg:p-10",
        "card-interactive",
        className
      )}
    >
      <div>
        {/* Number Badge */}
        <div className="flex items-center justify-between pb-6 border-b-2 border-ink">
          <span className="font-mono text-base sm:text-lg font-bold text-muted-light tracking-widest">
            {service.number}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-light font-medium">
            Service
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight uppercase mt-6 mb-4">
          {service.title}
        </h3>
        <p className="text-muted-light text-base sm:text-[17px] leading-relaxed mb-8">
          {service.description}
        </p>
      </div>

      {/* Tags & Arrow Footer */}
      <div className="pt-6 border-t-2 border-ink flex items-end justify-between gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Interactive Arrow Circle */}
        <div
          aria-hidden="true"
          className="w-12 h-12 flex-shrink-0 rounded-full border-2 border-ink bg-paper flex items-center justify-center transition-[background-color,transform] duration-150 ease-out group-hover:bg-green group-hover:scale-105"
        >
          <ArrowUpRight className="w-6 h-6 text-ink stroke-[2.5] transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </div>
  );
}
