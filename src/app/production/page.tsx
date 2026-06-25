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
  "Утепление и материалы подбираются под режим эксплуатации",
  "Электрика, вентиляция и другие системы проектируются заранее",
  "Проёмы и усиления связываются с конструкцией модуля",
  "Основание, доставка и установка учитываются до начала сборки"
];

export default function ProductionPage() {
  return (
    <>
      <HeroSection
        eyebrow="Производство"
        title="Предсказуемый результат начинается с подготовки до производства."
        description="Мы заранее связываем конструкцию, планировку, инженерные системы, фасад и условия установки. Так красивый образ остаётся технически реализуемым."
        image={{
          src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp",
          alt: "Внутреннее хранение и материалы хозяйственного модуля"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Получить каталог", href: "/catalog" }}
      />
      <ProductionSection />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Доверие"
              title="Что делает модуль полноценным зданием."
              description="Не только выразительный фасад, но и подготовленная конструкция, понятная инженерия, корректное основание и доступ для обслуживания."
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
