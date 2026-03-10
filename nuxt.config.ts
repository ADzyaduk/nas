// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/seo', '@nuxtjs/google-fonts'],

  ui: {
    fonts: false, // только Google Fonts, без @nuxt/fonts / Fontsource
  },

  googleFonts: {
    display: 'swap',
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700],
    },
    subsets: ['latin', 'cyrillic'],
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  site: {
    url: 'https://estive.ru',
    name: 'Студия Анастасии Дзядук',
    description: 'Массаж и эстетическая косметология в Сочи, ул. Макаренко 30А. Деликатные протоколы ухода и экспертный подход к естественной красоте.',
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
      name: 'Студия Анастасии Дзядук',
      description: 'Массаж и эстетическая косметология в Сочи, ул. Макаренко 30А',
      url: 'https://estive.ru',
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