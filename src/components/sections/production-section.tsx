import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { processSteps } from "@/data/process";

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
              eyebrow="Как мы работаем"
              title="Производство для нас — продолжение архитектурной идеи, а не просто сборка."
              description="Каждый сварной шов, проём, фасадная линия и точка света должны поддерживать общий замысел. Поэтому мы связываем сценарий, конструкцию и детали до того, как модуль отправится в работу."
              className="text-text-inverse [&_h2]:text-text-inverse [&_p]:text-text-inverse/70"
            />
            <ol className="mt-10 grid gap-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-white/12 pt-4">
                  <span className="text-sm text-text-inverse/45">0{index + 1}</span>
                  <div>
                    <h3 className="font-sans text-base font-semibold tracking-normal text-text-inverse">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-text-inverse/65">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Button asChild variant="inverse" className="mt-9">
              <Link href="/production">Посмотреть процесс</Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
