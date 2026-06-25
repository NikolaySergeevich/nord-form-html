import { faq } from "@/data/faq";
import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    id: "garden-module",
    slug: "garden-module",
    title: "Садовый модуль",
    shortTitle: "Садовый модуль",
    collectionId: "garden-module",
    category: "garden",
    summary:
      "Архитектурный модуль для участка, который объединяет хранение, мастерскую, дровник и место для сезонной техники.",
    description:
      "Garden Module помогает собрать хозяйственные функции участка в одном аккуратном объёме. Внутри можно разделить хранение, рабочую зону и место для крупной техники; снаружи встроенный дровник, дерево и тёплый свет превращают прочную металлическую основу в часть ландшафтной архитектуры. В результате вместо нескольких разрозненных построек появляется один продуманный объект.",
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
        title: "Хранение и мастерская",
        features: ["Практичная внутренняя обшивка", "Полки и стеллажи", "Рабочее место", "Зоны для инвентаря"]
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
        description: "Защищённая стальная оболочка сохраняет выразительный ритм металла и служит прочной основой объекта."
      },
      {
        id: "wood-slats",
        title: "Деревянные рейки",
        description: "Теплая вертикальная отделка смягчает фасад и связывает объект с ландшафтом."
      },
      {
        id: "osb-interior",
        title: "ОСБ внутри",
        description: "Практичная внутренняя поверхность, к которой удобно крепить полки, стеллажи и рабочее оборудование."
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
      "Организованное хранение для участка — с местом для техники, инструмента, сезонных вещей и запаса дров.",
    description:
      "Хозяйственный модуль освобождает участок от случайных сараев и разрозненного хранения. Внутри размещаются техника, инструмент, стеллажи и сезонные вещи, а наружный дровник остаётся сухим и доступным. Графитовый корпус, дерево и спокойная подсветка делают утилитарный объект визуально собранным и уместным рядом с современным домом.",
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
        title: "Базовое хранение",
        features: ["Защищённое хранение", "Внутренний свет", "Стеллажи", "Наружный дровник"]
      },
      {
        id: "storage-plus",
        title: "Хранение с рабочей зоной",
        features: ["Рабочая зона", "Дополнительные розетки", "Усиленное хранение", "Фасадная подсветка"]
      }
    ],
    materials: [
      {
        id: "graphite-shell",
        title: "Графитовый контейнер",
        description: "Прочная тёмная оболочка спокойно сочетается с зеленью, деревом и современной архитектурой участка."
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
    title: "SPA-баня",
    shortTitle: "SPA-баня",
    collectionId: "spa-bath-bany",
    category: "spa",
    summary:
      "Полноценный банный сценарий в одном модуле: комната отдыха, моечная, парная и отдельная зона для инженерии.",
    description:
      "SPA Bath Bany спроектирована как последовательное и спокойное пространство: от сухой комнаты отдыха к моечной и парной. Коммуникации вынесены в техническую нишу, поэтому обслуживание не занимает полезную площадь. Снаружи графитовый металл, дерево, дровник и мягкий свет формируют современный SPA-объект, который можно использовать круглый год при соответствующей комплектации.",
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
        title: "Основная комплектация",
        features: ["Комната отдыха", "Моечная", "Парная", "Техническая ниша"]
      },
      {
        id: "spa-comfort",
        title: "Расширенная комплектация",
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
        description: "Тёмный металлический корпус задаёт строгий архитектурный объём и подчёркивает тёплую отделку."
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
    title: "Цветочный модуль",
    shortTitle: "Цветочный модуль",
    collectionId: "workshop-flowers-module",
    category: "business",
    summary:
      "Готовая архитектурная основа для цветочного магазина, мастерской или компактной торговой точки.",
    description:
      "Workshop Flowers Module объединяет пространство для клиентов и ежедневную работу флориста. Крупная витрина открывает интерьер городу, а внутри размещаются экспозиция, рабочая стойка и хранение упаковки. Вывеска, тёплый свет и деревянные акценты создают узнаваемую торговую точку, которая выглядит как часть бренда, а не временный павильон.",
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
        title: "Торговая комплектация",
        features: ["Витринное остекление", "Вывеска", "Рабочая стойка", "Свет"]
      },
      {
        id: "flowers-retail-plus",
        title: "Торговая комплектация с климатом",
        features: ["Дополнительное хранение", "Климат", "Полки для растений", "Декоративная подсветка"]
      }
    ],
    materials: [
      {
        id: "retail-glass",
        title: "Крупная витрина",
        description: "Остекление делает товар частью фасада, усиливает контакт с улицей и помогает пространству работать на продажи."
      },
      {
        id: "flower-warm-interior",
        title: "Теплый интерьер",
        description: "Дерево, направленный свет и тёмный фон создают спокойную среду, в которой растения и букеты остаются главным акцентом."
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
