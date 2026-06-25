import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "min-h-28 w-full rounded-sm border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary outline-none transition-all duration-300 hover:border-accent-secondary/60 focus:border-accent-secondary focus:ring-2 focus:ring-focus/20",
        "placeholder:text-text-secondary/70 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

export { Textarea };
