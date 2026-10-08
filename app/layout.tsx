import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
  style: ["normal"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Axiomata — Practical Technology Solutions for Growing Businesses",
    template: "%s — Axiomata",
  },
  description: SITE.description,
  keywords: [
    "IT solutions",
    "software development",
    "web applications",
    "business automation",
    "AI integration",
    "digital transformation",
    "Axiomata",
  ],
  authors: [{ name: "Axiomata" }],
  creator: "Axiomata",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    title: "Axiomata — Practical Technology Solutions for Growing Businesses",
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiomata — Practical Technology Solutions for Growing Businesses",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
              slogan: SITE.tagline,
              email: SITE.email,
              description: SITE.description,
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-ink selection:bg-teal selection:text-ink antialiased">
        <SkipLink />
        <Navbar />
        <main id="main" className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
