import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Shield, FileCheck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VerificationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Verification Standards</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Every carbon offset project on our platform is verified by internationally recognized certification
                bodies to ensure authenticity and real-world impact.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Partners */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Our Verification Partners</h2>
                <p className="text-muted-foreground text-lg">
                  We work with the world's leading carbon credit certification standards
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Verra",
                    icon: CheckCircle2,
                    description:
                      "The world's leading voluntary carbon market program, ensuring projects meet rigorous standards for carbon reduction.",
                  },
                  {
                    name: "Gold Standard",
                    icon: Award,
                    description:
                      "Certifies projects that reduce carbon emissions and contribute to sustainable development goals.",
                  },
                  {
                    name: "Bursa Carbon Exchange",
                    icon: FileCheck,
                    description:
                      "Malaysia's official carbon exchange platform, providing local verification and trading infrastructure.",
                  },
                ].map((partner) => (
                  <div key={partner.name} className="p-6 rounded-xl border border-border bg-card space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <partner.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Our Verification Process</h2>
                <p className="text-muted-foreground text-lg">How we ensure every project meets our standards</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Project Submission",
                    description:
                      "Carbon offset projects submit detailed documentation including methodology, location, and expected impact.",
                  },
                  {
                    step: "2",
                    title: "Third-Party Audit",
                    description:
                      "Independent auditors from Verra, Gold Standard, or Bursa Carbon Exchange review all documentation.",
                  },
                  {
                    step: "3",
                    title: "On-Site Verification",
                    description:
                      "Physical site visits confirm project implementation and measure actual carbon reduction.",
                  },
                  {
                    step: "4",
                    title: "Certification & Monitoring",
                    description:
                      "Approved projects receive certification and undergo continuous monitoring to ensure ongoing compliance.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 p-6 rounded-xl border border-border bg-card">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Trust in Every Transaction</h2>
              <p className="text-xl text-muted-foreground">
                Browse verified carbon offset projects and start making a real impact today
              </p>
              <Link href="/marketplace">
                <Button size="lg" className="text-lg px-8">
                  Explore Marketplace
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
