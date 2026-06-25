import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-background-primary py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-secondary">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-text-primary">
            Страница не найдена
          </h1>
          <p className="mt-4 text-text-secondary">
            Возможно, адрес изменился. Перейдите к готовым решениям или получите каталог.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link href="/collections">Смотреть решения</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/catalog">Получить каталог</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
