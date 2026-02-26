// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
  },

  site: {
    url: 'https://nas-beauty.ru',
    name: 'NAS Beauty — Массаж и косметология в Сочи',
    description: 'Премиальный массаж лица и эстетическая косметология в Сочи. Деликатные протоколы ухода и экспертный подход к естественной красоте.',
    defaultLocale: 'ru',
  },

  ogImage: {
    enabled: false,
  },

  sitemap: {
    xsl: false,
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'NAS Beauty',
      description: 'Премиальный массаж лица и эстетическая косметология в Сочи',
      url: 'https://nas-beauty.ru',
      logo: '/logo.png',
      address: {
        streetAddress: 'ул. Макаренко, 30А',
        addressLocality: 'Сочи',
        addressRegion: 'Краснодарский край',
        postalCode: '354003',
        addressCountry: 'RU',
      },
      telephone: '+7-938-488-03-07',
      sameAs: [
        'https://www.instagram.com/massaz_sochi_',
        'https://t.me/stasya_girl_22',
      ],
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'theme-color', content: '#3e362e' },
        { property: 'og:image', content: '/logo.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
      ]
    }
  }
})