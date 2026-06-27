import { CollectionsSection } from "@/components/sections/collections-section";
import { ContactSection } from "@/components/sections/contact-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { EmotionalStatementSection } from "@/components/sections/emotional-statement-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedProjectSection } from "@/components/sections/featured-project-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProductionSection } from "@/components/sections/production-section";

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Модульная архитектура из морских контейнеров"
        title="Современные модульные здания для участка, бизнеса и жизни."
        description="Проектируем архитектурные модули с долговечной металлической основой, продуманной инженерией и выразительным сочетанием графита, дерева и тёплого света."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
          alt: "Садовый модуль из графитового контейнера с дровником и теплой подсветкой"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
        stats={[
          { value: "4", label: "готовых направления" },
          { value: "40 ft", label: "основа ключевых модулей" },
          { value: "Под задачу", label: "инженерия и комплектация" }
        ]}
      />
      <BrandStorySection variant="warm" />
      <PhilosophySection />
      <CollectionsSection />
      <FeaturedProjectSection />
      <EmotionalStatementSection index={2} />
      <ProductionSection />
      <FAQSection />
      <PdfLeadMagnetSection />
      <ContactSection />
    </>
  );
}
