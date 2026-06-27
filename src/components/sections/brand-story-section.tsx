import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { brandPhilosophy } from "@/data/brand";

type BrandStorySectionProps = {
  variant?: "light" | "warm";
};

export function BrandStorySection({ variant = "light" }: BrandStorySectionProps) {
  return (
    <section className={variant === "warm" ? "bg-background-secondary py-24" : "bg-background-primary py-24"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow={brandPhilosophy.eyebrow}
              title={brandPhilosophy.title}
              description={brandPhilosophy.description}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-md border border-border/80 bg-surface-primary p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-secondary">
                Идея Nord Form
              </p>
              <p className="mt-5 text-2xl leading-snug text-text-primary md:text-3xl">
                В основе каждого проекта — промышленная прочность, которая получает человеческий масштаб.
              </p>
              <p className="mt-5 text-text-secondary">
                Мы сохраняем честную металлическую природу контейнера, но добавляем пропорции, планировку, дерево, свет и инженерную логику. Так появляется не временная постройка, а пространство, рассчитанное на долгую жизнь.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

