import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]": variant === "default",
          "bg-[var(--color-secondary)] text-[var(--color-foreground)]": variant === "secondary",
          "border border-[var(--color-border)] text-[var(--color-foreground)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge, type BadgeProps };
