"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ModalProps = {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Modal({ trigger, title, description, children, className }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background-dark/60 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-surface-primary p-6 shadow-lg",
            className
          )}
        >
          <div className="mb-6 pr-10">
            <Dialog.Title className="text-2xl font-semibold text-text-primary">
              {title}
            </Dialog.Title>
            {description ? (
              <Dialog.Description className="mt-2 text-sm text-text-secondary">
                {description}
              </Dialog.Description>
            ) : null}
          </div>
          {children}
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-text-secondary transition hover:bg-surface-muted hover:text-text-primary">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Закрыть</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
