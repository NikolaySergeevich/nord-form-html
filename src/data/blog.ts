import type { BlogArticle } from "@/types/content";

export const blogCategories = [
  {
    slug: "uchastok",
    title: "Для участка",
    description: "Идеи хранения, дровников, техники и визуального порядка на загородном участке."
  },
  {
    slug: "spa",
    title: "SPA и баня",
    description: "Планировка парной, моечной, комнаты отдыха и инженерной зоны в модульной бане."
  },
  {
    slug: "business",
    title: "Для бизнеса",
    description: "Модульные павильоны, витрины, рабочие процессы и инженерия коммерческих пространств."
  },
  {
    slug: "architecture",
    title: "Архитектура",
    description: "Графитовый металл, дерево, подсветка и визуальная культура контейнерной архитектуры."
  }
] as const;

export const blogArticles: BlogArticle[] = [
  {
    id: "modern-sauna",
    slug: "modern-sauna",
    title: "Модульная баня: как выстроить зоны по длине",
    excerpt:
      "Комната отдыха, моечная, парная и техническая ниша работают лучше, когда движение внутри бани выстроено последовательно.",
    category: "spa",
    coverImage: {
      src: "/images/products/spa-bath-bany/spa-bany-predbannik.webp",
      alt: "Комната отдыха в SPA-бане из контейнера"
    },
    publishedAt: "2026-06-01",
    readingTime: "6 минут",
    tags: ["SPA", "баня", "планировка"],
    relatedProductIds: ["spa-bath-bany"],
    relatedCollectionIds: ["spa-bath-bany"],
    leadMagnetId: "spa-guide",
    seo: {
      title: "Контейнерная баня: планировка по зонам",
      description:
        "Как спланировать баню из 40-футового контейнера: комната отдыха, моечная, парная и техническая ниша."
    }
  },
  {
    id: "storage-ideas",
    slug: "storage-ideas",
    title: "Как организовать хранение на участке без временных построек",
    excerpt:
      "Продуманный хозяйственный модуль объединяет технику, инструмент и дрова, сохраняя визуальный порядок участка.",
    category: "uchastok",
    coverImage: {
      src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp",
      alt: "Внутреннее хранение садовой техники в хозяйственном модуле"
    },
    publishedAt: "2026-06-05",
    readingTime: "5 минут",
    tags: ["участок", "хранение", "хозблок"],
    relatedProductIds: ["garden-module", "hozyistvennyi-module"],
    relatedCollectionIds: ["garden-module", "hozyistvennyi-module"],
    leadMagnetId: "catalog",
    seo: {
      title: "Как организовать хранение на участке",
      description:
        "Идеи хранения на участке: контейнерный хозблок, садовая техника, инвентарь, дровник и визуальный порядок."
    }
  },
  {
    id: "flower-shop",
    slug: "flower-shop",
    title: "Как открыть цветочный магазин в модульном формате",
    excerpt:
      "Что предусмотреть до производства: витрину, поток клиентов, рабочую зону, хранение, климат и внешний образ точки.",
    category: "business",
    coverImage: {
      src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
      alt: "Цветочный магазин в контейнерном модуле с витриной"
    },
    publishedAt: "2026-06-10",
    readingTime: "7 минут",
    tags: ["бизнес", "цветы", "павильон"],
    relatedProductIds: ["workshop-flowers-module"],
    relatedCollectionIds: ["workshop-flowers-module"],
    leadMagnetId: "business-guide",
    seo: {
      title: "Как открыть цветочный магазин в модульном формате",
      description:
        "Модульный цветочный магазин: витрина, фасад, рабочая зона, инженерия и быстрый запуск."
    }
  },
  {
    id: "graphite-and-wood",
    slug: "graphite-and-wood",
    title: "Графит, дерево и тёплый свет: почему сочетание работает",
    excerpt:
      "Тёмный металл, вертикальные деревянные рейки и мягкая подсветка связывают индустриальную основу с архитектурой участка.",
    category: "architecture",
    coverImage: {
      src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
      alt: "Графитовый садовый модуль с деревянными рейками и теплой подсветкой"
    },
    publishedAt: "2026-06-14",
    readingTime: "4 минуты",
    tags: ["архитектура", "фасад", "материалы"],
    relatedProductIds: ["garden-module", "hozyistvennyi-module", "spa-bath-bany"],
    relatedCollectionIds: ["garden-module", "hozyistvennyi-module", "spa-bath-bany"],
    leadMagnetId: "catalog",
    seo: {
      title: "Графит, дерево и теплый свет в контейнерной архитектуре",
      description:
        "Почему сочетание графитового металла, деревянных реек и теплой подсветки подходит для модульных объектов."
    }
  }
];
