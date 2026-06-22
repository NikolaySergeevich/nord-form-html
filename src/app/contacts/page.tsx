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
        description="Мы поможем выбрать коллекцию, уточнить сценарий и перейти к расчету без лишней суеты."
        image={{
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85",
          alt: "Современная архитектурная студия"
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
