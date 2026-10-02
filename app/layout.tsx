import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Axiomata — Digital Experiences for Growing Businesses",
    template: "%s — Axiomata",
  },
  description: SITE.description,
  keywords: [
    "digital studio",
    "web design",
    "web development",
    "digital experiences",
    "modern websites",
    "Axiomata",
  ],
  authors: [{ name: "Axiomata" }],
  creator: "Axiomata",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    title: "Axiomata — Digital Experiences for Growing Businesses",
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiomata — Digital Experiences for Growing Businesses",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
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
      <body className="min-h-screen flex flex-col bg-paper text-ink selection:bg-green selection:text-ink antialiased">
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
