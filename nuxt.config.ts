// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  alias: {
    assets: '/<rootDir>/assets',
  },
  app: {
    head: {
      title: 'Nuxt Jobs'
    }
  },
  nitro: {
    routeRules: {
      '/api/**': { proxy: 'https://react-mongoose-api.vercel.app/**' },
    },
    // devProxy: {
    //   '/api': {
    //     target: 'https://react-mongoose-api.vercel.app',
    //     headers: {'x-database': 'VUE'},
    //     changeOrigin: true,
    //   }
    // }
  }
})
