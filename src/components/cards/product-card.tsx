import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group grid overflow-hidden rounded-md border border-border bg-surface-primary transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4 text-sm text-text-secondary">
          <span>{product.area}</span>
          <span>{product.basePrice}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-text-primary">{product.title}</h3>
        <p className="mt-3 text-sm text-text-secondary">{product.summary}</p>
      </div>
    </Link>
  );
}
