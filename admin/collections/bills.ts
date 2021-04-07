import { id_field, legislator_picker, date_picker, script_opt, script_req_only_opt } from "../common";

export default {
  name: "bills",
  label: "Bills",
  folder: "_bills/",
  create: true,
  slug: "{{title}}",
  identifier_field: "title",
  editor: {
    preview: false,
  },
  fields: [
    {
      ...id_field,
      default: "Exemple: safe-communities-act",
    },
    {
      label: "Short title",
      name: "title",
      widget: "string",
    },
    {
      label: "Full title",
      name: "full_title",
      required: false,
      widget: "string",
    },
    {
      label: "Twitter bill name",
      name: "twitter_bill_name",
      widget: "string",
    },
    {
      label: "Article",
      name: "article",
      required: false,
      widget: "string",
    },
    {
      label: "House bill number",
      name: "house_no",
      required: false,
      widget: "string",
    },
    {
      label: "House bill link",
      name: "house_link",
      required: false,
      widget: "string",
    },
    {
      label: "Senate bill number",
      name: "senate_no",
      required: false,
      widget: "string",
    },
    {
      label: "Senate bill link",
      name: "senate_link",
      required: false,
      widget: "string",
    },
    {
      label: "Committee",
      name: "committee",
      required: false,
      widget: "relation",
      collection: "committees",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "aom_id",
    },
    {
      label: "Issue",
      name: "issue",
      required: false,
      widget: "relation",
      collection: "issues",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "aom_id",
    },
    {
      label: "Image",
      name: "img",
      widget: "image",
      required: false,
    },
    {
      label: "Summary bullet-points",
      name: "summary",
      required: false,
      widget: "list",
      collapsed: false,
      field: {
        label: "Bullet point",
        name: "point",
        widget: "string",
      },
    },
    {
      label: "Organisations",
      name: "orgs",
      required: false,
      widget: "list",
      collapsed: false,
      field: {
        label: "Org",
        name: "org",
        widget: "string",
      },
    },
    {
      ...legislator_picker,
      label: "House lead sponsors",
      name: "house_lead_sponsors",
      multiple: true,
      required: false,
    },
    {
      ...legislator_picker,
      label: "Senate lead sponsors",
      name: "senate_lead_sponsors",
      multiple: true,
      required: false,
    },
    {
      ...legislator_picker,
      label: "Co-sponsors",
      name: "co_sponsors",
      multiple: true,
      required: false,
    },
    {
      label: "Custom scripts - Request co-sponsorship",
      name: "scripts",
      widget: "object",
      collapsed: true,
      ...script_opt,
    },
    {
      label: "Custom scripts - Request committee vote",
      name: "scripts_com_vote",
      widget: "object",
      collapsed: true,
      ...script_req_only_opt,
    },
    {
      label: "Bill history events",
      name: "history",
      required: false,
      collapsed: true,
      widget: "list",
      summary: "{{bill_event}}{{description}}",
      fields: [
        {
          label: "Detailed bill event",
          name: "bill_event",
          required: false,
          widget: "relation",
          collection: "bill_events",
          value_field: "aom_id",
          search_fields: ["aom_id"],
          display_fields: ["aom_id"],
        },
        {
          ...date_picker,
          required: false,
          label: "Date",
          hint: "Fill only if there is no detailed bill event",
          name: "date",
        },
        {
          label: "Description",
          hint: "Fill only if there is no detailed bill event",
          required: false,
          name: "description",
          widget: "text",
        },
        {
          label: "Type of event",
          hint: "Fill only if there is no detailed bill event",
          required: false,
          name: "type",
          widget: "select",
          options: [
            {
              label: "Normal",
              value: "",
            },
            {
              label: "Death",
              value: "death",
            },
          ],
        },
      ],
    },
    {
      label: "Bill timeline events",
      name: "timeline",
      required: false,
      collapsed: true,
      widget: "list",
      fields: [
        {
          ...date_picker,
          required: false,
          label: "Date",
          name: "date",
        },
        {
          label: "Description",
          required: false,
          name: "description",
          widget: "string",
        },
      ],
    },
  ],
};
