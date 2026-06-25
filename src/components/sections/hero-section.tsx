import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

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
  trustPoints?: string[];
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  stats,
  trustPoints = [
    "Консультация без обязательств",
    "Предварительная оценка",
    "Решение под вашу задачу"
  ]
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-background-dark text-text-inverse">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.82]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/18 via-background-dark/34 to-background-dark/92" />
      <Container className="relative flex min-h-[calc(100svh-5rem)] items-end pb-8 pt-16 sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28">
        <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12">
          <div className="max-w-5xl">
            {eyebrow ? (
              <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent-soft sm:mb-6 sm:text-xs sm:tracking-[0.24em]">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="max-w-5xl text-balance text-[clamp(2.5rem,11vw,6.75rem)]">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-text-inverse/80 sm:mt-7 sm:text-lg sm:leading-8">{description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              {primaryCta ? (
                <Button asChild size="lg" variant="inverse" className="w-full sm:w-auto">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="ghost" className="w-full border border-text-inverse/30 text-text-inverse hover:border-accent-soft hover:bg-accent-soft/10 hover:text-accent-soft sm:w-auto">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
            {trustPoints.length ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-inverse/70 sm:mt-6">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5">
                    <Check
                      className="h-3.5 w-3.5 text-accent-soft"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {stats?.length ? (
            <div className="hidden gap-4 rounded-md border border-text-inverse/18 bg-background-dark/35 p-6 backdrop-blur-md md:grid md:grid-cols-3 lg:grid-cols-1">
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
