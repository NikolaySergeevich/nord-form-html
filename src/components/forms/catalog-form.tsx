"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

  function onSubmit() {
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className="rounded-md bg-surface-muted p-5 text-sm text-text-secondary">
        Спасибо. Мы отправим каталог и при необходимости поможем подобрать решение под вашу задачу.
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input placeholder="Имя" {...register("name")} />
        {errors.name ? <p className="mt-2 text-sm text-error">{errors.name.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Телефон" {...register("phone")} />
        {errors.phone ? <p className="mt-2 text-sm text-error">{errors.phone.message}</p> : null}
      </div>
      <div>
        <Input placeholder="Email необязательно" {...register("email")} />
        {errors.email ? <p className="mt-2 text-sm text-error">{errors.email.message}</p> : null}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        Получить каталог
      </Button>
      <p className="text-xs text-text-secondary">
        Нажимая кнопку, вы соглашаетесь на обработку контактов для обратной связи.
      </p>
    </form>
  );
}
