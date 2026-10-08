"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/validation";
import { Field } from "./Field";
import { Button } from "@/ui/Button";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      businessDescription: "",
      serviceNeeded: "Website",
      budgetRange: "Not sure yet",
      additionalInfo: "",
      company_website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => {
        successRef.current?.focus();
      }, 100);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please try again or email us directly.");
      }
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "w-full bg-[#FFFFFF] text-[#111315] border-2 border-[#111315] px-4 py-3 min-h-[50px] rounded-[2px]",
      "font-heading text-base font-semibold",
      "transition-colors duration-150",
      "focus:border-[#00C7B7] focus:outline-3 focus:outline-[#111315] focus:outline-offset-[2px]",
      hasError && "border-[#A82424]"
    );

  if (isSuccess) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="bg-[#FFFFFF] border-2 border-[#111315] p-8 sm:p-12 space-y-6 focus:outline-none rounded-[2px]"
      >
        <div className="flex items-center gap-3 text-[#00C7B7]">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#111315]">
            INQUIRY RECEIVED
          </span>
        </div>
        <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#111315] uppercase tracking-tight">
          Thanks. We&apos;ll be in touch.
        </h3>
        <p className="text-[#3B4143] text-lg leading-relaxed">
          We have received your message and will review your technical requirements. You can expect a thoughtful response from our engineering team within 24 hours.
        </p>
        <div className="pt-4">
          <Button
            variant="secondary"
            arrow="none"
            onClick={() => setIsSuccess(false)}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  const hasFormErrors = Object.keys(errors).length > 0;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-[#FFFFFF] border-2 border-[#111315] p-6 sm:p-10 space-y-6 rounded-[2px]"
    >
      {/* Summary Error Alert */}
      {hasFormErrors && (
        <div
          role="alert"
          className="bg-[#FFF4F2] border-2 border-[#A82424] p-4 text-xs font-mono font-bold text-[#A82424] flex items-center gap-2"
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span>Please review the highlighted fields below before submitting.</span>
        </div>
      )}

      {/* Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          className="bg-[#FFF4F2] border-2 border-[#A82424] p-4 text-xs font-mono font-bold text-[#A82424] flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <span>{serverError}</span>
          </div>
          <button
            type="button"
            onClick={() => setServerError(null)}
            className="underline font-mono uppercase"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Honeypot field (hidden) */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Company Website (leave blank)</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 1. Name */}
        <Field
          id="name"
          label="Your Name"
          required
          error={errors.name?.message}
        >
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
        </Field>

        {/* 2. Business Name */}
        <Field
          id="businessName"
          label="Business / Company Name"
          required
          error={errors.businessName?.message}
        >
          <input
            id="businessName"
            type="text"
            placeholder="Acme Corp / Startup"
            aria-required="true"
            aria-invalid={errors.businessName ? "true" : "false"}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
            className={inputClass(!!errors.businessName)}
            {...register("businessName")}
          />
        </Field>
      </div>

      {/* 3. Email */}
      <Field
        id="email"
        label="Work Email Address"
        required
        error={errors.email?.message}
      >
        <input
          id="email"
          type="email"
          placeholder="jane@company.com"
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
      </Field>

      {/* 4. What problem are you trying to solve? */}
      <Field
        id="businessDescription"
        label="What problem are you trying to solve?"
        required
        hint="Min. 10 characters"
        error={errors.businessDescription?.message}
      >
        <textarea
          id="businessDescription"
          rows={3}
          placeholder="Tell us about your operational challenge, workflow bottlenecks, or product requirements..."
          aria-required="true"
          aria-invalid={errors.businessDescription ? "true" : "false"}
          aria-describedby={
            errors.businessDescription ? "businessDescription-error" : undefined
          }
          className={cn(inputClass(!!errors.businessDescription), "min-h-[100px] resize-y")}
          {...register("businessDescription")}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* 5. Capability Needed */}
        <Field
          id="serviceNeeded"
          label="Capability Needed"
          required
          error={errors.serviceNeeded?.message}
        >
          <select
            id="serviceNeeded"
            aria-required="true"
            aria-invalid={errors.serviceNeeded ? "true" : "false"}
            aria-describedby={errors.serviceNeeded ? "serviceNeeded-error" : undefined}
            className={inputClass(!!errors.serviceNeeded)}
            {...register("serviceNeeded")}
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        {/* 6. Budget range */}
        <Field
          id="budgetRange"
          label="Estimated Budget"
          hint="Optional"
          error={errors.budgetRange?.message}
        >
          <select
            id="budgetRange"
            className={inputClass(false)}
            {...register("budgetRange")}
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* 7. Anything else? */}
      <Field
        id="additionalInfo"
        label="Timeline &amp; Technical Context"
        hint="Optional"
        error={errors.additionalInfo?.message}
      >
        <textarea
          id="additionalInfo"
          rows={3}
          placeholder="Timeline expectations, existing tech stack links, or specific questions..."
          className={cn(inputClass(false), "min-h-[90px] resize-y")}
          {...register("additionalInfo")}
        />
      </Field>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="primary"
          arrow="right"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          fullWidth
          className="text-lg py-4"
        >
          {isSubmitting ? "Submitting inquiry…" : "Start a conversation"}
        </Button>
      </div>
    </form>
  );
}
