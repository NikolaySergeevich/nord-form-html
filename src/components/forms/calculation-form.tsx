"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { products } from "@/data/products";
import { FormField } from "@/components/forms/form-field";
import { FormSubmitButton } from "@/components/forms/form-submit-button";
import { FormSuccess } from "@/components/forms/form-success";
import { FormTrust } from "@/components/forms/form-trust";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { waitForFormFeedback } from "@/lib/form-feedback";

const calculationSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(7, "Укажите телефон"),
  product: z.string().min(1, "Выберите объект"),
  comment: z.string().optional()
});

type CalculationFormValues = z.infer<typeof calculationSchema>;

type CalculationFormProps = {
  defaultProductId?: string;
};

export function CalculationForm({ defaultProductId = "" }: CalculationFormProps) {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CalculationFormValues>({
    resolver: zodResolver(calculationSchema),
    defaultValues: {
      name: "",
      phone: "",
      product: defaultProductId,
      comment: ""
    }
  });

  async function onSubmit() {
    await waitForFormFeedback();
    setIsSent(true);
  }

  if (isSent) {
    return (
      <FormSuccess message="В ближайшее время уточним исходные данные и подготовим предварительную оценку решения." />
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormTrust intro="Достаточно указать назначение и место установки — остальные параметры уточним вместе." />
      <FormField id="calculation-name" label="Имя" error={errors.name?.message}>
        <Input
          id="calculation-name"
          autoComplete="name"
          placeholder="Как к вам обращаться"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "calculation-name-error" : undefined}
          {...register("name")}
        />
      </FormField>
      <FormField id="calculation-phone" label="Телефон" error={errors.phone?.message}>
        <Input
          id="calculation-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+375"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "calculation-phone-error" : undefined}
          {...register("phone")}
        />
      </FormField>
      <FormField id="calculation-product" label="Решение" error={errors.product?.message}>
        <Select
          id="calculation-product"
          aria-invalid={Boolean(errors.product)}
          aria-describedby={errors.product ? "calculation-product-error" : undefined}
          {...register("product")}
        >
          <option value="">Какое решение рассматриваете</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField id="calculation-comment" label="Комментарий" hint="Поле необязательное">
        <Textarea
          id="calculation-comment"
          placeholder="Участок, назначение, желаемый размер и важные детали"
          aria-describedby="calculation-comment-hint"
          {...register("comment")}
        />
      </FormField>
      <FormSubmitButton
        isSubmitting={isSubmitting}
        idleLabel="Получить предварительную оценку"
        loadingLabel="Рассчитываем"
      />
    </form>
  );
}
