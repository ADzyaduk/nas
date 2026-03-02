// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/seo', '@nuxtjs/google-fonts'],

  googleFonts: {
    display: 'swap',
  },
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
    name: 'NAS Beauty Сочи',
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
      image: '/logo.png',
      address: {
        streetAddress: 'ул. Макаренко, 30А',
        addressLocality: 'Сочи',
        addressRegion: 'Краснодарский край',
        postalCode: '354003',
        addressCountry: 'RU',
      },
      telephone: '+7-938-488-03-07',
      priceRange: '₽₽',
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '22:00',
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.5855,
        longitude: 39.7231,
      },
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
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