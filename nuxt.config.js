export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Łukasz Rados',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/og/default.jpg' },
      { hid: 'og:title', property: 'og:title', template: '%s - Łukasz Rados' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  colorMode: {
    classSuffix: ''
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n'
  ],

  // i18n
  i18n: {
    locales: [{
      code: 'pl',
      file: 'pl.js',
      name: 'Polish'
    }, {
      code: 'en',
      file: 'en.js',
      name: 'English'
    }],
    defaultLocale: 'pl',
    langDir: 'lang/',
    lazy: true,
  },
  
  // Router
  router: {
    linkActiveClass: 'is-active',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  loading: {
    height: '5px'
  }
}
