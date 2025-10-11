"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Leaf, Shield } from "lucide-react"
import Image from "next/image"

interface NFTTokenCardProps {
  id: string
  title: string
  image: string
  projectType: string
  offsetAmount: string
  purchaseDate: string
  tokenId: string
  verified: boolean
}

export function NFTTokenCard({
  id,
  title,
  image,
  projectType,
  offsetAmount,
  purchaseDate,
  tokenId,
  verified,
}: NFTTokenCardProps) {
  const handleDownload = () => {
    // Simulate certificate download
    console.log("[v0] Downloading certificate for:", tokenId)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-3 right-3">
          {verified && (
            <Badge className="bg-success text-success-foreground gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </Badge>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-white/90 text-sm">
            <Leaf className="w-4 h-4" />
            <span>{offsetAmount}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Token ID</span>
            <span className="font-mono font-semibold">#{tokenId}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Project Type</span>
            <span className="font-medium">{projectType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Purchase Date</span>
            <span className="font-medium">{purchaseDate}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" onClick={handleDownload}>
            <Download className="w-4 h-4" />
            Certificate
          </Button>
          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
            <ExternalLink className="w-4 h-4" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
