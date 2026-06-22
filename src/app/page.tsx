import { CollectionsSection } from "@/components/sections/collections-section";
import { ContactSection } from "@/components/sections/contact-section";
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
        eyebrow="Graphite modular architecture"
        title="Контейнерные модули в графите, дереве и теплом свете."
        description="NORD FORM создает садовые модули, хозяйственные хозблоки, SPA-бани и коммерческие павильоны на базе морских контейнеров."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
          alt: "Садовый модуль из графитового контейнера с дровником и теплой подсветкой"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
        stats={[
          { value: "4", label: "коллекции с фото" },
          { value: "40 ft", label: "основа ключевых решений" },
          { value: "PDF", label: "каталог для сравнения" }
        ]}
      />
      <PhilosophySection />
      <CollectionsSection />
      <FeaturedProjectSection />
      <ProductionSection />
      <FAQSection />
      <PdfLeadMagnetSection />
      <ContactSection />
    </>
  );
}
