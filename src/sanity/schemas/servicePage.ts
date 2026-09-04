import { defineField, defineType } from "sanity";

const statField = {
  type: "object",
  fields: [
    { name: "value", title: "Value", type: "string" },
    { name: "label", title: "Label", type: "string" },
  ],
};

export default defineType({
  name: "servicePage",
  title: "Service Page Content",
  type: "document",
  fields: [
    defineField({ name: "slug", title: "Page Slug", type: "string", validation: (R) => R.required() }),
    defineField({ name: "pageTitle", title: "Page Title", type: "string" }),
    defineField({ name: "pageLabel", title: "Page Label", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "breadcrumb", title: "Breadcrumb", type: "string" }),
    defineField({ name: "taglineLine1", title: "Tagline Line 1", type: "string" }),
    defineField({ name: "taglineLine2", title: "Tagline Line 2", type: "string" }),
    defineField({ name: "problemHeadline", title: "Problem Headline", type: "string" }),
    defineField({ name: "problemBody", title: "Problem Body", type: "text" }),
    defineField({ name: "problemBullets", title: "Problem Bullets", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featureOverline", title: "Feature Overline", type: "string" }),
    defineField({ name: "featureHeadline", title: "Feature Headline", type: "string" }),
    defineField({ name: "featureBody", title: "Feature Body", type: "text" }),
    defineField({ name: "featureBullets", title: "Feature Bullets", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "helpCards",
      title: "How We Help Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
            { name: "icon", title: "Icon", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "statsHeader", title: "Stats Header", type: "string" }),
    defineField({ name: "stats", title: "Stats", type: "array", of: [statField] }),
    defineField({
      name: "includedColumns",
      title: "What's Included (2 columns)",
      type: "array",
      of: [{ type: "array", of: [{ type: "string" }] }],
    }),
    defineField({ name: "ctaHeadline", title: "CTA Headline", type: "string" }),
    defineField({ name: "ctaBody", title: "CTA Body", type: "text" }),
    defineField({ name: "ctaButton", title: "CTA Button", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Href", type: "string", initialValue: "/contact" }),
  ],
});
