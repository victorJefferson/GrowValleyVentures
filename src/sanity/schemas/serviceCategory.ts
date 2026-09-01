import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceCategory",
  title: "Service Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({ name: "sectionId", title: "Section ID", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "headline", title: "Page Headline", type: "string" }),
    defineField({ name: "body", title: "Page Body", type: "text" }),
  ],
});
