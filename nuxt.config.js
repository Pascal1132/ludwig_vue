export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  loading: '~/components/utilities/Loader.vue',
  /*loading: {
    color: '#fff',
  },*/

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ludwig',
    htmlAttrs: {
      lang: 'en',
      class: '',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5.0, user-scalable=yes' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: 'https://unpkg.com/swup@latest/dist/swup.min.js'
      }
    ]
  },
  
  // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
  router: {
    middleware: ['injector'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/variables.scss',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swup.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      {path: '~/components/section', prefix: 'section'},
      '~/components/utilities',
    ]
  },
  telemetry: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@/modules/rubberduck'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    apiUrl: 'https://ludwig.local' || 'http://localhost:3000' // process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:3000'
  }
}
