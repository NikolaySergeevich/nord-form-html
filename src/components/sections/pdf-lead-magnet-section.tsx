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
                Сравните решения и определите подходящий формат до консультации.
              </h2>
              <p className="mt-6 max-w-xl text-text-inverse/72">
                В каталоге собраны назначения, варианты комплектации и проектные ориентиры.
                Он поможет сформулировать задачу, даже если пока есть только общая идея.
              </p>
              <Modal
                title="Получить каталог NORD FORM"
                description="Укажите удобный контакт — мы отправим каталог и при необходимости поможем выбрать направление."
                trigger={
                  <Button variant="inverse" size="lg" className="mt-9">
                    Получить каталог
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
