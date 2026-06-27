import { CollectionCard } from "@/components/cards/collection-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { collections } from "@/data/collections";

export function CollectionsSection() {
  return (
    <section className="bg-background-secondary py-24">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Коллекции"
            title="Сценарии, которые можно адаптировать."
            description="Садовый модуль, хозяйственное хранение, приватная SPA-зона или коммерческий павильон — с ясной логикой пространства и возможностью настроить комплектацию."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((collection, index) => (
            <Reveal key={collection.id} delay={index * 0.06}>
              <CollectionCard collection={collection} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
