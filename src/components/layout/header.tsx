"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500",
        isScrolled
          ? "border-border/70 bg-background-primary/95 shadow-sm backdrop-blur-xl"
          : "border-border/35 bg-background-primary/82 backdrop-blur-md"
      )}
    >
      <Container className="relative flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-4 focus-visible:ring-offset-background-primary"
          aria-label="NORD FORM"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-accent-secondary/35 bg-accent-primary font-display text-xs font-semibold tracking-[0.08em] text-text-inverse transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
            NF
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-text-primary transition-opacity duration-300 group-hover:opacity-70">
            NORD FORM
          </span>
        </Link>
        <Navigation className="hidden lg:flex" />
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="secondary">
            <Link href="/contacts">Обсудить проект</Link>
          </Button>
          <Button asChild>
            <Link href="/catalog">Получить каталог</Link>
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
