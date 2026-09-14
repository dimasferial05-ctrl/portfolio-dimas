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
  mainCircleSize = 210,
  mainCircleOpacity = 0.20,
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_85%)] select-none",
        className
      )}
    >
      {Array.from({ length: numCircles }).map((_, i) => {
        const size = mainCircleSize + i * 85;
        const opacity = Math.max(0.05, mainCircleOpacity - i * 0.018);
        const delay = i * 0.35;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderColor: `rgba(242, 240, 234, ${opacity})`,
              boxShadow: `0 0 16px rgba(242, 240, 234, ${opacity * 0.25})`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [opacity, opacity * 0.6, opacity],
            }}
            transition={{
              duration: 8,
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
