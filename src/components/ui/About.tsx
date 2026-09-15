"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface PixelatedCanvasProps {
  rows?: number;
  cols?: number;
}

const PixelatedCanvas = React.memo(function PixelatedCanvas({
  rows = 10,
  cols = 10,
}: PixelatedCanvasProps) {
  const totalCells = useMemo(() => rows * cols, [rows, cols]);
  const cells = useMemo(() => Array.from({ length: totalCells }), [totalCells]);

  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0 p-5 md:p-6 border border-[#292929] bg-[#0C0C0C]/80 backdrop-blur-sm select-none">
      {/* Canvas Top Meta */}
      <div className="flex items-center justify-between font-mono text-[10px] text-secondary tracking-widest uppercase mb-4 select-none">
        <span>[ PIXELATED CANVAS ]</span>
        <span className="flex items-center gap-1.5 text-secondary/80">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          ACTIVE
        </span>
      </div>

      {/* Grid of Interactive Pixel Cells */}
      <div
        className="grid grid-cols-10 gap-1.5 select-none"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cells.map((_, i) => (
          <div
            key={`cell-${i}`}
            className="aspect-square border border-[#292929] bg-[#141414] hover:bg-[rgba(242,240,234,0.22)] transition-colors duration-700 hover:duration-0 cursor-none flex items-center justify-center group"
          >
            {/* Subtle decorative dot on select nodes */}
            {(i === 12 || i === 37 || i === 64 || i === 88) && (
              <div className="w-1 h-1 rounded-full bg-[#292929] group-hover:bg-accent transition-colors duration-300" />
            )}
          </div>
        ))}
      </div>

      {/* Canvas Bottom Meta */}
      <div className="flex items-center justify-between font-mono text-[9px] text-secondary/60 tracking-wider uppercase mt-4 select-none">
        <span>MATRIX: {cols}x{rows}</span>
        <span>CONCEPT: MA (間)</span>
      </div>
    </div>
  );
});

export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1440px] mx-auto py-32 md:py-48 relative z-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (Cols 1-5): Interactive Pixelated Canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0 }}
          className="md:col-span-5"
        >
          <PixelatedCanvas rows={10} cols={10} />
        </motion.div>

        {/* Right Column (Cols 7-12): About Content */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
          {/* Metadata Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 }}
          >
            <span className="font-mono text-xs text-secondary tracking-widest uppercase block mb-4">
              01 / ABOUT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-primary tracking-tight"
          >
            I design and build digital experiences that feel simple.
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 }}
            className="font-body text-base md:text-lg leading-relaxed text-secondary mt-8 max-w-xl"
          >
            Currently studying Information and Computer Technology (D4) at Politeknik Negeri Subang. I focus on bridging the gap between elegant engineering and beautiful user interfaces. My philosophy leans heavily into deliberate subtraction; stripping away unnecessary decoration until only purposeful interaction and clarity remain.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
