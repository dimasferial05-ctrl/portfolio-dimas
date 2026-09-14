"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/ui/preloader";
import { Hero } from "@/components/ui/hero";

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 md:px-24">
      <AnimatePresence mode="wait">
        {isBooting ? (
          <Preloader key="preloader" onComplete={() => setIsBooting(false)} />
        ) : (
          <Hero key="hero" />
        )}
      </AnimatePresence>
    </main>
  );
}


