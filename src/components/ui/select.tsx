import * as React from "react";

import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      className={cn(
        "h-[3.25rem] w-full rounded-sm border border-border bg-surface-elevated px-4 text-sm text-text-primary outline-none transition-all duration-300 hover:border-accent-secondary/60 focus:border-accent-secondary focus:ring-2 focus:ring-focus/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  )
);

Select.displayName = "Select";

export { Select };
