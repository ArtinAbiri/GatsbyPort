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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // defaults to false
        enableWebVitalsTracking: true,
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
