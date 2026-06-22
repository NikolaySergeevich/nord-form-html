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
        title="Начните с каталога, если хотите спокойно сравнить направления."
        description="Каталог помогает сравнить четыре контейнерные коллекции, комплектации и вопросы, которые стоит обсудить перед расчетом."
        image={{
          src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
          alt: "Цветочный модуль из контейнера с витриной и теплой подсветкой"
        }}
        primaryCta={{ label: "Заполнить форму", href: "#catalog-form" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
      />
      <section id="catalog-form" className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Lead Magnet"
                title="Каталог модульных решений NORD FORM"
                description="Оставьте контакты, чтобы получить подборку по садовому модулю, хозблоку, SPA-бане и цветочному павильону."
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
