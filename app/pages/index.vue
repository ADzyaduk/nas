<template>
  <div class="grow flex flex-col">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <img src="/img/hero_bg.webp" alt="" fetchpriority="high" width="1920" height="1080" class="absolute inset-0 -z-10 w-full h-full object-cover pointer-events-none" />
      <div class="absolute inset-0 -z-10 bg-linear-to-b from-mocha-950/80 to-mocha-950/40 pointer-events-none" aria-hidden="true"></div>

      <UContainer class="py-24 sm:py-32 lg:py-48 mx-auto max-w-5xl text-center">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium" v-reveal>Beauty & Spa Clinic</span>
        <div class="w-12 h-px bg-mocha-700 mx-auto mb-8" v-reveal="{ delay: 50 }" aria-hidden="true"></div>
        <h1 class="text-5xl md:text-7xl font-normal tracking-tight text-mocha-100 mb-8 font-serif leading-tight" v-reveal="{ delay: 100 }">
          Искусство<br/><i class="text-mocha-400">естественной</i> красоты
        </h1>

        <p class="mt-8 text-lg leading-relaxed text-mocha-300 max-w-xl mx-auto font-light" v-reveal="{ delay: 200 }">
          Массаж лица и эстетическая косметология в Сочи, ул.&nbsp;Макаренко&nbsp;30А.
          Подберём процедуру под ваш запрос — лифтинг, сияние, очищение или глубокое расслабление.
        </p>

        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" v-reveal="{ delay: 300 }">
          <UButton
            to="/contacts"
            size="xl"
            color="primary"
            variant="solid"
            label="Записаться"
            class="rounded-none px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center text-sm tracking-widest uppercase font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100"
          />
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 border border-mocha-700/70 text-mocha-400 hover:border-mocha-600 hover:text-mocha-200 hover:bg-mocha-900/30 transition-all duration-300 text-sm tracking-widest uppercase font-medium"
          >
            Все услуги
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- Features Section -->
    <section class="py-24 border-y border-mocha-800/50 bg-mocha-950/40 backdrop-blur-sm">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-mocha-800/50">
          <div class="text-center md:px-8 pt-8 md:pt-0 first:pt-0" v-reveal="{ delay: 100 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">I.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Экспертный подход</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">Точные техники, аккуратная работа с тканями и персональный подход под вашу задачу.</p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 200 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">II.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Профессиональные средства</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">Сертифицированные составы и бережные методики — комфорт без «перегруза» кожи.</p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 300 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">III.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Эстетика сервиса</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">Тишина, внимание к деталям и результат, который хочется повторять.</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Popular Services -->
    <section class="py-24 lg:py-32">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" v-reveal>
          <div class="max-w-xl">
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-4">Популярные процедуры</h2>
            <p class="text-mocha-400 font-light leading-relaxed">Самые востребованные процедуры — хорошее начало, если вы ещё не были.</p>
          </div>
          <UButton to="/services" variant="link" color="mocha" label="Открыть все услуги" trailing-icon="i-lucide-arrow-right" class="hidden sm:flex text-sm tracking-widest uppercase text-mocha-200" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <NuxtLink v-for="(service, index) in popularServices" :key="service.title" to="/services" class="group cursor-pointer" v-reveal="{ delay: (index + 1) * 150 }">
            <div class="aspect-4/5 bg-mocha-900 mb-6 overflow-hidden relative">
              <NuxtImg :src="service.image" :alt="service.title" loading="lazy" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" quality="80" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-mocha-900/30 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <h3 class="text-lg font-medium text-mocha-100 mb-2 group-hover:text-mocha-200 transition-colors">{{ service.title }}</h3>
            <div class="flex justify-between items-center text-sm font-light">
              <span class="text-mocha-400">{{ service.time }} мин</span>
              <span class="text-mocha-100">{{ service.price }} ₽</span>
            </div>
          </NuxtLink>
        </div>
        <div class="mt-12 text-center sm:hidden">
          <UButton to="/services" variant="outline" color="neutral" label="Все услуги" class="w-full justify-center rounded-none py-3 text-sm tracking-widest uppercase border-mocha-700 text-mocha-200 hover:bg-mocha-900 hover:border-mocha-600 transition-colors" />
        </div>
      </UContainer>
    </section>

    <!-- About Bridge -->
    <section class="py-16 md:py-20 border-t border-mocha-800/50">
      <UContainer class="max-w-3xl">
        <div v-reveal class="border-l-2 border-mocha-700 pl-8">
          <p class="text-mocha-200 font-serif text-xl md:text-2xl font-normal leading-relaxed mb-6 italic">
            «За каждой процедурой — мастер с 5-летним опытом, сертифицированными техниками
            и персональным подходом к каждому клиенту.»
          </p>
          <UButton
            to="/about"
            variant="link"
            color="gray"
            label="О мастере"
            trailing-icon="i-lucide-arrow-right"
            class="text-xs tracking-widest uppercase text-mocha-500 hover:text-mocha-200 transition-colors p-0"
          />
        </div>
      </UContainer>
    </section>

    <!-- Promo/CTA -->
    <section class="py-24 lg:py-32 bg-mocha-950 text-center px-4">
      <UContainer class="max-w-3xl">
        <h2 class="text-3xl md:text-5xl font-normal text-mocha-50 font-serif mb-8 leading-tight" v-reveal>15% на первую процедуру</h2>
        <p class="text-mocha-200 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto" v-reveal="{ delay: 100 }">Напишите нам или оставьте заявку — поможем разобраться и подобрать нужную процедуру.</p>
        <div v-reveal="{ delay: 200 }">
          <UButton to="/contacts" size="xl" label="Записаться со скидкой" color="primary" variant="solid" class="rounded-none px-12 py-4 bg-mocha-100 text-mocha-900 hover:bg-white transition-colors uppercase tracking-widest text-sm font-medium" />
        </div>
      </UContainer>
    </section>

  </div>
</template>

<script setup>
useHead({
  titleTemplate: '',
  link: [
    { rel: 'preload', as: 'image', href: '/img/hero_bg.webp', fetchpriority: 'high' },
  ],
})

useSeoMeta({
  title: 'Студия Анастасии Дзядук — Массаж и косметология в Сочи',
  description: 'Массаж лица и тела, эстетическая косметология в Сочи, ул. Макаренко 30А. Деликатный подход, экспертная работа и заметный результат.',
  ogTitle: 'Студия Анастасии Дзядук — Массаж и косметология в Сочи',
  ogDescription: 'Искусство естественной красоты: массаж лица, уходовые и аппаратные процедуры с аккуратным экспертным подходом.',
  keywords: 'массаж сочи, массаж сочи макаренко, массаж лица сочи, косметология сочи, косметолог сочи, массаж тела сочи, чистка лица сочи, пилинг сочи, массаж сочи ул макаренко',
})

const popularServices = [
  { title: 'Системный массаж лица', price: '2 200', time: '60', image: '/img/face_massage.webp' },
  { title: 'Комбинированная чистка', price: '2 500', time: '120', image: '/img/4istka.webp' },
  { title: 'Массаж лица + маска', price: '2 700', time: '60+15', image: '/img/maska.webp' },
  { title: 'Пилинг LeviSsimo', price: '2 000', time: '30', image: '/img/pilling.webp' },
]
</script>