import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group grid overflow-hidden rounded-md border border-border/80 bg-surface-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent-secondary/45 hover:shadow-md"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
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
