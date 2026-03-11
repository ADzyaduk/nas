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
    download: true,
    preload: true,
    families: {
      Inter: [300, 400, 500, 600],
      'Playfair Display': [400, 600],
    },
    subsets: ['latin', 'cyrillic'],
  },

  image: {
    quality: 80,
    format: ['webp'],
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  site: {
    url: 'https://estive.ru',
    name: 'Кабинет Анастасии Дзядук',
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
      name: 'Кабинет Анастасии Дзядук',
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

  // @ts-expect-error Nuxt 4 types lag behind — nitro is valid
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/logo.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/favicon.ico': { headers: { 'cache-control': 'public, max-age=86400' } },
      '/apple-touch-icon.png': { headers: { 'cache-control': 'public, max-age=86400' } },
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
      ],
      script: [
        {
          key: 'yandex-metrika',
          type: 'text/javascript',
          innerHTML: `(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107256121', 'ym');

          ym(107256121, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });`,
        },
      ],
      noscript: [
        {
          key: 'yandex-metrika-noscript',
          innerHTML: '<div><img src="https://mc.yandex.ru/watch/107256121" style="position:absolute; left:-9999px;" alt="" /></div>',
        },
      ],
    }
  }
})