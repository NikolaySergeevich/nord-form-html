"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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

  function onSubmit() {
    setIsSent(true);
  }

  if (isSent) {
    return (
      <div className="rounded-md bg-surface-muted p-5 text-sm text-text-secondary">
        Спасибо. Мы подготовим расчетный сценарий и уточним детали проекта.
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
        <Select {...register("product")}>
          <option value="">Какой объект интересует</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </Select>
        {errors.product ? (
          <p className="mt-2 text-sm text-error">{errors.product.message}</p>
        ) : null}
      </div>
      <Textarea placeholder="Комментарий" {...register("comment")} />
      <Button type="submit" size="lg" disabled={isSubmitting}>
        Получить расчет
      </Button>
    </form>
  );
}
