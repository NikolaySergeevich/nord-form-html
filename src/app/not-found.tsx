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
            Возможно, страница была перемещена. Вернитесь к коллекциям или каталогу.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild>
              <Link href="/collections">Коллекции</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/catalog">Каталог</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
