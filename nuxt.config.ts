import path from 'path'
import fs from 'fs'

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  runtimeConfig: {
    OPENAI_API_KEY: process.env.NUXT_OPENAI_API_KEY || "",
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './ssl/privkey4.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, './ssl/fullchain4.pem')),
    },
    public: 'wss://cafepurr.com',
  },
  ssr: false,
});
