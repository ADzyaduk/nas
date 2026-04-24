<template>
  <div class="grow flex flex-col">

    <!-- Hero Section -->
    <section class="py-24 md:py-32">
      <UContainer class="max-w-4xl text-center">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium" v-reveal>Мастер</span>
        <div class="w-12 h-px bg-mocha-700 mx-auto mb-8" v-reveal="{ delay: 50 }" aria-hidden="true"></div>
        <h1 class="text-4xl md:text-6xl font-normal tracking-tight text-mocha-100 font-serif mb-8 leading-tight" v-reveal="{ delay: 100 }">
          Частный кабинет<br /><i class="text-mocha-400">в Сочи</i>
        </h1>
        <p class="text-lg text-mocha-300 font-light max-w-2xl mx-auto leading-relaxed" v-reveal="{ delay: 200 }">
          Меня зовут Анастасия. Я делаю всё сама — от разговора перед сеансом до домашнего плана после.
          Так получается результат, за которым возвращаются.
        </p>
      </UContainer>
    </section>

    <!-- Master Section -->
    <section class="py-16 md:py-24 border-t border-mocha-800/50">
      <UContainer class="max-w-5xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <!-- Master photo -->
          <div v-reveal>
            <div class="aspect-3/4 bg-mocha-900 overflow-hidden relative group">
              <NuxtImg
                src="/img/master.webp"
                alt="Анастасия Дзядук — косметолог и массажист в Сочи, ул. Макаренко 30А"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                format="webp"
              />
              <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-mocha-950/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Bio -->
          <div v-reveal="{ delay: 150 }">
            <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-6 block font-medium">Кто я</span>
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-3">Анастасия Дзядук</h2>
            <p class="text-mocha-400 text-sm uppercase tracking-widest mb-10 font-light">Косметолог · Массажист</p>

            <div class="space-y-6 text-mocha-300 font-light leading-relaxed mb-12">
              <p>
                Работаю с лицом и телом. Мне нравится, когда результат рождается от рук, а не от препарата —
                поэтому ручные техники у меня на первом месте.
              </p>
              <p>
                Но и современные методы я прошла и делаю: карбокситерапия, микронидлинг, пилинги LeviSsimo — когда коже нужны именно они.
                Каждая техника, которую вы найдёте в меню, освоена лично и отработана — не беру за то, что не умею.
              </p>
              <p>
                <!-- PERSONAL_STORY_PLACEHOLDER — попросите Анастасию дать 3-5 фактов:
                  откуда пришла в профессию, что было до, aha-момент,
                  почему именно массаж + косметология, любимая техника.
                  Замените этот абзац на 2-3 предложения её реальной истории. -->
                Со временем поняла, что работать хочется без конвейера — так и появился этот кабинет на Макаренко.
                Здесь я одна, и это осознанно: я знаю каждого клиента, помню, как была в прошлый раз кожа, и что помогло.
              </p>
            </div>

          </div>

        </div>
      </UContainer>
    </section>

    <!-- Philosophy Section -->
    <section class="py-24 border-y border-mocha-800/50 bg-mocha-950/40 backdrop-blur-sm">
      <UContainer>
        <div class="text-center mb-16" v-reveal>
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Подход</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Как я работаю</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-mocha-800/50">
          <div class="text-center md:px-8 pt-8 md:pt-0 first:pt-0" v-reveal="{ delay: 100 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">I.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Подбираю под ваш запрос</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Спрашиваю перед каждым сеансом: что сейчас беспокоит, что изменилось — будь то лицо или тело. Процедура подбирается под вас в день визита.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 200 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">II.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Результат — не случайность</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Слежу за реакцией во время сеанса и перестраиваю технику, если нужно — будь то лицо или тело. Час работы — это час концентрации, не время на часах.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 300 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">III.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Рассказываю, что делать после</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              После каждого сеанса объясняю: чем ухаживать, чего избегать, когда прийти снова. Чтобы результат жил дольше самой процедуры.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Client Voices -->
    <LazyTestimonialStrip
      :testimonials="clientVoices"
      eyebrow="Голос клиентов"
      heading="Что говорят те, кто у меня уже был"
    />

    <!-- First Visit Walkthrough -->
    <section class="py-24 border-t border-mocha-800/50">
      <UContainer class="max-w-4xl">
        <div class="text-center mb-16" v-reveal>
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Первый визит</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-4">Как проходит, если вы здесь впервые</h2>
          <p class="text-mocha-400 font-light leading-relaxed max-w-xl mx-auto">
            Подробнее, чем на главной — чтобы было спокойно и понятно, что именно вас ждёт.
          </p>
        </div>

        <ol class="space-y-10">
          <li class="flex gap-6 md:gap-8" v-reveal="{ delay: 100 }">
            <span class="shrink-0 text-mocha-700 font-serif text-3xl leading-none">01</span>
            <div>
              <h3 class="text-lg font-medium text-mocha-100 mb-2">Заявка или сообщение</h3>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">
                Напишите в Telegram, WhatsApp или через форму — что беспокоит и когда удобно.
                Отвечаю лично (не бот), обычно в течение часа.
              </p>
            </div>
          </li>
          <li class="flex gap-6 md:gap-8" v-reveal="{ delay: 150 }">
            <span class="shrink-0 text-mocha-700 font-serif text-3xl leading-none">02</span>
            <div>
              <h3 class="text-lg font-medium text-mocha-100 mb-2">Подбираем процедуру</h3>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">
                Если сомневаетесь — коротко описываю варианты и цены. Если того, что вы просите, вам не нужно — честно скажу.
                Предоплату не беру, время держу за вами.
              </p>
            </div>
          </li>
          <li class="flex gap-6 md:gap-8" v-reveal="{ delay: 200 }">
            <span class="shrink-0 text-mocha-700 font-serif text-3xl leading-none">03</span>
            <div>
              <h3 class="text-lg font-medium text-mocha-100 mb-2">Приём и разговор</h3>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">
                На пороге — 3–5 минут на вопросы: что сейчас с кожей, есть ли противопоказания, что хочется получить.
                Если что-то сомнительно — перенесём на другую технику, чтобы не рисковать.
              </p>
            </div>
          </li>
          <li class="flex gap-6 md:gap-8" v-reveal="{ delay: 250 }">
            <span class="shrink-0 text-mocha-700 font-serif text-3xl leading-none">04</span>
            <div>
              <h3 class="text-lg font-medium text-mocha-100 mb-2">Сам сеанс</h3>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">
                30–120 минут — в зависимости от процедуры. Работаем с музыкой или без — как вам удобнее.
                Если в процессе что-то неприятно — просто скажите, перестроюсь.
              </p>
            </div>
          </li>
          <li class="flex gap-6 md:gap-8" v-reveal="{ delay: 300 }">
            <span class="shrink-0 text-mocha-700 font-serif text-3xl leading-none">05</span>
            <div>
              <h3 class="text-lg font-medium text-mocha-100 mb-2">Домашний план</h3>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">
                После процедуры — короткое голосовое или сообщение: чем мазать, чего не делать 2–3 дня, когда прийти снова.
                Через несколько дней проверю, как самочувствие.
              </p>
            </div>
          </li>
        </ol>
      </UContainer>
    </section>

    <!-- Certificates Section -->
    <section class="py-24 lg:py-32 border-t border-mocha-800/50">
      <UContainer class="max-w-5xl">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" v-reveal>
          <div>
            <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Документы</span>
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Дипломы и обучение</h2>
          </div>
          <p class="text-mocha-400 font-light text-sm max-w-sm leading-relaxed text-left md:text-right">
            Учусь у людей, которым доверяю сама. Если увидите технику, которой здесь нет, — значит, я её пока не прошла и не беру за неё деньги.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="(cert, index) in certificates"
            :key="cert.title"
            class="group cursor-pointer"
            v-reveal="{ delay: (index + 1) * 100 }"
            @click="openCertificate(cert)"
          >
            <div class="aspect-video bg-mocha-900 overflow-hidden relative mb-4 ring-1 ring-mocha-800/40 group-hover:ring-mocha-600/60 transition-all duration-300">
              <NuxtImg
                :src="cert.image"
                :alt="cert.title"
                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                format="webp"
              />
            </div>
            <h3 class="text-sm font-medium text-mocha-200 leading-snug">{{ cert.title }}</h3>
          </div>
        </div>

        <!-- Certificate lightbox -->
        <UModal
          v-model:open="isCertOpen"
          :ui="{
            overlay: 'bg-mocha-950/80 backdrop-blur-sm',
            content: 'bg-[#1A1613] ring-1 ring-mocha-800/50 rounded-none shadow-2xl max-w-2xl',
            header: 'border-b border-mocha-800/50 px-6 pt-6 pb-4',
            body: 'p-0',
          }"
        >
          <template #header>
            <div class="text-center w-full">
              <h3 class="text-lg font-serif text-mocha-100">{{ selectedCert?.title }}</h3>
            </div>
          </template>
          <template #body>
            <NuxtImg
              v-if="selectedCert"
              :src="selectedCert.image"
              :alt="selectedCert.title"
              class="w-full h-auto"
              format="webp"
            />
          </template>
        </UModal>
      </UContainer>
    </section>

    <!-- Studio Section -->
    <section class="py-16 md:py-24 border-t border-mocha-800/50 bg-mocha-950/30">
      <UContainer class="max-w-5xl">
        <div class="text-center mb-16" v-reveal>
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Пространство</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-4">Как выглядит кабинет</h2>
          <p class="text-mocha-400 font-light leading-relaxed max-w-xl mx-auto">
            Без ресепшена, без очереди, без «следующий, пожалуйста».
          </p>
        </div>

        <div class="max-w-md mx-auto" v-reveal="{ delay: 0 }">
          <div class="aspect-9/16 bg-mocha-900 overflow-hidden relative">
            <video
              ref="studioVideoRef"
              class="w-full h-full object-cover"
              preload="metadata"
              muted
              loop
              playsinline
              poster="/img/kabinet/kabinet.webp"
            >
              <source src="/img/kabinet/video-2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-24 lg:py-32 bg-mocha-950 text-center px-4">
      <UContainer class="max-w-3xl">
        <h2 class="text-3xl md:text-5xl font-normal text-mocha-50 font-serif mb-8 leading-tight" v-reveal>
          Приходите познакомиться
        </h2>
        <p class="text-mocha-200 text-lg mb-12 font-light leading-relaxed max-w-xl mx-auto" v-reveal="{ delay: 100 }">
          Первый визит — минус 15%. Напишите пару слов о том, что беспокоит, и удобное время — отвечу в течение часа.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4" v-reveal="{ delay: 200 }">
          <a
            href="tel:+79384880307"
            class="inline-flex items-center justify-center gap-2 rounded-none px-12 py-4 bg-mocha-100 text-mocha-900 hover:bg-white transition-colors uppercase tracking-widest text-sm font-medium w-full sm:w-auto"
          >
            <UIcon name="i-lucide-phone" class="w-4 h-4" />
            Позвонить
          </a>
          <UButton
            to="/contacts"
            size="xl"
            label="Оставить заявку"
            variant="outline"
            color="neutral"
            class="rounded-none px-10 py-4 border-mocha-700 text-mocha-200 hover:border-mocha-500 hover:text-mocha-100 hover:bg-transparent transition-colors uppercase tracking-widest text-sm font-medium w-full sm:w-auto"
          />
        </div>
      </UContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

useSeoMeta({
  title: 'О мастере — Анастасия Дзядук, массаж и косметология в Сочи',
  description: 'Не салон. Один мастер, один кабинет на Макаренко 30А. Ручные техники и современные методы — всё делаю сама, без конвейера.',
  ogTitle: 'О мастере — Анастасия Дзядук',
  ogDescription: 'Частный кабинет массажа и косметологии в Сочи. Один мастер — ручные техники и современные методы.',
  keywords: 'мастер косметолог сочи, массаж сочи макаренко, сертификаты косметолог, массаж лица сочи мастер, кабинет массажа макаренко сочи',
})

interface Testimonial {
  quote: string
  name: string
  meta?: string
  service?: string
}

// ===================================================================
// TESTIMONIAL_PLACEHOLDER — замените на 4-6 реальных отзывов.
// Формат: { quote, name, meta (возраст, город, "постоянная клиентка"),
// service (процедура + месяц + год) }
// Пример структуры готовой цитаты:
// {
//   quote: 'Делала скульптурный массаж курсом перед свадьбой сестры. Фотограф потом спросил, что я делала — он такого до/после не видел.',
//   name: 'Евгения, 32',
//   meta: 'Сочи, постоянная клиентка',
//   service: 'Скульптурно-лифтинговый массаж, курс 5 · апрель 2025',
// }
// До сбора — массив пуст, секция скрывается автоматически.
// ===================================================================
const clientVoices = ref<Testimonial[]>([])

const certificates = [
  { title: 'Курс «Косметик-эстетист»', year: '2024', image: '/img/edu/cert-1.webp' },
  { title: 'Курс «Классический оздоровительный массаж»', year: '2025', image: '/img/edu/cert-2.webp' },
  { title: 'Курс «Эстет-мастер по лицу. Вторая ступень»', year: '2026', image: '/img/edu/cert-3.webp' },
  { title: 'Моделирующий, слим- и лифтинг-массаж, ручной антицеллюлитный массаж', year: '2025', image: '/img/edu/cert-4.webp' },
  { title: 'Клиническая кинезиология и точечный кинезио-массаж', year: '2024', image: '/img/edu/cert-5.webp' },
  { title: 'Майский марафон 2025: фейс-архитектура и висцеральные техники', year: '2025', image: '/img/edu/cert-6.webp' },
  { title: 'Диплом: классический оздоровительный массаж', year: '2025', image: '/img/edu/cert-7.webp' },
  { title: 'Диплом: эстет-мастер по лицу. Вторая ступень', year: '2026', image: '/img/edu/cert-8.webp' },
  { title: 'Диплом: косметик-эстетист', year: '2024', image: '/img/edu/cert-9.webp' },
]

const isCertOpen = ref(false)
const selectedCert = ref<typeof certificates[0] | null>(null)

function openCertificate(cert: typeof certificates[0]) {
  selectedCert.value = cert
  isCertOpen.value = true
}

const studioVideoRef = ref<HTMLVideoElement | null>(null)
let videoObserver: IntersectionObserver | null = null

onMounted(() => {
  if (!studioVideoRef.value) return
  videoObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        studioVideoRef.value?.play()
      } else {
        studioVideoRef.value?.pause()
      }
    },
    { threshold: 0.3 },
  )
  videoObserver.observe(studioVideoRef.value)
})

onBeforeUnmount(() => {
  videoObserver?.disconnect()
})
</script>
