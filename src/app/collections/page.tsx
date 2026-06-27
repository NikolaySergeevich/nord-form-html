import type { Metadata } from "next";

import { CollectionCard } from "@/components/cards/collection-card";
import { AudienceSection } from "@/components/sections/audience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Коллекции",
  description: "Коллекции NORD FORM: садовый модуль, хозяйственный модуль, SPA-баня и цветочный павильон."
};

export default function CollectionsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Коллекции"
        title="Архитектурные направления для жизни и бизнеса."
        description="Каждая коллекция задаёт сценарий пространства. Конфигурацию, материалы и инженерные системы можно адаптировать под участок, сезонность и задачу."
        image={{
          src: "/images/products/hozyistvennyi-module/hozblok-obshiy-vid.webp",
          alt: "Хозяйственный модуль из графитового контейнера с деревянными рейками"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
      />
      <AudienceSection />
      <section id="collections" className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Направления"
              title="Назначение задаёт форму."
              description="Коллекции помогают выбрать логику пространства и внешний образ. На консультации мы уточняем размер, сезонность, инженерную часть и условия установки."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((collection, index) => (
              <Reveal key={collection.id} delay={index * 0.06}>
                <CollectionCard collection={collection} />
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
