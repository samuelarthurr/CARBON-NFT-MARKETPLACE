import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Lock, CreditCard } from "lucide-react"
import Link from "next/link"

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/profile" className="hover:text-primary">
                  Profile
                </Link>
                <span>/</span>
                <span>Settings</span>
              </div>
              <h1 className="text-3xl font-bold">Account Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and personal information</p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="p-6 rounded-xl border border-border bg-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Personal Information</h2>
                    <p className="text-sm text-muted-foreground">Update your profile details</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Chen" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.chen@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Climate advocate and sustainability enthusiast from Kuala Lumpur"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Kuala Lumpur, Malaysia" />
                  </div>

                  <Button>Save Changes</Button>
                </div>
              </div>

              {/* Notifications */}
              <div className="p-6 rounded-xl border border-border bg-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <p className="text-sm text-muted-foreground">Manage how you receive updates</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Purchase Confirmations</p>
                      <p className="text-sm text-muted-foreground">Receive emails when you purchase NFTs</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Impact Updates</p>
                      <p className="text-sm text-muted-foreground">Get updates on your carbon offset projects</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">New Projects</p>
                      <p className="text-sm text-muted-foreground">Notify me when new projects are listed</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">Receive news and promotional offers</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="p-6 rounded-xl border border-border bg-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Security</h2>
                    <p className="text-sm text-muted-foreground">Manage your password and security settings</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>

                  <Button>Update Password</Button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-6 rounded-xl border border-border bg-card space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Payment Methods</h2>
                    <p className="text-sm text-muted-foreground">Manage your saved payment methods</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>

                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="p-6 rounded-xl border border-destructive/50 bg-destructive/5 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
                  <p className="text-sm text-muted-foreground">Irreversible actions for your account</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
