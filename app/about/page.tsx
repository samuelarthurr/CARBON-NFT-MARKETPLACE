import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Leaf, Award, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Making Carbon Offsets Accessible to Everyone
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              We're democratizing climate action by connecting individuals and businesses with verified carbon offset
              projects through simple, transparent NFT certificates.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Climate Action Through Technology</h2>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Carbon emissions are rising globally, but individuals and small businesses struggle to participate in
                  carbon credit markets. The current systems are complex, lack transparency, and are dominated by large
                  corporations.
                </p>
                <p className="text-muted-foreground text-pretty">
                  We believe everyone should have a simple, trusted way to contribute to sustainability while getting
                  something of value in return. That's why we created Carbon NFT Marketplace - to make climate action
                  accessible, transparent, and rewarding.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-2">2.5M+</p>
                    <p className="text-sm text-muted-foreground">Trees Planted</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-2">15K+</p>
                    <p className="text-sm text-muted-foreground">Tonnes CO₂ Offset</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-2">8,500+</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-2">45+</p>
                    <p className="text-sm text-muted-foreground">Verified Projects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                We're not just another carbon offset platform. We're building something better for Malaysia and
                Southeast Asia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Localized for ASEAN</h3>
                  <p className="text-muted-foreground text-pretty">
                    Focus on Malaysia and Southeast Asian projects - mangrove planting in Sabah, palm waste bioenergy,
                    renewable projects under Bursa Carbon Exchange.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Simple & Accessible</h3>
                  <p className="text-muted-foreground text-pretty">
                    No crypto wallets or technical knowledge required. Accept Touch 'n Go, FPX, and credit cards. Anyone
                    can participate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Relatable Units</h3>
                  <p className="text-muted-foreground text-pretty">
                    Instead of complex "tonnes of CO₂", we use simple terms: "1 tree planted", "10kg CO₂ offset". Easy
                    to understand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Verified & Trusted</h3>
                  <p className="text-muted-foreground text-pretty">
                    Every project is verified by Verra, Gold Standard, or Bursa Carbon Exchange. Full transparency on
                    where your money goes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Gamified Experience</h3>
                  <p className="text-muted-foreground text-pretty">
                    Collect NFTs like badges, join leaderboards, earn achievements. Make climate action engaging and
                    rewarding.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Corporate Solutions</h3>
                  <p className="text-muted-foreground text-pretty">
                    Local SMEs can buy bulk NFTs for CSR reporting. Simple, affordable carbon offsetting for businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-muted-foreground text-pretty">
                  Every transaction is traceable. Every project is verified. You always know where your money goes and
                  the impact it creates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-muted-foreground text-pretty">
                  Climate action shouldn't be complicated or exclusive. We make it simple enough for anyone to
                  participate and make a difference.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real Impact</h3>
                <p className="text-muted-foreground text-pretty">
                  We only partner with verified projects that create measurable, real-world environmental impact. No
                  greenwashing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Users */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Individuals</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Gen Z and Millennials who are eco-conscious and want to make a tangible difference. Collect NFTs,
                    track your impact, and showcase your climate action.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Students
                    </span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Professionals
                    </span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Eco-Warriors
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Small Businesses</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    SMEs that want affordable, transparent carbon offsets for their operations. Simple CSR reporting and
                    sustainability credentials.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Startups
                    </span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Local SMEs
                    </span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      E-commerce
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Organizations</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    CSR-focused organizations looking for verified, impactful carbon offset programs. Bulk purchasing
                    and detailed reporting available.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Corporations
                    </span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">NGOs</span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Universities
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Join the Climate Action Movement</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Be part of a community making real environmental impact. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Learn More
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
