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
          className="relative py-2 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-text-primary/70 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-accent-secondary after:transition-transform after:duration-500 after:ease-out hover:text-text-primary hover:after:scale-x-100 focus-visible:outline-none focus-visible:text-text-primary focus-visible:after:scale-x-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
