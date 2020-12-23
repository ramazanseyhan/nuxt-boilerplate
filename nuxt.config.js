export default {
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://html-validator.nuxtjs.org
    '@nuxtjs/html-validator',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images'
  ],
  components: true,
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['vuesax/dist/vuesax.css', 'material-icons/iconfont/material-icons.css'],
  generate: {
    routes: ['/']
  },
  googleFonts: {
    // display: 'swap',
    families: {
      // Barlow: {
      //   wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      // }
    }
  },
  head: {
    link: [{ href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' }],
    meta: [
      { charset: 'utf-8' },
      { content: 'width=device-width, initial-scale=1', name: 'viewport' },
      { content: '', hid: 'description', name: 'description' }
    ],
    title: 'NUXT SSR APP'
  },
  htmlValidator: {
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'attribute-boolean-style': 'off',
        'no-inline-style': 'off',
        'no-trailing-whitespace': 'off',
        'no-unknown-elements': 'error',
        'require-sri': 'off',
        'svg-focusable': 'off',
        'void-style': 'off'
      }
    },
    usePrettier: false
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        }
      }
    }
  },
  // routerModule: {},
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    'nuxt-precompress',
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/webpackmonitor',
    '@nuxtjs/robots',
    'nuxt-svg-loader',
    'nuxt-validate',
    [
      'nuxt-lazy-load',
      {
        appendClass: 'lazyLoad',
        audios: true,
        defaultImage: '/images/default-image.jpg',
        directiveOnly: false,
        iframes: true,
        images: true,
        loadedClass: 'isLoaded',
        loadingClass: 'isLoading',
        native: false,
        observerConfig: {},
        polyfill: true,
        videos: true
      }
    ]
  ],

  nuxtPrecompress: {
    brotli: {
      compressionOptions: { level: 11 },
      enabled: true,
      filename: '[path].br[query]',
      minRatio: 0.8,
      threshold: 10240
    },
    enabled: true,
    // build time compression settings
    gzip: {
      compressionOptions: { level: 9 },
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]',
      minRatio: 0.8,
      // middleware will look for this filename
      threshold: 10240
    },
    // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip']
    },
    // Enable in production
    report: false,
    // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/
  },
  nuxtValidate: {
    lang: 'en'
  },
  optimizedImages: {
    optimizeImages: true
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/api',
    '~/plugins/vuesax',
    '~/plugins/custom-plug'
  ],

  robots: {
    Disallow: () => '/users',
    /* module options */
    UserAgent: 'Googlebot' // accepts function
  },
  router: {
    // customer router for nuxt
    extendRoutes (routes, resolve) {
      routes.push({
        component: resolve(__dirname, 'components/Test.vue'),
        name: 'custom',
        path: '/tester'
      })
    },
    middleware: 'always'
  },
  svgLoader: {
    svgoConfig: {
      plugins: [{ prefixIds: false }]
    }
  }
}
