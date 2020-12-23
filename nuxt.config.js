export default {
  build: {},
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/html-validator',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@aceforth/nuxt-optimized-images'
  ],
  components: true,
  css: ['vuesax/dist/vuesax.css', 'material-icons/iconfont/material-icons.css'],
  generate: {
    routes: ['/']
  },
  googleFonts: {
    display: 'swap',
    families: {
      Barlow: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
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
    gzip: {
      compressionOptions: { level: 9 },
      enabled: true,
      filename: '[path].gz[query]',
      minRatio: 0.8,
      threshold: 10240
    },
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ['br', 'gzip']
    },
    report: false,
    test: /\.(js|css|html|txt|xml|svg)$/
  },

  nuxtValidate: {
    lang: 'en'
  },
  optimizedImages: {
    optimizeImages: true
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/api',
    '~/plugins/vuesax',
    '~/plugins/custom-plug'
  ],
  publicRuntimeConfig: {
    baseURL: 'https://randomuser.me/api' || 'https://ramazanseyhan.com.tr/api/v1'
  },

  robots: {
    Disallow: () => '/users',
    UserAgent: 'Googlebot'
  },
  router: {
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
