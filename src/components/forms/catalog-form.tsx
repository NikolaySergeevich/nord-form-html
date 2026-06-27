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
import { waitForFormFeedback } from "@/lib/form-feedback";

const catalogSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(7, "Укажите телефон"),
  email: z.string().email("Проверьте email").optional().or(z.literal(""))
});

type CatalogFormValues = z.infer<typeof catalogSchema>;

export function CatalogForm() {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CatalogFormValues>({
    resolver: zodResolver(catalogSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: ""
    }
  });

  async function onSubmit() {
    await waitForFormFeedback();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <FormSuccess message="В ближайшее время отправим каталог и при необходимости поможем подобрать решение." />
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormTrust intro="Укажите удобный контакт. Мы отправим каталог без длинного опроса." />
      <FormField id="catalog-name" label="Имя" error={errors.name?.message}>
        <Input
          id="catalog-name"
          autoComplete="name"
          placeholder="Как к вам обращаться"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "catalog-name-error" : undefined}
          {...register("name")}
        />
      </FormField>
      <FormField id="catalog-phone" label="Телефон" error={errors.phone?.message}>
        <Input
          id="catalog-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+375"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "catalog-phone-error" : undefined}
          {...register("phone")}
        />
      </FormField>
      <FormField id="catalog-email" label="Email" error={errors.email?.message} hint="Поле необязательное">
        <Input
          id="catalog-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="name@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "catalog-email-error" : "catalog-email-hint"}
          {...register("email")}
        />
      </FormField>
      <FormSubmitButton
        isSubmitting={isSubmitting}
        idleLabel="Получить каталог"
        loadingLabel="Отправляем"
      />
      <p className="text-xs text-text-secondary">
        Нажимая кнопку, вы соглашаетесь на обработку контактов для обратной связи.
      </p>
    </form>
  );
}
