/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `一克`,
    description: ` 奥越の美味しい炭火焼き、串揚げ、串焼きのお店`,
    lang: `ja`,
    siteUrl: `https://katsuyama-ikkatsu.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `~炭火焼き~ 一克`,
        short_name: `一克`,
        start_url: `/`,
        background_color: `#eee`,
        theme_color: `colar`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
