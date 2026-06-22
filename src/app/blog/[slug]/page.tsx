import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ArticleCard } from "@/components/cards/article-card";
import { ProductCard } from "@/components/cards/product-card";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { blogArticles, blogCategories } from "@/data/blog";
import { products } from "@/data/products";
import { getArticleBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...blogArticles.map((article) => ({
      slug: article.slug
    })),
    ...blogCategories.map((category) => ({
      slug: category.slug
    }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = blogCategories.find((item) => item.slug === slug);

  if (!article) {
    return category
      ? {
          title: category.title,
          description: category.description
        }
      : {};
  }

  return {
    title: article.seo.title,
    description: article.seo.description
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const category = blogCategories.find((item) => item.slug === slug);

  if (!article && category) {
    const categoryArticles = blogArticles.filter(
      (item) => item.category === category.slug
    );

    return (
      <>
        <section className="bg-background-primary py-28">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Категория блога"
                title={category.title}
                description={category.description}
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {categoryArticles.map((item, index) => (
                <Reveal key={item.id} delay={index * 0.06}>
                  <ArticleCard article={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        <PdfLeadMagnetSection />
      </>
    );
  }

  if (!article) {
    notFound();
  }

  const relatedProducts = products.filter((product) =>
    article.relatedProductIds.includes(product.id)
  );

  return (
    <>
      <article className="bg-background-primary">
        <div className="relative min-h-[70vh] overflow-hidden bg-background-dark text-text-inverse">
          <Image
            src={article.coverImage.src}
            alt={article.coverImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-68"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/10 via-background-dark/30 to-background-dark/88" />
          <Container className="relative flex min-h-[70vh] items-end pb-14 pt-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-inverse/65">
                {article.category}
              </p>
              <h1 className="mt-5 text-balance">{article.title}</h1>
              <p className="mt-6 max-w-2xl text-lg text-text-inverse/75">
                {article.excerpt}
              </p>
              <p className="mt-6 text-sm text-text-inverse/55">
                {article.readingTime} · {article.publishedAt}
              </p>
            </div>
          </Container>
        </div>
        <Container className="py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-lg leading-8 text-text-secondary">
              <p>
                Материал построен как практический ориентир перед консультацией:
                он помогает определить сценарий, понять ограничения и перейти к выбору
                коллекции или продукта.
              </p>
              <p className="mt-6">
                Для точного решения важны участок, назначение объекта, сезонность,
                инженерия и желаемый визуальный образ. Поэтому следующий шаг после статьи
                — каталог или консультация.
              </p>
              <Button asChild className="mt-8">
                <Link href="/catalog">Получить каталог</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </article>
      {relatedProducts.length ? (
        <section className="bg-background-secondary py-24">
          <Container>
            <Reveal>
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-secondary">
                  Связанные решения
                </p>
                <h2>Продукты, которые продолжают тему статьи.</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.06}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <PdfLeadMagnetSection />
    </>
  );
}
