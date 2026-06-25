import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";

const reasons = [
  {
    title: "Архитектура вместо типовой оболочки",
    text: "Модуль проектируется как часть участка или бренда: с выверенными пропорциями, фасадом, остеклением и светом."
  },
  {
    title: "Проектирование под реальный сценарий",
    text: "Планировка начинается с того, как объект будет использоваться ежедневно, что должно храниться внутри и какие системы потребуются."
  },
  {
    title: "Конструкция и инженерия связаны заранее",
    text: "Проёмы, усиления, утепление, вентиляция и электрика рассматриваются вместе, а не добавляются по отдельности в процессе сборки."
  },
  {
    title: "Заводская подготовка",
    text: "Основные работы выполняются в контролируемых условиях. На участок приезжает объект с заранее согласованной планировкой и комплектацией."
  },
  {
    title: "Адаптация под участок",
    text: "До производства учитываются подъезд, основание, рельеф, размещение входов и подключение инженерных коммуникаций."
  },
  {
    title: "Понятный путь до результата",
    text: "Каждый этап согласуется последовательно: от первой идеи и концепции до производства, доставки и установки."
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
              title="Мы соединяем архитектурный замысел с производственной логикой."
              description="Доверие строится не на обещаниях, а на понятных решениях: что проектируется, как производится и что будет происходить на каждом этапе."
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
