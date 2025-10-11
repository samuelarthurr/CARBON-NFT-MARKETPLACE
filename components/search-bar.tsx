"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  onSearch?: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (onSearch) {
      onSearch(searchQuery)
    }
  }, [searchQuery, onSearch])

  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search by project name, type, or location..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-10 h-12 text-base"
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2"
          onClick={() => setSearchQuery("")}
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}
