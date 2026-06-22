import Link from "next/link";

import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavigationProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Navigation({ className, onNavigate }: NavigationProps) {
  return (
    <nav className={cn("flex items-center gap-7", className)} aria-label="Основная навигация">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="text-sm font-medium text-text-primary/80 transition hover:text-text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
