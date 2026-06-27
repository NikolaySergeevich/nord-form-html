import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

type FormSubmitButtonProps = {
  isSubmitting: boolean;
  idleLabel: string;
  loadingLabel: string;
};

export function FormSubmitButton({
  isSubmitting,
  idleLabel,
  loadingLabel
}: FormSubmitButtonProps) {
  return (
    <Button
      type="submit"
      size="lg"
      className="w-full sm:w-auto"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <LoaderCircle
            className="mr-2 h-4 w-4 animate-spin"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          {loadingLabel}
        </>
      ) : (
        idleLabel
      )}
    </Button>
  );
}
