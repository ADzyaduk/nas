<template>
  <div class="py-24 md:py-32">
    <UContainer class="max-w-4xl mx-auto">

      <!-- Page Header -->
      <div class="text-center mb-16">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-6 block font-medium">Процедуры</span>
        <h1 class="text-4xl md:text-5xl font-normal tracking-tight text-mocha-100 font-serif mb-6">
          Меню процедур
        </h1>
        <p class="text-lg text-mocha-300 font-light max-w-xl mx-auto leading-relaxed">
          16 процедур в трёх направлениях. Если не знаете, с чего начать — напишите, разберёмся вместе.
        </p>
      </div>

      <!-- С чего начать -->
      <div class="mb-20 p-8 md:p-10 bg-mocha-950/50 border border-mocha-800/40">
        <h2 class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-8 font-medium">С чего начать</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="starter in starters"
            :key="starter.query"
            class="group flex flex-col gap-1 p-4 border border-mocha-800/40 hover:border-mocha-600/60 hover:bg-mocha-900/30 transition-all duration-200 cursor-pointer"
            @click="scrollToService(starter.anchor)"
          >
            <span class="text-mocha-400 text-xs font-light leading-relaxed uppercase tracking-wide">{{ starter.query }}</span>
            <span class="text-mocha-200 text-sm font-medium group-hover:text-mocha-100 transition-colors">{{ starter.recommendation }}</span>
          </div>
        </div>
      </div>

      <!-- Category Navigation -->
      <nav
        class="sticky top-20 md:top-24 z-40 bg-[#1A1613]/90 backdrop-blur-xl border-b border-mocha-800/50 -mx-4 px-4 md:mx-0 md:px-0 mb-20"
        aria-label="Категории услуг"
      >
        <div class="flex items-center overflow-x-auto scrollbar-none justify-start md:justify-center">
          <a
            v-for="category in serviceCategories"
            :key="category.name"
            :href="`#${category.slug}`"
            class="shrink-0 py-4 px-5 md:px-8 text-xs uppercase tracking-widest font-medium text-mocha-500 hover:text-mocha-100 transition-colors duration-200 border-b-2 border-transparent hover:border-mocha-400 whitespace-nowrap"
          >
            {{ category.name }}
          </a>
        </div>
      </nav>

      <!-- Service Categories -->
      <div
        v-for="(category, catIndex) in serviceCategories"
        :key="category.name"
        :id="category.slug"
        class="mb-24 last:mb-0 scroll-mt-40"
      >
        <!-- Category Header -->
        <div class="border-b border-mocha-800 pb-5 mb-2 flex items-baseline gap-4">
          <span class="text-mocha-600 font-serif text-sm">{{ String(catIndex + 1).padStart(2, '0') }}</span>
          <h2 class="text-2xl font-serif text-mocha-100">{{ category.name }}</h2>
          <span class="ml-auto text-mocha-500 text-sm italic font-serif">от {{ category.minPrice }} ₽</span>
        </div>
        <p class="text-mocha-500 text-sm font-light leading-relaxed italic mb-8">{{ category.intro }}</p>

        <!-- Service Rows -->
        <div>
          <div
            v-for="service in category.items"
            :key="service.title"
            class="group flex items-center gap-4 py-5 px-2 border-b border-mocha-800/30 last:border-b-0 cursor-pointer hover:bg-mocha-950/40 transition-colors duration-200"
            role="button"
            tabindex="0"
            :aria-label="`Подробнее о процедуре: ${service.title}, ${service.price} ₽, ${service.time} мин`"
            @click="openDetail(service)"
            @keydown.enter="openDetail(service)"
            @keydown.space.prevent="openDetail(service)"
          >
            <!-- Title + description -->
            <div class="flex-1 min-w-0 pr-4">
              <h3 class="text-base font-medium text-mocha-100 group-hover:text-mocha-200 transition-colors mb-1">
                {{ service.title }}
              </h3>
              <p class="text-sm text-mocha-500 font-light leading-relaxed hidden sm:block">
                {{ service.description }}
              </p>
            </div>

            <!-- Price + time + hint -->
            <div class="shrink-0 text-right">
              <div class="text-xl font-light text-mocha-100 leading-none mb-1">{{ service.price }} ₽</div>
              <div class="text-xs text-mocha-600 uppercase tracking-widest">{{ service.time }} мин</div>
              <div class="text-xs text-mocha-600 group-hover:text-mocha-400 transition-colors uppercase tracking-widest mt-1 hidden sm:block">
                Подробнее
              </div>
            </div>

            <!-- Chevron -->
            <UIcon
              name="i-lucide-chevron-right"
              class="w-4 h-4 shrink-0 text-mocha-700 group-hover:text-mocha-400 group-hover:translate-x-0.5 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <!-- Packages: Дешевле курсом -->
      <div class="mt-24 pt-24 border-t border-mocha-800/50">
        <div class="text-center mb-12">
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Экономия</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif mb-4">Дешевле курсом</h2>
          <p class="text-mocha-400 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Пакет — не подписка. Купите и приходите в удобном ритме в течение двух месяцев.
            Если не подошло после первой процедуры — верну остаток.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="border border-mocha-800/50 bg-mocha-950/30 p-8 flex flex-col"
          >
            <h3 class="text-lg font-serif text-mocha-100 mb-2">{{ pkg.name }}</h3>
            <p class="text-mocha-500 text-sm font-light leading-relaxed mb-8 grow">{{ pkg.composition }}</p>
            <div>
              <div class="flex items-baseline gap-3 mb-1">
                <span class="text-2xl font-light text-mocha-100">{{ pkg.priceWith }} ₽</span>
                <span class="text-mocha-600 text-sm line-through font-light">{{ pkg.priceWithout }} ₽</span>
              </div>
              <span class="text-mocha-500 text-xs uppercase tracking-widest">Экономия {{ pkg.saving }} ₽</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink
            to="/contacts"
            class="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-mocha-300 hover:text-mocha-100 transition-colors"
          >
            Уточнить пакет у Анастасии
            <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
          </NuxtLink>
        </div>
      </div>

      <!-- FAQ -->
      <div class="mt-24 pt-24 border-t border-mocha-800/50">
        <div class="text-center mb-12">
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">Вопросы</span>
          <h2 class="text-3xl md:text-4xl font-normal text-mocha-100 font-serif">Частые вопросы</h2>
        </div>

        <div class="space-y-px">
          <div
            v-for="(faq, i) in faqItems"
            :key="i"
            class="border border-mocha-800/40"
          >
            <button
              class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-mocha-950/40 transition-colors duration-200"
              @click="toggleFaq(i)"
            >
              <span class="text-mocha-100 text-sm font-medium leading-relaxed">{{ faq.question }}</span>
              <UIcon
                :name="openFaq === i ? 'i-lucide-minus' : 'i-lucide-plus'"
                class="w-4 h-4 shrink-0 text-mocha-500"
              />
            </button>
            <div v-show="openFaq === i" class="px-6 pb-6">
              <p class="text-mocha-400 text-sm font-light leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <!-- CTA under FAQ -->
        <div class="mt-16 text-center">
          <p class="text-mocha-500 text-sm font-light mb-6">Не нашли ответ на свой вопрос?</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79384880307"
              class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors text-xs tracking-widest uppercase font-medium w-full sm:w-auto"
            >
              <UIcon name="i-lucide-phone" class="w-3.5 h-3.5" />
              Позвонить
            </a>
            <NuxtLink
              to="/contacts"
              class="inline-flex items-center justify-center px-8 py-3 border border-mocha-700 text-mocha-300 hover:border-mocha-500 hover:text-mocha-100 transition-colors text-xs tracking-widest uppercase font-medium w-full sm:w-auto"
            >
              Оставить заявку
            </NuxtLink>
          </div>
        </div>
      </div>

    </UContainer>

    <!-- Mobile: Drawer снизу -->
    <UDrawer
      v-if="isMobile"
      v-model:open="isDetailOpen"
      handle
      :ui="{
        overlay: 'bg-mocha-950/60',
        content: 'bg-[#1A1613] ring-mocha-800/50',
        handle: '!bg-mocha-700',
        container: 'px-6 pb-8 pt-2',
      }"
    >
      <template #header>
        <div class="text-center pt-2 pb-6 border-b border-mocha-800/50">
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase block mb-3">{{ selectedService?.time }} мин</span>
          <h3 class="text-2xl font-serif text-mocha-100 mb-2">{{ selectedService?.title }}</h3>
          <span class="text-xl font-light text-mocha-300">{{ selectedService?.price }} ₽</span>
        </div>
      </template>

      <template #body>
        <p class="text-mocha-300 leading-relaxed font-light text-base pt-6 whitespace-pre-line">
          {{ selectedService?.details || selectedService?.description }}
        </p>
      </template>

      <template #footer>
        <UButton
          to="/contacts"
          block
          size="xl"
          class="rounded-none py-4 uppercase tracking-widest text-sm font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors mt-4"
          label="Записаться"
        />
      </template>
    </UDrawer>

    <!-- Desktop: Modal по центру -->
    <UModal
      v-else
      v-model:open="isDetailOpen"
      :ui="{
        overlay: 'bg-mocha-950/70 backdrop-blur-sm',
        content: 'bg-[#1A1613] ring-1 ring-mocha-800/50 rounded-none shadow-2xl max-w-lg',
        header: 'border-b border-mocha-800/50 px-8 pt-8 pb-6',
        body: 'px-8 py-6',
        footer: 'border-t border-mocha-800/50 px-8 pb-8 pt-6',
      }"
    >
      <template #header>
        <div class="text-center w-full">
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase block mb-3">{{ selectedService?.time }} мин</span>
          <h3 class="text-2xl md:text-3xl font-serif text-mocha-100 mb-2">{{ selectedService?.title }}</h3>
          <span class="text-xl font-light text-mocha-300">{{ selectedService?.price }} ₽</span>
        </div>
      </template>

      <template #body>
        <p class="text-mocha-300 leading-relaxed font-light text-base whitespace-pre-line">
          {{ selectedService?.details || selectedService?.description }}
        </p>
      </template>

      <template #footer>
        <div class="flex flex-col gap-3 w-full">
          <UButton
            to="/contacts"
            block
            size="xl"
            class="rounded-none py-4 uppercase tracking-widest text-sm font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors"
            label="Записаться"
            @click="isDetailOpen = false"
          />
          <UButton
            block
            variant="link"
            color="neutral"
            label="Закрыть"
            class="text-xs uppercase tracking-widest text-mocha-500 hover:text-mocha-300 transition-colors"
            @click="isDetailOpen = false"
          />
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

useSeoMeta({
  title: 'Услуги и цены — массаж, чистки, карбокситерапия в Сочи',
  description: '16 процедур: массаж лица и тела, чистки, пилинги LeviSsimo, карбокситерапия, микронидлинг. Цены от 500 ₽. Макаренко 30А, ежедневно 10:00–22:00.',
  ogTitle: 'Услуги и цены — Кабинет Анастасии Дзядук',
  ogDescription: 'Массаж и эстетическая косметология в Сочи: 16 процедур, цены от 500 ₽. Макаренко 30А, ежедневно.',
  keywords: 'массаж цены сочи, прайс массаж сочи, массаж сочи макаренко, стоимость массажа сочи, чистка лица цена сочи, пилинг цена сочи, карбокситерапия сочи, микронидлинг сочи',
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')

const isDetailOpen = ref(false)
const selectedService = ref<typeof serviceCategories[0]['items'][0] | null>(null)
const openFaq = ref<number | null>(null)

function openDetail(service: typeof serviceCategories[0]['items'][0]) {
  selectedService.value = service
  isDetailOpen.value = true
}

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

function scrollToService(anchor: string) {
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const starters = [
  {
    query: 'Хочу вернуть лицу свежесть за один визит',
    recommendation: 'Системный массаж лица — 2 200 ₽, 60 мин',
    anchor: 'massage-face',
  },
  {
    query: 'Готовлюсь к событию, хочу выглядеть лучше',
    recommendation: 'Массаж лица + маска — 2 700 ₽, 75 мин',
    anchor: 'massage-face',
  },
  {
    query: 'Нужно разобраться с кожей: поры, жирность',
    recommendation: 'Комбинированная чистка — 2 500 ₽, 120 мин',
    anchor: 'cosmetology',
  },
  {
    query: 'Хочу сбросить усталость всего тела',
    recommendation: 'Общий массаж тела — 3 500 ₽, 90 мин',
    anchor: 'massage-body',
  },
]

const packages = [
  {
    name: 'Лицо в форме',
    composition: '5 × системный массаж лица — курсом. Овал закрепляется к третьей процедуре.',
    priceWith: '10 000',
    priceWithout: '11 000',
    saving: '1 000',
  },
  {
    name: 'Чистая кожа',
    composition: 'Чистка + 2 пилинга LeviSsimo. Текстура выравнивается, поры сужаются.',
    priceWith: '6 000',
    priceWithout: '6 500',
    saving: '500',
  },
  {
    name: 'Перезагрузка тела',
    composition: '5 × общий массаж тела (60 мин). Тело привыкает к лёгкости и перестаёт напрягаться.',
    priceWith: '12 000',
    priceWithout: '12 500',
    saving: '500',
  },
]

const faqItems = [
  {
    question: 'Сколько держится результат одной процедуры?',
    answer: 'Зависит от процедуры. Массаж лица — эффект заметен 5–10 дней, с каждым следующим сеансом держится дольше. Чистка — кожа остаётся чистой 3–4 недели. Карбокситерапия — ощущение упругости 2–3 недели. Чем регулярнее приходите, тем дольше живёт эффект.',
  },
  {
    question: 'Больно ли во время массажа лица, чистки или микронидлинга?',
    answer: 'Массаж лица — нет, ощущения приятные. Механическая чистка может быть чувствительной в зоне плотных загрязнений — работаю аккуратно, стараюсь минимизировать дискомфорт. Микронидлинг — лёгкое ощущение покалывания, не сильнее. Если в процессе что-то не так — просто скажите, перестрою.',
  },
  {
    question: 'Что если у меня чувствительная кожа?',
    answer: 'Скажите об этом при записи или перед сеансом. Для чувствительной кожи подбираем мягкие форматы: классический массаж лица, ультразвуковую чистку, безынъекционную карбокситерапию. Агрессивные составы не использую — только если кожа сама этого просит.',
  },
  {
    question: 'Можно ли прийти после перелёта, моря или загара?',
    answer: 'После перелёта — да, даже хорошо: массаж лица убирает отёчность и усталость. После интенсивного загара — подождите 2–3 дня, загорелая кожа более чувствительная. После моря — всё нормально. Если сомневаетесь — напишите, уточним.',
  },
  {
    question: 'Что делать после процедуры дома?',
    answer: 'После каждого сеанса даю короткую инструкцию: что наносить, чего избегать 1–3 дня (тепло, активные кислоты, солнце). Всё индивидуально — зависит от того, что делали. Голосовое или сообщение в Telegram — сразу после визита.',
  },
  {
    question: 'Как часто приходить — и обязательно ли курсом?',
    answer: 'Нет, курс не обязателен. Один визит уже даёт результат. Для накопительного эффекта — классический массаж лица раз в 2–3 недели, чистка раз в месяц, лифтинговые техники курсом 4–5 процедур. Подскажу ритм под вашу задачу после первого визита.',
  },
  {
    question: 'Что если мне не подойдёт — вернёте деньги?',
    answer: 'Если после первой процедуры курса результат не устроил — верну стоимость оставшихся сеансов. По разовым процедурам — если что-то пошло не так, разберёмся по ситуации. Мне важно, чтобы вы вернулись — поэтому действую честно.',
  },
  {
    question: 'Можно ли оплатить картой, Мир Pay или СБП?',
    answer: 'Да, принимаю карты любых банков, СБП и наличные. Мир Pay — тоже. Уточните при записи, если есть предпочтения по способу оплаты.',
  },
]

const serviceCategories = [
  {
    name: 'Массаж тела',
    slug: 'massage-body',
    minPrice: '1 500',
    intro: 'От 30 минут до 2 часов. Подбираем интенсивность под вас — не всем нужно «поглубже».',
    items: [
      {
        title: 'Массаж спины',
        description: '30 минут — и спина перестаёт тянуть. Ощутимо после долгого дня за столом.',
        details: 'Прорабатываем воротниковую зону, грудной и поясничный отделы — там, где накапливается больше всего усталости.\n\nПосле сеанса уходит ощущение скованности, улучшается кровообращение. Особенно заметно при сидячей работе и хроническом напряжении в плечах.',
        price: '1 500',
        time: '30',
      },
      {
        title: 'Коррекция фигуры',
        description: 'Лимфодренаж, антицеллюлитный или медовый — подберём под задачу. Тело становится легче.',
        details: 'Выбираем формат под вашу цель.\n\nЛимфодренажный — если беспокоят отёки и тяжесть в ногах. Антицеллюлитный — для выравнивания кожи и улучшения рельефа. Медовый — глубокое питание и детокс.\n\nКурс из нескольких процедур даёт накопительный эффект — тело становится легче, кожа ровнее.',
        price: '2 300',
        time: '60',
      },
      {
        title: 'Массаж тела',
        description: 'Расслабляющий, тонизирующий или классический — как вам нужно сейчас.',
        details: 'Перед процедурой уточняем цель: снять стресс и расслабиться, взбодриться и почувствовать лёгкость — или восстановиться после нагрузок.\n\nРаботаем с профессиональными маслами, приятными для кожи. Интенсивность подбирается индивидуально.',
        price: '2 500',
        time: '60',
      },
      {
        title: 'Общий массаж тела',
        description: 'Всё тело за один сеанс — спина, ноги, руки, шея, стопы.',
        details: 'Прорабатываем все основные зоны: спину, ноги, руки, шейно-воротниковую зону и стопы.\n\nПосле сеанса тело становится подвижнее, уходит привычное напряжение, возвращается ощущение лёгкости. Хороший выбор, когда нужна полноценная перезагрузка.',
        price: '3 500',
        time: '90',
      },
      {
        title: 'Общий массаж тела MAX',
        description: 'Двухчасовой сеанс: всё тело, голова, лицо, рефлексотерапия стоп и кистей.',
        details: 'Самый полный формат: глубокая проработка всех мышечных групп, массаж головы и лица, рефлексотерапия стоп и кистей.\n\nУходите с ощущением полного обнуления — как после долгого отдыха. Подходит, когда накопилось по-настоящему много и хочется качественно восстановиться.',
        price: '4 400',
        time: '120',
      },
    ],
  },
  {
    name: 'Массаж лица',
    slug: 'massage-face',
    minPrice: '1 100',
    intro: 'Ручные техники без игл и реабилитации. Эффект виден сразу, стойкий — с третьего–пятого сеанса.',
    items: [
      {
        title: 'Классический массаж лица',
        description: 'Тонус и свежесть — без сложных техник. Кожа выглядит отдохнувшей.',
        details: 'Работаем по массажным линиям: улучшается микроциркуляция, спадает утренняя отёчность, кожа подтягивается и выглядит более живой.\n\nМягкий и комфортный формат — хорошо подходит как регулярный уход и как первое знакомство с ручными техниками.',
        price: '1 100',
        time: '30',
      },
      {
        title: 'Системный массаж лица',
        description: 'Чёткий овал, лифтинг и объём без уколов.',
        details: 'Подбираем технику под вашу задачу.\n\nСкульптурно-лифтинговый — для чёткости овала и подтяжки. Коруги — для моделирования скул и объёма. Периорбитальный — для зоны глаз, убирает усталость и отёчность. Миофасциальный — глубокая проработка мышц при хроническом напряжении.\n\nРезультат естественный, без «сделанного» эффекта.',
        price: '2 200',
        time: '60',
      },
      {
        title: 'Массаж лица + маска',
        description: 'Ручная проработка и маска — кожа сияет, тон выравнивается.',
        details: 'Массаж разгоняет кровообращение и подготавливает кожу — активы маски усваиваются глубже и работают эффективнее.\n\nПосле процедуры кожа выглядит отдохнувшей, выровненной и наполненной. Хороший выбор перед важным мероприятием.',
        price: '2 700',
        time: '60+15',
      },
    ],
  },
  {
    name: 'Эстетическая косметология',
    slug: 'cosmetology',
    minPrice: '500',
    intro: 'Когда кожа просит не только рук, но и активов. Подбираем под состояние кожи в день визита.',
    items: [
      {
        title: 'Ультразвуковая чистка + маска',
        description: 'Чистые поры и ровный тон без боли и покраснений.',
        details: 'Ультразвуковые волны деликатно вымывают загрязнения из пор и убирают ороговевшие клетки — без давления и раздражения.\n\nПодходит для чувствительной кожи и перед важными событиями. После процедуры кожа выглядит свежей и ровной.',
        price: '1 500',
        time: '60',
      },
      {
        title: 'Механическая чистка + маска',
        description: 'Глубокая ручная чистка — для заметного и стойкого результата.',
        details: 'Мануальная проработка комедонов и плотных загрязнений там, где ультразвук не справляется в одиночку.\n\nПроводим аккуратно, с соблюдением всех правил гигиены. После процедуры кожа восстанавливается быстрее, чем при агрессивных чистках.',
        price: '2 000',
        time: '90',
      },
      {
        title: 'Комбинированная чистка + маска',
        description: 'Сначала ультразвук, потом ручная работа — максимальный результат.',
        details: 'Ультразвук размягчает и подготавливает кожу, ручная техника убирает то, что осталось глубоко.\n\nСамый эффективный формат чистки. Кожа после выглядит чистой, ровной, дышит. Хорошо подходит как регулярный уход раз в месяц.',
        price: '2 500',
        time: '120',
      },
      {
        title: 'Чистка + пилинг + маска',
        description: 'Полное обновление за один визит: чистота, ровный тон, сияние.',
        details: 'Три этапа в одной процедуре: очищение убирает загрязнения, пилинг обновляет кожу, маска питает и восстанавливает.\n\nПосле сеанса кожа становится гладкой, тон выравнивается, появляется заметное сияние. Хорошо делать раз в 1–2 месяца.',
        price: '3 000 – 4 000',
        time: '120',
      },
      {
        title: 'Пилинг LeviSsimo',
        description: 'Пигментация, жирность или возрастные изменения — подберём нужный состав.',
        details: 'Испанские пилинги LeviSsimo подбираются по состоянию кожи.\n\nОсветляющий — для борьбы с пигментными пятнами и неровным тоном. Себорегулирующий — для жирной кожи, склонной к высыпаниям. Омолаживающий — при потере упругости.\n\nОбновление заметно, восстановительный период лёгкий.',
        price: '2 000',
        time: '30',
      },
      {
        title: 'Безынъекционная карбокситерапия',
        description: 'Лифтинг, сияние и упругость — без игл и реабилитации.',
        details: 'Углекислый газ через специальную маску насыщает ткани кислородом и запускает естественное обновление кожи.\n\nУлучшается цвет лица, кожа становится упругой и свежей. Эффект заметен сразу после первой процедуры, ощущения комфортные.',
        price: '1 500',
        time: '45',
      },
      {
        title: 'Микронидлинг',
        description: 'Запускает обновление кожи изнутри — текстура, тонус, следы постакне.',
        details: 'Микроиглы создают контролируемые микроканалы, которые запускают выработку коллагена и эластина.\n\nУменьшаются следы постакне, выравнивается текстура, кожа становится плотнее. Курс из 3–5 процедур — и результат держится долго.',
        price: 'от 1 700',
        time: '30',
      },
      {
        title: 'Дополнительные уходы',
        description: 'Усиливают эффект основной процедуры. Подбираются индивидуально.',
        details: 'Дарсонваль — тонизирует кожу, оказывает антибактериальное действие, помогает при высыпаниях.\n\nАльгинатная маска — лифтинг и глубокое увлажнение, кожа выглядит наполненной.\n\nМаска по типу кожи — индивидуальный уход под ваше состояние кожи в день процедуры.',
        price: 'от 500',
        time: '15',
      },
    ],
  },
]
</script>
