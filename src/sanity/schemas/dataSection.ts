import { defineField, defineType } from "sanity";

export default defineType({
    name: "dataSection",
    title: "Data Section",
    type: "document",
    fields: [
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "stats",
            title: "Statistics",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "prefix", title: "Prefix (Optional)", type: "string" },
                        { 
                            name: "number", 
                            title: "Number (Mandatory)", 
                            type: "number",
                            validation: Rule => Rule.required()
                        },
                        { name: "suffix", title: "Suffix (Optional)", type: "string" },
                        { 
                            name: "label", 
                            title: "Label (Mandatory)", 
                            type: "string",
                            validation: Rule => Rule.required()
                        },
                    ],
                    preview: {
                        select: {
                            prefix: "prefix",
                            number: "number",
                            suffix: "suffix",
                            label: "label",
                        },
                        prepare({ prefix, number, suffix, label }) {
                            return {
                                title: `${prefix || ''}${number}${suffix || ''}`,
                                subtitle: label,
                            };
                        },
                    },
                },
            ],
            validation: Rule => Rule.required().min(1).max(4),
        }),
    ],
});
