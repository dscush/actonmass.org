import { script, script_req_only, menu } from "../common";

import { districtSelector, partySelector } from "./legislators";

export default {
  name: "site_data",
  label: "Other data",
  editor: {
    preview: false,
  },
  files: [
    {
      label: "Menu and general settings",
      name: "general_settings",
      file: "content/other/general_settings.yml",
      fields: [
        {
          label: "Donate button URL",
          name: "donate_button_url",
          widget: "string",
        },
        {
          label: "Site description",
          name: "description",
          widget: "text",
          hint: "This field is used when sharing a link towards the website on Facebook",
        },
        {
          label: "Call to action",
          name: "cta",
          hint: "If active, this call to action will appear on every page of the website.",
          widget: "object",
          fields: [
            {
              label: "Active",
              name: "active",
              widget: "boolean",
            },
            {
              label: "Title",
              name: "title",
              widget: "string",
              hint: "The text to display in the CTA.",
            },
            {
              label: "Link",
              name: "href",
              widget: "string",
              hint: "The link the CTA points to.",
            },
          ],
        },
        {
          label: "Main Menu",
          name: "menu",
          widget: "list",
          ...menu,
        },
        {
          label: "Initiatives Menu",
          name: "initiatives_menu",
          widget: "list",
          ...menu,
        },
        {
          label: "Learn More Menu",
          name: "learn_more_menu",
          widget: "list",
          ...menu,
        },
        {
          label: "Footer",
          name: "footer",
          widget: "list",
          ...menu,
        },
      ],
    },
    {
      label: "Candidate pledges",
      name: "candidate_pledges",
      file: "content/other/candidate_pledge.yml",
      fields: [
        {
          label: "Candidates who signed the pledge",
          name: "candidates",
          widget: "list",
          collapsed: false,
          fields: [
            {
              label: "First name",
              name: "first_name",
              widget: "string",
            },
            {
              label: "Last name",
              name: "last_name",
              widget: "string",
            },
            partySelector,
            {
              label: "District Name",
              name: "district_name",
              widget: "relation",
              collection: "districts",
              search_fields: ["name"],
              display_fields: ["name"],
              value_field: "name",
            },
            {
              label: "Chamber",
              name: "chamber",
              widget: "select",
              options: [
                {
                  label: "House",
                  value: "house",
                },
                {
                  label: "Senate",
                  value: "senate",
                },
              ],
            },
            {
              label: "Square Picture",
              name: "square_picture",
              widget: "image",
              required: false,
              media_folder: "/static/img/legislators/candidates/",
              public_folder: "/img/legislators/candidates/",
            },
          ],
        },
      ],
    },
    {
      label: "The Campaign",
      name: "campaign_page",
      file: "content/other/campaign_page.yml",
      fields: [
        {
          label: "The main message",
          name: "campaign_message",
          widget: "list",
          collapsed: false,
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Main text",
              name: "main_text",
              widget: "string",
            },
            {
              label: "First main paragraph",
              name: "first_main_paragraph",
              widget: "string",
            },
            {
              label: "Second main paragraph",
              name: "second_main_paragraph",
              widget: "string",
            },
            {
              label: "Main Image",
              name: "main_image",
              widget: "image",
              media_folder: "/static/img/",
              public_folder: "/img/",
            },
            {
              label: "First Link",
              name: "first_href",
              widget: "string",
              hint: "JOIN THE CAMPAIGN.",
            },
            {
              label: "Second Link",
              name: "second_href",
              widget: "string",
              hint: "LEARN MORE ABOUT STATE HOUSE REFORM.",
            },
          ],
        },
      ],
    },
    {
      ...script,
      label: "Pledge scripts",
      name: "pledge_scripts",
      file: "content/other/pledge_scripts.yml",
    },
    {
      ...script,
      label: "The campaign script",
      name: "campaign_scripts",
      file: "content/other/campaign_scripts.yml",
    },
    {
      ...script,
      label: "Default bill scripts - Request co-sponsorship",
      name: "default_bill_scripts",
      file: "content/other/default_bill_scripts.yml",
    },
    {
      ...script_req_only,
      label: "Default bill scripts - Request vote from committee",
      name: "default_bill_scripts_com_vote",
      file: "content/other/default_bill_scripts_com_vote.yml",
    },
  ],
};
