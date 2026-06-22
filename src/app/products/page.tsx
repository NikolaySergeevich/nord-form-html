import type { Metadata } from "next";

import { ProductCard } from "@/components/cards/product-card";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Продукты",
  description: "Модульные продукты NORD FORM для участка, отдыха, хранения и бизнеса."
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Продукты"
        title="Модульные решения с готовой архитектурной логикой."
        description="Каждый продукт можно адаптировать под сценарий, участок, сезонность и инженерные требования."
        image={{
          src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
          alt: "Современный дом в вечернем свете"
        }}
        primaryCta={{ label: "Получить расчет", href: "/contacts" }}
        secondaryCta={{ label: "Скачать каталог", href: "/catalog" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Линейка"
              title="Продукты MVP"
              description="Стартовая линейка охватывает главные коммерческие и пользовательские сценарии."
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
    </>
  );
}
