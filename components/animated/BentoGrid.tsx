"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  index?: number;
  style?: React.CSSProperties;
}

export function BentoItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  index = 0,
  style,
}: BentoItemProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-6",
        colSpan === 2 && "md:col-span-2",
        rowSpan === 2 && "row-span-2",
        className
      )}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
