import { AdminSidebar } from "@/components/admin-sidebar"
import { VerificationCard } from "@/components/verification-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function VerificationPage() {
  const pendingProjects = [
    {
      id: "VER-456",
      projectName: "Coastal Mangrove Expansion",
      projectType: "Mangrove Restoration",
      submittedBy: "Green Earth NGO",
      submittedDate: "Jan 15, 2025",
      status: "pending" as const,
      documents: 8,
      image: "/mangrove-forest-coastal-restoration.jpg",
    },
    {
      id: "VER-455",
      projectName: "Urban Solar Rooftop Program",
      projectType: "Solar Energy",
      submittedBy: "Solar Solutions Inc",
      submittedDate: "Jan 14, 2025",
      status: "pending" as const,
      documents: 12,
      image: "/solar-panels-renewable-energy-farm.jpg",
    },
    {
      id: "VER-454",
      projectName: "Highland Reforestation Initiative",
      projectType: "Reforestation",
      submittedBy: "Forest Trust Malaysia",
      submittedDate: "Jan 13, 2025",
      status: "pending" as const,
      documents: 6,
      image: "/tropical-rainforest-trees-planting.jpg",
    },
  ]

  const approvedProjects = [
    {
      id: "VER-453",
      projectName: "Sabah Mangrove Restoration",
      projectType: "Mangrove Restoration",
      submittedBy: "Sabah Environmental Trust",
      submittedDate: "Jan 10, 2025",
      status: "approved" as const,
      certificateUrl: "#",
      documents: 10,
      image: "/mangrove-forest-coastal-restoration.jpg",
    },
    {
      id: "VER-452",
      projectName: "Peninsular Solar Farm",
      projectType: "Solar Energy",
      submittedBy: "Green Energy Corp",
      submittedDate: "Jan 8, 2025",
      status: "approved" as const,
      certificateUrl: "#",
      documents: 15,
      image: "/solar-panels-renewable-energy-farm.jpg",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Project Verification</h1>
          <p className="text-muted-foreground">Review and approve carbon offset project submissions</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="trees">Tree Planting</SelectItem>
              <SelectItem value="solar">Solar Energy</SelectItem>
              <SelectItem value="mangrove">Mangrove Restoration</SelectItem>
              <SelectItem value="wind">Wind Energy</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="name">Project Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList>
            <TabsTrigger value="pending">Pending ({pendingProjects.length})</TabsTrigger>
            <TabsTrigger value="approved">Approved ({approvedProjects.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected (0)</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingProjects.map((project) => (
              <VerificationCard key={project.id} {...project} />
            ))}
          </TabsContent>

          <TabsContent value="approved" className="space-y-4">
            {approvedProjects.map((project) => (
              <VerificationCard key={project.id} {...project} />
            ))}
          </TabsContent>

          <TabsContent value="rejected" className="space-y-4">
            <div className="text-center py-12 text-muted-foreground">No rejected projects</div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
