import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  "Фиксируем сценарий и ограничения участка",
  "Подбираем планировку, материалы и инженерную комплектацию",
  "Собираем модуль в контролируемом производственном процессе",
  "Готовим доставку, основание и монтаж на участке"
];

export function ProductionSection() {
  return (
    <section className="bg-background-dark py-24 text-text-inverse">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1500&q=85"
                alt="Архитектурное производство и строительные материалы"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Производство"
              title="Контроль процесса важен так же, как внешний вид."
              description="Модульный формат позволяет заранее продумать конструкцию, инженерные узлы, фасад и монтажную логику."
              className="text-text-inverse [&_h2]:text-text-inverse [&_p]:text-text-inverse/70"
            />
            <ol className="mt-10 grid gap-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 border-t border-white/12 pt-4">
                  <span className="text-sm text-text-inverse/45">0{index + 1}</span>
                  <span className="text-text-inverse/82">{step}</span>
                </li>
              ))}
            </ol>
            <Button asChild variant="inverse" className="mt-9">
              <Link href="/production">Смотреть производство</Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
