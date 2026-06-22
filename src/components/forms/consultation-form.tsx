"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

  function onSubmit() {
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className="rounded-md bg-surface-muted p-5 text-sm text-text-secondary">
        Заявка принята. Мы свяжемся с вами и предложим ближайшее окно для консультации.
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
      <Textarea placeholder="Комментарий" {...register("comment")} />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        Получить консультацию
      </Button>
    </form>
  );
}
