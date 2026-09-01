import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "memberType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Advisory Team", value: "advisory" },
          { title: "Leadership", value: "leadership" },
          { title: "Service Principal", value: "principal" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "imagePath", title: "Static Image Path (fallback)", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
    defineField({ name: "serviceSlug", title: "Linked Service Slug (principals only)", type: "string" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
