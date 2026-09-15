"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const bootLines = [
  "> booting dimas.dev",
  "> loading experience...",
  "> 100%",
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [visibleCount, setVisibleCount] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setVisibleCount(1), 100);
    const t2 = setTimeout(() => setVisibleCount(2), 600);
    const t3 = setTimeout(() => setVisibleCount(3), 1200);
    const t4 = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }}
      className="fixed inset-0 z-50 flex flex-col items-start justify-center px-8 md:px-24 bg-[#0C0C0C] select-none pointer-events-auto"
    >
      <div className="space-y-2 font-mono text-xs text-secondary">
        {bootLines.map((line, index) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: index < visibleCount ? 1 : 0, y: index < visibleCount ? 0 : 4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
