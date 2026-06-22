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
  description: "Коллекции NORD FORM: SPA, участок, хранение и бизнес."
};

export default function CollectionsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Коллекции"
        title="Выберите сценарий, а не просто модуль."
        description="Коллекции помогают начать с назначения объекта: восстановление, работа на участке, хранение или коммерческий запуск."
        image={{
          src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=85",
          alt: "Современная архитектура на участке"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Обсудить проект", href: "/contacts" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Направления"
              title="Каждая коллекция отвечает на отдельную задачу."
              description="Мы разделили решения так, чтобы путь пользователя начинался с понятного сценария."
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
