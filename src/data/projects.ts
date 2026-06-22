import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "garden-module-001",
    slug: "garden-module-001",
    title: "Садовый модуль с дровником",
    productId: "garden-module",
    collectionId: "garden-module",
    location: "Загородный участок",
    year: 2026,
    summary:
      "40-футовый контейнер с хозблоком, открытым дровником и гаражной зоной для сезонной техники.",
    challenge:
      "Совместить хранение, дровник, мастерскую и доступ для крупной техники без ощущения временной бытовки.",
    solution:
      "Фасад собран на контрасте графитового металла, деревянных вертикальных реек и теплой архитектурной подсветки.",
    heroImage: {
      src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
      alt: "Садовый модуль из контейнера с дровником и подсветкой"
    },
    gallery: [
      {
        src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
        alt: "Боковой вид садового модуля"
      },
      {
        src: "/images/products/garden-module/sadovyi-modul-vnytri-pervyi-variant.webp",
        alt: "Внутреннее хранение в садовом модуле"
      }
    ],
    specs: [
      { label: "Площадь", value: "около 28 м²" },
      { label: "Сценарий", value: "хозблок, дровник, гараж" },
      { label: "Фасад", value: "графит, дерево, теплый свет" }
    ],
    relatedProductIds: ["garden-module"],
    seo: {
      title: "Проект садового модуля с дровником",
      description:
        "Садовый модуль NORD FORM с хозблоком, дровником, мастерской и гаражной зоной."
    }
  },
  {
    id: "hozyistvennyi-module-001",
    slug: "hozyistvennyi-module-001",
    title: "Хозяйственный модуль для техники",
    productId: "hozyistvennyi-module",
    collectionId: "hozyistvennyi-module",
    location: "Частный участок",
    year: 2026,
    summary:
      "Практичный хозблок с местом для газонокосилки, инструмента, стеллажей и открытого запаса дров.",
    challenge:
      "Убрать разрозненное хранение с участка и оставить фасад визуально аккуратным вечером и днем.",
    solution:
      "Контейнер получил темный фасад, деревянные акценты, наружный свет и организованную систему хранения внутри.",
    heroImage: {
      src: "/images/products/hozyistvennyi-module/hozblok-obshiy-vid.webp",
      alt: "Хозяйственный модуль из графитового контейнера на участке"
    },
    gallery: [
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-s-peredi.webp",
        alt: "Фасад хозяйственного модуля"
      },
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp",
        alt: "Хранение садовой техники внутри хозблока"
      }
    ],
    specs: [
      { label: "Площадь", value: "около 28 м²" },
      { label: "Сценарий", value: "хранение и дровник" },
      { label: "Особенность", value: "стеллажи и место для техники" }
    ],
    relatedProductIds: ["hozyistvennyi-module"],
    seo: {
      title: "Проект хозяйственного модуля",
      description:
        "Хозяйственный модуль NORD FORM для садовой техники, инструмента, сезонных вещей и дров."
    }
  },
  {
    id: "spa-bath-bany-001",
    slug: "spa-bath-bany-001",
    title: "SPA-баня с линейной планировкой",
    productId: "spa-bath-bany",
    collectionId: "spa-bath-bany",
    location: "Приватный участок",
    year: 2026,
    summary:
      "Контейнерная баня с комнатой отдыха, душевой, парной, технической нишей и дымоходом.",
    challenge:
      "Разместить полный банный сценарий в 40-футовом контейнере и сохранить сервисный доступ к коммуникациям.",
    solution:
      "Помещения выстроены по длине: сухая зона, моечная, парная и отдельная техническая ниша в конце модуля.",
    heroImage: {
      src: "/images/products/spa-bath-bany/spa-bany-s-fronta.webp",
      alt: "SPA-баня из графитового контейнера"
    },
    gallery: [
      {
        src: "/images/products/spa-bath-bany/spa-bany-predbannik.webp",
        alt: "Предбанник в контейнерной SPA-бане"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-parilka.webp",
        alt: "Парная в SPA-бане"
      }
    ],
    specs: [
      { label: "Площадь", value: "около 28 м²" },
      { label: "Сценарий", value: "отдых, душевая, парная" },
      { label: "Инженерия", value: "техническая ниша и дымоход" }
    ],
    relatedProductIds: ["spa-bath-bany"],
    seo: {
      title: "Проект SPA-бани из контейнера",
      description:
        "SPA-баня NORD FORM с комнатой отдыха, моечной, парной и технической нишей."
    }
  },
  {
    id: "workshop-flowers-module-001",
    slug: "workshop-flowers-module-001",
    title: "Цветочный модуль с витриной",
    productId: "workshop-flowers-module",
    collectionId: "workshop-flowers-module",
    location: "Городская retail-точка",
    year: 2026,
    summary:
      "Темный контейнерный павильон с вывеской, теплым светом, витриной и интерьером для растений.",
    challenge:
      "Сделать компактную коммерческую точку заметной, теплой и готовой к ежедневной работе флориста.",
    solution:
      "Фасад объединяет графитовый корпус, стекло, подсветку и деревянные рейки, а внутри организованы витрина и рабочее хранение.",
    heroImage: {
      src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
      alt: "Цветочный модуль в графитовом контейнере с витриной"
    },
    gallery: [
      {
        src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-pervyi-variant.webp",
        alt: "Интерьер цветочного модуля с растениями"
      },
      {
        src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-vtoroi-variant.webp",
        alt: "Второй вариант интерьера цветочного модуля"
      }
    ],
    specs: [
      { label: "Площадь", value: "около 28 м²" },
      { label: "Сценарий", value: "цветочный магазин" },
      { label: "Фасад", value: "витрина, вывеска, теплый свет" }
    ],
    relatedProductIds: ["workshop-flowers-module"],
    seo: {
      title: "Проект цветочного модуля",
      description:
        "Цветочный модуль NORD FORM с витриной, вывеской, рабочей зоной и теплым фасадом."
    }
  }
];
