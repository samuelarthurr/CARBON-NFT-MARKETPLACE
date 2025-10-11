"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  FileCheck,
  ShoppingBag,
  Users,
  Settings,
  BarChart3,
  Leaf,
  DollarSign,
  AlertCircle,
} from "lucide-react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: Leaf },
  { href: "/admin/verification", label: "Verification", icon: FileCheck },
  { href: "/admin/transactions", label: "Transactions", icon: ShoppingBag },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/payouts", label: "Payouts", icon: DollarSign },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/reports", label: "Reports", icon: AlertCircle },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border/40 bg-muted/30 min-h-screen">
      <div className="p-6 border-b border-border/40">
        <h2 className="text-lg font-bold">Admin Panel</h2>
        <p className="text-sm text-muted-foreground">Carbon NFT Management</p>
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
