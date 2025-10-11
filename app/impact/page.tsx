import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StatCard } from "@/components/stat-card"
import { OffsetChart } from "@/components/offset-chart"
import { ProjectBreakdownChart } from "@/components/project-breakdown-chart"
import { Leaderboard } from "@/components/leaderboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Users, TrendingUp, Globe, Download, Share2, MapPin } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border/40 bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Global Impact Dashboard</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Track the collective environmental impact of our community. Every NFT purchased contributes to verified
                carbon offset projects across Malaysia and ASEAN.
              </p>
            </div>
          </div>
        </section>

        {/* Main Dashboard */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="global" className="space-y-8">
              <TabsList>
                <TabsTrigger value="global">Global Impact</TabsTrigger>
                <TabsTrigger value="personal">My Impact</TabsTrigger>
              </TabsList>

              {/* Global Impact Tab */}
              <TabsContent value="global" className="space-y-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard
                    title="Total CO₂ Offset"
                    value="12.5k"
                    change={23}
                    changeLabel="vs last month"
                    trend="up"
                    icon={<Leaf className="w-5 h-5" />}
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
                    icon={<TrendingUp className="w-5 h-5" />}
                  />
                  <StatCard
                    title="Projects Funded"
                    value="156"
                    change={8}
                    changeLabel="vs last month"
                    trend="up"
                    icon={<Globe className="w-5 h-5" />}
                  />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <OffsetChart />
                  <ProjectBreakdownChart />
                </div>

                {/* Real-World Impact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Real-World Impact Equivalents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-2 text-center p-6 rounded-lg bg-muted/50">
                        <p className="text-4xl font-bold text-primary">6,250</p>
                        <p className="text-sm text-muted-foreground">Trees planted equivalent</p>
                      </div>
                      <div className="space-y-2 text-center p-6 rounded-lg bg-muted/50">
                        <p className="text-4xl font-bold text-primary">32</p>
                        <p className="text-sm text-muted-foreground">Cars removed from roads for a year</p>
                      </div>
                      <div className="space-y-2 text-center p-6 rounded-lg bg-muted/50">
                        <p className="text-4xl font-bold text-primary">54,200</p>
                        <p className="text-sm text-muted-foreground">Miles not driven equivalent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Leaderboard and Regional Impact */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Leaderboard />

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Regional Impact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Malaysia</span>
                            <span className="text-muted-foreground">5,420kg CO₂</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "43%" }} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Indonesia</span>
                            <span className="text-muted-foreground">3,890kg CO₂</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "31%" }} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Thailand</span>
                            <span className="text-muted-foreground">2,140kg CO₂</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "17%" }} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Singapore</span>
                            <span className="text-muted-foreground">1,050kg CO₂</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "9%" }} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Highlights */}
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-3">
                        <div className="aspect-video rounded-lg bg-muted overflow-hidden">
                          <img
                            src="/mangrove-forest-coastal-restoration.jpg"
                            alt="Mangrove project"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Sabah Mangrove Restoration</h4>
                          <p className="text-sm text-muted-foreground">2,340kg CO₂ offset this month</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="aspect-video rounded-lg bg-muted overflow-hidden">
                          <img
                            src="/solar-panels-renewable-energy-farm.jpg"
                            alt="Solar project"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Peninsular Solar Initiative</h4>
                          <p className="text-sm text-muted-foreground">3,120kg CO₂ offset this month</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="aspect-video rounded-lg bg-muted overflow-hidden">
                          <img
                            src="/tropical-rainforest-trees-planting.jpg"
                            alt="Reforestation project"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Borneo Reforestation</h4>
                          <p className="text-sm text-muted-foreground">1,890kg CO₂ offset this month</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Personal Impact Tab */}
              <TabsContent value="personal" className="space-y-8">
                {/* Personal Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard title="Your Total Offset" value="1,250kg" icon={<Leaf className="w-5 h-5" />} />
                  <StatCard title="NFTs Owned" value="18" icon={<TrendingUp className="w-5 h-5" />} />
                  <StatCard title="Your Rank" value="#7" icon={<Users className="w-5 h-5" />} />
                  <StatCard title="Days Active" value="89" icon={<Globe className="w-5 h-5" />} />
                </div>

                {/* Personal Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <OffsetChart />
                  <ProjectBreakdownChart />
                </div>

                {/* Personal Impact Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Environmental Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-2 text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-4xl font-bold text-primary">625</p>
                        <p className="text-sm text-muted-foreground">Trees planted equivalent</p>
                      </div>
                      <div className="space-y-2 text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-4xl font-bold text-primary">3.2</p>
                        <p className="text-sm text-muted-foreground">Cars removed for a year</p>
                      </div>
                      <div className="space-y-2 text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-4xl font-bold text-primary">5,420</p>
                        <p className="text-sm text-muted-foreground">Miles not driven</p>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button className="gap-2">
                        <Download className="w-4 h-4" />
                        Download Report
                      </Button>
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <Share2 className="w-4 h-4" />
                        Share Impact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
