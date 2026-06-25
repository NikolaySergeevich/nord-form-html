import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  const descriptionId = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-text-primary">
        {label}
      </label>
      {children}
      {error ? (
        <p id={descriptionId} role="alert" className="mt-2 text-sm text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={descriptionId} className="mt-2 text-xs leading-5 text-text-secondary">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
