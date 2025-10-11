"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", offset: 0 },
  { month: "Feb", offset: 120 },
  { month: "Mar", offset: 280 },
  { month: "Apr", offset: 450 },
  { month: "May", offset: 680 },
  { month: "Jun", offset: 920 },
  { month: "Jul", offset: 1250 },
]

export function OffsetChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Carbon Offset Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="offsetGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="offset"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#offsetGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
