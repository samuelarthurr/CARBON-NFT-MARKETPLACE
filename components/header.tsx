"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Menu, Leaf, Calculator } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/marketplace?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="hidden sm:inline bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Carbon NFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link
              href="/calculator"
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
            >
              <Calculator className="w-4 h-4" />
              Calculator
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/impact" className="text-sm font-medium hover:text-primary transition-colors">
              Impact
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex" onClick={() => setIsSearchOpen(true)}>
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Link href="/profile">
              <Button className="hidden sm:inline-flex bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                My Profile
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
            <nav className="container mx-auto flex flex-col gap-4 p-4">
              <Link href="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
                Marketplace
              </Link>
              <Link
                href="/calculator"
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Calculator
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/impact" className="text-sm font-medium hover:text-primary transition-colors">
                Impact
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/profile">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">My Profile</Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Search Carbon NFTs</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              placeholder="Search by project name, type, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-lg"
              autoFocus
            />
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Search
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsSearchOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-[80%] space-y-4">
            <ShoppingCart className="w-16 h-16 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button onClick={() => setIsCartOpen(false)}>
              <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
