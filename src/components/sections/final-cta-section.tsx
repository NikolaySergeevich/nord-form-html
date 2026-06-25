import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { TrustList } from "@/components/ui/trust-list";

type FinalCtaSectionProps = {
  title?: string;
  description?: string;
};

export function FinalCtaSection({
  title = "Расскажите о своей задаче — мы предложим подходящий формат модуля.",
  description = "На первом этапе достаточно идеи, назначения и места установки. Мы поможем определить следующий шаг без обязательства начинать проект."
}: FinalCtaSectionProps) {
  return (
    <section className="bg-background-dark py-20 text-text-inverse">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
                Начать обсуждение
              </p>
              <h2 className="mt-5 text-text-inverse">{title}</h2>
              <p className="mt-5 max-w-2xl text-text-inverse/70">{description}</p>
              <TrustList
                inverse
                className="mt-6 sm:grid-cols-3 sm:gap-x-6"
                items={[
                  "Без готового технического задания",
                  "С понятным следующим шагом",
                  "С предварительной оценкой"
                ]}
              />
            </div>
            <Button asChild variant="inverse" size="lg" className="w-full lg:w-auto">
              <Link href="/contacts">Обсудить проект</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
