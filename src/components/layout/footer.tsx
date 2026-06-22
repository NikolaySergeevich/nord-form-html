import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background-dark py-16 text-text-inverse">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.22em]">
              NORD FORM
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-text-inverse/70">
              Современная модульная архитектура для участка, отдыха, хранения и бизнеса.
            </p>
            <Button asChild variant="inverse" className="mt-8">
              <Link href="/contacts">Обсудить проект</Link>
            </Button>
          </div>
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-inverse/60">
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-inverse/75 transition hover:text-text-inverse"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-text-inverse/55 md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>© 2026 NORD FORM</p>
        </div>
      </Container>
    </footer>
  );
}
