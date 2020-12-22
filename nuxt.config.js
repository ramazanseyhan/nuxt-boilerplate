export default {
  generate: {
    routes: ["/"]
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-boilerpalte",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["vuesax/dist/vuesax.css", "material-icons/iconfont/material-icons.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/axios", "~/plugins/api", "~/plugins/vuesax"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    //https://html-validator.nuxtjs.org
    "@nuxtjs/html-validator",
    "@nuxtjs/dotenv",
    "@nuxtjs/google-fonts",
    "@aceforth/nuxt-optimized-images"
  ],
  components: true,
  optimizedImages: {
    optimizeImages: true
  },
  // routerModule: {},
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ["@nuxtjs/html-minifier", { log: "once", logHtml: true }],
    "nuxt-precompress",
    "nuxt-i18n",
    "@nuxtjs/axios",
    "@nuxtjs/webpackmonitor",
    "@nuxtjs/robots",
    "nuxt-svg-loader",
    [
      "nuxt-lazy-load",
      {
        // These are the default values
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: false,

        // Default image must be in the static folder
        defaultImage: "/images/default-image.jpg",

        // To remove class set value to false
        loadingClass: "isLoading",
        loadedClass: "isLoaded",
        appendClass: "lazyLoad",

        observerConfig: {
          // See IntersectionObserver documentation
        }
      }
    ]
  ],
  robots: {
    /* module options */
    UserAgent: "Googlebot",
    Disallow: () => "/users" // accepts function
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false } // Disables prefixing for SVG IDs
      ]
    }
  },

  googleFonts: {
    // display: 'swap',
    families: {
      Barlow: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
  axios: {
    // proxy: true
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome"
        },
        fr: {
          welcome: "Bienvenue"
        },
        es: {
          welcome: "Bienvenido"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  htmlValidator: {
    usePrettier: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard"
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed when using prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        // Unreasonable rule
        "no-inline-style": "off"
      }
    }
  },

  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ["br", "gzip"]
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: "[path].gz[query]", // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 }
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: "[path].br[query]", // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8
    }
  },
  router: {
    // customer router for nuxt
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "/tester",
        component: resolve(__dirname, "components/Test.vue")
      });
    }
  }
};
