import type { Metadata } from "next";

import { AudienceSection } from "@/components/sections/audience-section";
import { BrandBeliefsSection } from "@/components/sections/brand-beliefs-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { BrandValuesSection } from "@/components/sections/brand-values-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EmotionalStatementSection } from "@/components/sections/emotional-statement-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductionSection } from "@/components/sections/production-section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Философия NORD FORM: современная модульная архитектура из морских контейнеров для жизни, участка и бизнеса."
};

const originStory = [
  {
    title: "Почему появилась идея Nord Form",
    description:
      "Мы видели, как модульные здания часто воспринимаются как временная мера: практично, быстро, но без характера. Нам захотелось доказать обратное — что модуль может быть спокойным, долговечным и архитектурным."
  },
  {
    title: "Какую проблему мы решаем",
    description:
      "На участке и в бизнесе часто не хватает небольшого, но продуманного пространства: для хранения, отдыха, работы, витрины или сервиса. Мы собираем эти функции в цельный объект, который не приходится прятать."
  },
  {
    title: "Почему модульная архитектура",
    description:
      "Модульность даёт ясную геометрию, контролируемое производство и предсказуемый путь проекта. А морской контейнер даёт прочную основу, которую можно превратить в архитектуру с собственным характером."
  },
  {
    title: "Как рождаются проекты",
    description:
      "Сначала мы слушаем сценарий: как человек будет пользоваться пространством каждый день. Затем связываем планировку, конструкцию, материалы, фасад и инженерные узлы в одно решение."
  }
] as const;

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="О компании"
        title="Пространства из промышленной основы."
        description="Мы верим, что модульное здание может быть не компромиссом, а точной архитектурой: спокойной, функциональной и рассчитанной на долгую жизнь."
        image={{
          src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
          alt: "Графитовый модуль Nord Form с деревянными рейками на участке"
        }}
        primaryCta={{ label: "Обсудить проект", href: "/contacts" }}
        secondaryCta={{ label: "Смотреть проекты", href: "/projects" }}
      />
      <BrandStorySection />
      <section className="bg-background-secondary py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="История подхода"
              title="Даже небольшое здание имеет право на архитектуру."
              description="Ответ стал основой Nord Form. Мы работаем с модулем как с архитектурным объектом: внимательно к пропорциям, честно к функции и спокойно к деталям."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {originStory.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-md border border-border bg-surface-primary p-6 shadow-sm">
                  <p className="text-sm text-text-secondary">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-text-secondary">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <BrandBeliefsSection />
      <EmotionalStatementSection index={1} inverse />
      <BrandValuesSection />
      <AudienceSection />
      <ProductionSection />
      <ContactSection />
    </>
  );
}

