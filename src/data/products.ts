import { faq } from "@/data/faq";
import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "garden-module",
    slug: "garden-module",
    title: "Garden Module",
    shortTitle: "Garden Module",
    collectionId: "garden-module",
    category: "garden",
    summary:
      "40-футовый садовый модуль с хозблоком, дровником, мини-мастерской и гаражной зоной для техники.",
    description:
      "Современный хозблок на базе морского контейнера объединяет несколько полезных зон для загородного участка. Снаружи это графитовый контейнер с ребристым металлом, вертикальными деревянными рейками, встроенным дровником и теплой подсветкой. Внутри предусмотрены хозяйственная зона с ОСБ-обшивкой и гаражное помещение в графитовом цвете.",
    heroImage: {
      src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
      alt: "Садовый модуль с дровником, деревянными рейками и вечерней подсветкой"
    },
    gallery: [
      {
        src: "/images/products/garden-module/sadovyi-modul-s-boky.webp",
        alt: "Боковой вид садового модуля из графитового контейнера"
      },
      {
        src: "/images/products/garden-module/sadovyi-modul-vnytri-pervyi-variant.webp",
        alt: "Внутри садового модуля с ОСБ-обшивкой и зоной хранения"
      },
      {
        src: "/images/products/garden-module/sadovyi-modul-vnytri-vtoroy-variant.webp",
        alt: "Гаражная зона садового модуля для сезонной техники"
      }
    ],
    area: "около 28 м²",
    dimensions: "40 футов / около 12 x 2,4 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "хозблок, дровник, мастерская, гараж" },
      { label: "Фасад", value: "графитовый металл, дерево, теплый свет" },
      { label: "Доступ", value: "отдельная дверь и контейнерные ворота" }
    ],
    layouts: [
      {
        id: "garden-zones",
        title: "Хозблок + дровник + гараж",
        area: "40-футовый контейнер",
        image: {
          src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp",
          alt: "Фасад садового модуля с центральным дровником"
        }
      }
    ],
    configurations: [
      {
        id: "garden-workshop-storage",
        title: "Хозяйственная зона",
        features: ["ОСБ-обшивка", "Полки и стеллажи", "Рабочая зона", "Хранение инвентаря"]
      },
      {
        id: "garden-garage",
        title: "Гаражная зона",
        features: ["Контейнерные ворота", "Место для техники", "Внутренний свет", "Розетки"]
      }
    ],
    materials: [
      {
        id: "graphite-metal",
        title: "Графитовый металл",
        description: "Темный ребристый корпус контейнера сохраняет индустриальную фактуру."
      },
      {
        id: "wood-slats",
        title: "Деревянные рейки",
        description: "Теплая вертикальная отделка смягчает фасад и связывает объект с ландшафтом."
      },
      {
        id: "osb-interior",
        title: "ОСБ внутри",
        description: "Практичная обшивка для хозблока, полок, стеллажей и рабочей зоны."
      }
    ],
    engineering: ["Электрика", "Архитектурная подсветка", "Вентиляция", "Розетки", "Подготовка под стеллажи"],
    faq,
    seo: {
      title: "Garden Module - садовый модуль с дровником",
      description:
        "Garden Module NORD FORM: садовый хозблок, дровник, мастерская и гараж для техники на базе 40-футового контейнера."
    }
  },
  {
    id: "hozyistvennyi-module",
    slug: "hozyistvennyi-module",
    title: "Хозяйственный модуль",
    shortTitle: "Хозмодуль",
    collectionId: "hozyistvennyi-module",
    category: "storage",
    summary:
      "Практичный контейнерный хозблок для садовой техники, инструмента, инвентаря, сезонных вещей и дров.",
    description:
      "Хозяйственный модуль решает задачу аккуратного хранения на участке. Темный графитовый фасад с деревянными рейками и наружной подсветкой выглядит как часть ландшафтной архитектуры, а пристроенный справа дровник позволяет хранить дрова под навесом и не перегружать участок отдельной постройкой.",
    heroImage: {
      src: "/images/products/hozyistvennyi-module/hozblok-obshiy-vid.webp",
      alt: "Общий вид хозяйственного модуля из графитового контейнера"
    },
    gallery: [
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-s-peredi.webp",
        alt: "Фронтальный вид хозблока с деревянными рейками и подсветкой"
      },
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-s-levogo-flanga.webp",
        alt: "Хозяйственный модуль со стороны левого фланга"
      },
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-s-pravogo-flanga.webp",
        alt: "Хозяйственный модуль со стороны правого фланга"
      },
      {
        src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp",
        alt: "Внутреннее хранение в хозяйственном модуле"
      }
    ],
    area: "около 28 м²",
    dimensions: "40 футов / около 12 x 2,4 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "техника, инструмент, инвентарь" },
      { label: "Дополнение", value: "открытый дровник справа" },
      { label: "Внутри", value: "стеллажи, хранение, место для газонокосилки" }
    ],
    layouts: [
      {
        id: "storage-layout",
        title: "Хранение + дровник",
        area: "40-футовый контейнер",
        image: {
          src: "/images/products/hozyistvennyi-module/hozblok-vid-s-peredi.webp",
          alt: "Фасад хозяйственного модуля с графитовым корпусом"
        }
      }
    ],
    configurations: [
      {
        id: "storage-base",
        title: "Storage Base",
        features: ["Сухое хранение", "Внутренний свет", "Стеллажи", "Наружный дровник"]
      },
      {
        id: "storage-plus",
        title: "Storage Plus",
        features: ["Рабочая зона", "Дополнительные розетки", "Усиленное хранение", "Фасадная подсветка"]
      }
    ],
    materials: [
      {
        id: "graphite-shell",
        title: "Графитовый контейнер",
        description: "Практичная темная оболочка, которая не спорит с зеленью и деревянным забором."
      },
      {
        id: "warm-light",
        title: "Теплая подсветка",
        description: "Свет выделяет рельеф металла и делает объект аккуратным вечером."
      }
    ],
    engineering: ["Электрика", "Наружное освещение", "Вентиляция", "Подготовка под хранение техники"],
    faq,
    seo: {
      title: "Хозяйственный модуль - контейнерный хозблок",
      description:
        "Хозяйственный модуль NORD FORM для хранения садовой техники, инструмента, инвентаря, сезонных вещей и дров."
    }
  },
  {
    id: "spa-bath-bany",
    slug: "spa-bath-bany",
    title: "SPA Bath Bany",
    shortTitle: "SPA-баня",
    collectionId: "spa-bath-bany",
    category: "spa",
    summary:
      "Контейнерная баня с комнатой отдыха, моечной, парной и технической нишей для скрытых коммуникаций.",
    description:
      "SPA-баня строится на понятной логике движения: вход в сухую комнату отдыха, затем моечная, после нее парная и техническая ниша для обслуживания. Снаружи контейнер остается современным графитовым SPA-блоком с деревянными рейками, теплой подсветкой, дровником и дымоходом.",
    heroImage: {
      src: "/images/products/spa-bath-bany/spa-bany-s-fronta.webp",
      alt: "Фронтальный вид SPA-бани из графитового контейнера"
    },
    gallery: [
      {
        src: "/images/products/spa-bath-bany/spa-bany-vhod.webp",
        alt: "Вход в SPA-баню с теплым светом внутри"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-predbannik.webp",
        alt: "Комната отдыха и раздевалка в контейнерной бане"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-parilka.webp",
        alt: "Парная с деревянными полками и подсветкой"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-s-flanga-levyi.webp",
        alt: "Левый фланг графитовой SPA-бани"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-s-flanga-prafyi.webp",
        alt: "Правый фланг SPA-бани из контейнера"
      },
      {
        src: "/images/products/spa-bath-bany/spa-bany-s-zadi-drova.webp",
        alt: "Задняя часть SPA-бани с дровником"
      }
    ],
    area: "около 28 м²",
    dimensions: "40 футов / около 12 x 2,4 м",
    basePrice: "по расчету",
    specs: [
      { label: "Комната отдыха", value: "около 5,8-6,0 м по длине" },
      { label: "Моечная", value: "около 2,0-2,2 м по длине" },
      { label: "Парная", value: "около 2,6-2,8 м по длине" }
    ],
    layouts: [
      {
        id: "spa-linear",
        title: "Раздевалка -> моечная -> парная -> техниша",
        area: "40-футовый контейнер",
        image: {
          src: "/images/products/spa-bath-bany/spa-bany-vhod.webp",
          alt: "Входная зона контейнерной SPA-бани"
        }
      }
    ],
    configurations: [
      {
        id: "spa-base",
        title: "SPA Base",
        features: ["Комната отдыха", "Моечная", "Парная", "Техническая ниша"]
      },
      {
        id: "spa-comfort",
        title: "SPA Comfort",
        features: ["Печь и камни", "Дымоход", "Бойлер", "Теплая подсветка"]
      }
    ],
    materials: [
      {
        id: "sauna-wood",
        title: "Дерево в парной",
        description: "Теплая отделка формирует спокойное банное пространство."
      },
      {
        id: "graphite-spa-shell",
        title: "Графитовый фасад",
        description: "Темный контейнерный корпус превращает баню в современный SPA-блок."
      }
    ],
    engineering: ["Электрика", "Водоснабжение", "Слив и трап", "Вентиляция", "Дымоход", "Техническая ниша"],
    faq,
    seo: {
      title: "SPA Bath Bany - баня из контейнера",
      description:
        "SPA Bath Bany NORD FORM: баня из 40-футового контейнера с комнатой отдыха, моечной, парной и технической нишей."
    }
  },
  {
    id: "workshop-flowers-module",
    slug: "workshop-flowers-module",
    title: "Workshop Flowers Module",
    shortTitle: "Flowers Module",
    collectionId: "workshop-flowers-module",
    category: "business",
    summary:
      "Коммерческий цветочный модуль с графитовым фасадом, витриной, вывеской, рабочей зоной и атмосферной подсветкой.",
    description:
      "Модуль подходит для цветочного магазина, флористической мастерской или компактной retail-точки. Внешне это темный контейнерный павильон с деревянными рейками, крупной витриной, теплым светом и заметной вывеской. Внутри можно разместить растения, букеты, рабочую стойку, упаковку и небольшую зону общения с клиентом.",
    heroImage: {
      src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
      alt: "Цветочный магазин в графитовом контейнере с витриной и теплой подсветкой"
    },
    gallery: [
      {
        src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-pervyi-variant.webp",
        alt: "Первый вариант интерьера цветочного модуля с растениями"
      },
      {
        src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-vtoroi-variant.webp",
        alt: "Второй вариант интерьера цветочного магазина из контейнера"
      }
    ],
    area: "около 28 м²",
    dimensions: "40 футов / около 12 x 2,4 м",
    basePrice: "по расчету",
    specs: [
      { label: "Назначение", value: "цветы, retail, мастерская флориста" },
      { label: "Фасад", value: "витрина, вывеска, деревянные рейки" },
      { label: "Внутри", value: "растения, рабочая стойка, хранение упаковки" }
    ],
    layouts: [
      {
        id: "flowers-retail",
        title: "Витрина + торговый зал + рабочая зона",
        area: "40-футовый контейнер",
        image: {
          src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp",
          alt: "Фасад цветочного модуля с вывеской и витриной"
        }
      }
    ],
    configurations: [
      {
        id: "flowers-retail-base",
        title: "Retail Base",
        features: ["Витринное остекление", "Вывеска", "Рабочая стойка", "Свет"]
      },
      {
        id: "flowers-retail-plus",
        title: "Retail Plus",
        features: ["Дополнительное хранение", "Климат", "Полки для растений", "Декоративная подсветка"]
      }
    ],
    materials: [
      {
        id: "retail-glass",
        title: "Крупная витрина",
        description: "Остекление показывает растения и создает сильное первое впечатление."
      },
      {
        id: "flower-warm-interior",
        title: "Теплый интерьер",
        description: "Дерево, свет и темный фон помогают букетам и растениям выглядеть выразительно."
      }
    ],
    engineering: ["Электрика", "Освещение", "Климат", "Подготовка под кассу", "Розетки для рабочей зоны"],
    faq,
    seo: {
      title: "Workshop Flowers Module - цветочный магазин из контейнера",
      description:
        "Workshop Flowers Module NORD FORM: цветочный магазин и флористическая мастерская в модульном контейнере."
    }
  }
];
