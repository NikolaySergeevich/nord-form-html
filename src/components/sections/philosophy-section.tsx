import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const principles = [
  {
    title: "Конструкция, рассчитанная на задачу",
    text: "Металлическая основа, проёмы, утепление и инженерные узлы продумываются под назначение модуля, сезонность и условия участка."
  },
  {
    title: "Заводская подготовка до доставки",
    text: "Основные работы выполняются в контролируемых условиях. На участок приезжает подготовленный объект с заранее согласованной планировкой и комплектацией."
  },
  {
    title: "Архитектура без ощущения бытовки",
    text: "Пропорции, фасад, дерево, остекление и свет собираются в цельный образ, который поддерживает дом, ландшафт или характер бизнеса."
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
              title="Контейнер — не компромисс. Это прочная основа для современной архитектуры."
              description="Мы превращаем индустриальную конструкцию в продуманное пространство: для хранения, работы, отдыха или собственного бизнеса."
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
