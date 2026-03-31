"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 lg:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-foreground">$29.99</span>
            <span className="text-sm text-muted-foreground line-through">$49.99</span>
          </div>
          <p className="text-xs text-green-600 font-semibold">40% OFF - Free Shipping</p>
        </div>
        <Button className="h-12 flex-1 max-w-[180px] rounded-xl font-bold shadow-lg" asChild>
          <a href="#checkout" className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </a>
        </Button>
      </div>
    </div>
  )
}
