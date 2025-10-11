import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Everything you need to know about Carbon NFTs and our platform
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">What is a Carbon NFT?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    A Carbon NFT is a digital certificate that represents a verified carbon offset. When you purchase a
                    Carbon NFT, you're funding real-world climate projects like tree planting, solar energy, or mangrove
                    restoration. The NFT serves as proof of your contribution and the amount of CO₂ you've offset.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I purchase a Carbon NFT?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Simply browse our marketplace, select a project you'd like to support, and complete the purchase
                    using your preferred payment method (credit card, e-wallet, or online banking). No cryptocurrency or
                    technical knowledge required!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Are the carbon offsets verified?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Yes! Every project on our platform is verified by internationally recognized certification bodies
                    including Verra, Gold Standard, and Bursa Carbon Exchange. We ensure all carbon offsets represent
                    real, measurable environmental impact.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We accept credit/debit cards, Malaysian e-wallets (Touch n Go, GrabPay), and online banking via FPX.
                    All transactions are processed securely through our payment partners.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">Where does my money go?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The majority of your payment (typically 85-90%) goes directly to funding the carbon offset project.
                    A small platform fee (5-10%) covers verification, technology infrastructure, and ongoing monitoring
                    to ensure project success.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I trade or sell my Carbon NFTs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Currently, Carbon NFTs are designed as certificates of your environmental contribution rather than
                    tradeable assets. However, you can showcase them in your collection and share your impact on social
                    media.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I track my environmental impact?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Your profile dashboard shows your total carbon offset, equivalent trees planted, and your ranking on
                    our leaderboard. You can also download impact reports to share with your organization or for CSR
                    documentation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can businesses use this for CSR reporting?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Many businesses use our platform for their Corporate Social Responsibility initiatives. We provide
                    detailed reports and certificates that can be used in sustainability reporting and ESG
                    documentation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What makes you different from other carbon offset platforms?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    We focus on Southeast Asian projects, accept local payment methods, use simple language instead of
                    technical jargon, and gamify the experience with badges and leaderboards. No cryptocurrency
                    knowledge required!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">How do I contact support?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    You can reach our support team through the Contact page, or email us directly at
                    support@carbonnft.com. We typically respond within 24 hours.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Still have questions */}
              <div className="mt-12 p-8 rounded-xl border border-border bg-card text-center space-y-4">
                <h3 className="text-2xl font-bold">Still have questions?</h3>
                <p className="text-muted-foreground">Our team is here to help you get started with carbon offsetting</p>
                <Link href="/contact">
                  <Button size="lg">Contact Support</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
