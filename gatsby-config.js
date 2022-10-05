/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: `Artin Abiri Portfolio`,
    description: `Artin Abiri's Portfolio Site`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TRPF2Z8",

        includeInDevelopment: false,

        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,


        options: {
        javascriptEnabled: true,
        icon: 'src/top.png',
        theme_color: "#f5f0ec",
        background_color: "#f5f0ec",
        display: "fullscreen",
        scope: "/",
        start_url: "/",
        name: "Artin Abiri Personal Portfolio",
        short_name: "Artin Portfolio",
        description: "Artin Abiri's personal portfolio website to show of work experiences, programming skills and just for fun",
        modifyVars: {
          "primary-color": "#f5f0ec",
        },
      },
    },
  ],
}
