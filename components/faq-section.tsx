import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long should I wear it each day?",
    answer:
      "Start with 15-30 minutes and increase to 1-2 hours. Most customers see results within 7 days.",
  },
  {
    question: "Is it comfortable under clothes?",
    answer:
      "Yes! Lightweight, breathable materials fit discreetly under any clothing.",
  },
  {
    question: "What size should I order?",
    answer:
      "Adjustable straps fit chest sizes 28\" to 48\". One size fits most body types.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "FREE US shipping takes 5-7 business days. Express shipping available (2-3 days).",
  },
]

export function FAQSection() {
  return (
    <section className="bg-background px-4 py-10 md:py-14">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center font-[family-name:var(--font-heading)] text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-4 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-bold hover:no-underline md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
