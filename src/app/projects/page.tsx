import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Проекты",
  description: "Реализованные модульные проекты NORD FORM."
};

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Проекты"
        title="Реальные объекты, которые работают сильнее обещаний."
        description="Проектные страницы показывают масштаб, материалы, сценарий и решение в окружении участка."
        image={{
          src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85",
          alt: "Современный архитектурный объект среди зелени"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Галерея реализаций"
              title="Проекты MVP"
              description="Стартовый набор проектных историй показывает, как модульная архитектура выглядит на участке."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
