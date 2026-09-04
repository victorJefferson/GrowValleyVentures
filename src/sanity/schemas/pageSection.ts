import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageSection",
  title: "Page Section",
  type: "document",
  fields: [
    defineField({ name: "pageSlug", title: "Page Slug", type: "string", validation: (R) => R.required() }),
    defineField({ name: "sectionKey", title: "Section Key", type: "string", validation: (R) => R.required() }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "subheading", title: "Subheading", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "prefix", title: "Prefix", type: "string" },
            { name: "number", title: "Number", type: "number" },
            { name: "suffix", title: "Suffix", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value (plain text)", type: "string" },
          ],
        },
      ],
    }),
  ],
});
