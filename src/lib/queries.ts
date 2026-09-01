import { groq } from "next-sanity";

export const heroQuery = groq`
  *[_type == "hero" && pageSlug == $pageSlug][0] {
    eyebrow,
    headline,
    subheadline,
    body,
    ctaText,
    ctaHref,
    hasCTA,
    image,
    heroStats[] {
      value,
      label
    }
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

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(order asc, _createdAt desc) {
    _id,
    title,
    coverImage,
    "pdfUrl": pdfFile.asset->url
  }
`;

export const serviceCategoriesQuery = groq`
  *[_type == "serviceCategory"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    sectionId,
    description
  }
`;

export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->{
      title,
      "slug": slug.current
    },
    iconName,
    description
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    navCtaText,
    navCtaHref,
    contactEmail
  }
`;

export const footerStatsQuery = groq`
  *[_type == "footerStats"][0] {
    stats[] { value, label },
    supportingCopy,
    disclaimer
  }
`;

export const pageSectionQuery = groq`
  *[_type == "pageSection" && pageSlug == $pageSlug && sectionKey == $sectionKey][0] {
    heading,
    subheading,
    body,
    items[] { title, body, label },
    stats[] { prefix, number, suffix, label, value }
  }
`;

export const pageSectionsByPageQuery = groq`
  *[_type == "pageSection" && pageSlug == $pageSlug] {
    sectionKey,
    heading,
    subheading,
    body,
    items[] { title, body, label },
    stats[] { prefix, number, suffix, label, value }
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember" && memberType == $memberType] | order(order asc) {
    name,
    role,
    bio,
    image,
    imagePath,
    serviceSlug
  }
`;

export const officeLocationsQuery = groq`
  *[_type == "officeLocation"] | order(order asc) {
    name,
    label,
    addressLines,
    email
  }
`;

export const servicePageBySlugQuery = groq`
  *[_type == "servicePage" && slug == $slug][0]
`;

export const legalPageBySlugQuery = groq`
  *[_type == "legalPage" && slug == $slug][0] {
    slug,
    headline,
    sections[] { headline, body }
  }
`;

export const pressReleasesQuery = groq`
  *[_type == "pressRelease"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    summary,
    year,
    "pdfUrl": pdfFile.asset->url
  }
`;

