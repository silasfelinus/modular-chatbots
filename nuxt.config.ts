export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  runtimeConfig: {
    public: {
      appURL: "https://cafepurr.com",
    },
    OPENAI_API_KEY: process.env.NUXT_OPENAI_API_KEY || "",
  },
  ssr: false,
});
