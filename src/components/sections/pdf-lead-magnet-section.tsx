import Image from "next/image";

import { CatalogForm } from "@/components/forms/catalog-form";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Modal } from "@/components/ui/modal";
import { Reveal } from "@/components/ui/reveal";

export function PdfLeadMagnetSection() {
  return (
    <section className="bg-background-secondary py-24">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden rounded-md bg-accent-primary text-text-inverse lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-inverse/60">
                PDF каталог
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-text-inverse">
                Получите каталог модульных решений и выберите направление до консультации.
              </h2>
              <p className="mt-6 max-w-xl text-text-inverse/72">
                Внутри: коллекции, сценарии использования, комплектации, проекты и вопросы,
                которые стоит обсудить перед расчетом.
              </p>
              <Modal
                title="Получить каталог NORD FORM"
                description="Оставьте контакты, и мы подготовим каталог для вашего сценария."
                trigger={
                  <Button variant="inverse" size="lg" className="mt-9">
                    Получить PDF
                  </Button>
                }
              >
                <CatalogForm />
              </Modal>
            </div>
            <div className="relative min-h-[320px]">
              <Image
                src="/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-pervyi-variant.webp"
                alt="Интерьер цветочного модуля с растениями и теплой подсветкой"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
