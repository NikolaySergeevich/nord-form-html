import type { Metadata } from "next";

import { ArticleCard } from "@/components/cards/article-card";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { blogArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Блог",
  description: "Идеи, статьи и рекомендации NORD FORM о модульной архитектуре."
};

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Блог"
        title="Статьи, которые помогают выбрать контейнерное решение."
        description="Блог объясняет планировку, хранение, фасады, витрины и следующий осознанный шаг перед расчетом."
        image={{
          src: "/images/products/spa-bath-bany/spa-bany-s-zadi-drova.webp",
          alt: "SPA-баня из контейнера с дровником и теплой подсветкой"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Материалы"
              title="Материалы по четырем коллекциям"
              description="Каждая статья связана с продуктом, коллекцией или каталогом и использует тот же визуальный язык."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.06}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <PdfLeadMagnetSection />
    </>
  );
}
