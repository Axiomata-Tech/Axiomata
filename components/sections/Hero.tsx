"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/ui/Eyebrow";
import { Button } from "@/ui/Button";
import { SystemDiagram } from "@/components/visual/SystemDiagram";
import { EASING } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Hero Introduction"
      className="relative w-full bg-[#F6F2E9] text-[#111315] overflow-hidden border-b-2 border-[#111315]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text Column (6 cols) */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* Eyebrow */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING }}
            >
              <Eyebrow className="inline-block border border-[#111315] px-3 py-1 bg-[#FFFFFF]">
                AXIOMATA // IT SOLUTIONS &amp; ENGINEERING
              </Eyebrow>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.5rem,5.5vw+0.5rem,5rem)] font-heading font-extrabold tracking-tight leading-[1.06] text-[#111315]">
              <div className="overflow-hidden">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.1 }}
                >
                  Technology for
                </motion.div>
              </div>
              <div className="overflow-hidden py-1">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.19 }}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1"
                >
                  <span>businesses</span>
                  <span className="inline-block px-2.5 py-0.5 bg-[#00C7B7] text-[#111315] border-2 border-[#111315] rounded-[2px]">
                    ready
                  </span>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.6, ease: EASING, delay: 0.28 }}
                >
                  to move.
                </motion.div>
              </div>
            </h1>

            {/* Subdeck */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-xl sm:text-2xl text-[#3B4143] max-w-2xl leading-relaxed font-normal"
            >
              We design and build practical digital solutions, custom software, workflow automation, and AI integrations for startups, small businesses, and growing teams.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASING, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button href="/contact" variant="primary" arrow="right">
                Start a conversation
              </Button>
              <Button href="#services" variant="secondary" arrow="down">
                Explore capabilities
              </Button>
            </motion.div>
          </div>

          {/* Right System Diagram Visual (6 cols) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASING, delay: 0.6 }}
              className="w-full"
            >
              <SystemDiagram />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
