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
          className="relative aspect-[4/3] overflow-hidden rounded-md border border-border/50 bg-surface-muted shadow-sm"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
