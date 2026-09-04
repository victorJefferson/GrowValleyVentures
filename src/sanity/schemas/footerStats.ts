import { defineField, defineType } from "sanity";

export default defineType({
  name: "footerStats",
  title: "Footer Stats Bar",
  type: "document",
  fields: [
    defineField({ name: "supportingCopy", title: "Supporting Copy", type: "text" }),
    defineField({ name: "disclaimer", title: "Disclaimer Note", type: "text" }),
    defineField({
      name: "stats",
      title: "Stats",
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
  ],
});
