import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Info } from 'lucide-react';

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-background via-background to-emerald-950/20">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <Mail className="h-8 w-8 text-emerald-500" />
              </div>
              <CardTitle className="text-2xl">Account Created!</CardTitle>
              <CardDescription>
                Welcome to Carbon NFT Marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-500/20">
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Development Mode
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Email confirmation is not required in development. You can login directly with your credentials.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Your account has been created successfully. Click below to login and start your climate journey!
              </p>
              
              <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                <Link href="/auth/login">Login Now</Link>
              </Button>
              
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  Note: In production, you will receive a confirmation email to verify your account.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
