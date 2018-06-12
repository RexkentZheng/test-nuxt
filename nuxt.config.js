module.exports = {
  css: [
    './assets/main.css',
    '~assets/main.scss',
  ],
  dev: {
    proxyTable: {
    	'/nuxt/*':{
    		target:'http://localhost:8888'
    	},
    },
  },

  // router: {
  //   middleware: 'middle'
  // },
  head: {
    title: 'test-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // 引入UI组件
  plugins: [
    { src: '~plugins/ui-view', ssr: false}
  ],

  loading: { color: '#3B8070' },

  build: {

    babel: {
      "plugins": [["import", {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
      }]]
    },

    vendor: ['axios','lodash'],

    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}