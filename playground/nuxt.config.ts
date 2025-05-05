export default defineNuxtConfig({
  modules: ['../src/module'],
  healthz: {
    path: '/api/healthz',
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-04-14',
})