"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
        {isOpen ? (
          <X className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        )}
      </Button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-4 top-20 z-40 origin-top rounded-md border border-border/80 bg-surface-elevated/98 p-6 shadow-lg backdrop-blur-xl"
          >
            <Navigation
              className="grid gap-4"
              onNavigate={() => setIsOpen(false)}
            />
            <Button asChild className="mt-5 w-full">
              <Link href="/contacts" onClick={() => setIsOpen(false)}>
                Обсудить проект
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
