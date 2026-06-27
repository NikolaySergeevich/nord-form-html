import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { emotionalStatements } from "@/data/brand";

type EmotionalStatementSectionProps = {
  index?: 0 | 1 | 2;
  inverse?: boolean;
};

export function EmotionalStatementSection({
  index = 0,
  inverse = false
}: EmotionalStatementSectionProps) {
  const statement = emotionalStatements[index];

  return (
    <section className={inverse ? "bg-background-dark py-20 text-text-inverse" : "bg-background-secondary py-20"}>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-secondary">
              Nord Form
            </p>
            <h2 className={inverse ? "mt-5 text-text-inverse" : "mt-5 text-text-primary"}>
              {statement.title}
            </h2>
            <p className={inverse ? "mx-auto mt-5 max-w-2xl text-text-inverse/70" : "mx-auto mt-5 max-w-2xl text-text-secondary"}>
              {statement.description}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

