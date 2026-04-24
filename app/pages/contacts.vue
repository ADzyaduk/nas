<template>
  <div class="py-24 md:py-32">
    <UContainer class="max-w-5xl">

      <!-- Page Header -->
      <div class="text-center mb-16 md:mb-20">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-5 block font-medium">Запись</span>
        <div class="w-12 h-px bg-mocha-700 mx-auto mb-8" aria-hidden="true"></div>
        <h1 class="text-4xl md:text-5xl font-normal tracking-tight text-mocha-100 font-serif mb-6">
          Запишитесь на первый визит
        </h1>
        <p class="text-lg text-mocha-300 font-light max-w-xl mx-auto leading-relaxed">
          Напишите пару слов о том, что беспокоит — подберу процедуру и удобное время.
          Отвечаю в течение часа, обычно быстрее.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <!-- Contact Info Section -->
        <div class="space-y-10">

          <!-- Address -->
          <div class="border-l border-mocha-800 pl-6">
            <h3 class="text-xs font-medium text-mocha-500 uppercase tracking-widest mb-3">Адрес</h3>
            <p class="text-mocha-100 text-lg font-light leading-relaxed">
              г. Сочи, ул. Макаренко, 30А
            </p>
            <p class="text-mocha-500 text-sm mt-1 font-light">5 минут от ТРЦ «Моремолл»</p>
            <p class="text-mocha-500 text-sm mt-1 font-light">Ежедневно с 10:00 до 22:00 — подстрою под ваш график</p>
          </div>

          <!-- Phone -->
          <div class="border-l border-mocha-800 pl-6">
            <h3 class="text-xs font-medium text-mocha-500 uppercase tracking-widest mb-3">Позвонить</h3>
            <a
              href="tel:+79384880307"
              class="text-mocha-100 text-2xl font-light hover:text-mocha-400 transition-colors block font-serif"
            >
              +7 (938) 488-03-07
            </a>
            <p class="text-mocha-500 text-sm mt-1 font-light">Если удобнее голосом</p>
          </div>

          <!-- Social links -->
          <div class="border-l border-mocha-800 pl-6">
            <h3 class="text-xs font-medium text-mocha-500 uppercase tracking-widest mb-4">Написать</h3>
            <div class="flex flex-wrap gap-3">
              <a
                href="https://t.me/stasya_girl_22"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 border border-mocha-800 px-4 py-2 text-mocha-300 hover:border-mocha-600 hover:text-mocha-100 transition-colors text-sm uppercase tracking-widest"
                aria-label="Telegram"
              >
                <UIcon name="i-lucide-send" class="w-3.5 h-3.5 shrink-0" />
                Telegram
              </a>
              <a
                href="https://wa.me/79384880307"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 border border-mocha-800 px-4 py-2 text-mocha-300 hover:border-mocha-600 hover:text-mocha-100 transition-colors text-sm uppercase tracking-widest"
                aria-label="WhatsApp"
              >
                <UIcon name="i-lucide-message-circle" class="w-3.5 h-3.5 shrink-0" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/massaz_sochi_"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 border border-mocha-800 px-4 py-2 text-mocha-300 hover:border-mocha-600 hover:text-mocha-100 transition-colors text-sm uppercase tracking-widest"
                aria-label="Instagram"
              >
                <UIcon name="i-lucide-camera" class="w-3.5 h-3.5 shrink-0" />
                Instagram
              </a>
            </div>
            <p class="text-mocha-600 text-xs font-light mt-3">Быстрее всего — Telegram. Отвечаю лично, не бот.</p>
          </div>

          <!-- Reassurance block -->
          <div class="border-l border-mocha-800 pl-6 space-y-3">
            <h3 class="text-xs font-medium text-mocha-500 uppercase tracking-widest mb-4">Как это работает</h3>
            <div class="flex items-start gap-3">
              <span class="text-mocha-600 text-xs mt-0.5">—</span>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">Ответ в течение часа — в том канале, где вы написали</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-mocha-600 text-xs mt-0.5">—</span>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">Никаких ботов и автоответов — пишет Анастасия лично</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-mocha-600 text-xs mt-0.5">—</span>
              <p class="text-mocha-400 text-sm font-light leading-relaxed">Не подошло время или процедура — просто скажите, переподберём</p>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <div class="bg-mocha-950 p-8 md:p-12 border border-mocha-800/50">
          <div class="mb-10">
            <h2 class="text-2xl font-medium text-mocha-100 font-serif mb-3">Напишите пару слов</h2>
            <p class="text-sm text-mocha-400 font-light leading-relaxed">
              Анастасия свяжется лично и предложит удобное время.
            </p>
          </div>

          <UForm :validate="validate" :state="state" class="space-y-8" @submit="onSubmit">
            <UFormField name="name" required>
              <template #label><span class="text-xs uppercase tracking-widest text-mocha-500">Как к вам обращаться</span></template>
              <UInput
                v-model="state.name"
                name="name"
                autocomplete="name"
                placeholder="Иван Иванов"
                variant="none"
                class="border-b border-mocha-800 rounded-none px-0 focus:ring-0 w-full"
                size="lg"
              />
            </UFormField>

            <UFormField name="phone" required>
              <template #label>
                <span class="text-xs uppercase tracking-widest text-mocha-500">Номер телефона</span>
              </template>
              <UInput
                v-model="state.phone"
                name="tel"
                type="tel"
                autocomplete="tel"
                inputmode="tel"
                placeholder="+7 (900) 000-00-00"
                variant="none"
                class="border-b border-mocha-800 rounded-none px-0 focus:ring-0 w-full"
                size="lg"
              />
            </UFormField>

            <UFormField name="service">
              <template #label><span class="text-xs uppercase tracking-widest text-mocha-500">Что вас интересует</span></template>
              <USelect
                v-model="state.service"
                :items="['Массаж тела', 'Массаж лица', 'Эстетическая косметология', 'Пока не знаю, помогите выбрать']"
                placeholder="Выберите или пропустите"
                variant="none"
                class="border-b border-mocha-800 rounded-none px-0 focus:ring-0 w-full"
                size="lg"
              />
            </UFormField>

            <UFormField name="consent">
              <UCheckbox v-model="state.consent" name="consent">
                <template #label>
                  <span class="text-xs text-mocha-500 font-light leading-relaxed">
                    Я даю согласие на обработку персональных данных в соответствии с
                    <NuxtLink to="/privacy" class="text-mocha-300 underline underline-offset-2 hover:text-mocha-100 transition-colors">
                      Политикой конфиденциальности
                    </NuxtLink>
                  </span>
                </template>
              </UCheckbox>
            </UFormField>

            <UButton
              type="submit"
              color="primary"
              variant="solid"
              block
              size="xl"
              class="mt-2 rounded-none py-4 uppercase tracking-widest text-sm font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors"
              :loading="isSubmitting"
            >
              Записаться
            </UButton>
          </UForm>
        </div>

      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const toast = useToast()

useSeoMeta({
  title: 'Запись и контакты — Сочи, Макаренко 30А, ежедневно 10:00–22:00',
  description: 'Запись на массаж и косметологию в Сочи. Telegram, WhatsApp, форма или звонок +7 (938) 488-03-07. Ответ в течение часа, без ботов.',
  ogTitle: 'Контакты — Кабинет Анастасии Дзядук',
  ogDescription: 'Запишитесь: Сочи, ул. Макаренко 30А. Ежедневно с 10:00 до 22:00. Ответ в течение часа.',
  keywords: 'массаж сочи запись, массаж сочи макаренко, массаж сочи адрес, косметолог сочи запись, кабинет массажа макаренко сочи',
})

const validate = (state: typeof stateObj) => {
  const errors: { name: string; message: string }[] = []
  if (!state.name) errors.push({ name: 'name', message: 'Обязательное поле' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Обязательное поле' })
  else if (!/^\+?[0-9\s\-()]+$/.test(state.phone)) errors.push({ name: 'phone', message: 'Некорректный формат' })
  if (!state.consent) errors.push({ name: 'consent', message: 'Необходимо согласие на обработку данных' })
  return errors
}

const stateObj = { name: '', phone: '', service: '', consent: false }
const state = reactive({ ...stateObj })
const isSubmitting = ref(false)

async function onSubmit() {
  isSubmitting.value = true

  try {
    await $fetch('/api/send-telegram', {
      method: 'POST',
      body: {
        name: state.name,
        phone: state.phone,
        service: state.service,
      },
    })

    toast.add({
      title: 'Поймала заявку',
      description: 'Отвечу в течение часа лично — в том же канале, где удобно.',
      color: 'success',
      icon: 'i-lucide-check-circle',
    })

    state.name = ''
    state.phone = ''
    state.service = ''
    state.consent = false
  } catch {
    toast.add({
      title: 'Не отправилось',
      description: 'Похоже, связь. Позвоните +7 (938) 488-03-07 или напишите в Telegram — приду на связь сразу.',
      color: 'error',
      icon: 'i-lucide-alert-circle',
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>
