"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Truck, Eye, Star, ShoppingCart } from "lucide-react"

export function HeroSection() {
  const [viewers, setViewers] = useState(17)

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newValue = prev + change
        return Math.max(12, Math.min(25, newValue))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Announcement bar */}
      <div className="bg-primary px-4 py-2.5 text-center">
        <p className="text-sm font-bold text-primary-foreground">
          FLASH SALE: 40% OFF + FREE SHIPPING - Limited Time Only!
        </p>
      </div>

      <div className="px-4 py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Content */}
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
              {/* Live viewers - moved to top for urgency */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                </span>
                <Eye className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">
                  {viewers} people viewing now
                </span>
              </div>
              
              <h1 className="mb-4 font-[family-name:var(--font-heading)] text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Fix Your Posture
                <span className="text-primary"> in 7 Days</span>
              </h1>
              
              <p className="mb-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Stop back pain. Stand taller. Feel confident. Join <span className="font-bold text-foreground">50,000+</span> happy customers.
              </p>

              {/* Star rating */}
              <div className="mb-5 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-foreground">4.9</span>
                <span className="text-sm text-muted-foreground">(2,847 verified reviews)</span>
              </div>

              {/* Price Display */}
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-extrabold text-foreground">$29.99</span>
                <span className="text-xl text-muted-foreground line-through">$49.99</span>
                <Badge className="bg-green-500 px-2.5 py-1 text-sm font-bold text-white">SAVE 40%</Badge>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="group mb-5 h-16 w-full rounded-xl px-8 text-lg font-bold shadow-[0_8px_30px_rgba(234,88,12,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(234,88,12,0.5)] md:w-auto md:min-w-[320px]"
                asChild
              >
                <a href="#checkout" className="flex items-center justify-center gap-3">
                  <ShoppingCart className="h-5 w-5" />
                  Buy Now - 40% Off
                </a>
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>Free US Shipping</span>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative flex-1">
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-secondary/50 shadow-2xl">
                <Image
                  src="/images/posture-corrector.jpg"
                  alt="Posture Corrector Brace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Discount badge */}
              <div className="absolute -right-2 -top-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-center shadow-lg md:h-20 md:w-20">
                <div>
                  <p className="text-xl font-extrabold leading-none text-primary-foreground md:text-2xl">40%</p>
                  <p className="text-[10px] font-bold uppercase text-primary-foreground/80 md:text-xs">OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
