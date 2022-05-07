export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,
    loading: '~/components/utilities/Loader.vue',

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
            { src: 'https://polyfill.io/v3/polyfill.min.js?features=WeakMap' },
        ]
    },
    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },

    plugins: [{ src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
        { src: '~/plugins/fontawesome.js', ssr: false }
    ],

    // Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
    router: {
        middleware: ['injector'],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    scss: [
        '@/assets/lib/scss/functions.scss',
        '@/assets/scss/variables.scss',
        '@/assets/scss/fonts.scss',
        '@/assets/scss/layouts.scss',
        '@/assets/scss/base.scss',
        '@/assets/scss/main.scss',
    ],

    styleResources: {
        scss: [
            '@/assets/scss/variables.scss',
            '@/assets/scss/fonts.scss',
            '@/assets/scss/base.scss',
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    image: {
        domains: ['ludwig.local']
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            { path: '~/components/section', prefix: 'section' },
            '~/components/utilities',
        ]
    },
    telemetry: true,

    server: {
        port: 3000
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@/modules/rubberduck',
        '@nuxtjs/fontawesome',
    ],

    fontawesome: {
        component: 'font-awesome-icon',
        icons: {
            solid: true,
            brands: true
        },
    },


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/style-resources',
        '@nuxt/image',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    axios: {
        baseURL: 'http://localhost:3001',
    },

}