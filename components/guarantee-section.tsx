import { Shield, RotateCcw, Headphones } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="bg-secondary/30 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-foreground md:text-2xl">
              30-Day Money Back Guarantee
            </h2>
          </div>
          <p className="mb-6 text-center text-muted-foreground">
            Not satisfied? Get a full refund. No questions asked.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <RotateCcw className="mx-auto mb-2 h-5 w-5 text-primary" />
              <p className="font-semibold">Risk Free</p>
            </div>
            <div>
              <Shield className="mx-auto mb-2 h-5 w-5 text-primary" />
              <p className="font-semibold">Easy Returns</p>
            </div>
            <div>
              <Headphones className="mx-auto mb-2 h-5 w-5 text-primary" />
              <p className="font-semibold">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
