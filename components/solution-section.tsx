"use client"

import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Pulls Shoulders Back",
    description: "Ergonomic straps gently pull your shoulders into correct position.",
  },
  {
    title: "Aligns Your Spine",
    description: "Your spine naturally straightens, relieving back and neck pressure.",
  },
  {
    title: "Trains Your Muscles",
    description: "Muscles develop memory for proper posture in just 7-14 days.",
  },
  {
    title: "Feel the Difference",
    description: "Less pain, more energy, and confidence from standing tall.",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-background px-4 py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            How <span className="text-primary">PosturePro</span> Works
          </h2>
          <p className="text-muted-foreground">
            Scientifically designed to train your muscles for perfect posture.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-1 font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-xl px-8 text-base font-bold shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
          >
            <a href="#checkout" className="flex items-center gap-2">
              Get PosturePro Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
