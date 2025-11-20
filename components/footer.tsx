import Link from "next/link"
import { Leaf, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span>Carbon NFT</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making carbon offsets accessible, verifiable, and collectible for everyone.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Marketplace */}
          <div className="space-y-4">
            <h3 className="font-semibold">Marketplace</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/marketplace" className="hover:text-primary transition-colors">
                  Browse NFTs
                </Link>
              </li>
              <li>
                <Link href="/marketplace?type=trees" className="hover:text-primary transition-colors">
                  Tree Planting
                </Link>
              </li>
              <li>
                <Link href="/marketplace?type=solar" className="hover:text-primary transition-colors">
                  Solar Energy
                </Link>
              </li>
              <li>
                <Link href="/marketplace?type=mangrove" className="hover:text-primary transition-colors">
                  Mangrove Restoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/verification" className="hover:text-primary transition-colors">
                  Verification
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Carbon NFT Marketplace. All rights reserved.</p>
          <p>
            Verified by <span className="text-primary font-medium">Verra</span> &{" "}
            <span className="text-primary font-medium">Gold Standard</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
