export default defineNuxtConfig({
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  devtools: {
    enabled: true,
  },

  experimental: {
    typedPages: true,
    cookieStore: true,
  },

  features: {
    inlineStyles: false,
  },

  postcss: {
    plugins: {
      'postcss-nesting': {},
    },
  },

  unocss: {
    preflight: true,
  },

  app: {
    head: {
      title: 'Nuxt Starter',
    },
  },
})
