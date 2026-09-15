"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Preloader } from "@/components/ui/preloader";
import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/About";
import { TechStack } from "@/components/ui/TechStack";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center px-8 md:px-24">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <Preloader key="preloader" onComplete={() => setIsBooting(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            <Hero />
            <About />
            <TechStack />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}



