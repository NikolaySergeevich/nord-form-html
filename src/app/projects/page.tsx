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
  description: "Проектные сценарии NORD FORM для четырех контейнерных коллекций."
};

export default function ProjectsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Проекты"
        title="Проектные сценарии, построенные вокруг реальных фотографий."
        description="Здесь видно масштаб, материалы, свет и назначение каждого контейнерного решения."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
          alt: "Садовый модуль с дровником и вечерней подсветкой"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть коллекции", href: "/collections" }}
      />
      <section className="bg-background-primary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Галерея реализаций"
              title="Четыре проектные истории"
              description="Каждая история привязана к одной из актуальных коллекций и ее фотографиям."
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
