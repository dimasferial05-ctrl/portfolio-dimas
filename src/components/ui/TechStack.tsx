"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  ViteIcon,
  FlutterIcon,
  DartIcon,
  FigmaIcon,
  BunIcon,
  ElysiaIcon,
  PrismaIcon,
  DrizzleIcon,
  PostgresIcon,
  MysqlIcon,
  SqliteIcon,
  NeonIcon,
  GitIcon,
  LaragonIcon,
  DrawIoIcon,
} from "@/components/ui/tech-icons";

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface InfiniteMovingCardsProps {
  items: TechItem[];
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
      containerRef.current.style.setProperty("--animation-duration", "25s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "65s");
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
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
        className={cn(
          "flex min-w-full shrink-0 gap-3 md:gap-4 py-2 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((tech, idx) => (
          <li
            key={`${tech.name}-${idx}`}
            className="inline-flex items-center gap-2.5 md:gap-3 px-5 py-3 md:px-7 md:py-3.5 bg-[#141414] border border-[#292929] font-mono text-xs md:text-sm text-secondary hover:text-primary hover:border-primary/40 transition-colors duration-300 select-none cursor-none shrink-0 tracking-wider group"
          >
            <span className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-secondary/70 group-hover:text-primary transition-colors shrink-0">
              {tech.icon}
            </span>
            <span className="font-mono uppercase select-none font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const techStackRow1: TechItem[] = [
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "JAVASCRIPT", icon: <JsIcon /> },
  { name: "TYPESCRIPT", icon: <TsIcon /> },
  { name: "REACT", icon: <ReactIcon /> },
  { name: "NEXT.JS", icon: <NextjsIcon /> },
  { name: "VITE", icon: <ViteIcon /> },
  { name: "TAILWIND CSS", icon: <TailwindIcon /> },
  { name: "FLUTTER", icon: <FlutterIcon /> },
  { name: "DART", icon: <DartIcon /> },
  { name: "FIGMA", icon: <FigmaIcon /> },
];

const techStackRow2: TechItem[] = [
  { name: "BUN", icon: <BunIcon /> },
  { name: "ELLYSIAJS", icon: <ElysiaIcon /> },
  { name: "PRISMA", icon: <PrismaIcon /> },
  { name: "DRIZZLE", icon: <DrizzleIcon /> },
  { name: "POSTGRESQL", icon: <PostgresIcon /> },
  { name: "MYSQL", icon: <MysqlIcon /> },
  { name: "SQLITE", icon: <SqliteIcon /> },
  { name: "NEON", icon: <NeonIcon /> },
  { name: "GIT", icon: <GitIcon /> },
  { name: "LARAGON", icon: <LaragonIcon /> },
  { name: "DRAW.IO", icon: <DrawIoIcon /> },
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
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="mb-8 md:mb-12"
      >
        <span className="font-mono text-xs text-secondary tracking-widest uppercase block">
          02 / TECHNOLOGIES I WORK WITH
        </span>
      </motion.div>

      {/* Two-row Brick-style Infinite Moving Cards Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
        className="flex flex-col gap-3 md:gap-4 overflow-hidden"
      >
        {/* Top Row: Scrolls Left */}
        <InfiniteMovingCards
          items={techStackRow1}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />

        {/* Bottom Row: Scrolls Right with Brick Offset */}
        <div className="md:pl-10">
          <InfiniteMovingCards
            items={techStackRow2}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
