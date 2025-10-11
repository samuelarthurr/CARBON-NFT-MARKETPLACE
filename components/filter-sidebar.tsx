"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"

export interface FilterState {
  projectTypes: string[]
  verifications: string[]
  regions: string[]
  priceRange: [number, number]
  offsetAmounts: string[]
  rarities: string[]
}

interface FilterSidebarProps {
  onClose?: () => void
  isMobile?: boolean
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export function FilterSidebar({ onClose, isMobile, filters, onFilterChange }: FilterSidebarProps) {
  const handleCheckboxChange = (category: keyof FilterState, value: string, checked: boolean) => {
    const currentValues = filters[category] as string[]
    const newValues = checked ? [...currentValues, value] : currentValues.filter((v) => v !== value)
    onFilterChange({ ...filters, [category]: newValues })
  }

  const handlePriceRangeChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] })
  }

  const handleClearAll = () => {
    onFilterChange({
      projectTypes: [],
      verifications: [],
      regions: [],
      priceRange: [0, 500],
      offsetAmounts: [],
      rarities: [],
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      {isMobile && (
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* Project Type */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Project Type</h3>
        <div className="space-y-2">
          {[
            { id: "Reforestation", label: "Tree Planting", count: 234 },
            { id: "Solar Energy", label: "Solar Energy", count: 156 },
            { id: "Mangrove Restoration", label: "Mangrove Restoration", count: 89 },
            { id: "Wind Energy", label: "Wind Energy", count: 67 },
            { id: "Conservation", label: "Conservation", count: 45 },
          ].map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={filters.projectTypes.includes(type.id)}
                onCheckedChange={(checked) => handleCheckboxChange("projectTypes", type.id, checked as boolean)}
              />
              <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer flex-1">
                {type.label}
              </Label>
              <span className="text-xs text-muted-foreground">{type.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Status */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="font-semibold text-sm">Verification</h3>
        <div className="space-y-2">
          {[
            { id: "verra", label: "Verra Certified", count: 412 },
            { id: "gold", label: "Gold Standard", count: 298 },
            { id: "bursa", label: "Bursa Carbon", count: 156 },
          ].map((cert) => (
            <div key={cert.id} className="flex items-center space-x-2">
              <Checkbox
                id={cert.id}
                checked={filters.verifications.includes(cert.id)}
                onCheckedChange={(checked) => handleCheckboxChange("verifications", cert.id, checked as boolean)}
              />
              <Label htmlFor={cert.id} className="text-sm font-normal cursor-pointer flex-1">
                {cert.label}
              </Label>
              <span className="text-xs text-muted-foreground">{cert.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Region */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="font-semibold text-sm">Region</h3>
        <div className="space-y-2">
          {[
            { id: "Sabah", label: "Sabah", count: 234 },
            { id: "Sarawak", label: "Sarawak", count: 189 },
            { id: "Peninsular", label: "Peninsular Malaysia", count: 145 },
            { id: "East Coast", label: "East Coast", count: 78 },
          ].map((region) => (
            <div key={region.id} className="flex items-center space-x-2">
              <Checkbox
                id={region.id}
                checked={filters.regions.includes(region.id)}
                onCheckedChange={(checked) => handleCheckboxChange("regions", region.id, checked as boolean)}
              />
              <Label htmlFor={region.id} className="text-sm font-normal cursor-pointer flex-1">
                {region.label}
              </Label>
              <span className="text-xs text-muted-foreground">{region.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="font-semibold text-sm">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={500}
            step={10}
            className="w-full"
            aria-label="Price range"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">RM{filters.priceRange[0]}</span>
            <span className="text-muted-foreground">RM{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Offset Amount */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="font-semibold text-sm">Offset Amount</h3>
        <div className="space-y-2">
          {[
            { id: "small", label: "0-50kg CO₂", count: 312 },
            { id: "medium", label: "50-100kg CO₂", count: 234 },
            { id: "large", label: "100kg+ CO₂", count: 145 },
          ].map((amount) => (
            <div key={amount.id} className="flex items-center space-x-2">
              <Checkbox
                id={amount.id}
                checked={filters.offsetAmounts.includes(amount.id)}
                onCheckedChange={(checked) => handleCheckboxChange("offsetAmounts", amount.id, checked as boolean)}
              />
              <Label htmlFor={amount.id} className="text-sm font-normal cursor-pointer flex-1">
                {amount.label}
              </Label>
              <span className="text-xs text-muted-foreground">{amount.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rarity */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="font-semibold text-sm">Rarity</h3>
        <div className="space-y-2">
          {[
            { id: "common", label: "Common", count: 456 },
            { id: "rare", label: "Rare", count: 123 },
            { id: "legendary", label: "Legendary", count: 34 },
          ].map((rarity) => (
            <div key={rarity.id} className="flex items-center space-x-2">
              <Checkbox
                id={rarity.id}
                checked={filters.rarities.includes(rarity.id)}
                onCheckedChange={(checked) => handleCheckboxChange("rarities", rarity.id, checked as boolean)}
              />
              <Label htmlFor={rarity.id} className="text-sm font-normal cursor-pointer flex-1">
                {rarity.label}
              </Label>
              <span className="text-xs text-muted-foreground">{rarity.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-border space-y-2">
        <Button className="w-full" onClick={onClose}>
          Apply Filters
        </Button>
        <Button variant="outline" className="w-full bg-transparent" onClick={handleClearAll}>
          Clear All
        </Button>
      </div>
    </div>
  )
}
