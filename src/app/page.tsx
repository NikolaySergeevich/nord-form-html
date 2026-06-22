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
        eyebrow="Modern Modular Architecture"
        title="Модульные пространства, которые выглядят как архитектура."
        description="NORD FORM создает премиальные модульные решения для отдыха, участка, хранения и бизнеса. Сайт ведет от вдохновения к каталогу, расчету и консультации."
        image={{
          src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=85",
          alt: "Современный модульный дом в лесу"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
        stats={[
          { value: "4", label: "архитектурные коллекции" },
          { value: "3", label: "ключевых CTA без перегруза" },
          { value: "PDF", label: "каталог как первый шаг" }
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
