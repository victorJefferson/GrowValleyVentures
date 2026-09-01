import { defineField, defineType } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      options: {
        list: [
          { title: "Privacy Policy", value: "privacy-policy" },
          { title: "Terms of Use", value: "terms-of-use" },
          { title: "Disclaimer", value: "disclaimer" },
          { title: "Regulatory Disclosures", value: "regulatory-disclosures" },
          { title: "Cookie Policy", value: "cookie-policy" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "headline", title: "Section Headline", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
        },
      ],
    }),
  ],
});
