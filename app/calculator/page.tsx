"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Plane, Home, ShoppingBag, Leaf, ArrowRight, Zap, Droplets } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function CalculatorPage() {
  const [activeCategory, setActiveCategory] = useState("transport")

  // Transport
  const [carMiles, setCarMiles] = useState(10000)
  const [carType, setCarType] = useState("average")
  const [flights, setFlights] = useState(2)

  // Home
  const [electricity, setElectricity] = useState(500)
  const [gas, setGas] = useState(200)
  const [waterUsage, setWaterUsage] = useState(150)

  // Lifestyle
  const [diet, setDiet] = useState("mixed")
  const [shopping, setShopping] = useState("moderate")

  // Calculate emissions
  const calculateTransport = () => {
    const carMultiplier = carType === "electric" ? 0.1 : carType === "hybrid" ? 0.5 : 1
    const carEmissions = (carMiles / 1000) * 0.4 * carMultiplier
    const flightEmissions = flights * 0.5
    return carEmissions + flightEmissions
  }

  const calculateHome = () => {
    const electricityEmissions = (electricity / 100) * 0.5
    const gasEmissions = (gas / 100) * 0.6
    const waterEmissions = (waterUsage / 100) * 0.1
    return electricityEmissions + gasEmissions + waterEmissions
  }

  const calculateLifestyle = () => {
    const dietEmissions = diet === "vegan" ? 0.5 : diet === "vegetarian" ? 1 : diet === "mixed" ? 1.5 : 2
    const shoppingEmissions = shopping === "minimal" ? 0.5 : shopping === "moderate" ? 1 : 1.5
    return dietEmissions + shoppingEmissions
  }

  const totalEmissions = calculateTransport() + calculateHome() + calculateLifestyle()
  const recommendedOffset = Math.ceil(totalEmissions / 10) * 10

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-b border-border/40">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm">
                <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Calculate Your Carbon Footprint</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                Discover Your <span className="text-emerald-600 dark:text-emerald-400">Climate Impact</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Answer a few fun questions about your lifestyle and we'll calculate your carbon footprint. Then, we'll
                recommend the perfect NFTs to offset it!
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 h-auto p-1">
                  <TabsTrigger value="transport" className="gap-2 py-3">
                    <Car className="w-4 h-4" />
                    <span className="hidden sm:inline">Transport</span>
                  </TabsTrigger>
                  <TabsTrigger value="home" className="gap-2 py-3">
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:inline">Home</span>
                  </TabsTrigger>
                  <TabsTrigger value="lifestyle" className="gap-2 py-3">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="hidden sm:inline">Lifestyle</span>
                  </TabsTrigger>
                </TabsList>

                {/* Transport Tab */}
                <TabsContent value="transport" className="space-y-6">
                  <Card className="border-emerald-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Car className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        Car Travel
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <Label>How many miles do you drive per year?</Label>
                        <div className="flex items-center gap-4">
                          <Slider
                            value={[carMiles]}
                            onValueChange={(value) => setCarMiles(value[0])}
                            max={50000}
                            step={1000}
                            className="flex-1"
                          />
                          <span className="font-semibold text-lg w-24 text-right">{carMiles.toLocaleString()} mi</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>What type of car do you drive?</Label>
                        <Select value={carType} onValueChange={setCarType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="electric">Electric (Low emissions)</SelectItem>
                            <SelectItem value="hybrid">Hybrid (Medium emissions)</SelectItem>
                            <SelectItem value="average">Average Car</SelectItem>
                            <SelectItem value="suv">SUV/Truck (High emissions)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-cyan-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Plane className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        Air Travel
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>How many round-trip flights do you take per year?</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[flights]}
                          onValueChange={(value) => setFlights(value[0])}
                          max={20}
                          step={1}
                          className="flex-1"
                        />
                        <span className="font-semibold text-lg w-16 text-right">{flights}</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Home Tab */}
                <TabsContent value="home" className="space-y-6">
                  <Card className="border-amber-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        Electricity Usage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>Monthly electricity usage (kWh)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[electricity]}
                          onValueChange={(value) => setElectricity(value[0])}
                          max={2000}
                          step={50}
                          className="flex-1"
                        />
                        <span className="font-semibold text-lg w-24 text-right">{electricity} kWh</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        Natural Gas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>Monthly gas usage (therms)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[gas]}
                          onValueChange={(value) => setGas(value[0])}
                          max={500}
                          step={10}
                          className="flex-1"
                        />
                        <span className="font-semibold text-lg w-24 text-right">{gas} therms</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Water Usage
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>Monthly water usage (gallons)</Label>
                      <div className="flex items-center gap-4">
                        <Slider
                          value={[waterUsage]}
                          onValueChange={(value) => setWaterUsage(value[0])}
                          max={500}
                          step={10}
                          className="flex-1"
                        />
                        <span className="font-semibold text-lg w-24 text-right">{waterUsage} gal</span>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Lifestyle Tab */}
                <TabsContent value="lifestyle" className="space-y-6">
                  <Card className="border-green-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600 dark:text-green-400" />
                        Diet
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>What best describes your diet?</Label>
                      <Select value={diet} onValueChange={setDiet}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vegan">Vegan (Lowest impact)</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="mixed">Mixed (Some meat)</SelectItem>
                          <SelectItem value="meat-heavy">Meat-heavy (High impact)</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        Shopping Habits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Label>How often do you buy new items?</Label>
                      <Select value={shopping} onValueChange={setShopping}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">Minimal (Buy only essentials)</SelectItem>
                          <SelectItem value="moderate">Moderate (Regular shopping)</SelectItem>
                          <SelectItem value="frequent">Frequent (Shop often)</SelectItem>
                        </SelectContent>
                      </Select>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Results */}
              <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Carbon Footprint</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-6xl font-bold text-emerald-600 dark:text-emerald-400">
                      {totalEmissions.toFixed(1)}
                    </p>
                    <p className="text-xl text-muted-foreground">tons CO₂ per year</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          Transport
                        </span>
                        <span className="font-semibold">{calculateTransport().toFixed(1)} tons</span>
                      </div>
                      <Progress value={(calculateTransport() / totalEmissions) * 100} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <Home className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          Home Energy
                        </span>
                        <span className="font-semibold">{calculateHome().toFixed(1)} tons</span>
                      </div>
                      <Progress value={(calculateHome() / totalEmissions) * 100} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          Lifestyle
                        </span>
                        <span className="font-semibold">{calculateLifestyle().toFixed(1)} tons</span>
                      </div>
                      <Progress value={(calculateLifestyle() / totalEmissions) * 100} className="h-2" />
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 space-y-4">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">Recommended Offset</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Based on your footprint, we recommend offsetting at least{" "}
                          <span className="font-bold text-foreground">{recommendedOffset}kg CO₂</span> to start making a
                          positive impact. This is equivalent to planting{" "}
                          <span className="font-bold text-foreground">{Math.ceil(recommendedOffset / 20)} trees</span>!
                        </p>
                      </div>
                    </div>

                    <Button size="lg" className="w-full gap-2" asChild>
                      <Link href={`/marketplace?minOffset=${recommendedOffset}`}>
                        Find Matching NFTs
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
