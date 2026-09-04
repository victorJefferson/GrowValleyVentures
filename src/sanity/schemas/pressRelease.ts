import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressRelease",
  title: "Press Release",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "year", title: "Year", type: "number" }),
    defineField({ name: "pdfFile", title: "PDF", type: "file" }),
    defineField({ name: "content", title: "Content", type: "array", of: [{ type: "block" }] }),
  ],
});
