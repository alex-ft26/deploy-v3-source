"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap: Record<string, (d: number) => Record<string, number>> = {
  up: (d) => ({ y: d, opacity: 0 }),
  down: (d) => ({ y: -d, opacity: 0 }),
  left: (d) => ({ x: d, opacity: 0 }),
  right: (d) => ({ x: -d, opacity: 0 }),
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={directionMap[direction](distance)}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
