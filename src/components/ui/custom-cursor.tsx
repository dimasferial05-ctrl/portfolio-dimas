"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, Variants, Transition } from "framer-motion";

const cursorVariants: Variants = {
  default: {
    width: "10px",
    height: "10px",
    backgroundColor: "#F2F0EA",
    borderColor: "rgba(242, 240, 234, 0)",
    borderWidth: "0px",
    borderRadius: "9999px",
    backdropFilter: "blur(0px)",
  },
  hover: {
    width: "32px",
    height: "32px",
    backgroundColor: "rgba(242, 240, 234, 0.1)",
    borderColor: "rgba(242, 240, 234, 0.8)",
    borderWidth: "1px",
    borderRadius: "9999px",
    backdropFilter: "blur(1px)",
  },
  view: {
    width: "56px",
    height: "26px",
    backgroundColor: "#F2F0EA",
    borderColor: "rgba(242, 240, 234, 0)",
    borderWidth: "0px",
    borderRadius: "2px",
    backdropFilter: "blur(0px)",
  },
};

const cursorTransition: Transition = {
  duration: 0.2,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (mouse)
    const isPointerFine = window.matchMedia("(pointer: fine)").matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest('[data-cursor="view"]');
      const interactiveTarget = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (viewTarget) {
        setCursorState("view");
      } else if (interactiveTarget) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center font-mono text-[10px] tracking-wider uppercase"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        variants={cursorVariants}
        animate={cursorState}
        transition={cursorTransition}
        className="flex items-center justify-center overflow-hidden border"
      >
        <AnimatePresence>
          {cursorState === "view" && (
            <motion.span
              key="view-text"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-background font-semibold tracking-widest text-[10px] select-none"
            >
              VIEW
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
