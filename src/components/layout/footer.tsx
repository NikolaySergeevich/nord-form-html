import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-accent-secondary/20 bg-background-dark py-16 text-text-inverse">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.24em]">
              NORD FORM
            </Link>
            <p className="mt-5 max-w-md font-display text-2xl leading-tight text-text-inverse">
              Архитектура для жизни. Инженерия на десятилетия.
            </p>
            <p className="mt-5 max-w-md text-sm leading-7 text-text-inverse/65">
              Создаём модульные пространства, где функция, материалы, свет и конструкция работают как единое решение.
            </p>
            <Button asChild variant="inverse" className="mt-8">
              <Link href="/contacts">Обсудить проект</Link>
            </Button>
          </div>
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-inverse/70 transition-colors duration-300 hover:text-accent-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-text-inverse/10 pt-6 text-xs uppercase tracking-[0.08em] text-text-inverse/50 md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>© 2026 NORD FORM</p>
        </div>
      </Container>
    </footer>
  );
}
