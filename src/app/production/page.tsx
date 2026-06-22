import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { ProductionSection } from "@/components/sections/production-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Производство",
  description: "Производственный процесс NORD FORM: материалы, сборка и контроль качества."
};

const productionProof = [
  "Материалы подбираются под сезонность и сценарий использования",
  "Инженерные решения продумываются до изготовления",
  "Фасад и интерьер собираются в единой визуальной системе",
  "Доставка и монтаж планируются как часть проекта"
];

export default function ProductionPage() {
  return (
    <>
      <HeroSection
        eyebrow="Производство"
        title="Качество модульного объекта начинается до монтажа."
        description="Мы показываем процесс, материалы и проектную логику, чтобы доверие строилось не на обещаниях, а на прозрачности."
        image={{
          src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85",
          alt: "Архитектурное производство и материалы"
        }}
        primaryCta={{ label: "Получить консультацию", href: "/contacts" }}
        secondaryCta={{ label: "Скачать каталог", href: "/catalog" }}
      />
      <ProductionSection />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Доверие"
              title="Что обязательно раскрывает производственная страница."
              description="Посетитель должен увидеть не только красивый результат, но и систему, которая этот результат делает повторяемым."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {productionProof.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-md border border-border bg-surface-primary p-6">
                  <p className="text-sm text-text-secondary">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-text-primary">{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <PdfLeadMagnetSection />
      <ContactSection />
    </>
  );
}
