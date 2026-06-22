# PHASE 1 — Project Initialization

Статус: подготовлено для утверждения.

На этом этапе не создаются страницы, контент, бизнес-логика и файлы компонентов. Документ фиксирует архитектуру проекта перед разработкой.

## 1. Структура проекта

```text
.
├── README.md
├── docs/
│   ├── project-blueprint.md
│   └── phase-1-architecture.md
├── public/
│   ├── documents/
│   ├── downloads/
│   │   ├── catalog/
│   │   └── guides/
│   ├── fonts/
│   ├── icons/
│   └── images/
│       ├── blog/
│       ├── production/
│       ├── products/
│       └── projects/
└── src/
    ├── app/
    │   ├── blog/
    │   ├── catalog/
    │   ├── collections/
    │   ├── contacts/
    │   ├── production/
    │   ├── products/
    │   └── projects/
    ├── components/
    │   ├── cards/
    │   ├── forms/
    │   ├── gallery/
    │   ├── layout/
    │   ├── quiz/
    │   ├── sections/
    │   ├── seo/
    │   └── ui/
    ├── content/
    │   ├── blog/
    │   ├── collections/
    │   ├── lead-magnets/
    │   ├── products/
    │   └── projects/
    ├── data/
    ├── hooks/
    ├── lib/
    ├── sections/
    ├── styles/
    └── types/
```

### Назначение зон

- `src/app` — маршруты сайта и будущие файлы страниц.
- `src/components` — переиспользуемые компоненты интерфейса.
- `src/components/sections` — секции, которые могут использоваться на нескольких страницах.
- `src/sections` — композиции секций для конкретных типов страниц.
- `src/components/ui` — базовые UI-элементы.
- `src/components/forms` — формы и состояния отправки.
- `src/components/gallery` — галереи, слайдеры и медиа-просмотр.
- `src/hooks` — клиентские хуки для UI-состояний.
- `src/lib` — утилиты, SEO, форматирование, интеграционные адаптеры.
- `src/data` — статические данные и индексы.
- `src/content` — контентные сущности: продукты, коллекции, проекты, статьи.
- `src/styles` — дизайн-токены, глобальные стили, CSS-переменные.
- `src/types` — общие типы данных проекта.
- `public` — изображения, PDF, иконки, шрифты и публичные документы.

## 2. Component Map

### Layout

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `SiteHeader` | Верхняя навигация, логотип, CTA | Все страницы | `Navigation`, `Button` |
| `Navigation` | Основное меню сайта | `SiteHeader`, `MobileMenu` | route map |
| `MobileMenu` | Мобильная навигация | Все страницы на мобильных | `Navigation`, `Button` |
| `SiteFooter` | Нижняя навигация, контакты, юридические ссылки | Все страницы | route map, contacts data |
| `PageShell` | Общая оболочка страницы | Все страницы | `SiteHeader`, `SiteFooter` |
| `Container` | Единая ширина контента | Все секции | design tokens |
| `Section` | Вертикальный блок страницы | Все страницы | `Container` |
| `Breadcrumbs` | Навигационная цепочка | Коллекции, продукты, проекты, блог | route map |

### UI

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `Button` | Основные действия и CTA | Все страницы и формы | design tokens |
| `LinkButton` | Ссылки, оформленные как кнопки | CTA-блоки | `Button` styles |
| `Input` | Текстовое поле | Все формы | form state |
| `Textarea` | Поле комментария | Формы консультации и расчета | form state |
| `Select` | Выбор варианта | Квиз, форма расчета | option data |
| `Checkbox` | Согласие и настройки | Формы | form state |
| `Modal` | Модальное окно | Лид-магниты, формы | `Button`, focus management |
| `Accordion` | FAQ и раскрывающиеся блоки | FAQ, характеристики | `FAQ` data |
| `Tabs` | Переключение категорий | Блог, комплектации | state hook |
| `Badge` | Метки и категории | Карточки, статьи | design tokens |
| `Card` | Базовая карточка | Продукты, проекты, статьи | design tokens |

### Cards

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `CollectionCard` | Карточка направления | Главная, список коллекций | `Collection` |
| `ProductCard` | Карточка продукта | Главная, коллекции | `Product` |
| `ProjectCard` | Карточка реализации | Главная, проекты | `Project` |
| `ArticleCard` | Карточка статьи | Блог, related-блоки | `BlogArticle` |
| `FeatureCard` | Преимущество или характеристика | Секции продукта и производства | design tokens |
| `LeadMagnetCard` | Карточка PDF-гайда | Каталог, блог, CTA | lead magnet data |

### Sections

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `HeroSection` | Первый экран с главным CTA | Главная, посадочные страницы | `Button`, media asset |
| `CollectionsSection` | Вывод направлений | Главная | `CollectionCard` |
| `ProductsSection` | Вывод продуктов | Главная, коллекции | `ProductCard` |
| `ProjectsSection` | Вывод реализованных проектов | Главная, проекты | `ProjectCard` |
| `ProductionSection` | Краткий блок производства | Главная, производство | production data |
| `MaterialsSection` | Материалы и отделка | Продукты, производство | `FeatureCard` |
| `FAQSection` | Частые вопросы | Продукты, статьи | `Accordion`, `FAQ` |
| `LeadMagnetSection` | Захват лида через PDF | Главная, коллекции, блог | forms, lead magnet data |
| `FinalCTASection` | Финальный призыв к действию | Все продающие страницы | `Button`, forms |
| `RelatedContentSection` | Связанные статьи и продукты | Блог, продукты | cards, route map |

### Gallery

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `ImageGallery` | Сетка изображений | Продукты, проекты, производство | image data |
| `GallerySlider` | Слайдер изображений | Продукты, проекты | image data, UI controls |
| `GalleryLightbox` | Увеличенный просмотр фото | Галереи | `Modal`, image data |
| `BeforeAfterGallery` | Сравнение этапов или результата | Проекты, производство | image data |

### Forms

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `CatalogForm` | Заявка на каталог | Hero, каталог, CTA | form validation |
| `ConsultationForm` | Заявка на консультацию | Галерея, контакты, CTA | form validation |
| `CalculationForm` | Заявка на расчет | Продукты, квиз | product data, validation |
| `LeadMagnetModal` | Модальная форма скачивания PDF | Блог, коллекции, каталог | `Modal`, forms |
| `FormSuccessState` | Сообщение после отправки | Все формы | form state |
| `ConsentNotice` | Согласие на обработку данных | Все формы | legal text |

### Quiz

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `QuizShell` | Оболочка квиза | `/quiz`, CTA-блоки | quiz state |
| `QuizProgress` | Прогресс прохождения | Квиз | quiz state |
| `QuizStep` | Один вопрос квиза | Квиз | quiz data |
| `QuizOptionCard` | Вариант ответа | Квиз | `Button` |
| `QuizResult` | Рекомендация коллекции | Квиз | `Collection` |
| `QuizLeadForm` | Форма после результата | Квиз | `CalculationForm` |

### SEO

| Компонент | Назначение | Где используется | Зависимости |
|---|---|---|---|
| `SEOHead` | Title, description, canonical, open graph | Все страницы | SEO data |
| `StructuredData` | JSON-LD контейнер | Все SEO-страницы | schema helpers |
| `BreadcrumbSchema` | Schema для хлебных крошек | Вложенные страницы | route map |
| `ProductSchema` | Schema продукта | Страницы продуктов | `Product` |
| `ArticleSchema` | Schema статьи | Статьи блога | `BlogArticle` |
| `LocalBusinessSchema` | Schema компании | Главная, контакты | company data |

## 3. Route Map

| Раздел | URL | Тип страницы | Назначение |
|---|---|---|---|
| Главная | `/` | Static | Вход в воронку, коллекции, каталог, доверие |
| SPA коллекция | `/collections/spa` | Collection | Направление SPA и отдых |
| Сад и участок | `/collections/garden` | Collection | Решения для участка |
| Хранение | `/collections/storage` | Collection | Хозблоки и хранение |
| Бизнес | `/collections/business` | Collection | Коммерческие модули |
| SPA House | `/products/spa-house` | Product | Продуктовая страница SPA-модуля |
| Garden Hub | `/products/garden-hub` | Product | Модуль для участка |
| Garden Storage | `/products/garden-storage` | Product | Модуль хранения |
| Flower Studio | `/products/flower-studio` | Product | Модульный цветочный магазин |
| Все проекты | `/projects` | Listing | Каталог реализованных проектов |
| Проект SPA | `/projects/spa-house-001` | Project | Детальная страница проекта |
| Проект Garden | `/projects/garden-module-001` | Project | Детальная страница проекта |
| Производство | `/production` | Static | Материалы, процесс, доверие |
| Блог | `/blog` | Listing | Все статьи и категории |
| Для участка | `/blog/uchastok` | Blog category | Статьи для владельцев участков |
| SPA и отдых | `/blog/spa` | Blog category | Статьи про баню и SPA |
| Для бизнеса | `/blog/business` | Blog category | Статьи для малого бизнеса |
| Архитектура | `/blog/architecture` | Blog category | Вдохновляющий SEO-трафик |
| Статья | `/blog/[slug]` | Article | Детальная статья |
| Каталог | `/catalog` | Lead page | Получение PDF-каталога |
| Контакты | `/contacts` | Static | Связь и заявка на консультацию |
| Квиз | `/quiz` | Interactive | Подбор коллекции и лид |

## 4. Data Architecture

Типы ниже описывают структуру данных. Реальные файлы типов и данные будут созданы после утверждения архитектуры.

### Product

```ts
type Product = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  collectionId: string;
  category: "spa" | "garden" | "storage" | "business";
  summary: string;
  description: string;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  area?: string;
  dimensions?: string;
  basePrice?: string;
  specs: ProductSpec[];
  layouts: ProductLayout[];
  configurations: ProductConfiguration[];
  materials: Material[];
  engineering: string[];
  faq: FAQ[];
  seo: SEOFields;
};
```

### Collection

```ts
type Collection = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  heroImage: ImageAsset;
  productIds: string[];
  useCases: string[];
  benefits: string[];
  leadMagnetId?: string;
  relatedArticleIds: string[];
  seo: SEOFields;
};
```

### Project

```ts
type Project = {
  id: string;
  slug: string;
  title: string;
  productId?: string;
  collectionId?: string;
  location?: string;
  year?: number;
  summary: string;
  challenge?: string;
  solution?: string;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  specs: ProjectSpec[];
  relatedProductIds: string[];
  seo: SEOFields;
};
```

### FAQ

```ts
type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: "product" | "production" | "delivery" | "payment" | "general";
  relatedProductIds?: string[];
  relatedCollectionIds?: string[];
};
```

### BlogArticle

```ts
type BlogArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "uchastok" | "spa" | "business" | "architecture";
  coverImage: ImageAsset;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  tags: string[];
  relatedProductIds: string[];
  relatedCollectionIds: string[];
  leadMagnetId?: string;
  seo: SEOFields;
};
```

### Shared Types

```ts
type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type SEOFields = {
  title: string;
  description: string;
  h1?: string;
  canonical?: string;
  noIndex?: boolean;
  openGraphImage?: string;
};

type ProductSpec = {
  label: string;
  value: string;
};

type ProductLayout = {
  id: string;
  title: string;
  image: ImageAsset;
  area?: string;
};

type ProductConfiguration = {
  id: string;
  title: string;
  features: string[];
};

type Material = {
  id: string;
  title: string;
  description: string;
  image?: ImageAsset;
};

type ProjectSpec = {
  label: string;
  value: string;
};
```

## 5. Design Tokens

Токены задают визуальную систему до разработки UI.

### Colors

```text
color.background.primary: #F7F5F0
color.background.secondary: #ECE8DF
color.background.dark: #191A18
color.surface.primary: #FFFFFF
color.surface.muted: #F1EEE7
color.text.primary: #191A18
color.text.secondary: #5F625C
color.text.inverse: #FFFFFF
color.border.default: #D8D2C6
color.accent.primary: #2F3A32
color.accent.secondary: #A66F3F
color.accent.soft: #D8C4A8
color.success: #2F6B4F
color.error: #B84A3A
color.focus: #6F8A72
```

### Typography

```text
font.family.heading: "Inter", system-ui, sans-serif
font.family.body: "Inter", system-ui, sans-serif
font.family.accent: "Inter", system-ui, sans-serif

font.size.xs: 12px
font.size.sm: 14px
font.size.md: 16px
font.size.lg: 18px
font.size.xl: 24px
font.size.2xl: 32px
font.size.3xl: 44px
font.size.4xl: 56px

line.height.tight: 1.1
line.height.heading: 1.2
line.height.body: 1.55

font.weight.regular: 400
font.weight.medium: 500
font.weight.semibold: 600
font.weight.bold: 700
```

### Spacing

```text
space.0: 0
space.1: 4px
space.2: 8px
space.3: 12px
space.4: 16px
space.5: 20px
space.6: 24px
space.8: 32px
space.10: 40px
space.12: 48px
space.16: 64px
space.20: 80px
space.24: 96px
```

### Radius

```text
radius.none: 0
radius.sm: 4px
radius.md: 8px
radius.lg: 12px
radius.xl: 16px
radius.full: 999px
```

### Shadows

```text
shadow.none: none
shadow.sm: 0 2px 8px rgba(25, 26, 24, 0.08)
shadow.md: 0 8px 24px rgba(25, 26, 24, 0.10)
shadow.lg: 0 16px 48px rgba(25, 26, 24, 0.14)
```

### Breakpoints

```text
breakpoint.xs: 360px
breakpoint.sm: 640px
breakpoint.md: 768px
breakpoint.lg: 1024px
breakpoint.xl: 1280px
breakpoint.2xl: 1440px
```

## 6. Development Roadmap

### Phase 1 — Foundation

- Утвердить архитектуру проекта.
- Утвердить структуру папок.
- Утвердить route map.
- Утвердить типы данных.
- Утвердить дизайн-токены.

### Phase 2 — UI Components

- Создать базовые UI-компоненты.
- Создать layout-компоненты.
- Создать карточки.
- Создать компоненты галереи.
- Создать базовые SEO-компоненты.

### Phase 3 — Homepage

- Собрать главную страницу.
- Подключить коллекции, продукты, проекты и CTA.
- Проверить адаптивность первого экрана.

### Phase 4 — Collections

- Создать шаблон страницы коллекции.
- Подключить карточки продуктов.
- Добавить CTA на PDF и консультацию.

### Phase 5 — Product Pages

- Создать шаблон продуктовой страницы.
- Подключить характеристики, планировки, галерею, FAQ.
- Добавить форму расчета.

### Phase 6 — Forms & PDF

- Реализовать формы каталога, консультации и расчета.
- Подготовить сценарии скачивания PDF.
- Подготовить интеграции отправки заявок.

### Phase 7 — SEO

- Добавить SEO metadata.
- Добавить structured data.
- Настроить sitemap и robots.
- Подготовить внутреннюю перелинковку.

### Phase 8 — Final Polish

- Проверить адаптивность.
- Проверить скорость.
- Проверить формы.
- Проверить SEO.
- Подготовить финальный список улучшений после запуска.

## 7. Что не делаем на Phase 1

- Не создаем страницы сайта.
- Не пишем текстовый контент страниц.
- Не пишем бизнес-логику.
- Не создаем файлы компонентов-заглушек.
- Не подключаем формы к внешним сервисам.
- Не создаем SEO-страницы до утверждения архитектуры.

## 8. Следующий шаг

После утверждения этого документа можно переходить к Phase 2 — созданию базовых UI-компонентов и layout-слоя.
