import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2025</p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Purchase history and carbon offset records</li>
                <li>Profile information and preferences</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process your purchases and maintain your account</li>
                <li>Send you transaction confirmations and carbon offset certificates</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our platform and develop new features</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Carbon offset project partners (to fulfill your purchases)</li>
                <li>Payment processors (to complete transactions)</li>
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
                is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to improve your experience on our platform, analyze
                usage patterns, and deliver personalized content. You can control cookie preferences through your
                browser settings.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review their privacy policies.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our platform is not intended for users under 18 years of age. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than Malaysia. We ensure
                appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>

              <h2>10. Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
                <a href="mailto:privacy@carbonnft.com">privacy@carbonnft.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
