"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import { Ripple } from "@/components/ui/ripple";

const rotateTexts = [
  "WEB APPLICATIONS",
  "INTERACTIVE PRODUCTS",
  "USER EXPERIENCES",
  "IOT ECOSYSTEMS",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  }
};

const flipVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const flipTransition: Transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotateTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-center items-start max-w-[1440px] w-full mx-auto relative z-10 overflow-hidden"
    >
      {/* Background Ripple Effect */}
      <Ripple />

      {/* 1. Status Badge */}
      <motion.div variants={itemVariants} className="flex items-center gap-2 font-mono text-xs text-secondary pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>[ STATUS: SYSTEM ONLINE ]</span>
      </motion.div>

      {/* 2. Giant Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-sans text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary mt-8 pointer-events-none select-none"
      >
        DIMAS FERIAL HIDAYAT.
      </motion.h1>

      {/* 3. Animated Subheading */}
      <motion.div
        variants={itemVariants}
        className="font-sans text-2xl md:text-4xl font-medium text-secondary mt-4 flex flex-wrap items-center gap-2 pointer-events-none select-none"
      >
        <span>I BUILD</span>
        <span className="inline-flex relative overflow-hidden py-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={rotateTexts[currentIndex]}
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={flipTransition}
              className="inline-block text-primary font-semibold"
            >
              {rotateTexts[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.div>

      {/* 4. Body Text */}
      <motion.p
        variants={itemVariants}
        className="font-body text-base md:text-lg text-secondary mt-6 max-w-xl leading-relaxed pointer-events-none select-none"
      >
        Software Developer · Frontend Enthusiast.
      </motion.p>

      {/* 5. Call to Action (CTA) Group */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-10 relative z-20">
        <a
          href="#work"
          data-cursor="view"
          className="inline-flex items-center justify-center px-6 py-3 border border-border bg-transparent font-mono text-xs text-secondary hover:text-primary hover:border-accent transition-colors duration-300 cursor-none select-none pointer-events-auto"
        >
          [ VIEW MY WORK ]
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="download"
          className="inline-flex items-center justify-center px-6 py-3 border border-border bg-transparent font-mono text-xs text-secondary hover:text-primary hover:border-accent transition-colors duration-300 cursor-none select-none pointer-events-auto"
        >
          [ DOWNLOAD CV ]
        </a>
      </motion.div>
    </motion.section>
  );
}
