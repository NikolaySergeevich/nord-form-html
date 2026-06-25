import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/cards/project-card";
import { CalculationForm } from "@/components/forms/calculation-form";
import { ImageGallery } from "@/components/gallery/image-gallery";
import { FAQSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { products } from "@/data/products";
import { getProductBySlug, getProjectsByProduct } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.seo.title,
    description: product.seo.description
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProjects = getProjectsByProduct(product.id);

  return (
    <>
      <HeroSection
        eyebrow="Продукт"
        title={product.title}
        description={product.description}
        image={product.heroImage}
        primaryCta={{ label: "Рассчитать модуль", href: "#calculation" }}
        secondaryCta={{ label: "Получить каталог", href: "/catalog" }}
        stats={[
          { value: product.area ?? "по задаче", label: "площадь" },
          { value: product.dimensions ?? "адаптивно", label: "габариты" },
          { value: product.basePrice ?? "по расчету", label: "стоимость" }
        ]}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Характеристики"
                title="Готовая основа, которую можно адаптировать под ваш сценарий."
                description={product.summary}
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {product.specs.map((spec, index) => (
                <Reveal key={spec.label} delay={index * 0.06}>
                  <div className="rounded-md border border-border bg-surface-primary p-6">
                    <p className="text-sm text-text-secondary">{spec.label}</p>
                    <p className="mt-3 text-xl font-semibold text-text-primary">{spec.value}</p>
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
              eyebrow="Галерея"
              title="Пространство, материалы и детали в разных ракурсах."
              description="Галерея помогает оценить пропорции, внутреннюю организацию и характер объекта до обсуждения индивидуальной комплектации."
            />
          </Reveal>
          <div className="mt-12">
            <ImageGallery images={product.gallery} />
          </div>
        </Container>
      </section>
      <section id="calculation" className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Расчет"
                title="Получите предварительную оценку под вашу задачу."
                description="Укажите назначение, место установки и желаемый размер. Мы уточним комплектацию и объясним, из чего будет складываться решение."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-md border border-border bg-surface-primary p-6 shadow-sm">
                <CalculationForm defaultProductId={product.id} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      {relatedProjects.length ? (
        <section className="bg-background-secondary py-24">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Проекты"
                title="Проектные сценарии на основе этого решения"
                description="Посмотрите, какую задачу решал модуль, как была организована конструкция и какой результат получил владелец."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {relatedProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.06}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <FAQSection items={product.faq} />
      <PdfLeadMagnetSection />
    </>
  );
}
