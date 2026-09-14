"use client";

import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  Cpu, 
  FolderGit2, 
  Briefcase, 
  Mail 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Tech", href: "#tech", icon: Cpu },
  { name: "Works", href: "#works", icon: FolderGit2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Persistent Meta Tag (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 font-mono text-xs text-secondary tracking-widest pointer-events-none select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>DF / 2026</span>
      </div>

      {/* Global Navigation - Floating Dock (Bottom-Center) */}
      <nav
        aria-label="Primary Navigation"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-fit"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-surface/90 backdrop-blur-md border border-border rounded-lg">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative p-2.5 rounded-md text-secondary hover:text-primary transition-colors flex items-center justify-center group"
                aria-label={item.name}
              >
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -38, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 -translate-x-1/2 px-2.5 py-1 bg-surface border border-border font-mono text-[11px] text-primary rounded pointer-events-none whitespace-nowrap"
                  >
                    {item.name}
                  </motion.div>
                )}

                <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

                {/* Subtle active / hover vermilion accent dot */}
                {index === 0 && (
                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
