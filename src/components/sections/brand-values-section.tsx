import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { brandValues } from "@/data/brand";

export function BrandValuesSection() {
  return (
    <section className="bg-background-secondary py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Что для нас важно"
              title="Красота должна иметь конструкцию."
              description="Мы не отделяем эстетику от инженерии. В хорошей модульной архитектуре внешний образ, сценарий использования и техническая точность держат друг друга."
            />
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05}>
                <div className="rounded-md border border-border bg-surface-primary p-6">
                  <h3 className="text-xl font-semibold text-text-primary">{value.title}</h3>
                  <p className="mt-3 text-text-secondary">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

