module.exports = {
  siteMetadata: {
    title: `Writing a gatsby project in TS`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "api",
        fieldName: "api",
        url: "http://localhost:8080/v1/graphql",
      },
    },
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-ts-config`,
  ],
}
