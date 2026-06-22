import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-text-primary">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg text-text-secondary">{description}</p>
      ) : null}
    </div>
  );
}
