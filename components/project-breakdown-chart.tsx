"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Tree Planting", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Solar Energy", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Mangrove Restoration", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Wind Energy", value: 15, color: "hsl(var(--chart-4))" },
]

export function ProjectBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Offset by Project Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-3 w-full md:w-auto">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.value}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
