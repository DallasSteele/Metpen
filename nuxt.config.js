export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Marketplace Jasa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Marketplace Jasa' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon',
       type: 'image/x-icon', 
       href: '/butak.jpg' 
      },
      { rel: 'stylesheet',
       href: '/css/bootstrap.min.css' 
      },
      { rel: 'stylesheet',
      href: '/css/custom.css' 
      },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://kit.fontawesome.com/a076d05399.css' }
    ],
    script: [
      {
        src: '/js/bootstrap.bundle.min.js',
        src: 'https://kit.fontawesome.com/a076d05399.js',
        type: 'text/javascript'
      }
    ],
    plugins: [
      '~/plugins/fontawesome.js'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  loading: {
    color: '#3B8070',
    height: '5px',
    continuous: true,
    duration: 5000,
  },
}
