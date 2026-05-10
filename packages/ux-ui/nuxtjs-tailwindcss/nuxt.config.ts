import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    // baseURL: "/trezo/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
        },
      ],
    },
  },
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "swiper/css/bundle",
    "quill/dist/quill.snow.css",
    "remixicon/fonts/remixicon.css",
    "~/assets/css/style.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },

  // Tailwind CSS is handled by the Nuxt module, not as a Vite plugin
  plugins: [
    "~/plugins/apexcharts.client.ts",
    "~/plugins/vue-quill.js",
    "~/plugins/popover.ts",
  ],
  modules: ["nuxt-swiper"],
  build: {},
  components: true,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.toLowerCase() === "script",
    },
  },
  nitro: {
    output: {
      dir: "dist",
      serverDir: "dist/server",
    },
  },
});
