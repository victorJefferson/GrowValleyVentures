import { defineField, defineType } from "sanity";

const pageSlugOptions = [
  { title: "Home Page", value: "home" },
  { title: "About Us", value: "about" },
  { title: "Our Expertise", value: "expertise" },
  { title: "Our Team", value: "team" },
  { title: "Leadership", value: "leadership" },
  { title: "Careers / Join", value: "careers" },
  { title: "Contact", value: "contact" },
  { title: "Digital", value: "digital" },
  { title: "Get Started", value: "get-started" },
  { title: "Insights", value: "insights" },
];

export default defineType({
  name: "hero",
  title: "Page Heroes",
  type: "document",
  initialValue: {
    pageSlug: "home",
    hasCTA: true,
    eyebrow: "AFAQ PARTNERS",
    headline: "Wealth managed by people who've actually built it.",
    subheadline:
      "Operated. Invested. Built. Now managing your capital the same way.",
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
  },
  fields: [
    defineField({
      name: "pageSlug",
      title: "Page Identifier (Slug)",
      type: "string",
      description: "Select the page this hero belongs to.",
      options: { list: pageSlugOptions },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text" }),
    defineField({
      name: "body",
      title: "Extended Body (About page)",
      type: "text",
    }),
    defineField({
      name: "heroStats",
      title: "Hero Stats Row",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "hasCTA",
      title: "Include CTA Button?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      hidden: ({ document }) => !document?.hasCTA,
    }),
    defineField({
      name: "ctaHref",
      title: "CTA Button Link",
      type: "string",
      hidden: ({ document }) => !document?.hasCTA,
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
