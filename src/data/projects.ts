import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "spa-house-001",
    slug: "spa-house-001",
    title: "SPA House в лесном участке",
    productId: "spa-house",
    collectionId: "spa",
    location: "Минская область",
    year: 2026,
    summary:
      "Приватный SPA-модуль с террасой, графитовым контуром и теплой деревянной отделкой.",
    challenge:
      "Создать камерный объект отдыха, который не спорит с природным окружением и сохраняет премиальное ощущение участка.",
    solution:
      "Мы выбрали низкий архитектурный силуэт, темный фасад и панорамное раскрытие в сторону приватной зоны сада.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
      alt: "Современный загородный объект среди зелени"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный деревянный дом в лесу"
      },
      {
        src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
        alt: "Интерьер с панорамным окном"
      }
    ],
    specs: [
      { label: "Площадь", value: "32 м²" },
      { label: "Сценарий", value: "SPA и отдых" },
      { label: "Фасад", value: "графит и дерево" }
    ],
    relatedProductIds: ["spa-house"],
    seo: {
      title: "Проект SPA House",
      description: "Реализация SPA House NORD FORM на загородном участке."
    }
  },
  {
    id: "garden-module-001",
    slug: "garden-module-001",
    title: "Garden Hub для загородной мастерской",
    productId: "garden-hub",
    collectionId: "garden",
    location: "Минск",
    year: 2026,
    summary:
      "Компактная мастерская на участке с чистой геометрией, местом хранения и рабочим светом.",
    challenge:
      "Собрать функциональный объект для работы и хранения без визуального ощущения технической пристройки.",
    solution:
      "Модуль получил спокойный фасад, большое окно в рабочей зоне и внутреннюю систему хранения.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85",
      alt: "Современный дом и участок"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
        alt: "Светлая рабочая студия"
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        alt: "Современный фасад дома"
      }
    ],
    specs: [
      { label: "Площадь", value: "24 м²" },
      { label: "Сценарий", value: "мастерская и хранение" },
      { label: "Особенность", value: "рабочее окно и скрытое хранение" }
    ],
    relatedProductIds: ["garden-hub"],
    seo: {
      title: "Проект Garden Hub",
      description: "Реализация Garden Hub NORD FORM для мастерской на участке."
    }
  }
];
