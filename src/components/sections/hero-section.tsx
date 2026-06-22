import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { ImageAsset } from "@/types/content";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: ImageAsset;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  stats
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-background-dark text-text-inverse">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.88]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/10 via-background-dark/24 to-background-dark/84" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-end pb-14 pt-28">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-5xl">
            {eyebrow ? (
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-text-inverse/70">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-5xl text-balance">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-text-inverse/78">{description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button asChild size="lg" variant="inverse">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="ghost" className="text-text-inverse hover:bg-white/10">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
          {stats?.length ? (
            <div className="grid gap-3 rounded-md border border-white/16 bg-white/10 p-5 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-inverse/65">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
