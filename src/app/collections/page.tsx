import type { Metadata } from "next";

import { CollectionCard } from "@/components/cards/collection-card";
import { HeroSection } from "@/components/sections/hero-section";
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
        title="Четыре коллекции, под которые уже есть реальные визуальные сценарии."
        description="Садовый модуль, хозяйственный хозблок, SPA-баня и цветочный павильон собраны в единой палитре графита, дерева и теплой подсветки."
        image={{
          src: "/images/products/hozyistvennyi-module/hozblok-obshiy-vid.webp",
          alt: "Хозяйственный модуль из графитового контейнера с деревянными рейками"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Обсудить проект", href: "/contacts" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Направления"
              title="Каждая коллекция отвечает на отдельную задачу участка или бизнеса."
              description="Все карточки используют локальные фотографии из продуктовых папок, поэтому визуальный ряд остается цельным."
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
    </>
  );
}
