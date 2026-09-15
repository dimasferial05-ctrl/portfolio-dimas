"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleProps {
  className?: string;
  rows?: number;
  cols?: number;
  maxRadius?: number;
}

interface CellProps {
  row: number;
  col: number;
  rippleEvent: { row: number; col: number; id: number } | null;
  onCellClick: (row: number, col: number) => void;
  maxRadius: number;
}

const Cell = React.memo(function Cell({
  row,
  col,
  rippleEvent,
  onCellClick,
  maxRadius,
}: CellProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (!rippleEvent) return;
    const distance = Math.hypot(rippleEvent.row - row, rippleEvent.col - col);
    if (distance <= maxRadius) {
      const delay = distance * 0.038;
      const intensity = Math.max(0, 1 - distance / maxRadius);
      controls.start({
        opacity: [0, 0.5 * intensity, 0],
        transition: {
          duration: 0.6,
          delay: delay,
          ease: "easeOut",
        },
      });
    }
  }, [rippleEvent, row, col, controls, maxRadius]);

  return (
    <div
      onClick={() => onCellClick(row, col)}
      className="relative w-12 h-12 md:w-14 md:h-14 border-r border-b border-[rgba(242,240,234,0.05)] transition-colors duration-500 hover:duration-0 hover:bg-[rgba(242,240,234,0.08)] cursor-none group"
    >
      {/* Ripple wave highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="absolute inset-0 pointer-events-none bg-[rgba(242,240,234,0.16)] shadow-[inset_0_0_12px_rgba(242,240,234,0.12)]"
      />
    </div>
  );
});

export const Ripple = React.memo(function Ripple({
  className,
  rows = 22,
  cols = 34,
  maxRadius = 14,
}: RippleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [rippleEvent, setRippleEvent] = useState<{
    row: number;
    col: number;
    id: number;
  } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  const handleCellClick = useCallback((row: number, col: number) => {
    setRippleEvent({ row, col, id: Date.now() });
  }, []);

  // Generate grid matrix
  const gridRows = Array.from({ length: rows });
  const gridCols = Array.from({ length: cols });

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 -z-10 flex items-center justify-center overflow-hidden select-none [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]",
        className
      )}
    >
      {/* Ambient cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(242, 240, 234, 0.05), transparent 80%)`,
        }}
      />

      {/* Grid container */}
      <div className="flex flex-col border-t border-l border-[rgba(242,240,234,0.05)]">
        {gridRows.map((_, r) => (
          <div key={`row-${r}`} className="flex flex-row">
            {gridCols.map((_, c) => (
              <Cell
                key={`cell-${r}-${c}`}
                row={r}
                col={c}
                rippleEvent={rippleEvent}
                onCellClick={handleCellClick}
                maxRadius={maxRadius}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

// Alias export for Aceternity naming compatibility
export const BackgroundBoxes = Ripple;
export const BackgroundCellAnimation = Ripple;
