import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Leaf, Award, Share2, Search, CreditCard, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">How Carbon NFTs Work</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              A simple, transparent way to offset your carbon footprint and contribute to verified climate projects
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">STEP 1</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Browse Verified Projects</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Explore our marketplace of carbon offset projects. Each project is verified by trusted organizations
                    like Verra, Gold Standard, and Bursa Carbon Exchange. Choose from tree planting, renewable energy,
                    mangrove restoration, and more.
                  </p>
                  <Link href="/marketplace">
                    <Button variant="outline">Explore Marketplace</Button>
                  </Link>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">STEP 2</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Purchase Your NFT</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Buy carbon offset NFTs using familiar payment methods - credit cards, Touch 'n Go, FPX, or online
                    banking. No crypto wallet needed. Each NFT represents a specific amount of carbon offset (e.g., 1
                    tree planted, 10kg CO₂ offset).
                  </p>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium mb-1">Transparent Pricing</p>
                          <p className="text-muted-foreground text-pretty">
                            85% goes directly to the climate project, 10% platform fee, 5% payment processing
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">STEP 3</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Funds Support Real Projects</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Your purchase directly funds verified carbon offset projects across Malaysia and Southeast Asia.
                    Projects include mangrove planting in Sabah, solar installations, rainforest protection, and
                    renewable energy initiatives.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="text-2xl font-bold text-primary mb-1">2.5M+</p>
                        <p className="text-sm text-muted-foreground">Trees Planted</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <p className="text-2xl font-bold text-primary mb-1">15K+</p>
                        <p className="text-sm text-muted-foreground">Tonnes CO₂ Offset</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">STEP 4</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Receive Your Digital Certificate</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Your NFT serves as a permanent, verifiable certificate of your climate contribution. It's stored in
                    your profile and can be viewed, collected, or showcased. Each NFT includes detailed information
                    about the project, verification status, and environmental impact.
                  </p>
                  <Link href="/profile">
                    <Button variant="outline">View Your Collection</Button>
                  </Link>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Share2 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-primary">STEP 5</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Track & Share Your Impact</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Monitor your total carbon offset, earn achievement badges, climb the leaderboard, and share your
                    climate action on social media. Your dashboard translates offsets into relatable metrics like trees
                    planted and cars removed from the road.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Earn Badges
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Join Leaderboard
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Share Progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Carbon NFTs Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Carbon NFTs?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Verified & Transparent</h3>
                  <p className="text-muted-foreground text-pretty">
                    Every project is verified by trusted organizations. Track exactly where your money goes and the
                    real-world impact it creates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Simple & Accessible</h3>
                  <p className="text-muted-foreground text-pretty">
                    No crypto knowledge required. Use familiar payment methods like credit cards and e-wallets to make a
                    difference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Local Impact</h3>
                  <p className="text-muted-foreground text-pretty">
                    Support climate projects in Malaysia and Southeast Asia. From mangrove restoration to solar energy,
                    make a local difference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Make an Impact?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Start your climate action journey today. Browse verified projects and offset your carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace">
                <Button size="lg" className="w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Browse Marketplace
                </Button>
              </Link>
              <Link href="/impact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Global Impact
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
