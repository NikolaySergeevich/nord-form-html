import Image from "next/image";

import type { ImageAsset } from "@/types/content";

export function ImageGallery({ images }: { images: ImageAsset[] }) {
  if (!images.length) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-md border border-border/50 bg-surface-muted shadow-sm transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-0.5 hover:border-accent-secondary/35 hover:shadow-md"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/12 via-transparent to-transparent opacity-45 transition-opacity duration-500 group-hover:opacity-20" />
        </div>
      ))}
    </div>
  );
}
