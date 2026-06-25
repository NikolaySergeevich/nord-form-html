import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

type TrustListProps = {
  items: string[];
  className?: string;
  inverse?: boolean;
};

export function TrustList({ items, className, inverse = false }: TrustListProps) {
  return (
    <ul
      className={cn(
        "grid gap-2 text-sm",
        inverse ? "text-text-inverse/75" : "text-text-secondary",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check
            className={cn(
              "mt-1 h-3.5 w-3.5 shrink-0",
              inverse ? "text-accent-soft" : "text-accent-secondary"
            )}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
