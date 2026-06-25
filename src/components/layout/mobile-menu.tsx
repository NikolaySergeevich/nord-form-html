"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label="Открыть меню"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {isOpen ? (
        <div className="absolute inset-x-4 top-20 z-40 rounded-md border border-border/80 bg-surface-elevated p-6 shadow-lg">
          <Navigation
            className="grid gap-4"
            onNavigate={() => setIsOpen(false)}
          />
          <Button asChild className="mt-5 w-full">
            <Link href="/contacts" onClick={() => setIsOpen(false)}>
              Обсудить проект
            </Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
