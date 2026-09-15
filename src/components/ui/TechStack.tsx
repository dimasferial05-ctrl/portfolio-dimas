"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMovingCardsProps {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Set animation direction
    if (direction === "left") {
      containerRef.current.style.setProperty("--animation-direction", "forwards");
    } else {
      containerRef.current.style.setProperty("--animation-direction", "reverse");
    }

    // Set animation duration
    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "35s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "60s");
    }

    setStart(true);
  }, [direction, speed]);

  // Duplicate items for seamless continuous marquee loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 md:gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((tech, idx) => (
          <li
            key={`${tech}-${idx}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 md:px-8 md:py-4 bg-[#141414] border border-[#292929] font-mono text-xs md:text-sm text-secondary hover:text-primary hover:border-primary/40 transition-colors duration-300 select-none cursor-none shrink-0 tracking-wider"
          >
            <span className="text-secondary/40 font-mono text-[10px] select-none">#</span>
            <span className="font-mono uppercase select-none">{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const techStack = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "FIGMA",
  "GIT",
];

export function TechStack() {
  return (
    <section
      id="tech"
      className="w-full max-w-[1440px] mx-auto py-24 md:py-32 relative z-10"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-8 md:mb-12"
      >
        <span className="font-mono text-xs text-secondary tracking-widest uppercase block">
          02 / TECHNOLOGIES I WORK WITH
        </span>
      </motion.div>

      {/* Infinite Moving Cards Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
      >
        <InfiniteMovingCards
          items={techStack}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </motion.div>
    </section>
  );
}

export default TechStack;
