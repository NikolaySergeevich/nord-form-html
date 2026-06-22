import { faq } from "@/data/faq";
import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "spa-house",
    slug: "spa-house",
    title: "SPA House",
    shortTitle: "SPA House",
    collectionId: "spa",
    category: "spa",
    summary: "Модульная баня с зоной отдыха и террасой в архитектуре современного загородного дома.",
    description:
      "SPA House объединяет парную, душевую, lounge-зону и террасу в одной спокойной форме. Решение создается для приватного отдыха и премиального сценария использования.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1800&q=85",
      alt: "Современный деревянный дом в лесу"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=85",
        alt: "Минималистичный интерьер с деревом"
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        alt: "Современная зона отдыха с панорамным окном"
      },
      {
        src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
        alt: "Теплый интерьер с натуральными материалами"
      }
    ],
    area: "24-42 м²",
    dimensions: "от 6 x 4 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "SPA, отдых, гостевая зона" },
      { label: "Сезонность", value: "круглогодично" },
      { label: "Готовность", value: "высокая заводская сборка" }
    ],
    layouts: [
      {
        id: "spa-compact",
        title: "Compact SPA",
        area: "24 м²",
        image: {
          src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85",
          alt: "Планировочная композиция современного интерьера"
        }
      }
    ],
    configurations: [
      {
        id: "spa-base",
        title: "Base",
        features: ["Парная", "Душевая", "Комната отдыха", "Подготовка инженерии"]
      },
      {
        id: "spa-premium",
        title: "Premium",
        features: ["Расширенная lounge-зона", "Терраса", "Панорамное остекление", "Премиальная отделка"]
      }
    ],
    materials: [
      {
        id: "thermo-wood",
        title: "Термодерево",
        description: "Теплая фактура для внутренней и фасадной отделки."
      },
      {
        id: "graphite-metal",
        title: "Графитовый металл",
        description: "Сдержанный внешний контур в духе современной архитектуры."
      }
    ],
    engineering: ["Электрика", "Вентиляция", "Водоснабжение", "Отопление"],
    faq,
    seo: {
      title: "SPA House — модульная баня",
      description: "SPA House NORD FORM: современная модульная баня с зоной отдыха и террасой."
    }
  },
  {
    id: "garden-hub",
    slug: "garden-hub",
    title: "Garden Hub",
    shortTitle: "Garden Hub",
    collectionId: "garden",
    category: "garden",
    summary: "Универсальный модуль для участка: мастерская, кабинет, садовая кухня или гостевая зона.",
    description:
      "Garden Hub добавляет участку функциональную архитектуру без ощущения временной постройки. Его можно адаптировать под работу, хранение или отдых.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85",
      alt: "Современный дом с аккуратным участком"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
        alt: "Светлая рабочая студия"
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный фасад загородного дома"
      }
    ],
    area: "18-36 м²",
    dimensions: "от 6 x 3 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "кабинет, мастерская, садовая кухня" },
      { label: "Фасад", value: "графит, дерево, стекло" },
      { label: "Планировка", value: "адаптируется под сценарий" }
    ],
    layouts: [],
    configurations: [
      {
        id: "garden-work",
        title: "Work",
        features: ["Рабочая зона", "Хранение", "Панорамное окно"]
      }
    ],
    materials: [],
    engineering: ["Электрика", "Освещение", "Опциональное отопление"],
    faq,
    seo: {
      title: "Garden Hub — модуль для участка",
      description: "Garden Hub NORD FORM: современный модуль для дачи, работы и загородной инфраструктуры."
    }
  },
  {
    id: "garden-storage",
    slug: "garden-storage",
    title: "Garden Storage",
    shortTitle: "Storage",
    collectionId: "storage",
    category: "storage",
    summary: "Архитектурный модуль хранения для садовой техники, инвентаря и сезонных вещей.",
    description:
      "Garden Storage решает практическую задачу хранения и сохраняет визуальную чистоту участка. Подходит для техники, инструментов и сезонного оборудования.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85",
      alt: "Лаконичная современная архитектура в природном окружении"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный загородный фасад"
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный дом с теплым вечерним светом"
      }
    ],
    area: "12-30 м²",
    dimensions: "от 4 x 3 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "хранение, техника, инвентарь" },
      { label: "Доступ", value: "распашные или сдвижные двери" },
      { label: "Опции", value: "стеллажи, освещение, розетки" }
    ],
    layouts: [],
    configurations: [
      {
        id: "storage-base",
        title: "Storage Base",
        features: ["Сухое хранение", "Свет", "Система полок"]
      }
    ],
    materials: [],
    engineering: ["Электрика", "Вентиляция", "Внутреннее освещение"],
    faq,
    seo: {
      title: "Garden Storage — модуль хранения",
      description: "Garden Storage NORD FORM: современный хозблок и модульное хранение для участка."
    }
  },
  {
    id: "flower-studio",
    slug: "flower-studio",
    title: "Flower Studio",
    shortTitle: "Flower Studio",
    collectionId: "business",
    category: "business",
    summary: "Коммерческий модуль для цветочного магазина, кофейни или компактной retail-точки.",
    description:
      "Flower Studio создает сильное первое впечатление и помогает быстро запустить коммерческое пространство с узнаваемым фасадом.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85",
      alt: "Современное коммерческое здание"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный коммерческий интерьер"
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
        alt: "Архитектурный объект в природном окружении"
      }
    ],
    area: "15-32 м²",
    dimensions: "от 5 x 3 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "цветы, кофе, retail, офис продаж" },
      { label: "Фасад", value: "витрина, вывеска, подсветка" },
      { label: "Запуск", value: "быстрая подготовка точки" }
    ],
    layouts: [],
    configurations: [
      {
        id: "business-retail",
        title: "Retail",
        features: ["Витринная зона", "Рабочая стойка", "Складская ниша"]
      }
    ],
    materials: [],
    engineering: ["Электрика", "Освещение", "Климат", "Подготовка под кассу"],
    faq,
    seo: {
      title: "Flower Studio — модульный магазин",
      description: "Flower Studio NORD FORM: коммерческий модуль для цветочного магазина, кофейни и retail."
    }
  }
];
