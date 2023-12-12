// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "pl",
    locales: [
      {
        code: "pl",
        file: "pl.js",
      },
      {
        code: "en",
        file: "en.js",
      },
    ],
    lazy: true,
    langDir: 'lang',
    strategy: "prefix_except_default",
  },
});
