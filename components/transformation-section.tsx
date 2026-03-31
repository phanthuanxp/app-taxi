"use client"

import { X, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TransformationSection() {
  const beforeItems = [
    "Slouched shoulders",
    "Chronic back pain",
    "Low energy",
    "Poor confidence",
  ]

  const afterItems = [
    "Perfect posture",
    "Pain-free living",
    "More energy",
    "Confident presence",
  ]

  return (
    <section className="bg-background px-4 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Your <span className="text-primary">7-Day Transformation</span>
          </h2>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-xl border-2 border-destructive/20 bg-card p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                <X className="h-4 w-4 text-destructive" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-foreground">Before</h3>
            </div>
            <ul className="space-y-2">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="h-3.5 w-3.5 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-xl border-2 border-primary/30 bg-card p-5 shadow-lg shadow-primary/5">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-foreground">After</h3>
            </div>
            <ul className="space-y-2">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-secondary/50 p-4 text-center">
            <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-primary">7</div>
            <div className="text-xs text-muted-foreground">Days</div>
          </div>
          <div className="rounded-xl bg-secondary/50 p-4 text-center">
            <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-primary">94%</div>
            <div className="text-xs text-muted-foreground">Success</div>
          </div>
          <div className="rounded-xl bg-secondary/50 p-4 text-center">
            <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-primary">50K+</div>
            <div className="text-xs text-muted-foreground">Customers</div>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <a href="#checkout" className="flex items-center gap-2">
              Start Your Transformation
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
