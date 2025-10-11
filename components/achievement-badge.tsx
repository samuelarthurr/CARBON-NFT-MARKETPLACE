import { Award, Flame, Leaf, Star, Trophy, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface AchievementBadgeProps {
  type: "first-purchase" | "streak" | "top-contributor" | "eco-warrior" | "rare-collector" | "verified"
  earned?: boolean
  size?: "sm" | "md" | "lg"
}

const badgeConfig = {
  "first-purchase": {
    icon: Star,
    label: "First Offset",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  streak: {
    icon: Flame,
    label: "7 Day Streak",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  "top-contributor": {
    icon: Trophy,
    label: "Top 10 Contributor",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  "eco-warrior": {
    icon: Leaf,
    label: "Eco Warrior",
    color: "text-success",
    bg: "bg-success/10",
  },
  "rare-collector": {
    icon: Zap,
    label: "Rare Collector",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  verified: {
    icon: Award,
    label: "Verified User",
    color: "text-primary",
    bg: "bg-primary/10",
  },
}

export function AchievementBadge({ type, earned = true, size = "md" }: AchievementBadgeProps) {
  const config = badgeConfig[type]
  const Icon = config.icon

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "rounded-full flex items-center justify-center transition-all",
          sizeClasses[size],
          earned ? config.bg : "bg-muted",
          !earned && "opacity-40 grayscale",
        )}
      >
        <Icon className={cn(iconSizes[size], earned ? config.color : "text-muted-foreground")} />
      </div>
      <p className={cn("text-xs font-medium text-center", !earned && "text-muted-foreground")}>{config.label}</p>
    </div>
  )
}
