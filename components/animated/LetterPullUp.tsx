"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LetterPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export function LetterPullUp({ text, className, delay = 0, style }: LetterPullUpProps) {
  const letters = text.split("");

  return (
    <span className={cn("inline-flex", className)} style={style}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
