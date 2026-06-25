import Image from "next/image";
import Link from "next/link";

import type { BlogArticle } from "@/types/content";

export function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-md border border-border/80 bg-surface-primary shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent-secondary/45 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
        />
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
