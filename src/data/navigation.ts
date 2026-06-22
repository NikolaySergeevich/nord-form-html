import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  {
    label: "Коллекции",
    href: "/collections",
    description: "SPA, участок, хранение и бизнес"
  },
  {
    label: "Проекты",
    href: "/projects",
    description: "Реализованные модульные объекты"
  },
  {
    label: "Производство",
    href: "/production",
    description: "Материалы, сборка и контроль качества"
  },
  {
    label: "Блог",
    href: "/blog",
    description: "Идеи, выбор решений и архитектурные сценарии"
  },
  {
    label: "Контакты",
    href: "/contacts",
    description: "Консультация и расчет проекта"
  }
];

export const footerNavigation = [
  {
    title: "Направления",
    items: [
      { label: "SPA и отдых", href: "/collections/spa" },
      { label: "Сад и участок", href: "/collections/garden" },
      { label: "Хранение", href: "/collections/storage" },
      { label: "Бизнес", href: "/collections/business" }
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
