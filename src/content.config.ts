import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Category is derived from the project title: the old site's "typologie"
 * taxonomy was empty for every reference. The client should confirm it.
 */
export const categories = {
  'bytove-domy': 'Bytové domy a soubory',
  komercni: 'Komerční a administrativní stavby',
  rodinne: 'Rodinné bydlení',
  verejne: 'Veřejné stavby a občanská vybavenost',
} as const;

const reference = defineCollection({
  loader: file('src/content/reference.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['bytove-domy', 'komercni', 'rodinne', 'verejne']),
      realizace: z.enum(['novostavba', 'rekonstrukce']).nullable(),
      services: z.array(z.string()),
      /** "Autor návrhu" from the old site; null where it was left empty. */
      autor: z.string().nullable().default(null),
      notes: z.array(z.string()).default([]),
      image: image(),
      /** Position in the home-page hero; -1 = not featured. */
      featured: z.number().default(-1),
      published: z.coerce.date(),
    }),
});

const aktuality = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/aktuality' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      image: image(),
    }),
});

const pozice = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/pozice' }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    date: z.coerce.date(),
    open: z.boolean().default(true),
    info: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

const stranky = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/stranky' }),
  schema: z.object({ title: z.string() }),
});

export const collections = { reference, aktuality, pozice, stranky };
