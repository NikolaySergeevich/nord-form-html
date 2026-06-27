import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { brandBeliefs } from "@/data/brand";

export function BrandBeliefsSection() {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Во что мы верим"
            title="Принципы, по которым модуль становится архитектурой."
            description="Для нас модульность — не способ сделать проще любой ценой. Это дисциплина: меньше лишнего, больше точности, яснее функция и спокойнее форма."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {brandBeliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={index * 0.05}>
              <article className="h-full rounded-md border border-border bg-surface-primary p-6 shadow-sm">
                <p className="text-sm text-text-secondary">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-text-primary">{belief.title}</h3>
                <p className="mt-3 text-text-secondary">{belief.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

