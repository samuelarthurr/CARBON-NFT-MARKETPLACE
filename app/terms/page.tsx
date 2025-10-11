import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Carbon NFT Marketplace platform, you accept and agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>

              <h2>2. Platform Description</h2>
              <p>
                Carbon NFT Marketplace is a platform that connects users with verified carbon offset projects. When you
                purchase a Carbon NFT, you are funding real-world environmental projects and receiving a digital
                certificate representing your carbon offset contribution.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activities that occur under your account. You agree to notify us immediately of any unauthorized use of
                your account.
              </p>

              <h2>4. Purchases and Payments</h2>
              <p>
                All purchases are final and non-refundable unless otherwise stated. Prices are displayed in Malaysian
                Ringgit (RM) and include all applicable fees. We accept credit cards, e-wallets, and online banking
                payments.
              </p>

              <h2>5. Carbon Offset Verification</h2>
              <p>
                All carbon offset projects listed on our platform are verified by recognized certification bodies
                including Verra, Gold Standard, and Bursa Carbon Exchange. We make reasonable efforts to ensure the
                accuracy of project information but cannot guarantee specific environmental outcomes.
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                The Carbon NFT Marketplace platform, including all content, features, and functionality, is owned by us
                and protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2>7. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the platform for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the platform</li>
                <li>Misrepresent your carbon offset contributions</li>
              </ul>

              <h2>8. Limitation of Liability</h2>
              <p>
                We are not liable for any indirect, incidental, special, consequential, or punitive damages resulting
                from your use of the platform or any carbon offset projects.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via
                email or platform notification. Continued use of the platform after changes constitutes acceptance of
                the new terms.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These terms are governed by the laws of Malaysia. Any disputes shall be resolved in the courts of Kuala
                Lumpur, Malaysia.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@carbonnft.com">legal@carbonnft.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
