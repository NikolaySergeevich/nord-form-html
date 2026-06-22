import Image from "next/image";
import Link from "next/link";

import type { Collection } from "@/types/content";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block overflow-hidden rounded-md bg-surface-primary shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={collection.heroImage.src}
          alt={collection.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 image-overlay" />
      </div>
      <div className="p-5">
        <p className="text-sm uppercase tracking-[0.18em] text-accent-secondary">
          Коллекция
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-text-primary">{collection.title}</h3>
        <p className="mt-3 text-sm text-text-secondary">{collection.summary}</p>
      </div>
    </Link>
  );
}
