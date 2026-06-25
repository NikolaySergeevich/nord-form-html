import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-md border border-text-inverse/10 bg-background-dark text-text-inverse shadow-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-accent-soft/35 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:border-accent-soft/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft/40"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 image-overlay transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-4 flex gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-accent-soft">
            {project.location ? <span>{project.location}</span> : null}
            {project.year ? <span>{project.year}</span> : null}
          </div>
          <h3 className="text-2xl font-medium">{project.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-text-inverse/75">{project.summary}</p>
        </div>
      </div>
    </Link>
  );
}
