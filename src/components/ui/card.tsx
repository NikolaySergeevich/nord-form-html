import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-md border border-border/80 bg-surface-primary shadow-sm transition-[border-color,box-shadow] duration-500 ease-out hover:border-accent-secondary/45 hover:shadow-md",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export { Card, CardContent };
