import type { Metadata } from "next";

import { CatalogForm } from "@/components/forms/catalog-form";
import { HeroSection } from "@/components/sections/hero-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Получить PDF-каталог модульных решений NORD FORM."
};

export default function CatalogPage() {
  return (
    <>
      <HeroSection
        eyebrow="PDF каталог"
        title="Сравните модульные решения и определите подходящее направление."
        description="Каталог поможет понять различия между форматами, собрать исходные требования и подготовиться к предметной консультации."
        image={{
          src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
          alt: "Цветочный модуль из контейнера с витриной и теплой подсветкой"
        }}
        primaryCta={{ label: "Получить каталог", href: "#catalog-form" }}
        secondaryCta={{ label: "Смотреть решения", href: "/collections" }}
      />
      <section id="catalog-form" className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Каталог решений"
                title="Спокойный первый шаг к своему модулю."
                description="Оставьте контакты — мы отправим каталог с основными направлениями. Если потребуется, поможем выбрать формат под участок или бизнес."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-md border border-border bg-surface-primary p-6 shadow-sm">
                <CatalogForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
