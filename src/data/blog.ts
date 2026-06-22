import type { BlogArticle } from "@/types/content";

export const blogCategories = [
  {
    slug: "uchastok",
    title: "Для участка",
    description: "Идеи хранения, инфраструктуры и визуального порядка на загородном участке."
  },
  {
    slug: "spa",
    title: "SPA и отдых",
    description: "Материалы о современных банях, SPA-модулях и приватных зонах отдыха."
  },
  {
    slug: "business",
    title: "Для бизнеса",
    description: "Модульные павильоны, магазины, студии и быстрый запуск коммерческих точек."
  },
  {
    slug: "architecture",
    title: "Архитектура",
    description: "Форма, материалы, фасады и визуальная культура модульной архитектуры."
  }
] as const;

export const blogArticles: BlogArticle[] = [
  {
    id: "modern-sauna",
    slug: "modern-sauna",
    title: "Современная баня: что важно учитывать",
    excerpt:
      "Разбираем планировку, материалы, инженерные решения и визуальную логику современной SPA-зоны.",
    category: "spa",
    coverImage: {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      alt: "Современный интерьер SPA-зоны"
    },
    publishedAt: "2026-06-01",
    readingTime: "6 минут",
    tags: ["SPA", "баня", "планировка"],
    relatedProductIds: ["spa-house"],
    relatedCollectionIds: ["spa"],
    leadMagnetId: "spa-guide",
    seo: {
      title: "Современная баня: что важно учитывать",
      description: "Как выбрать современную баню: планировка, материалы, инженерия и сценарий использования."
    }
  },
  {
    id: "storage-ideas",
    slug: "storage-ideas",
    title: "Как организовать идеальное хранение на участке",
    excerpt:
      "Почему хранение лучше проектировать как часть архитектуры участка, а не решать остаточным принципом.",
    category: "uchastok",
    coverImage: {
      src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=85",
      alt: "Современный загородный фасад"
    },
    publishedAt: "2026-06-05",
    readingTime: "5 минут",
    tags: ["участок", "хранение", "хозблок"],
    relatedProductIds: ["garden-storage"],
    relatedCollectionIds: ["storage"],
    leadMagnetId: "catalog",
    seo: {
      title: "Как организовать хранение на участке",
      description: "Идеи хранения на участке: модульный хозблок, техника, инвентарь и визуальный порядок."
    }
  },
  {
    id: "flower-shop",
    slug: "flower-shop",
    title: "Как открыть цветочный магазин в модульном формате",
    excerpt:
      "Что важно продумать до запуска: место, витрина, поток клиентов, инженерия и внешний образ точки.",
    category: "business",
    coverImage: {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
      alt: "Современное коммерческое пространство"
    },
    publishedAt: "2026-06-10",
    readingTime: "7 минут",
    tags: ["бизнес", "магазин", "павильон"],
    relatedProductIds: ["flower-studio"],
    relatedCollectionIds: ["business"],
    leadMagnetId: "business-guide",
    seo: {
      title: "Как открыть цветочный магазин",
      description: "Модульный цветочный магазин: планировка, витрина, инженерия и быстрый запуск."
    }
  },
  {
    id: "graphite-and-wood",
    slug: "graphite-and-wood",
    title: "Графит и дерево: почему это сочетание работает",
    excerpt:
      "Как темный фасад, теплая фактура дерева и крупное остекление создают спокойный архитектурный образ.",
    category: "architecture",
    coverImage: {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
      alt: "Современная архитектура с деревянной отделкой"
    },
    publishedAt: "2026-06-14",
    readingTime: "4 минуты",
    tags: ["архитектура", "фасад", "материалы"],
    relatedProductIds: ["spa-house", "garden-hub"],
    relatedCollectionIds: ["spa", "garden"],
    leadMagnetId: "catalog",
    seo: {
      title: "Графит и дерево в современной архитектуре",
      description: "Почему сочетание графита и дерева подходит для современной модульной архитектуры."
    }
  }
];
