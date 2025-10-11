import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: React.ReactNode
  trend?: "up" | "down"
}

export function StatCard({ title, value, change, changeLabel, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{title}</p>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1 text-sm">
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" />
              )}
              <span className={cn(trend === "up" ? "text-success" : "text-destructive")}>
                {change > 0 ? "+" : ""}
                {change}%
              </span>
              {changeLabel && <span className="text-muted-foreground">{changeLabel}</span>}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
