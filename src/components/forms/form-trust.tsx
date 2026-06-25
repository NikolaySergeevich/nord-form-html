import { TrustList } from "@/components/ui/trust-list";

const formTrustItems = [
  "Первичная консультация без обязательств",
  "Предварительная оценка до начала работ",
  "Все ключевые решения согласуются заранее"
];

type FormTrustProps = {
  intro: string;
};

export function FormTrust({ intro }: FormTrustProps) {
  return (
    <div className="mb-2 rounded-md border border-border/70 bg-surface-muted/45 p-4">
      <p className="text-sm leading-6 text-text-primary">{intro}</p>
      <TrustList items={formTrustItems} className="mt-3" />
    </div>
  );
}
