import { CheckCircle2 } from "lucide-react"

interface ProvenanceEvent {
  date: string
  title: string
  description: string
  verified?: boolean
}

const events: ProvenanceEvent[] = [
  {
    date: "Jan 2025",
    title: "Project Verification",
    description: "Verified by Verra (Certificate #VCS-2025-001234)",
    verified: true,
  },
  {
    date: "Dec 2024",
    title: "Impact Assessment",
    description: "Third-party audit confirms 50kg CO₂ offset per unit",
    verified: true,
  },
  {
    date: "Nov 2024",
    title: "Project Launch",
    description: "Mangrove restoration begins in Sabah coastal region",
    verified: true,
  },
  {
    date: "Oct 2024",
    title: "Site Preparation",
    description: "Land survey and community engagement completed",
    verified: true,
  },
]

export function ProvenanceTimeline() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Project Timeline</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  event.verified ? "bg-success/10" : "bg-muted"
                }`}
              >
                {event.verified ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                )}
              </div>
              {index < events.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm text-muted-foreground">{event.date}</p>
                {event.verified && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">Verified</span>
                )}
              </div>
              <p className="font-semibold mb-1">{event.title}</p>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
