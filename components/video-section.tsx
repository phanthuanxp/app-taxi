import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="bg-secondary/30 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Watch It In Action
          </h2>
          <p className="text-muted-foreground">
            See real results from real customers
          </p>
        </div>

        <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-foreground/5 shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-foreground/10 to-foreground/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 group-hover:scale-110 md:h-20 md:w-20">
              <Play className="h-7 w-7 translate-x-0.5 fill-current md:h-8 md:w-8" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 rounded-lg bg-background/90 px-3 py-1.5 text-sm font-semibold shadow-lg">
            2:34
          </div>
        </div>
      </div>
    </section>
  )
}
