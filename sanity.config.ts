import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'stage';

export default defineConfig({
  name: 'default',
  title: 'AFAQ Partners Studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
    templates: (prev) => [
      ...prev.filter((template) => template.id !== 'hero'),
      {
        id: 'hero-home',
        title: 'Hero (Home)',
        schemaType: 'hero',
        value: {
          pageSlug: 'home',
          hasCTA: true,
          eyebrow: 'AFAQ PARTNERS',
          headline: "Wealth managed by people who've actually built it.",
          subheadline: 'Operated. Invested. Built. Now managing your capital the same way.',
          ctaText: 'Talk to an Advisor',
          ctaHref: '/contact',
        },
      },
      {
        id: 'hero-about',
        title: 'Hero (About Us)',
        schemaType: 'hero',
        value: {
          pageSlug: 'about',
          eyebrow: 'ABOUT US',
          headline: "Wealth is more than banking.",
        },
      },
      {
        id: 'hero-expertise',
        title: 'Hero (Expertise)',
        schemaType: 'hero',
        value: {
          pageSlug: 'expertise',
          eyebrow: 'OUR EXPERTISE',
          headline: 'Expertise that actually matters.',
        },
      },
      {
        id: 'hero-team',
        title: 'Hero (Team)',
        schemaType: 'hero',
        value: {
          pageSlug: 'team',
          eyebrow: 'OUR TEAM',
          headline: 'The people behind every decision.',
        },
      },
      {
        id: 'hero-careers',
        title: 'Hero (Careers)',
        schemaType: 'hero',
        value: {
          pageSlug: 'careers',
          eyebrow: 'CAREERS',
          headline: "We don't hire for roles. We hire for impact.",
        },
      },
    ],
  },

  basePath: '/studio',
});
