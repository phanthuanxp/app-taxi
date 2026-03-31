"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Truck, Shield, ShoppingCart, Flame, Clock } from "lucide-react"

const pricingOptions = [
  {
    quantity: 1,
    label: "Starter",
    price: 29.99,
    originalPrice: 49.99,
    perUnit: 29.99,
    savings: 20,
    popular: false,
  },
  {
    quantity: 2,
    label: "Best Seller",
    price: 49.99,
    originalPrice: 99.98,
    perUnit: 24.99,
    savings: 50,
    popular: true,
  },
  {
    quantity: 3,
    label: "Family Pack",
    price: 69.99,
    originalPrice: 149.97,
    perUnit: 23.33,
    savings: 80,
    popular: false,
  },
]

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 })
  const [stock] = useState(7)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            return { minutes: 14, seconds: 59 }
          }
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { ...prev, seconds: prev.seconds - 1 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="checkout" className="bg-secondary/50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Urgency Banner */}
        <div className="mb-8 rounded-xl bg-primary p-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 animate-pulse" />
              <span className="font-bold">SALE ENDS IN:</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xl font-bold">
              <Clock className="h-5 w-5" />
              {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-primary-foreground/20 px-2 py-1 text-sm font-bold">
                Only {stock} left at this price!
              </span>
            </div>
          </div>
        </div>

        <div className="mb-8 text-center">
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Choose Your Package & Save Big
          </h2>
          <p className="text-muted-foreground">
            All orders include FREE shipping + 30-day money-back guarantee
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border-2 bg-card p-5 transition-all duration-300 md:p-6 ${
                option.popular
                  ? "border-primary shadow-[0_0_30px_rgba(234,88,12,0.2)] ring-2 ring-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {option.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                  MOST POPULAR
                </Badge>
              )}

              <div className="mb-4 text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {option.label}
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                  {option.quantity} {option.quantity === 1 ? "Corrector" : "Correctors"}
                </h3>
              </div>

              <div className="mb-4 text-center">
                <div className="mb-1 flex items-baseline justify-center gap-1">
                  <span className="font-[family-name:var(--font-heading)] text-4xl font-extrabold text-foreground md:text-5xl">
                    ${option.price.toFixed(0)}
                  </span>
                  <span className="text-xl font-bold text-foreground">.{option.price.toFixed(2).split('.')[1]}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-muted-foreground line-through">
                    ${option.originalPrice.toFixed(2)}
                  </span>
                  <Badge variant="secondary" className="bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    Save ${option.savings}
                  </Badge>
                </div>
              </div>

              <div className="mb-4 flex-1 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>Free US Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>

              <Button
                className={`group w-full rounded-xl font-bold transition-all duration-300 ${
                  option.popular 
                    ? "h-14 bg-primary text-base shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl" 
                    : "h-12 text-sm"
                }`}
                size="lg"
                variant={option.popular ? "default" : "outline"}
                asChild
              >
                <a href="#checkout" className="flex items-center justify-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  {option.popular ? "Add to Cart - Best Deal" : "Add to Cart"}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust elements below pricing */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-4 w-4 text-green-600" />
            <span>Ships in 24 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-600" />
            <span>50,000+ Sold</span>
          </div>
        </div>
      </div>
    </section>
  )
}
