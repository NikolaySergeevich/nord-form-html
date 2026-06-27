import type { Metadata } from "next";

import { ProductCard } from "@/components/cards/product-card";
import { EmotionalStatementSection } from "@/components/sections/emotional-statement-section";
import { HeroSection } from "@/components/sections/hero-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Продукты",
  description: "Контейнерные продукты NORD FORM для участка, хранения, SPA и бизнеса."
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Продукты"
        title="Функция, превращённая в архитектуру."
        description="Выберите направление для участка, отдыха или бизнеса. Планировку, фасад, материалы и инженерную комплектацию можно адаптировать под задачу."
        image={{
          src: "/images/products/spa-bath-bany/spa-bany-s-fronta.webp",
          alt: "SPA-баня из графитового контейнера с теплой подсветкой"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
      />
      <EmotionalStatementSection index={1} />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Линейка"
              title="Четыре сценария. Один подход."
              description="От организованного хранения и приватной SPA-зоны до коммерческого пространства с витриной: в каждом решении архитектура опирается на конструкцию и инженерные системы."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <PdfLeadMagnetSection />
      <FinalCtaSection />
    </>
  );
}
