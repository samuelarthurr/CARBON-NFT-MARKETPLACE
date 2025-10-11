"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NFTCard } from "@/components/nft-card"
import { FilterSidebar, type FilterState } from "@/components/filter-sidebar"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Grid3x3, LayoutGrid } from "lucide-react"

interface NFT {
  id: string
  title: string
  image: string
  projectType: string
  offsetAmount: string
  price: number
  verified: boolean
  rare?: boolean
  supply: number
  remaining: number
  region: string
  verification: string
  rarity: string
  createdAt: Date
  trending?: boolean
}

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [filters, setFilters] = useState<FilterState>({
    projectTypes: [],
    verifications: [],
    regions: [],
    priceRange: [0, 500],
    offsetAmounts: [],
    rarities: [],
  })

  const allNfts: NFT[] = [
    {
      id: "1",
      title: "Sabah Mangrove Restoration Project",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Mangrove Restoration",
      offsetAmount: "50kg CO₂",
      price: 75,
      verified: true,
      rare: true,
      supply: 100,
      remaining: 23,
      region: "Sabah",
      verification: "verra",
      rarity: "rare",
      createdAt: new Date("2025-01-15"),
      trending: true,
    },
    {
      id: "2",
      title: "Peninsular Solar Farm Initiative",
      image: "/solar-panels-renewable-energy-farm.jpg",
      projectType: "Solar Energy",
      offsetAmount: "100kg CO₂",
      price: 120,
      verified: true,
      supply: 200,
      remaining: 156,
      region: "Peninsular",
      verification: "gold",
      rarity: "common",
      createdAt: new Date("2025-01-10"),
    },
    {
      id: "3",
      title: "Borneo Rainforest Tree Planting",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "25kg CO₂",
      price: 50,
      verified: true,
      supply: 500,
      remaining: 342,
      region: "Sarawak",
      verification: "bursa",
      rarity: "common",
      createdAt: new Date("2025-01-20"),
      trending: true,
    },
    {
      id: "4",
      title: "East Coast Wind Energy Project",
      image: "/wind-turbines-renewable-energy.jpg",
      projectType: "Wind Energy",
      offsetAmount: "75kg CO₂",
      price: 95,
      verified: true,
      rare: true,
      supply: 150,
      remaining: 89,
      region: "East Coast",
      verification: "verra",
      rarity: "rare",
      createdAt: new Date("2025-01-05"),
    },
    {
      id: "5",
      title: "Sarawak Peat Swamp Conservation",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Conservation",
      offsetAmount: "60kg CO₂",
      price: 85,
      verified: true,
      supply: 120,
      remaining: 67,
      region: "Sarawak",
      verification: "gold",
      rarity: "common",
      createdAt: new Date("2025-01-12"),
    },
    {
      id: "6",
      title: "Urban Solar Rooftop Program",
      image: "/solar-panels-renewable-energy-farm.jpg",
      projectType: "Solar Energy",
      offsetAmount: "40kg CO₂",
      price: 65,
      verified: true,
      supply: 300,
      remaining: 234,
      region: "Peninsular",
      verification: "bursa",
      rarity: "common",
      createdAt: new Date("2025-01-18"),
      trending: true,
    },
    {
      id: "7",
      title: "Highland Reforestation Initiative",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "35kg CO₂",
      price: 55,
      verified: true,
      supply: 400,
      remaining: 289,
      region: "Peninsular",
      verification: "verra",
      rarity: "common",
      createdAt: new Date("2025-01-22"),
    },
    {
      id: "8",
      title: "Offshore Wind Farm Development",
      image: "/wind-turbines-renewable-energy.jpg",
      projectType: "Wind Energy",
      offsetAmount: "120kg CO₂",
      price: 150,
      verified: true,
      rare: true,
      supply: 80,
      remaining: 12,
      region: "East Coast",
      verification: "gold",
      rarity: "legendary",
      createdAt: new Date("2025-01-08"),
      trending: true,
    },
    {
      id: "9",
      title: "Coastal Mangrove Expansion",
      image: "/mangrove-forest-coastal-restoration.jpg",
      projectType: "Mangrove Restoration",
      offsetAmount: "55kg CO₂",
      price: 80,
      verified: true,
      supply: 150,
      remaining: 98,
      region: "Sabah",
      verification: "bursa",
      rarity: "common",
      createdAt: new Date("2025-01-14"),
    },
    {
      id: "10",
      title: "Community Solar Gardens",
      image: "/solar-panels-renewable-energy-farm.jpg",
      projectType: "Solar Energy",
      offsetAmount: "45kg CO₂",
      price: 70,
      verified: true,
      supply: 250,
      remaining: 187,
      region: "Peninsular",
      verification: "verra",
      rarity: "common",
      createdAt: new Date("2025-01-16"),
    },
    {
      id: "11",
      title: "Tropical Forest Restoration",
      image: "/tropical-rainforest-trees-planting.jpg",
      projectType: "Reforestation",
      offsetAmount: "30kg CO₂",
      price: 48,
      verified: true,
      supply: 600,
      remaining: 456,
      region: "Sarawak",
      verification: "gold",
      rarity: "common",
      createdAt: new Date("2025-01-25"),
    },
    {
      id: "12",
      title: "Mountain Wind Power Station",
      image: "/wind-turbines-renewable-energy.jpg",
      projectType: "Wind Energy",
      offsetAmount: "90kg CO₂",
      price: 110,
      verified: true,
      supply: 100,
      remaining: 45,
      region: "East Coast",
      verification: "bursa",
      rarity: "rare",
      createdAt: new Date("2025-01-11"),
    },
  ]

  const filteredAndSortedNfts = useMemo(() => {
    let result = [...allNfts]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (nft) =>
          nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          nft.projectType.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply project type filter
    if (filters.projectTypes.length > 0) {
      result = result.filter((nft) => filters.projectTypes.includes(nft.projectType))
    }

    // Apply verification filter
    if (filters.verifications.length > 0) {
      result = result.filter((nft) => filters.verifications.includes(nft.verification))
    }

    // Apply region filter
    if (filters.regions.length > 0) {
      result = result.filter((nft) => filters.regions.includes(nft.region))
    }

    // Apply price range filter
    result = result.filter((nft) => nft.price >= filters.priceRange[0] && nft.price <= filters.priceRange[1])

    // Apply offset amount filter
    if (filters.offsetAmounts.length > 0) {
      result = result.filter((nft) => {
        const offsetValue = Number.parseInt(nft.offsetAmount)
        return filters.offsetAmounts.some((range) => {
          if (range === "small") return offsetValue < 50
          if (range === "medium") return offsetValue >= 50 && offsetValue < 100
          if (range === "large") return offsetValue >= 100
          return false
        })
      })
    }

    // Apply rarity filter
    if (filters.rarities.length > 0) {
      result = result.filter((nft) => filters.rarities.includes(nft.rarity))
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
      case "oldest":
        result.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        break
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "offset-high":
        result.sort((a, b) => Number.parseInt(b.offsetAmount) - Number.parseInt(a.offsetAmount))
        break
      case "trending":
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0))
        break
      case "ending":
        result.sort((a, b) => a.remaining - b.remaining)
        break
    }

    return result
  }, [filters, sortBy, searchQuery])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="container mx-auto px-4 py-8 space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-balance">Carbon NFT Marketplace</h1>
              <p className="text-muted-foreground text-lg text-pretty">
                Browse verified carbon offset projects and start your climate action journey
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <SearchBar onSearch={setSearchQuery} />
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto gap-2 lg:hidden bg-transparent">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <FilterSidebar
                    isMobile
                    onClose={() => setIsFilterOpen(false)}
                    filters={filters}
                    onFilterChange={setFilters}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              {/* Desktop Sidebar */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <FilterSidebar filters={filters} onFilterChange={setFilters} />
                </div>
              </aside>

              {/* NFT Grid */}
              <div className="flex-1 space-y-6">
                {/* Toolbar */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/40">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredAndSortedNfts.length}</span> NFTs available
                  </p>

                  <div className="flex items-center gap-3">
                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="offset-high">Most Offset</SelectItem>
                        <SelectItem value="trending">Trending</SelectItem>
                        <SelectItem value="ending">Ending Soon</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* View Mode Toggle */}
                    <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
                      <Button
                        variant={viewMode === "grid" ? "secondary" : "ghost"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("grid")}
                      >
                        <LayoutGrid className="w-4 h-4" />
                      </Button>
                      <Button
                        variant={viewMode === "compact" ? "secondary" : "ghost"}
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setViewMode("compact")}
                      >
                        <Grid3x3 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* NFT Grid */}
                {filteredAndSortedNfts.length > 0 ? (
                  <div
                    className={
                      viewMode === "grid"
                        ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    }
                  >
                    {filteredAndSortedNfts.map((nft) => (
                      <NFTCard key={nft.id} {...nft} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No NFTs found matching your filters.</p>
                    <Button
                      variant="outline"
                      className="mt-4 bg-transparent"
                      onClick={() =>
                        setFilters({
                          projectTypes: [],
                          verifications: [],
                          regions: [],
                          priceRange: [0, 500],
                          offsetAmounts: [],
                          rarities: [],
                        })
                      }
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {/* Load More */}
                {filteredAndSortedNfts.length > 0 && (
                  <div className="flex justify-center pt-8">
                    <Button variant="outline" size="lg">
                      Load More NFTs
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
