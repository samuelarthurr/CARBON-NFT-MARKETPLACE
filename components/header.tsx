"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, Menu, Leaf, Calculator, User, LogOut, Settings } from 'lucide-react'
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { MockAuth, type MockUser } from "@/lib/mock-auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [user, setUser] = useState<MockUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = () => {
      const currentUser = MockAuth.getCurrentUser()
      setUser(currentUser)
      setIsLoading(false)
    }

    checkUser()

    const interval = setInterval(checkUser, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      router.push(`/marketplace?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
    }
  }

  const handleLogout = () => {
    MockAuth.logout()
    setUser(null)
    router.push("/")
    router.refresh()
  }

  const getUserInitials = () => {
    if (!user?.fullName) return "U"
    const names = user.fullName.split(" ")
    return names.length > 1 ? `${names[0][0]}${names[1][0]}` : names[0][0]
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

            {!isLoading && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.fullName} />
                          <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            {getUserInitials()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{user.fullName}</p>
                          <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/profile/settings" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="hidden sm:flex items-center gap-2">
                    <Link href="/auth/login">
                      <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/auth/sign-up">
                      <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}

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

              {!isLoading && (
                <>
                  {user ? (
                    <>
                      <Link href="/profile">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">My Profile</Button>
                      </Link>
                      <Button onClick={handleLogout} variant="outline" className="w-full text-red-600">
                        Log Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login">
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link href="/auth/sign-up">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600">Sign Up</Button>
                      </Link>
                    </>
                  )}
                </>
              )}
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
