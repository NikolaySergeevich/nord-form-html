import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-md bg-background-dark text-text-inverse"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-85 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-3 flex gap-3 text-sm text-text-inverse/75">
            {project.location ? <span>{project.location}</span> : null}
            {project.year ? <span>{project.year}</span> : null}
          </div>
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <p className="mt-3 max-w-xl text-sm text-text-inverse/80">{project.summary}</p>
        </div>
      </div>
    </Link>
  );
}
