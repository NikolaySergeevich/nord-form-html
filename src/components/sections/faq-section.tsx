import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { faq as defaultFaq } from "@/data/faq";
import type { FAQ } from "@/types/content";

type FAQSectionProps = {
  items?: FAQ[];
};

export function FAQSection({ items = defaultFaq }: FAQSectionProps) {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Вопросы, которые помогают принять решение."
              description="Коротко отвечаем на то, что обычно важно до консультации и расчета."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="rounded-md border border-border bg-surface-primary px-6">
              {items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
