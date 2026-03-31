import { Button } from "@/components/ui/button"
import { ShoppingCart, Shield, Truck, Star } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="bg-primary px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-white text-white" />
          ))}
          <span className="ml-2 text-sm font-bold text-primary-foreground">4.9/5</span>
        </div>
        
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-extrabold text-primary-foreground md:text-3xl">
          Ready to Fix Your Posture?
        </h2>
        <p className="mb-6 text-primary-foreground/90">
          Join 50,000+ happy customers. Free shipping + 30-day guarantee.
        </p>

        <Button
          size="lg"
          variant="secondary"
          className="mb-6 h-14 w-full max-w-sm rounded-xl px-8 text-lg font-bold shadow-xl transition-all duration-300 hover:scale-[1.02] md:h-16"
          asChild
        >
          <a href="#checkout" className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Get 40% Off Now
          </a>
        </Button>

        <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4" />
            <span>Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="h-4 w-4" />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>
    </section>
  )
}
