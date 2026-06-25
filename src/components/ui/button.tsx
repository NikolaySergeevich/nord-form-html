import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-[0.8125rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-accent-primary bg-accent-primary text-text-inverse shadow-sm hover:border-accent-secondary hover:bg-accent-secondary hover:shadow-md",
        secondary:
          "border border-text-primary/25 bg-transparent text-text-primary hover:border-accent-secondary hover:bg-accent-soft/25",
        ghost: "text-text-primary hover:bg-accent-soft/20 hover:text-accent-secondary",
        inverse:
          "border border-text-inverse/80 bg-text-inverse text-background-dark shadow-sm hover:border-accent-soft hover:bg-accent-soft"
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-6",
        lg: "h-14 px-8",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
