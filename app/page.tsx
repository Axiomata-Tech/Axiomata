import React from "react";
import { Hero } from "@/sections/Hero";
import { AudienceStrip } from "@/sections/AudienceStrip";
import { Intro } from "@/sections/Intro";
import { Services } from "@/sections/Services";
import { ConceptWork } from "@/sections/ConceptWork";
import { Philosophy } from "@/sections/Philosophy";
import { Process } from "@/sections/Process";
import { Audience } from "@/sections/Audience";
import { About } from "@/sections/About";
import { CTA } from "@/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (paper) */}
      <Hero />

      {/* 2. Audience Strip (green) */}
      <AudienceStrip />

      {/* 3. Intro (ink) */}
      <Intro />

      {/* 4. Services (gray-200) */}
      <Services />

      {/* 5. Concept Work (paper) */}
      <ConceptWork />

      {/* 6. Philosophy (ink) */}
      <Philosophy />

      {/* 7. Process (paper) */}
      <Process />

      {/* 8. Audience (gray-200) */}
      <Audience />

      {/* 9. About (ink) */}
      <About />

      {/* 10. Final CTA (green) */}
      <CTA />
    </>
  );
}
