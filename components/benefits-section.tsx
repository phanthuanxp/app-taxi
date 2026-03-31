import { CheckCircle, Zap, Heart, Sparkles, Clock, Award } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Instant Improvement",
    description: "Feel the difference immediately.",
  },
  {
    icon: Heart,
    title: "Relieves Pain",
    description: "Reduce back and neck tension.",
  },
  {
    icon: Sparkles,
    title: "Boosts Confidence",
    description: "Stand taller, feel better.",
  },
  {
    icon: Clock,
    title: "All-Day Comfort",
    description: "Breathable, wear anywhere.",
  },
  {
    icon: CheckCircle,
    title: "Easy to Use",
    description: "Perfect fit in seconds.",
  },
  {
    icon: Award,
    title: "Clinically Designed",
    description: "By orthopedic specialists.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-secondary/30 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Why <span className="text-primary">50,000+</span> Choose PosturePro
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-[family-name:var(--font-heading)] text-sm font-bold text-foreground md:text-base">
                {benefit.title}
              </h3>
              <p className="text-xs text-muted-foreground md:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
