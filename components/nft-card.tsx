"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BadgeChip } from "@/components/badge-chip"
import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface NFTCardProps {
  id: string
  title: string
  image: string
  projectType: string
  offsetAmount: string
  price: number
  verified: boolean
  rare?: boolean
  supply?: number
  remaining?: number
}

export function NFTCard({
  id,
  title,
  image,
  projectType,
  offsetAmount,
  price,
  verified,
  rare,
  supply,
  remaining,
}: NFTCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "border-border/50 hover:border-primary/50",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/nft/${id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered && "scale-110")}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {verified && <BadgeChip variant="verified">Verified</BadgeChip>}
            {rare && <BadgeChip variant="rare">Rare</BadgeChip>}
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsFavorited(!isFavorited)
            }}
            className={cn(
              "absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur",
              "flex items-center justify-center transition-all duration-200",
              "hover:bg-background hover:scale-110",
            )}
          >
            <Heart
              className={cn("w-4 h-4 transition-colors", isFavorited ? "fill-red-500 text-red-500" : "text-foreground")}
            />
          </button>

          {/* Quick View Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-background/90 backdrop-blur-sm",
              "flex items-center justify-center transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <Button size="sm" className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Quick Buy
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{projectType}</p>
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">{title}</h3>
        </div>

        <div className="flex items-center justify-between">
          <BadgeChip variant="offset">{offsetAmount}</BadgeChip>
          {supply && remaining && (
            <p className="text-xs text-muted-foreground">
              {remaining}/{supply} left
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Price</p>
          <p className="text-xl font-bold">RM{price}</p>
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link href={`/nft/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
