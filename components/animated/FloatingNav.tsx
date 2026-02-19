"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  items: NavItem[];
  logo?: string;
  companyName: string;
  className?: string;
}

export function FloatingNav({ items, logo, companyName, className }: FloatingNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-2" : "py-4",
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300",
            scrolled
              ? "bg-[var(--color-background)]/80 shadow-lg backdrop-blur-md border border-[var(--color-border)]"
              : "bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            {logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={companyName} className="h-8 w-auto" />
            )}
            <span className="text-lg font-semibold text-[var(--color-foreground)]">
              {companyName}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
