import Image from "next/image";
import Link from "next/link";

import type { BlogArticle } from "@/types/content";

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-md border border-border bg-surface-primary transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-sm uppercase tracking-[0.18em] text-accent-secondary">
          {article.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-text-primary">{article.title}</h3>
        <p className="mt-3 text-sm text-text-secondary">{article.excerpt}</p>
      </div>
    </Link>
  );
}
