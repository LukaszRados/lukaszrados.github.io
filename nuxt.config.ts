// https://nuxt.com/docs/api/configuration/nuxt-config
import { rssConfigEnglish, rssConfigPolish } from './helpers/rss-config'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Łukasz Rados - Blog (po polsku)",
          href: "/feed.xml",
        },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Łukasz Rados - Blog (in English)",
          href: "/feed-en.xml",
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

  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "nuxt-feedme",
  ],

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
    langDir: "lang",
    strategy: "prefix_except_default",
  },

  feedme: {
    feeds: {
      // PL
      '/feed.json': rssConfigPolish,
      '/feed.atom': rssConfigPolish,
      '/feed.xml': rssConfigPolish,
      // EN
      '/feed-en.json': rssConfigEnglish,
      '/feed-en.atom': rssConfigEnglish,
      '/feed-en.xml': rssConfigEnglish,
    },
    content: {
      feed: {
        defaults: {
          author: { email: 'lukaszrados@gmail.com', name: 'Łukasz Rados' },
        },
      },
    }
  },

  compatibilityDate: "2024-07-22",
});