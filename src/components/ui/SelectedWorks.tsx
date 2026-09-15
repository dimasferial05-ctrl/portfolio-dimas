"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "01",
    name: "KOSPASTI",
    category: "PWA / PRODUCT DESIGN",
    description:
      "A boarding house search and booking platform built with high-performance caching and intuitive map filters.",
    image: "/images/kospasti.jpg",
    link: "#",
  },
  {
    id: "02",
    name: "SMART-STAY",
    category: "IOT / AI",
    description:
      "Facial-recognition access control system for residential security with instant authorization telemetry.",
    image: "/images/smart-stay.jpg",
    link: "#",
  },
  {
    id: "03",
    name: "TBCAREKIDS",
    category: "MOBILE APP / AI",
    description:
      "Early disease detection and prevention chatbot designed to assist families in pediatric wellness tracking.",
    image: "/images/tbcarekids.jpg",
    link: "#",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ProjectCard({ project }: { project: Project }) {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div variants={cardVariants} className="h-full">
      <div className="relative flex flex-col h-full bg-[#141414] border border-[#292929] rounded-none sm:rounded-md overflow-hidden shadow-none group">
        {/* Image Container (Bagian Atas) */}
        <div
          ref={imageContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-video overflow-hidden border-b border-[#292929] bg-[#0C0C0C] cursor-none select-none"
        >
          {/* Custom Floating Cursor ("VIEW") */}
          <motion.div
            className="pointer-events-none absolute z-50 px-3 py-1 bg-[#141414]/90 border border-[#292929] text-primary font-mono text-[10px] tracking-widest backdrop-blur-sm shadow-none"
            style={{ top: 0, left: 0 }}
            animate={{
              x: cursorPos.x - 24,
              y: cursorPos.y - 14,
              opacity: isHovering ? 1 : 0,
              scale: isHovering ? 1 : 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 28,
              mass: 0.5,
            }}
          >
            VIEW
          </motion.div>

          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out select-none"
          />
        </div>

        {/* Metadata Container (Bagian Bawah) */}
        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-sans text-2xl font-bold text-primary mb-2">
              {project.name}
            </h3>
            <span className="font-mono text-xs font-semibold text-[#E63946] tracking-wider uppercase mb-4 block">
              {project.category}
            </span>
            <p className="font-body text-sm text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          <a
            href={project.link}
            className="font-mono text-xs font-bold text-secondary group-hover:text-[#E63946] transition-colors duration-300 mt-6 inline-flex items-center gap-1.5 w-fit"
          >
            <span>→</span> EXPLORE
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="w-full max-w-[1440px] mx-auto py-32 md:py-48 relative z-10"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24"
      >
        <div className="flex flex-col">
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">
            03 / SELECTED WORKS
          </span>
          <h2 className="font-sans text-5xl md:text-7xl lg:text-8xl font-normal text-primary tracking-tighter mt-4">
            CRAFTED ARTIFACTS.
          </h2>
        </div>

        <p className="font-body text-base md:text-lg text-secondary max-w-md md:text-right">
          A collection of things I&apos;ve built, designed, and explored.
        </p>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
