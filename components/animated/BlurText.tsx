"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function BlurText({ text, className, delay = 0, style }: BlurTextProps) {
  return (
    <motion.span
      className={cn("inline-block", className)}
      style={style}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}
