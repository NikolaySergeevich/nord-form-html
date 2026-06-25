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
          className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-text-primary/70 transition-colors duration-300 hover:text-accent-secondary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
