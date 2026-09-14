"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 240,
  mainCircleOpacity = 0.05,
  numCircles = 6,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_75%)] select-none",
        className
      )}
    >
      {Array.from({ length: numCircles }).map((_, i) => {
        const size = mainCircleSize + i * 90;
        const opacity = Math.max(0.015, mainCircleOpacity - i * 0.007);
        const delay = i * 0.4;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: `rgba(255, 255, 255, ${opacity})`,
            }}
            animate={{
              scale: [1, 1.06, 1],
              opacity: [opacity, opacity * 0.5, opacity],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: [0.16, 1, 0.3, 1],
              delay: delay,
            }}
          />
        );
      })}
    </div>
  );
});
