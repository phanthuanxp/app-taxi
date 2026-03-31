"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

const ugcContent = [
  {
    name: "Sarah M.",
    location: "Texas",
    image: "/images/ugc-1.jpg",
    isVideo: true,
  },
  {
    name: "Mike R.",
    location: "California",
    image: "/images/ugc-2.jpg",
    isVideo: false,
  },
  {
    name: "Jessica L.",
    location: "New York",
    image: "/images/ugc-3.jpg",
    isVideo: true,
  },
  {
    name: "David K.",
    location: "Florida",
    image: "/images/ugc-4.jpg",
    isVideo: false,
  },
]

export function UgcSection() {
  return (
    <section className="bg-muted/30 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 text-center">
          <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
            Real Results
          </Badge>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight md:text-3xl">
            Real Customers, Real Results
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            See what our customers are sharing on social media
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {ugcContent.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-muted shadow-md transition-all hover:shadow-lg"
            >
              <Image
                src={item.image}
                alt={`${item.name} wearing PosturePro`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {item.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-5 w-5" fill="currentColor" />
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/70">{item.location}</p>
              </div>

              <div className="absolute right-2 top-2">
                <Badge className="bg-green-500 text-[10px] text-white">
                  Verified
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Join 50,000+ happy customers who transformed their posture
        </p>
      </div>
    </section>
  )
}
