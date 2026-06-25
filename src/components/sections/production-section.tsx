import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const steps = [
  "Уточняем назначение, участок и условия эксплуатации",
  "Согласовываем планировку, фасад и инженерную комплектацию",
  "Готовим конструкцию и собираем модуль на производстве",
  "Планируем доставку, основание и установку на участке"
];

export function ProductionSection() {
  return (
    <section className="bg-background-dark py-24 text-text-inverse">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/images/products/garden-module/sadovyi-modul-vnytri-pervyi-variant.webp"
                alt="Внутренняя хозяйственная зона садового модуля с ОСБ-обшивкой"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Производство"
              title="Внешний вид начинается с точной инженерной подготовки."
              description="До производства мы связываем конструкцию, утепление, электрику, вентиляцию и отделку в одно решение. Это снижает количество импровизации на участке и делает результат предсказуемым."
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
              <Link href="/production">Как мы работаем</Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
