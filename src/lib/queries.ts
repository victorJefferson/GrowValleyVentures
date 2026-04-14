import { groq } from "next-sanity";

export const heroQuery = groq`
  *[_type == "hero" && pageSlug == $pageSlug][0] {
    eyebrow,
    headline,
    subheadline,
    ctaText,
    ctaHref,
    image
  }
`;

export const dataSectionQuery = groq`
  *[_type == "dataSection"] | order(_updatedAt desc)[0] {
    headline,
    description,
    stats[] {
      prefix,
      number,
      suffix,
      label
    }
  }
`;

export const insightsQuery = groq`
  *[_type == "insight"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const allInsightsQuery = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const insightBySlugQuery = groq`
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt,
    content
  }
`;

// ─── Insights Index Page Queries ─────────────────────────────────────────

// The most recently updated featured article wins (safety net for duplicate featured)
export const featuredInsightQuery = groq`
  *[_type == "insight" && featured == true] | order(_updatedAt desc)[0] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const editorsPickQuery = groq`
  *[_type == "insight" && editorsPick == true] | order(_updatedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const latestInsightsQuery = groq`
  *[_type == "insight"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

// All insights for the tab + grid section (no limit, handled client-side with Load More)
export const allInsightsForIndexQuery = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    tag,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const leadershipQuery = groq`
  *[_type == "leadership"] | order(_updatedAt desc)[0] {
    eyebrow,
    name,
    title,
    bio,
    stats[] {
      value,
      label
    }
  }
`;
