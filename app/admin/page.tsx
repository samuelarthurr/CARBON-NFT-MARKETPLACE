import { AdminSidebar } from "@/components/admin-sidebar"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboardPage() {
  // Mock recent transactions
  const recentTransactions = [
    {
      id: "TXN-001234",
      user: "Sarah Chen",
      nft: "Sabah Mangrove Restoration",
      amount: 75,
      date: "2 hours ago",
      status: "completed",
    },
    {
      id: "TXN-001233",
      user: "Alex Wong",
      nft: "Solar Farm Initiative",
      amount: 120,
      date: "5 hours ago",
      status: "completed",
    },
    {
      id: "TXN-001232",
      user: "Maria Santos",
      nft: "Rainforest Tree Planting",
      amount: 50,
      date: "8 hours ago",
      status: "pending",
    },
    {
      id: "TXN-001231",
      user: "David Tan",
      nft: "Wind Energy Project",
      amount: 95,
      date: "1 day ago",
      status: "completed",
    },
  ]

  // Mock pending verifications
  const pendingVerifications = [
    {
      id: "VER-456",
      project: "Coastal Mangrove Expansion",
      submittedBy: "Green Earth NGO",
      date: "1 day ago",
    },
    {
      id: "VER-455",
      project: "Urban Solar Rooftop Program",
      submittedBy: "Solar Solutions Inc",
      date: "2 days ago",
    },
    {
      id: "VER-454",
      project: "Highland Reforestation Initiative",
      submittedBy: "Forest Trust Malaysia",
      date: "3 days ago",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of platform performance and pending actions</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="RM 1.2M"
            change={23}
            changeLabel="vs last month"
            trend="up"
            icon={<DollarSign className="w-5 h-5" />}
          />
          <StatCard
            title="Active Users"
            value="8,234"
            change={15}
            changeLabel="vs last month"
            trend="up"
            icon={<Users className="w-5 h-5" />}
          />
          <StatCard
            title="NFTs Sold"
            value="15,678"
            change={18}
            changeLabel="vs last month"
            trend="up"
            icon={<ShoppingBag className="w-5 h-5" />}
          />
          <StatCard
            title="CO₂ Offset"
            value="12.5k kg"
            change={28}
            changeLabel="vs last month"
            trend="up"
            icon={<Leaf className="w-5 h-5" />}
          />
        </div>

        {/* Alerts */}
        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Action Required</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  You have 3 pending project verifications and 2 payout requests awaiting approval.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/admin/verification">Review Verifications</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/admin/payouts">Review Payouts</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/transactions" className="gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{transaction.user}</p>
                      <p className="text-xs text-muted-foreground">{transaction.nft}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-semibold">RM{transaction.amount}</p>
                      {transaction.status === "completed" ? (
                        <Badge variant="secondary" className="gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="w-3 h-3" />
                          Pending
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Verifications */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Verifications</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/verification" className="gap-2">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingVerifications.map((verification) => (
                  <div
                    key={verification.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50"
                  >
                    <div className="space-y-1 flex-1">
                      <p className="font-medium text-sm">{verification.project}</p>
                      <p className="text-xs text-muted-foreground">{verification.submittedBy}</p>
                      <p className="text-xs text-muted-foreground">{verification.date}</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/admin/verification/${verification.id}`}>Review</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Health */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Uptime</span>
                  <span className="text-sm text-success">99.9%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: "99.9%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Response Time</span>
                  <span className="text-sm text-success">45ms</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database Health</span>
                  <span className="text-sm text-success">Optimal</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: "95%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Avg. Transaction Value</p>
              <p className="text-2xl font-bold">RM 78</p>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-2xl font-bold">3.2%</p>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+0.4%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Active Projects</p>
              <p className="text-2xl font-bold">156</p>
              <div className="flex items-center gap-1 text-sm text-success">
                <TrendingUp className="w-4 h-4" />
                <span>+8</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-2">
              <p className="text-sm text-muted-foreground">Pending Payouts</p>
              <p className="text-2xl font-bold">RM 45k</p>
              <p className="text-sm text-muted-foreground">2 requests</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
