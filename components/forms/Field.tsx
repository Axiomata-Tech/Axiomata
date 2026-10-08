import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
  hint?: string;
}

export function Field({
  id,
  label,
  required = false,
  error,
  children,
  className,
  hint,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="font-heading font-bold text-base text-[#111315] tracking-tight flex items-center gap-1 cursor-pointer select-none"
        >
          <span>{label}</span>
          {required && <span className="text-[#00C7B7] text-lg font-black">*</span>}
        </label>
        {hint && (
          <span className="font-mono text-xs text-[#77766F]">{hint}</span>
        )}
      </div>

      {children}

      {error && (
        <div
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#A82424] pt-1"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
