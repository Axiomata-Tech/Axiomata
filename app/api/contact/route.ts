import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

// Simple in-memory rate limiting map (IP -> timestamps array)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside current window
  const validTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // Determine client IP for basic rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please wait a minute before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate payload against zod schema
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form submission data.",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = parseResult.data;

    // Honeypot check: company_website must be empty
    if (validatedData.company_website && validatedData.company_website.length > 0) {
      return NextResponse.json(
        { ok: false, error: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // Server-side logging of inquiry
    console.log("=== [AXIOMATA INQUIRY RECEIVED] ===");
    console.log(`From: ${validatedData.name} <${validatedData.email}>`);
    console.log(`Business: ${validatedData.businessName}`);
    console.log(`Need: ${validatedData.serviceNeeded}`);
    console.log(`Budget: ${validatedData.budgetRange || "Not specified"}`);
    console.log(`Description: ${validatedData.businessDescription}`);
    if (validatedData.additionalInfo) {
      console.log(`Additional Info: ${validatedData.additionalInfo}`);
    }
    console.log("===================================");

    // TODO: Wire to Resend/SMTP using env vars:
    // e.g. using process.env.RESEND_API_KEY and process.env.CONTACT_TO_EMAIL
    // await resend.emails.send({
    //   from: 'inquiries@axiomata.in',
    //   to: process.env.CONTACT_TO_EMAIL || 'hello@axiomata.in',
    //   subject: `New Project Inquiry from ${validatedData.businessName}`,
    //   text: `...`,
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { ok: false, error: "Server error processing your request. Please try again." },
      { status: 500 }
    );
  }
}
