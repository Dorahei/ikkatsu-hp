module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"-炭火串焼き串揚げ- 一克","short_name":"一克","start_url":"/","background_color":"#fff","theme_color":"colar","display":"standalone","icon":"src/images/ikkatsu_icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0ee106be44de086dc0e8b3f75fb420c0"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
