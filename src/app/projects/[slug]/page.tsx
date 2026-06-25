import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ImageGallery } from "@/components/gallery/image-gallery";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PdfLeadMagnetSection } from "@/components/sections/pdf-lead-magnet-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title,
    description: project.seo.description
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <HeroSection
        eyebrow="Проект"
        title={project.title}
        description={project.summary}
        image={project.heroImage}
        primaryCta={{ label: "Обсудить похожую задачу", href: "/contacts" }}
        secondaryCta={{ label: "Получить каталог", href: "/catalog" }}
        stats={project.specs.map((spec) => ({
          value: spec.value,
          label: spec.label
        }))}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow="Задача"
                title={project.challenge ?? "Сформировать архитектурный сценарий без визуального компромисса."}
                description="Сначала фиксируем практическую потребность, условия участка и ограничения, которые должны учитывать планировка и конструкция."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeader
                eyebrow="Решение"
                title={project.solution ?? "Подобрать модуль, материалы и фасадную композицию под задачу."}
                description="Затем связываем пространство, инженерные узлы и фасад. Результат должен быть удобным в эксплуатации и цельным визуально."
              />
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="bg-background-secondary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Результат"
              title="Как решение выглядит и работает в пространстве."
              description="Ракурсы показывают пропорции, организацию внутренних зон и архитектурный характер готового объекта."
            />
          </Reveal>
          <div className="mt-12">
            <ImageGallery images={project.gallery} />
          </div>
        </Container>
      </section>
      <PdfLeadMagnetSection />
      <ContactSection />
    </>
  );
}
