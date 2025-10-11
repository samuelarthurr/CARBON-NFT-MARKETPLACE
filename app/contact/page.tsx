import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Get in Touch</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Have questions about Carbon NFTs? Want to partner with us? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out through any of these channels</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">support@carbonnft.com</p>
                      <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+60 3-1234 5678</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm MYT</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Office</h3>
                      <p className="text-muted-foreground">Kuala Lumpur, Malaysia</p>
                      <p className="text-muted-foreground text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>

                {/* Business Inquiries */}
                <div className="p-6 rounded-xl border border-border bg-card space-y-4">
                  <h3 className="text-lg font-semibold">Business Inquiries</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For partnership opportunities, corporate CSR programs, or project submissions, please email us at{" "}
                    <span className="text-primary font-medium">partnerships@carbonnft.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
