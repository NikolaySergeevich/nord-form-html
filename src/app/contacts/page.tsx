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
        title="Расскажите о задаче — мы поможем собрать подходящий модуль."
        description="На первом этапе достаточно знать назначение, место установки и примерный размер. Остальные решения разберём вместе и подготовим предварительную оценку."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
          alt: "Боковой вид садового модуля из графитового контейнера"
        }}
        primaryCta={{ label: "Обсудить проект", href: "#contact-form" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
      />
      <div id="contact-form">
        <ContactSection />
      </div>
    </>
  );
}
