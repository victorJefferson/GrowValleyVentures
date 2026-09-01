import { defineField, defineType } from "sanity";

export default defineType({
  name: "officeLocation",
  title: "Office Location",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Office Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "label", title: "Label (e.g. Dubai Head Office)", type: "string" }),
    defineField({ name: "addressLines", title: "Address Lines", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
