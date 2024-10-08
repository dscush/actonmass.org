const remarkGfm = require("remark-gfm");

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: "Act On Mass",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149781690-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-leaflet",
    "gatsby-plugin-meta-redirect",
    {
      // Useful for redirects, but we don't want their caching policy.
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeCachingHeaders: false,
      },
    },
    "gatsby-plugin-remove-fingerprints", // Optimized for Netlify
  ],
};
