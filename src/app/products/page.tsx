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
  description: "Контейнерные продукты NORD FORM для участка, хранения, SPA и бизнеса."
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Продукты"
        title="Контейнерные решения с готовой архитектурной логикой."
        description="Каждый продукт опирается на конкретный сценарий: дровник и гараж, хозяйственное хранение, баня или коммерческая витрина."
        image={{
          src: "/images/products/spa-bath-bany/spa-bany-s-fronta.webp",
          alt: "SPA-баня из графитового контейнера с теплой подсветкой"
        }}
        primaryCta={{ label: "Получить расчет", href: "/contacts" }}
        secondaryCta={{ label: "Скачать каталог", href: "/catalog" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Линейка"
              title="Четыре продукта из локальной фотогалереи"
              description="Линейка теперь полностью совпадает с четырьмя папками фотографий в каталоге products."
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
