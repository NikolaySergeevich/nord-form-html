import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { audienceSegments } from "@/data/brand";

export function AudienceSection() {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Для кого"
            title="Для тех, кто хочет, чтобы пространство отражало образ жизни или характер бизнеса."
            description="Nord Form выбирают, когда важны не только функция и срок, но и ощущение: объект должен выглядеть спокойно, современно и уместно."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {audienceSegments.map((segment, index) => (
            <Reveal key={segment.title} delay={index * 0.06}>
              <article className="h-full rounded-md border border-border bg-surface-primary p-6 shadow-sm">
                <p className="text-sm text-text-secondary">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-text-primary">{segment.title}</h3>
                <p className="mt-3 text-text-secondary">{segment.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

