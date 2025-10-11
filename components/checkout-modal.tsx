"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Wallet, Building2, CheckCircle2, Loader2 } from "lucide-react"
import confetti from "canvas-confetti"

interface CheckoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  nftTitle: string
  nftPrice: number
  offsetAmount: string
  projectFee: number
  platformFee: number
}

export function CheckoutModal({
  open,
  onOpenChange,
  nftTitle,
  nftPrice,
  offsetAmount,
  projectFee,
  platformFee,
}: CheckoutModalProps) {
  const [step, setStep] = useState<"payment" | "processing" | "success">("payment")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const router = useRouter()

  const handlePurchase = async () => {
    setStep("processing")

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setStep("success")

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        {step === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle>Complete Purchase</DialogTitle>
              <DialogDescription>Choose your payment method to offset carbon and receive your NFT</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Order Summary */}
              <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">NFT</p>
                  <p className="font-semibold">{nftTitle}</p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Carbon Offset</span>
                  <span className="font-medium">{offsetAmount}</span>
                </div>
                <Separator />
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Project Funding</span>
                    <span>RM{projectFee.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Platform Fee</span>
                    <span>RM{platformFee.toFixed(2)}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-lg">RM{nftPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <Label>Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                      <CreditCard className="w-4 h-4" />
                      <span>Credit / Debit Card</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="ewallet" id="ewallet" />
                    <Label htmlFor="ewallet" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Wallet className="w-4 h-4" />
                      <span>E-Wallet (Touch n Go, GrabPay)</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="fpx" id="fpx" />
                    <Label htmlFor="fpx" className="flex items-center gap-2 cursor-pointer flex-1">
                      <Building2 className="w-4 h-4" />
                      <span>Online Banking (FPX)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Payment Form */}
              {paymentMethod === "card" && (
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" type="password" />
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-2">
                <Button className="w-full" size="lg" onClick={handlePurchase}>
                  Complete Purchase
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By purchasing, you agree to our Terms of Service
                </p>
              </div>
            </div>
          </>
        )}

        {step === "processing" && (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
            <div className="text-center space-y-2">
              <p className="font-semibold">Processing Payment</p>
              <p className="text-sm text-muted-foreground">Please wait while we confirm your transaction...</p>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="py-8 flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Purchase Complete!</h3>
              <p className="text-muted-foreground">
                You offset <span className="font-semibold text-foreground">{offsetAmount}</span>
              </p>
              <p className="text-sm text-muted-foreground">Your NFT certificate is now in your collection</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button
                className="flex-1"
                onClick={() => {
                  onOpenChange(false)
                  router.push("/profile")
                }}
              >
                View Collection
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => onOpenChange(false)}>
                Share Achievement
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
