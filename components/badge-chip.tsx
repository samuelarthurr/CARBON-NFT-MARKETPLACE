import type React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle2, Sparkles, Leaf } from "lucide-react"

interface BadgeChipProps {
  variant?: "verified" | "rare" | "new" | "offset"
  children: React.ReactNode
  className?: string
}

export function BadgeChip({ variant = "verified", children, className }: BadgeChipProps) {
  const variants = {
    verified: "bg-success/10 text-success border-success/20",
    rare: "bg-gold/10 text-gold border-gold/20",
    new: "bg-secondary/10 text-secondary border-secondary/20",
    offset: "bg-primary/10 text-primary border-primary/20",
  }

  const icons = {
    verified: <CheckCircle2 className="w-3 h-3" />,
    rare: <Sparkles className="w-3 h-3" />,
    new: <Sparkles className="w-3 h-3" />,
    offset: <Leaf className="w-3 h-3" />,
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border",
        variants[variant],
        className,
      )}
    >
      {icons[variant]}
      {children}
    </span>
  )
}
