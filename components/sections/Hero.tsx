"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/ui/Eyebrow";
import { Button } from "@/ui/Button";
import { BrowserFrame } from "@/ui/BrowserFrame";
import { ConceptBadge } from "@/ui/ConceptBadge";
import { NoireMockup } from "@/mockups/NoireMockup";
import { VeraMockup } from "@/mockups/VeraMockup";
import { NorthMockup } from "@/mockups/NorthMockup";
import { EASING } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation1 = shouldReduceMotion
    ? {}
    : {
        y: [-4, 4, -4],
        transition: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const floatAnimation2 = shouldReduceMotion
    ? {}
    : {
        y: [5, -5, 5],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        },
      };

  const floatAnimation3 = shouldReduceMotion
    ? {}
    : {
        y: [-5, 5, -5],
        transition: {
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 2,
        },
      };

  return (
    <section
      id="top"
      aria-label="Hero Introduction"
      className="relative w-full bg-paper text-ink overflow-hidden border-b-2 border-ink"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* 1. Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING }}
            >
              <Eyebrow className="inline-block border-2 border-ink px-3 py-1 bg-white shadow-[2px_2px_0_0_var(--ink)]">
                AXIOMATA — DIGITAL STUDIO
              </Eyebrow>
            </motion.div>

            {/* 2. Headline with masked line reveal */}
            <h1 className="text-[clamp(2.75rem,7vw+0.5rem,5.5rem)] font-heading font-black tracking-[-0.03em] leading-[0.98] text-ink uppercase">
              <div className="overflow-hidden">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.1 }}
                >
                  Your business
                </motion.div>
              </div>
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.19 }}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1"
                >
                  <span>deserves a</span>
                  <span className="inline-block px-3 py-0.5 bg-green text-ink border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]">
                    better
                  </span>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.28 }}
                >
                  digital presence.
                </motion.div>
              </div>
            </h1>

            {/* 3. Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-lg sm:text-xl text-muted-light max-w-xl leading-relaxed"
            >
              We design and build modern websites for businesses ready to grow beyond the physical world.
            </motion.p>

            {/* 4. CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button href="/contact" variant="primary" arrow="right">
                Start a project
              </Button>
              <Button href="#work" variant="secondary" arrow="down">
                Explore our work
              </Button>
            </motion.div>
          </div>

          {/* Right Visual Column (6 cols) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]">
            {/* Dot Grid Background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-dot-grid border-2 border-ink -m-2 pointer-events-none"
            />

            {/* Desktop Mockup Cluster (Hidden on mobile/tablet) */}
            <div className="hidden lg:block relative w-full h-[480px]">
              {/* Back-left: NOIRÉ (Largest) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: EASING, delay: 0.65 }}
                className="absolute left-0 top-0 w-[78%] z-10"
              >
                <motion.div animate={floatAnimation1}>
                  <div className="relative">
                    <ConceptBadge className="absolute top-2 left-2 z-20 scale-90" />
                    <BrowserFrame url="noire.coffee" ariaLabel="Concept website for NOIRÉ coffee">
                      <NoireMockup />
                    </BrowserFrame>
                  </div>
                </motion.div>
              </motion.div>

              {/* Mid-right: VÉRA (Overlapping) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: EASING, delay: 0.77 }}
                className="absolute right-0 top-16 w-[66%] z-20"
              >
                <motion.div animate={floatAnimation2}>
                  <div className="relative">
                    <ConceptBadge className="absolute top-2 left-2 z-20 scale-90" />
                    <BrowserFrame url="vera-studio.com" ariaLabel="Concept website for VÉRA boutique">
                      <VeraMockup />
                    </BrowserFrame>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom-left: NORTH & CO. (Front) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: EASING, delay: 0.89 }}
                className="absolute left-6 bottom-0 w-[64%] z-30"
              >
                <motion.div animate={floatAnimation3}>
                  <div className="relative">
                    <ConceptBadge className="absolute top-2 left-2 z-20 scale-90" />
                    <BrowserFrame url="northandco.arch" ariaLabel="Concept website for NORTH & CO. architecture">
                      <NorthMockup />
                    </BrowserFrame>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile / Tablet Order: Single NOIRÉ Mockup */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: EASING, delay: 0.65 }}
              className="lg:hidden w-full relative z-10"
            >
              <div className="relative">
                <ConceptBadge className="absolute top-2 left-2 z-20" />
                <BrowserFrame url="noire.coffee" ariaLabel="Concept website for NOIRÉ coffee">
                  <NoireMockup />
                </BrowserFrame>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
