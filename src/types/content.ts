export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type SEOFields = {
  title: string;
  description: string;
  h1?: string;
  canonical?: string;
  noIndex?: boolean;
  openGraphImage?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: "product" | "production" | "delivery" | "payment" | "general";
  relatedProductIds?: string[];
  relatedCollectionIds?: string[];
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductLayout = {
  id: string;
  title: string;
  image: ImageAsset;
  area?: string;
};

export type ProductConfiguration = {
  id: string;
  title: string;
  features: string[];
};

export type Material = {
  id: string;
  title: string;
  description: string;
  image?: ImageAsset;
};

export type Product = {
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

export type Collection = {
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

export type ProjectSpec = {
  label: string;
  value: string;
};

export type Project = {
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

export type BlogArticle = {
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

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};
