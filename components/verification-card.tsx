"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock, ExternalLink, Download } from "lucide-react"
import Image from "next/image"

interface VerificationCardProps {
  id: string
  projectName: string
  projectType: string
  submittedBy: string
  submittedDate: string
  status: "pending" | "approved" | "rejected"
  certificateUrl?: string
  documents: number
  image: string
}

export function VerificationCard({
  id,
  projectName,
  projectType,
  submittedBy,
  submittedDate,
  status,
  certificateUrl,
  documents,
  image,
}: VerificationCardProps) {
  const [localStatus, setLocalStatus] = useState(status)

  const handleApprove = () => {
    setLocalStatus("approved")
    // In real app, would call API
  }

  const handleReject = () => {
    setLocalStatus("rejected")
    // In real app, would call API
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Project Image */}
          <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <Image src={image || "/placeholder.svg"} alt={projectName} fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{projectName}</h3>
                  {localStatus === "pending" && (
                    <Badge variant="secondary" className="gap-1">
                      <Clock className="w-3 h-3" />
                      Pending
                    </Badge>
                  )}
                  {localStatus === "approved" && (
                    <Badge className="gap-1 bg-success text-success-foreground">
                      <CheckCircle2 className="w-3 h-3" />
                      Approved
                    </Badge>
                  )}
                  {localStatus === "rejected" && (
                    <Badge variant="destructive" className="gap-1">
                      <XCircle className="w-3 h-3" />
                      Rejected
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{projectType}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Submitted By</p>
                <p className="font-medium">{submittedBy}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Submitted Date</p>
                <p className="font-medium">{submittedDate}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Documents</p>
                <p className="font-medium">{documents} files</p>
              </div>
              <div>
                <p className="text-muted-foreground">Project ID</p>
                <p className="font-medium font-mono text-xs">{id}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-2">
              {localStatus === "pending" && (
                <>
                  <Button size="sm" onClick={handleApprove} className="gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive" onClick={handleReject} className="gap-2">
                    <XCircle className="w-4 h-4" />
                    Reject
                  </Button>
                </>
              )}
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Documents
              </Button>
              {certificateUrl && (
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  Certificate
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
