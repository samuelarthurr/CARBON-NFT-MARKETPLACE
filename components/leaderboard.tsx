import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal } from "lucide-react"

const leaderboardData = [
  { rank: 1, name: "Alex Wong", username: "@alexwong", offset: 3450, avatar: "/placeholder.svg?height=40&width=40" },
  {
    rank: 2,
    name: "Maria Santos",
    username: "@mariasantos",
    offset: 2890,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 3,
    name: "David Tan",
    username: "@davidtan",
    offset: 2340,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 4,
    name: "Lisa Kumar",
    username: "@lisakumar",
    offset: 1980,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 5,
    name: "James Lee",
    username: "@jameslee",
    offset: 1750,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 6,
    name: "Emma Chen",
    username: "@emmachen",
    offset: 1520,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 7,
    name: "Sarah Chen",
    username: "@sarahchen",
    offset: 1250,
    avatar: "/placeholder.svg?height=40&width=40",
    isCurrentUser: true,
  },
  {
    rank: 8,
    name: "Ryan Lim",
    username: "@ryanlim",
    offset: 1120,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 9,
    name: "Nina Patel",
    username: "@ninapatel",
    offset: 980,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    rank: 10,
    name: "Tom Wilson",
    username: "@tomwilson",
    offset: 850,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-gold" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                user.isCurrentUser ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center justify-center w-8 flex-shrink-0">
                {user.rank === 1 && <Trophy className="w-5 h-5 text-gold" />}
                {user.rank === 2 && <Medal className="w-5 h-5 text-gray-400" />}
                {user.rank === 3 && <Medal className="w-5 h-5 text-amber-600" />}
                {user.rank > 3 && <span className="text-sm font-semibold text-muted-foreground">#{user.rank}</span>}
              </div>

              <Avatar className="w-10 h-10">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.username}</p>
              </div>

              <div className="text-right">
                <p className="font-bold text-sm">{user.offset}kg</p>
                {user.isCurrentUser && (
                  <Badge variant="secondary" className="text-xs">
                    You
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
