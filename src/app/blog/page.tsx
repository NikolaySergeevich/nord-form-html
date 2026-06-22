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
        title="Статьи, которые помогают выбрать решение, а не просто собрать трафик."
        description="Блог NORD FORM работает как часть продажи: объясняет, вдохновляет и ведет к следующему осознанному шагу."
        image={{
          src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85",
          alt: "Современный фасад загородного дома"
        }}
        primaryCta={{ label: "Получить каталог", href: "/catalog" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Материалы"
              title="Стартовые SEO-статьи"
              description="Каждая статья связывает поисковый интерес с продуктом, проектом или лид-магнитом."
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
