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
        className="object-cover opacity-[0.82]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/18 via-background-dark/34 to-background-dark/92" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-end pb-14 pt-28">
        <div className="grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-5xl">
            {eyebrow ? (
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-5xl text-balance">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-text-inverse/75">{description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button asChild size="lg" variant="inverse">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="ghost" className="border border-text-inverse/30 text-text-inverse hover:border-accent-soft hover:bg-accent-soft/10 hover:text-accent-soft">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
          {stats?.length ? (
            <div className="grid gap-4 rounded-md border border-text-inverse/18 bg-background-dark/35 p-6 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-medium tracking-[-0.03em]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.08em] text-text-inverse/60">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
