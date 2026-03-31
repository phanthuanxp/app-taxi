import { AlertTriangle, Frown, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Chronic Back Pain",
    description: "Hours of sitting cause muscle strain that worsens daily.",
  },
  {
    icon: TrendingDown,
    title: "Poor Posture",
    description: "Slouching has become your default, damaging your spine.",
  },
  {
    icon: Frown,
    title: "Low Confidence",
    description: "Bad posture makes you appear smaller and less confident.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-secondary/30 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Your Posture Is <span className="text-primary">Getting Worse</span>
          </h2>
          <p className="text-muted-foreground">
            Modern lifestyle is destroying your spine. Sound familiar?
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <problem.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 font-[family-name:var(--font-heading)] text-lg font-bold text-foreground">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
