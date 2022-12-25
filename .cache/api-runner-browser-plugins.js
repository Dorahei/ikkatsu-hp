module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-X2SSLXXLKB"],"pluginConfig":{"head":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"-炭火串焼き串揚げ- 一克","short_name":"一克","start_url":"/","background_color":"#ffffff","theme_color":"colar","display":"standalone","icon":"src/images/ikkatsu_icon.png","cache_busting_mode":"none","legacy":true,"theme_color_in_head":true,"crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["src/images/ikkatsu_icon.png"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
