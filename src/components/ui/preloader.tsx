"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Jeda sebelum fade-out agar 100% terbaca
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 3;
        const next = prev + increment;
        if (next >= 100) {
          return 100;
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0C] select-none pointer-events-auto"
    >
      <div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter text-primary tabular-nums">
        {counter}%
      </div>
    </motion.div>
  );
}
