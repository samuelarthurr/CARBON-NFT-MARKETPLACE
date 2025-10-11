import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Handshake, Building2, Leaf, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Partners</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Working together with leading organizations to create verified, impactful carbon offset projects across
                Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Project Partners */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Project Partners</h2>
                  <p className="text-muted-foreground text-lg">
                    Organizations implementing verified carbon offset projects
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      name: "Sabah Forestry Department",
                      type: "Government Agency",
                      description: "Leading mangrove restoration and rainforest conservation projects in Sabah.",
                    },
                    {
                      name: "Malaysian Green Technology",
                      type: "NGO",
                      description: "Implementing solar energy projects across Peninsular Malaysia.",
                    },
                    {
                      name: "Sarawak Biodiversity Centre",
                      type: "Research Institute",
                      description: "Peat swamp conservation and reforestation initiatives in Sarawak.",
                    },
                    {
                      name: "ASEAN Renewable Energy",
                      type: "Private Sector",
                      description: "Wind and solar farm development across Southeast Asia.",
                    },
                  ].map((partner) => (
                    <div key={partner.name} className="p-6 rounded-xl border border-border bg-card space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{partner.name}</h3>
                        <p className="text-sm text-primary">{partner.type}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Partners */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Technology Partners</h2>
                  <p className="text-muted-foreground text-lg">Powering our platform with cutting-edge technology</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Blockchain Verification",
                      description: "Ensuring transparent and immutable carbon credit records.",
                    },
                    {
                      name: "Payment Gateway",
                      description: "Secure local payment processing with Touch n Go and FPX.",
                    },
                    {
                      name: "Data Analytics",
                      description: "Real-time impact tracking and reporting infrastructure.",
                    },
                  ].map((partner) => (
                    <div key={partner.name} className="p-6 rounded-xl border border-border bg-card space-y-3">
                      <h3 className="text-lg font-semibold">{partner.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Partners */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Corporate Partners</h2>
                  <p className="text-muted-foreground text-lg">Companies committed to carbon neutrality</p>
                </div>

                <div className="p-8 rounded-xl border border-border bg-card text-center space-y-4">
                  <p className="text-muted-foreground text-lg">
                    Join leading Malaysian and ASEAN companies in their journey to carbon neutrality
                  </p>
                  <Button size="lg">Become a Corporate Partner</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Want to Partner With Us?</h2>
              <p className="text-xl text-muted-foreground">
                Whether you're implementing carbon offset projects or looking for CSR solutions, we'd love to work
                together.
              </p>
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8">
                  Get in Touch
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
