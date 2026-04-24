<template>
  <div class="grow flex flex-col">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <img src="/img/hero_bg.webp" alt="" fetchpriority="high" width="1920" height="1080" class="absolute inset-0 -z-10 w-full h-full object-cover pointer-events-none" />
      <div class="absolute inset-0 -z-10 bg-linear-to-b from-mocha-950/80 to-mocha-950/40 pointer-events-none" aria-hidden="true"></div>

      <UContainer class="py-24 sm:py-32 lg:py-44 mx-auto max-w-5xl text-center">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium" v-reveal>Сочи · Макаренко 30А</span>
        <div class="w-12 h-px bg-mocha-700 mx-auto mb-8" v-reveal="{ delay: 50 }" aria-hidden="true"></div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-mocha-100 mb-8 font-serif leading-tight" v-reveal="{ delay: 100 }">
          Искусство<br/><i class="text-mocha-400">естественной красоты</i>
        </h1>

        <p class="text-lg leading-relaxed text-mocha-300 max-w-2xl mx-auto font-light" v-reveal="{ delay: 150 }">
          Массаж лица и тела, эстетическая косметология в Сочи.
        </p>


        <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6" v-reveal="{ delay: 300 }">
          <UButton
            to="/contacts"
            size="xl"
            color="primary"
            variant="solid"
            label="Записаться на первый визит"
            class="rounded-none px-10 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center text-sm tracking-widest uppercase font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100"
          />
          <NuxtLink
            to="/services"
            class="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 border border-mocha-700/70 text-mocha-400 hover:border-mocha-600 hover:text-mocha-200 hover:bg-mocha-900/30 transition-all duration-300 text-sm tracking-widest uppercase font-medium"
          >
            Посмотреть меню
          </NuxtLink>
        </div>

        <!-- Micro-trust row -->
        <p class="mt-10 text-xs text-mocha-500 font-light tracking-wide" v-reveal="{ delay: 400 }">
          ежедневно 10:00–22:00 · ответ в течение часа
        </p>
      </UContainer>
    </section>

    <!-- Social Proof Strip -->
    <LazyTestimonialStrip :testimonials="heroTestimonials" />

    <!-- Features Section -->
    <section class="py-24 border-y border-mocha-800/50 bg-mocha-950/40 backdrop-blur-sm">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-mocha-800/50">
          <div class="text-center md:px-8 pt-8 md:pt-0 first:pt-0" v-reveal="{ delay: 100 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">I.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Сначала слушаю — потом делаю</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              5 минут до сеанса — чтобы понять, что именно вам сейчас нужно. Назначаю то, что поможет в вашей конкретной ситуации.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 200 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">II.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Один мастер, а не конвейер</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Всё делаю сама: разговариваю, смотрю кожу, подбираю технику. Не перекладываю на ассистента. Один кабинет — одна запись, без очереди и ожидания.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 300 }">
            <span class="text-mocha-600 font-serif text-5xl block mb-4">III.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Результат, который держится</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              После сеанса объясняю, что делать дома и когда прийти снова. Хочу, чтобы эффект жил дольше дня, в который вы меня видели.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Popular Services -->
    <section class="py-24 lg:py-32">
      <UContainer>
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" v-reveal>
          <div class="max-w-xl">
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-4">Что выбирают чаще всего</h2>
            <p class="text-mocha-400 font-light leading-relaxed">
              Если вы здесь впервые — это хорошее начало. Все четыре — из тех, где результат видно сразу.
            </p>
          </div>
          <UButton to="/services" variant="link" color="mocha" label="Открыть все услуги" trailing-icon="i-lucide-arrow-right" class="hidden sm:flex text-sm tracking-widest uppercase text-mocha-200" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <NuxtLink v-for="(service, index) in popularServices" :key="service.title" to="/services" class="group cursor-pointer" v-reveal="{ delay: (index + 1) * 150 }">
            <div class="aspect-4/5 bg-mocha-900 mb-6 overflow-hidden relative">
              <img :src="service.image" :alt="service.title" loading="lazy" width="800" height="1000" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-mocha-900/30 group-hover:bg-transparent transition-colors duration-500"></div>
              <span v-if="service.badge" class="absolute top-4 left-4 bg-mocha-950/80 backdrop-blur-sm text-mocha-200 text-[10px] uppercase tracking-widest px-3 py-1.5 border border-mocha-700/50">
                {{ service.badge }}
              </span>
            </div>
            <h3 class="text-lg font-medium text-mocha-100 mb-1 group-hover:text-mocha-200 transition-colors">{{ service.title }}</h3>
            <p class="text-xs text-mocha-500 font-light leading-relaxed mb-3">{{ service.outcome }}</p>
            <div class="flex justify-between items-center text-sm font-light border-t border-mocha-800/50 pt-3">
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

    <!-- Audience Fit -->
    <section class="py-24 border-t border-mocha-800/50 bg-mocha-950/30">
      <UContainer class="max-w-6xl">
        <div class="text-center mb-16" v-reveal>
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Кому подходит</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Выберите, что похоже на вас</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div class="bg-[#1A1613] border border-mocha-800/50 p-8 md:p-10 flex flex-col" v-reveal="{ delay: 100 }">
            <h3 class="text-xl font-serif text-mocha-100 mb-4">Вы живёте в Сочи</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed grow">
              Регулярный уход раз в 3–4 недели — поддерживает кожу и тело в ритме. Курсом выходит дешевле. Подскажу, когда прийти снова, чтобы ничего не терять.
            </p>
            <NuxtLink to="/services" class="mt-6 text-xs tracking-widest uppercase text-mocha-300 hover:text-mocha-100 transition-colors inline-flex items-center gap-2">
              Посмотреть курсы
              <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
          <div class="bg-[#1A1613] border border-mocha-800/50 p-8 md:p-10 flex flex-col" v-reveal="{ delay: 200 }">
            <h3 class="text-xl font-serif text-mocha-100 mb-4">Вы в Сочи в отпуске</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed grow">
              Один визит за 1–2 часа — и домой летите с лицом, как будто были в санатории неделю. Работаю 10:00–22:00, найдём окно под ваш отельный график.
            </p>
            <NuxtLink to="/contacts" class="mt-6 text-xs tracking-widest uppercase text-mocha-300 hover:text-mocha-100 transition-colors inline-flex items-center gap-2">
              Подобрать время
              <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
          <div class="bg-[#1A1613] border border-mocha-800/50 p-8 md:p-10 flex flex-col" v-reveal="{ delay: 300 }">
            <h3 class="text-xl font-serif text-mocha-100 mb-4">Впервые — непонятно с чего начать</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed grow">
              Начните с короткой процедуры — например, классического массажа лица на 30 минут. Подберём то, что подходит именно вам. Первый визит — с 15% скидкой.
            </p>
            <NuxtLink to="/contacts" class="mt-6 text-xs tracking-widest uppercase text-mocha-300 hover:text-mocha-100 transition-colors inline-flex items-center gap-2">
              Записаться со скидкой
              <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- How It Works -->
    <section class="py-24 border-t border-mocha-800/50">
      <UContainer class="max-w-5xl">
        <div class="text-center mb-16" v-reveal>
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Как устроен первый визит</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Как проходит первый визит</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="relative md:pr-8" v-reveal="{ delay: 100 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">01</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3">Напишите пару слов</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              В Telegram, WhatsApp или через форму — что беспокоит и когда удобно. Отвечаю в течение часа.
            </p>
          </div>
          <div class="relative md:pr-8 md:border-l md:border-mocha-800/50 md:pl-10" v-reveal="{ delay: 200 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">02</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3">Подбираем процедуру</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Перед сеансом — короткий разговор. Если процедура не подходит, скажу честно и предложу другую.
            </p>
          </div>
          <div class="relative md:border-l md:border-mocha-800/50 md:pl-10" v-reveal="{ delay: 300 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">03</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3">Сеанс и домашний план</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              30–120 минут в кабинете. После — конкретно: что делать дома, когда прийти снова, чтобы результат держался.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- About Bridge -->
    <section class="py-16 md:py-20 border-t border-mocha-800/50">
      <UContainer class="max-w-3xl">
        <div v-reveal class="border-l-2 border-mocha-700 pl-8">
          <p class="text-mocha-200 font-serif text-xl md:text-2xl font-normal leading-relaxed mb-6 italic">
            «Мне важно, чтобы вы ушли с результатом и пониманием, что делать дальше —
            а не просто с датой следующей записи.»
          </p>
          <p class="text-xs text-mocha-500 font-light tracking-widest uppercase mb-6">Анастасия Дзядук · мастер</p>
          <UButton
            to="/about"
            variant="link"
            color="gray"
            label="Познакомиться подробнее"
            trailing-icon="i-lucide-arrow-right"
            class="text-xs tracking-widest uppercase text-mocha-300 hover:text-mocha-100 transition-colors p-0"
          />
        </div>
      </UContainer>
    </section>

    <!-- Promo / Offer -->
    <section class="py-24 lg:py-32 bg-mocha-950 text-center px-4">
      <UContainer class="max-w-3xl">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium" v-reveal>Для новых клиентов</span>
        <h2 class="text-3xl md:text-5xl font-normal text-mocha-50 font-serif mb-8 leading-tight" v-reveal="{ delay: 100 }">Первый визит — минус 15%</h2>
        <p class="text-mocha-200 text-lg mb-4 font-light leading-relaxed max-w-xl mx-auto" v-reveal="{ delay: 200 }">
          Скидка действует на любую процедуру в первое посещение.
        </p>
        <p class="text-mocha-400 text-sm mb-12 font-light leading-relaxed max-w-xl mx-auto" v-reveal="{ delay: 250 }">
          Только для тех, кто у меня впервые. Без срока — но и без «только сегодня».
        </p>
        <div v-reveal="{ delay: 300 }">
          <UButton to="/contacts" size="xl" label="Записаться на первый визит" color="primary" variant="solid" class="rounded-none px-12 py-4 bg-mocha-100 text-mocha-900 hover:bg-white transition-colors uppercase tracking-widest text-sm font-medium" />
        </div>
      </UContainer>
    </section>

    <!-- Final CTA -->
    <section class="py-20 md:py-24 border-t border-mocha-800/50 text-center px-4">
      <UContainer class="max-w-2xl">
        <h2 class="text-2xl md:text-3xl font-normal text-mocha-100 font-serif mb-6 leading-tight" v-reveal>
          Не знаете, с чего начать?
        </h2>
        <p class="text-mocha-400 text-base mb-10 font-light leading-relaxed" v-reveal="{ delay: 100 }">
          Напишите пару слов о том, что беспокоит — подберу процедуру и удобное время. Обычно отвечаю в течение часа.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4" v-reveal="{ delay: 200 }">
          <a
            href="tel:+79384880307"
            class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors text-sm tracking-widest uppercase font-medium"
          >
            <UIcon name="i-lucide-phone" class="w-4 h-4" />
            Позвонить
          </a>
          <UButton
            to="/contacts"
            variant="outline"
            color="neutral"
            label="Оставить заявку"
            class="w-full sm:w-auto rounded-none px-10 py-4 border-mocha-700 text-mocha-200 hover:border-mocha-500 hover:text-mocha-100 hover:bg-transparent text-sm tracking-widest uppercase font-medium"
          />
        </div>
      </UContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '',
  link: [
    { rel: 'preload', as: 'image', href: '/img/hero_bg.webp', fetchpriority: 'high' },
  ],
})

useSeoMeta({
  title: 'Массаж и косметология в Сочи — кабинет Анастасии Дзядук (Макаренко 30А)',
  description: 'Массаж лица и тела, чистки, пилинги, карбокситерапия. Сочи, Макаренко 30А. Первый визит — минус 15%. Ответ в течение часа.',
  ogTitle: 'Массаж и косметология в Сочи — кабинет Анастасии Дзядук',
  ogDescription: 'Частный кабинет в Сочи. 16 процедур: массаж лица и тела, чистки, косметология. Первый визит — минус 15%.',
  keywords: 'массаж сочи, массаж лица сочи, чистка лица сочи, карбокситерапия сочи, массаж макаренко, массаж сочи макаренко, косметолог сочи',
})

interface Testimonial {
  quote: string
  name: string
  meta?: string
  service?: string
}

// ===================================================================
// TESTIMONIAL_PLACEHOLDER — замените на реальные цитаты клиентов,
// собранные из Telegram / 2GIS / Яндекс Карт / Instagram DM.
// До сбора — массив должен быть пустым, тогда секция скрывается.
// Минимум 3 штуки для нормального отображения в три колонки.
// Формат: { quote, name, meta (город+возраст), service (процедура, опционально) }
// ===================================================================
const heroTestimonials = ref<Testimonial[]>([])

const popularServices = [
  {
    title: 'Системный массаж лица',
    outcome: 'Чёткий овал и объём скул — за час руками, без уколов',
    price: '2 200',
    time: '60',
    image: '/img/face_massage.webp',
    badge: 'Хит у постоянных',
  },
  {
    title: 'Комбинированная чистка',
    outcome: 'Чистая кожа, которая дышит — без покраснений вечером',
    price: '2 500',
    time: '120',
    image: '/img/4istka.webp',
    badge: '',
  },
  {
    title: 'Массаж лица + маска',
    outcome: 'Выбор перед важным событием — сияние сразу',
    price: '2 700',
    time: '60+15',
    image: '/img/maska.webp',
    badge: 'Подходит в отпуск',
  },
  {
    title: 'Пилинг LeviSsimo',
    outcome: 'Обновление без длинной реабилитации',
    price: '2 000',
    time: '30',
    image: '/img/pilling.webp',
    badge: '',
  },
]
</script>
