import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const principles = [
  {
    title: "Архитектура вместо временной постройки",
    text: "Каждый модуль проектируется как часть участка, дома и сценария жизни, а не как технический объект на заднем плане."
  },
  {
    title: "Фотография как главный аргумент",
    text: "Дизайн сайта строится вокруг больших изображений, спокойной типографики и воздуха, чтобы визуальная ценность продукта была очевидной."
  },
  {
    title: "Путь к решению без давления",
    text: "Посетитель получает коллекции, проекты, материалы, FAQ и только затем понятный следующий шаг: каталог, консультация или расчет."
  }
];

export function PhilosophySection() {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Философия"
              title="Модульность должна выглядеть как архитектура, а не как компромисс."
              description="NORD FORM говорит языком формы, материалов и сценариев использования. Сайт сохраняет эту интонацию: меньше шума, больше доказательств."
            />
          </Reveal>
          <div className="grid gap-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="rounded-md border border-border bg-surface-primary p-6">
                  <h3 className="text-xl font-semibold text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-text-secondary">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
