// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "emerald",
      },
    },
  },
  compatibilityDate: "2025-01-14",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/supabase",
  ],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: "/login",
      callback: "/",
      include: ["*"],
      exclude: ["/signup"],
    },
  },
  components: [
    "~/components", // Default behavior for all components
    {
      path: "~/components/features/auth", // Explicitly include this folder
      prefix: "Auth",
    },
    {
      path: "~/components/base",
      prefix: "Base",
    },
  ],
});

