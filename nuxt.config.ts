// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "emerald",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
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

    {
      path: "~/components/features/navigation",
      prefix: "Nav",
    },

    {
      path: "~/components/features/themeChange",
      prefix: "Theme",
    },

    {
      path: "~/components/features/posts",
      prefix: "Post",
    },

    {
      path: "~/components/features/users",
      prefix: "User",
    },
  ],
});
