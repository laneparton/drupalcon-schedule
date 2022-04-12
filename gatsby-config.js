module.exports = {
  siteMetadata: {
    title: "DrupalCon",
    titleTemplate: "%s · DrupalCon",
    description: "A basic tool to beautify your DrupalCon schedule.",
    url: "https://drupalcon.laneparton.com", // No trailing slash allowed!
    image: "/icon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@laneparton",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
