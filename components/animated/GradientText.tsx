"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  to?: string;
}

export function GradientText({
  text,
  className,
  from = "var(--color-primary)",
  to = "var(--color-accent)",
}: GradientTextProps) {
  return (
    <motion.span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {text}
    </motion.span>
  );
}
