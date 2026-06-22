import { collections } from "@/data/collections";
import { blogArticles } from "@/data/blog";
import { products } from "@/data/products";
import { projects } from "@/data/projects";

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getProductsByCollection(collectionId: string) {
  return products.filter((product) => product.collectionId === collectionId);
}

export function getProjectsByProduct(productId: string) {
  return projects.filter((project) => project.relatedProductIds.includes(productId));
}
