import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const reasons = [
  {
    title: "Архитектура вместо типовой оболочки",
    text: "Мы работаем не с готовой коробкой, а с будущим пространством: его пропорциями, ритмом фасада, светом и тем, как объект будет восприниматься рядом с домом или брендом."
  },
  {
    title: "Проектирование под реальный сценарий",
    text: "Планировка начинается с жизни внутри: где человек хранит вещи, отдыхает, работает, встречает клиента или обслуживает инженерные системы."
  },
  {
    title: "Конструкция и инженерия связаны заранее",
    text: "Проёмы, усиления, утепление, вентиляция и электрика рассматриваются вместе, чтобы эстетика не спорила с надёжностью."
  },
  {
    title: "Промышленная основа с человеческим масштабом",
    text: "Морской контейнер даёт прочность и ясную геометрию, а дерево, свет, фасадные детали и планировка превращают его в место для жизни или работы."
  },
  {
    title: "Адаптация под участок",
    text: "До производства учитываются подъезд, основание, рельеф, размещение входов, видовые точки и то, как модуль будет встроен в ежедневный маршрут."
  },
  {
    title: "Понятный путь до результата",
    text: "Каждый этап согласуется последовательно: от первой идеи и концепции до производства, доставки и установки — без ощущения, что клиент должен разбираться во всём сам."
  }
];

export function PhilosophySection() {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Почему Nord Form"
              title="Мы соединяем архитектурный замысел, инженерную точность и спокойный визуальный характер."
              description="Nord Form существует для тех, кто не хочет выбирать между практичностью и эстетикой. Мы создаём модульные здания, которые выглядят как часть продуманной среды, а не как временное решение."
            />
          </Reveal>
          <div className="grid gap-4">
            {reasons.map((item, index) => (
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
