<template>
  <div class="grow flex flex-col">

    <!-- Hero Section -->
    <section class="py-24 md:py-32">
      <UContainer class="max-w-4xl text-center">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium" v-reveal>О нас</span>
        <div class="w-12 h-px bg-mocha-700 mx-auto mb-8" v-reveal="{ delay: 50 }" aria-hidden="true"></div>
        <h1 class="text-4xl md:text-6xl font-normal tracking-tight text-mocha-100 font-serif mb-8 leading-tight" v-reveal="{ delay: 100 }">
          За каждой процедурой —<br /><i class="text-mocha-400">живой человек</i>
        </h1>
        <p class="text-lg text-mocha-300 font-light max-w-2xl mx-auto leading-relaxed" v-reveal="{ delay: 200 }">
          В студии Анастасии Дзядук каждая процедура — это конкретная задача с конкретным результатом.
          Говорю, что поможет, и не назначаю лишнего.
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
                alt="Анастасия Дзядук — косметолог и массажист в Сочи"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                format="webp"
              />
              <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-mocha-950/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Bio -->
          <div v-reveal="{ delay: 150 }">
            <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-6 block font-medium">Мастер</span>
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-3">Анастасия Дзядук</h2>
            <p class="text-mocha-400 text-sm uppercase tracking-widest mb-10 font-light">Косметолог · Массажист</p>

            <div class="space-y-6 text-mocha-300 font-light leading-relaxed mb-12">
              <p>
                Более 5 лет специализируюсь на ручных техниках массажа лица и эстетической косметологии.
                Люблю работу, в которой виден результат: когда кожа становится живее, овал чётче, а клиент
                уходит с желанием вернуться.
              </p>
              <p>
                Работаю только с сертифицированными составами, постоянно обучаюсь — каждая техника,
                которую вы найдёте в меню, освоена лично и доведена до уверенного результата.
              </p>
            </div>

            <!-- Stats -->
            <div class="flex items-stretch gap-3">
              <div class="flex-1 text-center bg-mocha-950/60 ring-1 ring-mocha-800/40 px-4 py-5">
                <span class="text-3xl font-light text-mocha-100 font-serif block mb-1">5+</span>
                <span class="text-xs uppercase tracking-widest text-mocha-500 font-light">Лет опыта</span>
              </div>
              <div class="flex-1 text-center bg-mocha-950/60 ring-1 ring-mocha-800/40 px-4 py-5">
                <span class="text-3xl font-light text-mocha-100 font-serif block mb-1">300+</span>
                <span class="text-xs uppercase tracking-widest text-mocha-500 font-light">Клиентов</span>
              </div>
              <div class="flex-1 text-center bg-mocha-950/60 ring-1 ring-mocha-800/40 px-4 py-5">
                <span class="text-3xl font-light text-mocha-100 font-serif block mb-1">16+</span>
                <span class="text-xs uppercase tracking-widest text-mocha-500 font-light">Процедур</span>
              </div>
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
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Разбираюсь в задаче</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Перед каждой процедурой — короткий разбор: что беспокоит, какой результат важен.
              Никакого шаблона — только то, что подходит именно вам.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 200 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">II.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Работаю точно</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              Каждая техника — освоена и проверена. Не давлю лишнего, не тороплюсь.
              Аккуратность с тканями — это уважение к коже и к вашему комфорту.
            </p>
          </div>
          <div class="text-center md:px-8 pt-8 md:pt-0" v-reveal="{ delay: 300 }">
            <span class="text-mocha-700 font-serif text-4xl block mb-4">III.</span>
            <h3 class="text-lg font-medium text-mocha-100 mb-3 tracking-wide">Держу результат</h3>
            <p class="text-mocha-400 text-sm font-light leading-relaxed">
              После процедуры объясняю, что делать дома и когда прийти снова.
              Хочу, чтобы результат держался — а не только сиял в день сеанса.
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Certificates Section -->
    <section class="py-24 lg:py-32">
      <UContainer class="max-w-5xl">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" v-reveal>
          <div>
            <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Документы</span>
            <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Сертификаты</h2>
          </div>
          <p class="text-mocha-400 font-light text-sm max-w-sm leading-relaxed text-left md:text-right">
            Регулярно прохожу обучение и подтверждаю квалификацию — все техники освоены и задокументированы.
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
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Кабинет</h2>
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
          Запишитесь на первую процедуру — с 15% скидкой. Разберёмся в запросе и подберём подходящий формат.
        </p>
        <div v-reveal="{ delay: 200 }">
          <UButton
            to="/contacts"
            size="xl"
            label="Записаться"
            color="primary"
            variant="solid"
            class="rounded-none px-12 py-4 bg-mocha-100 text-mocha-900 hover:bg-white transition-colors uppercase tracking-widest text-sm font-medium"
          />
        </div>
      </UContainer>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

useSeoMeta({
  title: 'О мастере',
  description: 'Анастасия Дзядук — косметолог и массажист в Сочи, ул. Макаренко 30А. Опыт 5+ лет, сертифицированные техники, персональный подход.',
  ogTitle: 'О мастере — Студия Анастасии Дзядук',
  ogDescription: 'Мастер с 5+ годами опыта, сертифицированные техники и персональный подход к каждому клиенту.',
  keywords: 'мастер косметолог сочи, массаж сочи макаренко, сертификаты косметолог, массаж лица сочи мастер, косметолог сочи макаренко, кабинет массажа макаренко сочи',
})

const certificates = [
  {
    title: 'Курс «Косметик-эстетист»',
    year: '2024',
    image: '/img/edu/cert-1.webp',
  },
  {
    title: 'Курс «Классический оздоровительный массаж»',
    year: '2025',
    image: '/img/edu/cert-2.webp',
  },
  {
    title: 'Курс «Эстет-мастер по лицу. Вторая ступень»',
    year: '2026',
    image: '/img/edu/cert-3.webp',
  },
  {
    title: 'Моделирующий, слим- и лифтинг-массаж, ручной антицеллюлитный массаж',
    year: '2025',
    image: '/img/edu/cert-4.webp',
  },
  {
    title: 'Клиническая кинезиология и точечный кинезио-массаж',
    year: '2024',
    image: '/img/edu/cert-5.webp',
  },
  {
    title: 'Майский марафон 2025: фейс-архитектура и висцеральные техники',
    year: '2025',
    image: '/img/edu/cert-6.webp',
  },
  {
    title: 'Диплом: классический оздоровительный массаж',
    year: '2025',
    image: '/img/edu/cert-7.webp',
  },
  {
    title: 'Диплом: эстет-мастер по лицу. Вторая ступень',
    year: '2026',
    image: '/img/edu/cert-8.webp',
  },
  {
    title: 'Диплом: косметик-эстетист',
    year: '2024',
    image: '/img/edu/cert-9.webp',
  },
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
