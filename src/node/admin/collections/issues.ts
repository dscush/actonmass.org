import { id_field, linkWithImg } from "../common";

export default {
  name: "issues",
  label: "Issues",
  folder: "content/issues/",
  create: true,
  slug: "{{title}}",
  editor: {
    preview: false,
  },
  fields: [
    {
      ...id_field,
      hint: "Example: immigation",
    },
    {
      name: "ocd_id",
      widget: "hidden",
    },
    {
      label: "Layout",
      name: "layout",
      widget: "hidden",
      default: "issue",
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Subtitle",
      name: "subtitle",
      hint: "Used in the home page in the issue box",
      widget: "string",
      required: false,
    },
    {
      label: "Logo",
      name: "logo",
      widget: "string",
      hint: "Check https://fontawesome.com/icons/ for icons",
      required: false,
    },
    {
      label: "Homepage image",
      name: "img",
      widget: "image",
      required: false,
    },
    {
      label: "Issue page image",
      name: "page_img",
      widget: "image",
      required: false,
    },
    {
      label: "Catchphrase",
      hint: "Appears on the headline on the issue page",
      name: "catchphrase",
      widget: "string",
      required: false,
    },
    {
      label: "Issue text block",
      hint: "Appears under the headline on the issue page",
      name: "text",
      widget: "markdown",
      required: false,
    },
    {
      label: "Bills section title",
      hint: 'Completes the sentence "Bills to support..."',
      name: "bills_to_support_title",
      widget: "string",
      required: false,
    },
    {
      label: "Bill",
      name: "highlighted_bills",
      widget: "relation",
      collection: "bills",
      multiple: true,
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "aom_id",
    },
    {
      label: "“Failures“ section title",
      name: "failures_block_title",
      widget: "string",
      required: false,
    },
    {
      label: "Failures",
      name: "failures",
      required: false,
      collapsed: false,
      widget: "list",
      fields: [
        {
          label: "Title",
          name: "title",
          required: true,
          widget: "string",
        },
        {
          label: "Text",
          name: "text",
          required: true,
          widget: "markdown",
        },
      ],
    },
    {
      label: "Questions",
      name: "questions",
      required: false,
      collapsed: true,
      widget: "list",
      fields: [
        {
          label: "Question",
          name: "title",
          required: true,
          widget: "string",
        },
        {
          label: "Answer",
          name: "text",
          required: true,
          widget: "markdown",
        },
      ],
    },
    {
      label: "Learn more links",
      name: "learn_more",
      required: false,
      collapsed: true,
      widget: "list",
      fields: linkWithImg,
    },
    {
      label: "References",
      name: "references",
      required: false,
      collapsed: true,
      widget: "list",
      fields: [
        {
          label: "Key",
          hint: "Can be used to add a link to the reference",
          name: "key",
          required: true,
          widget: "string",
        },
        {
          label: "Title",
          name: "title",
          required: true,
          widget: "string",
        },
        {
          label: "Link",
          name: "link",
          required: false,
          widget: "string",
        },
      ],
    },
    {
      label: "Order",
      name: "order",
      widget: "number",
      value_type: "int",
      required: false,
    },
  ],
};
