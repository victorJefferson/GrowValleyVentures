import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
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
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "serviceCategory" }],
    }),
    defineField({ name: "iconName", title: "Icon Name", type: "string" }),
    defineField({ name: "description", title: "Short Description", type: "text" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
