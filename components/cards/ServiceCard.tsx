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
        "group relative flex flex-col justify-between bg-[#FFFFFF] text-[#111315] border-2 border-[#111315]",
        "p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:border-[#00C7B7]",
        className
      )}
    >
      <div>
        {/* Number & Signature Divider Line */}
        <div className="flex items-center justify-between pb-4 border-b-2 border-[#111315]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl sm:text-2xl font-black text-[#111315]">
              {service.number}
            </span>
            <span className="h-[2px] w-12 bg-[#111315] group-hover:bg-[#00C7B7] transition-colors" />
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-[#00C7B7] transition-transform group-hover:scale-125" />
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#111315] uppercase tracking-tight mt-6 mb-2">
          {service.title}
        </h3>
        <p className="font-heading font-semibold text-base sm:text-lg text-[#00C7B7] mb-4">
          {service.subtitle}
        </p>
        <p className="text-[#3B4143] text-base leading-relaxed mb-8">
          {service.description}
        </p>
      </div>

      {/* Footer Tags */}
      <div className="pt-6 border-t border-[#E2DDD3] flex items-center justify-between gap-4 mt-auto">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <ArrowUpRight className="w-5 h-5 text-[#111315] group-hover:text-[#00C7B7] transition-colors flex-shrink-0" />
      </div>
    </div>
  );
}
