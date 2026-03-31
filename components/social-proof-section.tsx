import { Star, CheckCircle } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    review: "After just one week, my back pain is almost gone. This actually works!",
    verified: true,
  },
  {
    name: "Michael R.",
    rating: 5,
    review: "My posture improved dramatically. I feel more confident in meetings.",
    verified: true,
  },
  {
    name: "Jennifer L.",
    rating: 5,
    review: "Super comfortable under clothes. Nobody knows I'm wearing it!",
    verified: true,
  },
  {
    name: "David K.",
    rating: 5,
    review: "My wife says I look taller! Great product, worth every penny.",
    verified: true,
  },
]

export function SocialProofSection() {
  return (
    <section className="bg-background px-4 py-10 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            <span className="text-primary">2,847</span> 5-Star Reviews
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="mb-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                &ldquo;{review.review}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                {review.verified && (
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <CheckCircle className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
