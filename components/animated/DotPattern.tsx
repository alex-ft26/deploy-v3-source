import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  size?: number;
  gap?: number;
  color?: string;
}

export function DotPattern({
  className,
  size = 1.5,
  gap = 20,
  color = "var(--color-foreground)",
}: DotPatternProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" width={gap} height={gap} patternUnits="userSpaceOnUse">
            <circle cx={gap / 2} cy={gap / 2} r={size} fill={color} opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
