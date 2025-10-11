"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NFTCard } from "@/components/nft-card"
import { NFTTokenCard } from "@/components/nft-token-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AchievementBadge } from "@/components/achievement-badge"
import {
  Settings,
  Share2,
  Leaf,
  TrendingUp,
  Calendar,
  Award,
  Download,
  ExternalLink,
  BarChart3,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("collection")

  // Mock user data
  const user = {
    name: "Sarah Chen",
    username: "@sarahchen",
    avatar: "/placeholder.svg?height=120&width=120",
    joinDate: "January 2025",
    totalOffset: 1250,
    nftsOwned: 18,
    rank: 7,
    streak: 12,
    bio: "Climate advocate and sustainability enthusiast. Offsetting carbon one NFT at a time.",
  }

  // Mock collection
  const collection = [
    {
      id: "1",
      title: "Sabah Mangrove Restoration",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Mangrove Restoration",
      offsetAmount: "50kg CO₂",
      price: 75,
      verified: true,
      rare: true,
      supply: 100,
      remaining: 23,
    },
    {
      id: "2",
      title: "Solar Farm Initiative",
      image: "/solar-panels-renewable-energy-farm.jpg",
      projectType: "Solar Energy",
      offsetAmount: "100kg CO₂",
      price: 120,
      verified: true,
      supply: 200,
      remaining: 156,
    },
    {
      id: "3",
      title: "Rainforest Tree Planting",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "25kg CO₂",
      price: 50,
      verified: true,
      supply: 500,
      remaining: 342,
    },
    {
      id: "4",
      title: "Wind Energy Project",
      image: "/wind-turbines-renewable-energy.jpg",
      projectType: "Wind Energy",
      offsetAmount: "75kg CO₂",
      price: 95,
      verified: true,
      rare: true,
      supply: 150,
      remaining: 89,
    },
  ]

  const nftTokens = [
    {
      id: "1",
      title: "Sabah Mangrove Restoration",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Mangrove Restoration",
      offsetAmount: "50kg CO₂",
      purchaseDate: "Jan 15, 2025",
      tokenId: "CNT-2025-001234",
      verified: true,
    },
    {
      id: "2",
      title: "Solar Farm Initiative",
      image: "/solar-panels-renewable-energy-farm.jpg",
      projectType: "Solar Energy",
      offsetAmount: "100kg CO₂",
      purchaseDate: "Jan 8, 2025",
      tokenId: "CNT-2025-001189",
      verified: true,
    },
    {
      id: "3",
      title: "Rainforest Tree Planting",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "25kg CO₂",
      purchaseDate: "Dec 28, 2024",
      tokenId: "CNT-2024-009876",
      verified: true,
    },
    {
      id: "4",
      title: "Wind Energy Project",
      image: "/wind-turbines-renewable-energy.jpg",
      projectType: "Wind Energy",
      offsetAmount: "75kg CO₂",
      purchaseDate: "Dec 20, 2024",
      tokenId: "CNT-2024-009654",
      verified: true,
    },
  ]

  // Mock activity
  const activities = [
    {
      id: 1,
      type: "purchase",
      title: "Purchased Sabah Mangrove Restoration",
      date: "2 days ago",
      offset: "50kg CO₂",
    },
    {
      id: 2,
      type: "achievement",
      title: "Earned Top 10 Contributor badge",
      date: "5 days ago",
    },
    {
      id: 3,
      type: "purchase",
      title: "Purchased Solar Farm Initiative",
      date: "1 week ago",
      offset: "100kg CO₂",
    },
    {
      id: 4,
      type: "milestone",
      title: "Reached 1000kg total offset milestone",
      date: "2 weeks ago",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Profile Header */}
        <section className="border-b border-border/40 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar & Basic Info */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="text-3xl">SC</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left space-y-1">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">{user.username}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {user.joinDate}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <Leaf className="w-4 h-4" />
                      <p className="text-xs text-muted-foreground">Total Offset</p>
                    </div>
                    <p className="text-2xl font-bold">{user.totalOffset}kg</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex items-center gap-2 text-primary">
                      <Award className="w-4 h-4" />
                      <p className="text-xs text-muted-foreground">NFTs Owned</p>
                    </div>
                    <p className="text-2xl font-bold">{user.nftsOwned}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex items-center gap-2 text-gold">
                      <TrendingUp className="w-4 h-4" />
                      <p className="text-xs text-muted-foreground">Rank</p>
                    </div>
                    <p className="text-2xl font-bold">#{user.rank}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex items-center gap-2 text-orange-500">
                      <BarChart3 className="w-4 h-4" />
                      <p className="text-xs text-muted-foreground">Streak</p>
                    </div>
                    <p className="text-2xl font-bold">{user.streak} days</p>
                  </CardContent>
                </Card>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/profile/settings">
                    <Settings className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Bio */}
            {user.bio && (
              <div className="mt-6 max-w-2xl">
                <p className="text-muted-foreground leading-relaxed">{user.bio}</p>
              </div>
            )}
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-3xl grid-cols-4">
                <TabsTrigger value="collection">Collection</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              {/* Collection Tab */}
              <TabsContent value="collection" className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">My Collection</h2>
                    <p className="text-muted-foreground">{collection.length} NFTs</p>
                  </div>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Export All
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {collection.map((nft) => (
                    <NFTCard key={nft.id} {...nft} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="mt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">NFT Tokens & Certificates</h2>
                    <p className="text-muted-foreground">Your verified carbon offset certificates</p>
                  </div>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Download className="w-4 h-4" />
                    Download All
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {nftTokens.map((token) => (
                    <NFTTokenCard key={token.id} {...token} />
                  ))}
                </div>

                <Card className="border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-teal-500/5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">About Your Certificates</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Each certificate is a verifiable proof of your carbon offset contribution. You can download
                          them as PDF files to share with others or use for CSR reporting. All certificates include your
                          unique token ID, project details, and verification stamps from Verra and Gold Standard.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="mt-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Achievements</h2>
                  <p className="text-muted-foreground">Badges earned through your climate action journey</p>
                </div>

                {/* Earned Badges */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Earned Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    <AchievementBadge type="first-purchase" earned />
                    <AchievementBadge type="streak" earned />
                    <AchievementBadge type="top-contributor" earned />
                    <AchievementBadge type="eco-warrior" earned />
                    <AchievementBadge type="rare-collector" earned />
                    <AchievementBadge type="verified" earned />
                  </div>
                </div>

                {/* Locked Badges */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Locked Badges</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                    <AchievementBadge type="first-purchase" earned={false} />
                    <AchievementBadge type="streak" earned={false} />
                  </div>
                </div>

                {/* Milestones */}
                <Card>
                  <CardHeader>
                    <CardTitle>Milestones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Offset 2000kg CO₂</span>
                        <span className="text-sm text-muted-foreground">{user.totalOffset}/2000kg</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(user.totalOffset / 2000) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Collect 25 NFTs</span>
                        <span className="text-sm text-muted-foreground">{user.nftsOwned}/25</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(user.nftsOwned / 25) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">30 Day Streak</span>
                        <span className="text-sm text-muted-foreground">{user.streak}/30 days</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(user.streak / 30) * 100}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity" className="mt-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Recent Activity</h2>
                  <p className="text-muted-foreground">Your carbon offset journey timeline</p>
                </div>

                <div className="space-y-4">
                  {activities.map((activity) => (
                    <Card key={activity.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            {activity.type === "purchase" && <Leaf className="w-5 h-5 text-primary" />}
                            {activity.type === "achievement" && <Award className="w-5 h-5 text-gold" />}
                            {activity.type === "milestone" && <TrendingUp className="w-5 h-5 text-success" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="font-semibold">{activity.title}</p>
                                {activity.offset && (
                                  <Badge variant="secondary" className="mt-2">
                                    {activity.offset}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground whitespace-nowrap">{activity.date}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button variant="outline">Load More Activity</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Impact Summary */}
        <section className="py-12 bg-muted/30 border-t border-border/40">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Your Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Equivalent to</p>
                    <p className="text-3xl font-bold text-primary">625</p>
                    <p className="text-sm">Trees planted</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Same as removing</p>
                    <p className="text-3xl font-bold text-primary">3.2</p>
                    <p className="text-sm">Cars from the road for a year</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Equivalent to</p>
                    <p className="text-3xl font-bold text-primary">5,420</p>
                    <p className="text-sm">Miles not driven</p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="gap-2" asChild>
                    <Link href="/impact">
                      <BarChart3 className="w-4 h-4" />
                      View Full Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <ExternalLink className="w-4 h-4" />
                    Share Impact
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
