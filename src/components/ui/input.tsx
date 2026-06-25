import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-[3.25rem] w-full rounded-sm border border-border bg-surface-elevated px-4 text-sm text-text-primary outline-none transition-[background-color,border-color,box-shadow] duration-[400ms] ease-out hover:border-accent-secondary/60 focus:border-accent-secondary focus:bg-surface-primary focus:ring-2 focus:ring-focus/20",
        "placeholder:text-text-secondary/70 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };
