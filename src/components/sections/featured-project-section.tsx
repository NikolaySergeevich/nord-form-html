import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";

export function FeaturedProjectSection() {
  const featured = projects[0];

  return (
    <section className="bg-background-primary py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeader
              eyebrow="Реализация"
              title="Проекты показывают масштаб, материалы и вечернее ощущение объекта."
              description="Сайт строится вокруг крупных фотографий контейнерных модулей: графитовый металл, дерево, свет и понятный сценарий."
            />
          </Reveal>
          <Button asChild variant="secondary">
            <Link href="/projects">Все проекты</Link>
          </Button>
        </div>
        <Reveal>
          <ProjectCard project={featured} />
        </Reveal>
      </Container>
    </section>
  );
}
