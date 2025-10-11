import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { NFTCard } from "@/components/nft-card"
import { ArrowRight, Leaf, Shield, TrendingUp, CheckCircle2, Calculator } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  // Mock featured NFTs
  const featuredNFTs = [
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
          <div className="absolute inset-0 bg-[url('/abstract-nature-pattern.png')] opacity-5 bg-cover bg-center" />

          <div className="container mx-auto px-4 py-24 md:py-32 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Announcement Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm">
                <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-balance">Verified by Verra & Gold Standard</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Turn meaningful{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  climate action
                </span>{" "}
                into collectible NFTs
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Buy NFTs linked to verified carbon projects — fund real impact, earn digital badges, and showcase your
                contribution to a sustainable future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  asChild
                >
                  <Link href="/marketplace">
                    Offset Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base gap-2 bg-transparent border-emerald-600/20 hover:bg-emerald-500/10"
                  asChild
                >
                  <Link href="/calculator">
                    <Calculator className="w-5 h-5" />
                    Calculate Footprint
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    12.5k
                  </p>
                  <p className="text-sm text-muted-foreground">Tons CO₂ Offset</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    8,234
                  </p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    156
                  </p>
                  <p className="text-sm text-muted-foreground">Verified Projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured NFTs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Carbon NFTs</h2>
                <p className="text-muted-foreground text-pretty">Verified projects making real environmental impact</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:inline-flex bg-transparent">
                <Link href="/marketplace">View All</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredNFTs.map((nft) => (
                <NFTCard key={nft.id} {...nft} />
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="/marketplace">View All NFTs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Simple, Transparent, Impactful</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Three easy steps to start your carbon offset journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="relative space-y-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Browse Projects</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore verified carbon offset projects from tree planting to renewable energy initiatives across
                    Malaysia and ASEAN.
                  </p>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative space-y-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Purchase NFT</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buy your chosen NFT using simple payment methods. Your funds directly support verified environmental
                    projects.
                  </p>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative space-y-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Track Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collect badges, climb leaderboards, and showcase your environmental contribution with verifiable
                    digital certificates.
                  </p>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Verified & Trusted</h2>
                <p className="text-muted-foreground text-lg text-pretty">
                  Every project is certified by leading carbon verification bodies
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Verra Certified</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All projects verified by Verra, the world's leading carbon credit certification program.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Gold Standard</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Projects meet Gold Standard requirements ensuring real, measurable climate impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Transparent Tracking</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Real-time dashboard showing exactly where your funds go and the impact created.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Local Projects</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Support environmental initiatives in Malaysia and ASEAN, creating regional impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to make an impact?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Join thousands of climate-conscious individuals and businesses offsetting their carbon footprint through
                verified projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  asChild
                >
                  <Link href="/marketplace">
                    Start Offsetting
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-emerald-600/20 hover:bg-emerald-500/10"
                  asChild
                >
                  <Link href="/calculator">
                    <Calculator className="w-4 h-4" />
                    Calculate My Footprint
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
