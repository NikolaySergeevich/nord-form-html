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
      "Вместо нескольких хозяйственных построек — единый модуль для хранения, работы, дров и сезонной техники.",
    challenge:
      "Клиенту требовалось собрать хранение, дровник, мастерскую и доступ для крупной техники в одном объекте, который не выглядел бы временной постройкой.",
    solution:
      "Функции разделили внутри 40-футовой основы, сохранили широкий доступ для техники и встроили дровник в фасад. Графитовый металл, дерево и тёплая подсветка связали хозяйственный объект с архитектурой участка.",
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
      "Организованное хранение освободило участок от случайных навесов, инструмента и техники на открытом воздухе.",
    challenge:
      "Задача — убрать разрозненное хранение с участка, предусмотреть место для техники и дров и сохранить аккуратный вид объекта днём и вечером.",
    solution:
      "Внутри предусмотрели стеллажи, свободную зону для газонокосилки и рабочий свет. Наружный дровник интегрировали в объём, а фасад собрали из графитового металла, деревянных акцентов и мягкой подсветки.",
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
      "Полный банный сценарий разместился в одном модуле без потери полезной площади и доступа к инженерии.",
    challenge:
      "Нужно было разместить комнату отдыха, моечную и парную в компактном объёме, не смешивая зоны и не закрывая доступ к коммуникациям.",
    solution:
      "Помещения выстроили последовательно: сухая зона, моечная, парная и отдельная техническая ниша. Так инженерные системы можно обслуживать, не занимая банные помещения и не нарушая сценарий отдыха.",
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
      "Компактный цветочный магазин получил заметный фасад, открытую витрину и рабочий интерьер для ежедневной флористики.",
    challenge:
      "Требовалось соединить привлекательную торговую точку с полноценным рабочим местом флориста, хранением и комфортной средой для растений.",
    solution:
      "Крупное остекление превратило товар в часть фасада, а внутри разделили экспозицию, рабочую стойку и хранение. Графитовый корпус, дерево, вывеска и тёплый свет сформировали узнаваемый образ точки.",
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
