import { getCollection, getEntry } from 'astro:content';

export async function getSiteConfig() {
  const entry = await getEntry('siteConfig', 'main');
  return entry!.data;
}

export async function getServices() {
  const services = await getCollection('services');
  return services.sort((a, b) => (a.data.sort_order ?? 0) - (b.data.sort_order ?? 0));
}

export async function getReviews() {
  return await getCollection('reviews');
}

export async function getFeaturedReviews() {
  const reviews = await getCollection('reviews');
  return reviews.filter((r) => r.data.featured);
}
