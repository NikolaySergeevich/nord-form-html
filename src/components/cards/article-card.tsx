import Image from "next/image";
import Link from "next/link";

import type { BlogArticle } from "@/types/content";

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-md border border-border/80 bg-surface-primary shadow-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-accent-secondary/45 hover:shadow-md focus-visible:-translate-y-1 focus-visible:border-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/16 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-35" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
          {article.category}
        </p>
        <h3 className="mt-4 text-2xl font-medium text-text-primary transition-colors duration-300 group-hover:text-accent-secondary">{article.title}</h3>
        <p className="mt-4 text-sm leading-7 text-text-secondary">{article.excerpt}</p>
      </div>
    </Link>
  );
}
