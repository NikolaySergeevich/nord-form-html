import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/cards/product-card";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { collections } from "@/data/collections";
import { getCollectionBySlug, getProductsByCollection } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.seo.title,
    description: collection.seo.description
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = getProductsByCollection(collection.id);

  return (
    <>
      <HeroSection
        eyebrow="Коллекция"
        title={collection.title}
        description={collection.description}
        image={collection.heroImage}
        primaryCta={{ label: "Скачать PDF", href: "/catalog" }}
        secondaryCta={{ label: "Получить консультацию", href: "/contacts" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeader
                eyebrow={collection.subtitle}
                title="Сценарии использования"
                description={collection.summary}
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {collection.useCases.map((item, index) => (
                <Reveal key={item} delay={index * 0.06}>
                  <div className="rounded-md border border-border bg-surface-primary p-6">
                    <p className="text-sm text-text-secondary">0{index + 1}</p>
                    <h3 className="mt-4 text-xl font-semibold text-text-primary">{item}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-background-secondary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Продукты"
              title="Решения внутри коллекции"
              description="Выберите продукт и перейдите к характеристикам, галерее и расчету."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collectionProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <FAQSection />
      <PdfLeadMagnetSection />
      <ContactSection />
    </>
  );
}
