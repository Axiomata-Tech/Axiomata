import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Website",
  "Landing page",
  "Digital presence",
  "Something else",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000–₹1,50,000",
  "₹1,50,000–₹3,00,000",
  "₹3,00,000+",
  "Not sure yet",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." }),
  businessName: z
    .string()
    .trim()
    .min(1, { message: "Business name is required." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  businessDescription: z
    .string()
    .trim()
    .min(10, { message: "Please tell us what your business does (at least 10 characters)." }),
  serviceNeeded: z.enum(SERVICE_OPTIONS, {
    errorMap: () => ({ message: "Please select what you need." }),
  }),
  budgetRange: z.string().optional(),
  additionalInfo: z.string().optional(),
  // Honeypot field - must remain empty
  company_website: z.string().max(0, { message: "Spam detected." }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
