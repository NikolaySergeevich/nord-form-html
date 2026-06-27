"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormField } from "@/components/forms/form-field";
import { FormSubmitButton } from "@/components/forms/form-submit-button";
import { FormSuccess } from "@/components/forms/form-success";
import { FormTrust } from "@/components/forms/form-trust";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { waitForFormFeedback } from "@/lib/form-feedback";

const consultationSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(7, "Укажите телефон"),
  comment: z.string().optional()
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

export function ConsultationForm() {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      phone: "",
      comment: ""
    }
  });

  async function onSubmit() {
    await waitForFormFeedback();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <FormSuccess message="В ближайшее время свяжемся с вами, уточним детали и предложим следующий шаг." />
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormTrust intro="Даже если у вас пока есть только идея — этого достаточно для начала обсуждения." />
      <FormField id="consultation-name" label="Имя" error={errors.name?.message}>
        <Input
          id="consultation-name"
          autoComplete="name"
          placeholder="Как к вам обращаться"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "consultation-name-error" : undefined}
          {...register("name")}
        />
      </FormField>
      <FormField id="consultation-phone" label="Телефон" error={errors.phone?.message}>
        <Input
          id="consultation-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+375"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "consultation-phone-error" : undefined}
          {...register("phone")}
        />
      </FormField>
      <FormField id="consultation-comment" label="О проекте" hint="Поле необязательное">
        <Textarea
          id="consultation-comment"
          placeholder="Что хотите разместить в модуле и где планируется установка?"
          aria-describedby="consultation-comment-hint"
          {...register("comment")}
        />
      </FormField>
      <FormSubmitButton
        isSubmitting={isSubmitting}
        idleLabel="Обсудить проект"
        loadingLabel="Отправляем"
      />
    </form>
  );
}
