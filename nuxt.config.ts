export default defineNuxtConfig({
  ssr: false,
  // Define route rules for prerendering
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
  },
  // Define modules to be used in the project
  modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/ionic",
    // "nuxt-electron"
  ],

  // Enable devtools for development
  devtools: {
    enabled: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Transpile specified dependencies with Babel
    transpile: [
      // Add packages that need transpiling here
    ],
  },

  // Experimental features
  experimental: {
    typedPages: true,
    cookieStore: true,
  },

  // Features configuration
  features: {
    inlineStyles: false,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],
  

  // PostCSS configuration
  postcss: {
    plugins: {
      "postcss-nesting": {},
    },
  },

  // UnoCSS configuration
  unocss: {
    preflight: true,
  },

  // Application configuration
  app: {
    head: {
      title: "Nuxt Starter",
    },
  },
});