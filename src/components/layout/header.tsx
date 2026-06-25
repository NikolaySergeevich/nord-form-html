import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background-primary/92 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="NORD FORM">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-accent-secondary/35 bg-accent-primary font-display text-xs font-semibold tracking-[0.08em] text-text-inverse">
            NF
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-text-primary">
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
