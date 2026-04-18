import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const siteConfig = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/siteConfig' }),
  schema: z.object({
    business_name: z.string(),
    business_type: z.string(),
    phone: z.string(),
    email: z.string().optional(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    website_url: z.string(),
    owner_name: z.string().optional(),
    years_in_business: z.number().optional(),
    founding_year: z.number().optional(),
    licenses: z.array(z.string()).optional(),
    bbb_rating: z.string().optional(),
    insured: z.boolean().default(true),
    google_place_id: z.string().optional(),
    hours: z.array(z.object({
      day: z.string(),
      open: z.string(),
      close: z.string(),
    })).optional(),
    guarantees: z.array(z.string()).optional(),
    financing_available: z.boolean().default(false),
    financing_details: z.string().optional(),
    brand_colors: z.array(z.string()),
    logo_url: z.string().optional(),
    favicon_url: z.string().optional(),
    hero_image: z.string().optional(),
    fonts_display: z.string().optional(),
    fonts_body: z.string().optional(),
    ga4_id: z.string().optional(),
    gtm_id: z.string().optional(),
    facebook_pixel: z.string().optional(),
    custom_head_scripts: z.string().optional(),
    formsubmit_email: z.string(),
    service_areas: z.array(z.string()),
    stats: z.object({
      years_experience: z.string().optional(),
      bbb_rating: z.string().optional(),
      satisfaction: z.string().optional(),
      complaints: z.string().optional(),
    }).optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    excerpt: z.string(),
    image: z.string(),
    image_alt: z.string(),
    sort_order: z.number().default(0),
    featured: z.boolean().default(false),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })),
    warning_signs: z.array(z.string()),
    process_steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    comparison: z.object({
      title: z.string(),
      options: z.array(z.object({
        name: z.string(),
        points: z.array(z.string()),
      })),
    }).optional(),
    benefits: z.array(z.string()),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: 'src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    quote: z.string(),
    source: z.enum(['google', 'yelp', 'facebook', 'nextdoor', 'homeguide', 'alignable', 'manual']).default('manual'),
    source_url: z.string().optional(),
    date: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  siteConfig,
  services,
  reviews,
  blog,
};
