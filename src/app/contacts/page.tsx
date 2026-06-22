import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с NORD FORM и получить консультацию по модульному проекту."
};

export default function ContactsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Контакты"
        title="Расскажите, какой объект нужен вашему участку или бизнесу."
        description="Мы поможем выбрать одну из четырех коллекций, уточнить сценарий и перейти к расчету без лишней суеты."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
          alt: "Боковой вид садового модуля из графитового контейнера"
        }}
        primaryCta={{ label: "Оставить заявку", href: "#contact-form" }}
        secondaryCta={{ label: "Скачать каталог", href: "/catalog" }}
      />
      <div id="contact-form">
        <ContactSection />
      </div>
    </>
  );
}
