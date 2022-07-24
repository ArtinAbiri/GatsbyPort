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
