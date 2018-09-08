const pkg = require('./package')

module.exports = {
	mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
  	title: pkg.name,
  	meta: [
  	{ charset: 'utf-8' },
  	{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
  	{ hid: 'description', name: 'description', content: pkg.description }
  	],
  	link: [
  	{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  	{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
  	],
  	script: [
  	],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },
  cache: false,

  /*
  ** Global CSS
  */
  css: [
  '~/assets/css/style.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  '~plugins/core-components.js',
  '~plugins/date-filter.js',
  '~plugins/vuesax.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
    ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://dev.rusradio.ru",
    // https: true,
    // proxy: true,
    // proxyHeaders: false,
    headers: {
    	'Access-Control-Allow-Origin': '*',
    	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
},
middleware: {

},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
}
}
