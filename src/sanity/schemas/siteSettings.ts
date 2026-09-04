import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "AFAQ Partners",
    }),
    defineField({
      name: "tagline",
      title: "Footer Tagline",
      type: "string",
      initialValue: "AFAQ Partners — Dubai. Built by operators. Run for outcomes.",
    }),
    defineField({
      name: "navCtaText",
      title: "Nav CTA Text",
      type: "string",
      initialValue: "Talk to an Advisor",
    }),
    defineField({
      name: "navCtaHref",
      title: "Nav CTA Link",
      type: "string",
      initialValue: "/contact",
    }),
    defineField({
      name: "contactEmail",
      title: "Primary Contact Email",
      type: "string",
      initialValue: "reach@afaqpartners.com",
    }),
  ],
});
