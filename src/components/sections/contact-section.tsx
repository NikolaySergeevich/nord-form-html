import { ConsultationForm } from "@/components/forms/consultation-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="bg-background-primary py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Контакт"
              title="Начните с задачи — готовое техническое задание не требуется."
              description="Расскажите о назначении, участке и желаемом размере. Мы подскажем подходящий формат и объясним, какие решения стоит заложить в комплектацию."
            />
            <div className="mt-8 grid gap-3 text-text-secondary">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-md border border-border/80 bg-surface-primary p-6 shadow-sm">
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
