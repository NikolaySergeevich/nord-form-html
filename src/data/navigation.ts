import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  {
    label: "Коллекции",
    href: "/collections",
    description: "Садовый модуль, хозблок, SPA-баня и цветочный павильон"
  },
  {
    label: "Проекты",
    href: "/projects",
    description: "Модульные объекты в графите, дереве и теплом свете"
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
