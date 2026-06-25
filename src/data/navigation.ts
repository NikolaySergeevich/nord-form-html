import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  {
    label: "Коллекции",
    href: "/collections",
    description: "Готовые направления для участка, отдыха и бизнеса"
  },
  {
    label: "Проекты",
    href: "/projects",
    description: "Задачи, решения и практический результат"
  },
  {
    label: "Производство",
    href: "/production",
    description: "Конструкция, инженерия, сборка и установка"
  },
  {
    label: "Блог",
    href: "/blog",
    description: "Практические материалы о модульной архитектуре"
  },
  {
    label: "Контакты",
    href: "/contacts",
    description: "Обсуждение задачи и предварительная оценка"
  }
];

export const footerNavigation = [
  {
    title: "Коллекции",
    items: [
      { label: "Садовый модуль", href: "/collections/garden-module" },
      { label: "Хозяйственный модуль", href: "/collections/hozyistvennyi-module" },
      { label: "SPA-баня", href: "/collections/spa-bath-bany" },
      { label: "Цветочный модуль", href: "/collections/workshop-flowers-module" }
    ]
  },
  {
    title: "Компания",
    items: [
      { label: "Проекты", href: "/projects" },
      { label: "Производство", href: "/production" },
      { label: "Блог", href: "/blog" },
      { label: "Каталог", href: "/catalog" },
      { label: "Контакты", href: "/contacts" }
    ]
  }
];
