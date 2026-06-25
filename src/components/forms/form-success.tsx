"use client";

import { motion, useReducedMotion } from "framer-motion";

type FormSuccessProps = {
  message: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="rounded-md border border-success/25 bg-success/10 p-5 text-sm leading-7 text-text-primary"
    >
      <p className="font-semibold">Спасибо! Мы получили вашу заявку.</p>
      <p className="mt-1 text-text-secondary">{message}</p>
    </motion.div>
  );
}
