import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
        defineField({
            name: "eyebrow",
            title: "Eyebrow",
            type: "string",
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
        }),
        defineField({
            name: "subheadline",
            title: "Subheadline",
            type: "text",
        }),
        defineField({
            name: "ctaText",
            title: "CTA Button Text",
            type: "string",
        }),
        defineField({
            name: "ctaHref",
            title: "CTA Button Link",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});
