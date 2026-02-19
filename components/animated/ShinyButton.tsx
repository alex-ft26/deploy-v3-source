"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type ReactNode, type CSSProperties } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  variant?: string;
  style?: CSSProperties;
}

export function ShinyButton({ children, className, onClick, type = "button", style }: ShinyButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[var(--color-primary)] px-8 py-3 font-medium text-[var(--color-primary-foreground)] transition-transform",
        className
      )}
      style={style}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.3) 50%, transparent 55%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
