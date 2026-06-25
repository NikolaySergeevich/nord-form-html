import Image from "next/image";
import Link from "next/link";

import type { Collection } from "@/types/content";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block overflow-hidden rounded-md border border-border/70 bg-surface-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent-secondary/45 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={collection.heroImage.src}
          alt={collection.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 image-overlay" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
          Коллекция
        </p>
        <h3 className="mt-4 text-2xl font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-secondary">{collection.title}</h3>
        <p className="mt-4 text-sm leading-7 text-text-secondary">{collection.summary}</p>
      </div>
    </Link>
  );
}
