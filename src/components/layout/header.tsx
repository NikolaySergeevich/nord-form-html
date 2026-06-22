import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background-primary/90 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="NORD FORM">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent-primary text-sm font-semibold text-text-inverse">
            NF
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-text-primary">
            NORD FORM
          </span>
        </Link>
        <Navigation className="hidden lg:flex" />
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="secondary">
            <Link href="/contacts">Консультация</Link>
          </Button>
          <Button asChild>
            <Link href="/catalog">Каталог</Link>
          </Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
