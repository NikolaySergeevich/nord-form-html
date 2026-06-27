import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group grid overflow-hidden rounded-md border border-border/80 bg-surface-primary shadow-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-accent-secondary/45 hover:shadow-md focus-visible:-translate-y-1 focus-visible:border-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus/40"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/14 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-text-secondary">
          <span>{product.area}</span>
          <span>{product.basePrice}</span>
        </div>
        <h3 className="mt-4 text-2xl font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-secondary">{product.title}</h3>
        <p className="mt-4 text-sm leading-7 text-text-secondary">{product.summary}</p>
      </div>
    </Link>
  );
}
