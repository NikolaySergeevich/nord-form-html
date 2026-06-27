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
  "Материалы подбираются под реальный режим жизни объекта, а не только под красивый рендер",
  "Электрика, вентиляция и свет проектируются как часть архитектурного сценария",
  "Проёмы, усиления и фасадные элементы связываются с конструкцией до сборки",
  "Основание, доставка и установка учитываются заранее, чтобы объект спокойно занял своё место"
];

export default function ProductionPage() {
  return (
    <>
      <HeroSection
        eyebrow="Производство"
        title="Инженерия делает архитектуру долговечной."
        description="Мы заранее связываем конструкцию, планировку, инженерные системы, фасад и условия установки. Так образ на рендере становится понятным, долговечным и технически реализуемым объектом."
        image={{
          src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp",
          alt: "Внутреннее хранение и материалы хозяйственного модуля"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
      />
      <ProductionSection />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Отношение к деталям"
              title="Эстетика держится на технологии."
              description="Сварной шов, проём, элемент фасада и линия подсветки становятся частью единой архитектурной идеи. Поэтому технические решения принимаются не отдельно от образа, а вместе с ним."
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
