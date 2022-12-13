/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `-炭火串焼き串揚げ- 一克`,
    description: ` 奥越、勝山市の美味しい炭火焼き、串揚げ、串焼きの居酒屋。国産炭火と国産鶏を使った美味しい焼鳥。`,
    lang: `ja`,
    siteUrl: `https://yakitori-ikkatsu.com`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-X2SSLXXLKB`],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `-炭火串焼き串揚げ- 一克`,
        short_name: `一克`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `colar`,
        display: `standalone`,
        icon: `src/images/ikkatsu_icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
