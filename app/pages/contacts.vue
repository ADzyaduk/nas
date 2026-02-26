<template>
  <UContainer class="py-24 md:py-32 max-w-5xl">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      
      <!-- Contact Info Section -->
      <div>
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-6 block font-medium">Contact</span>
        <h1 class="text-4xl md:text-5xl font-normal tracking-tight text-mocha-100 font-serif mb-8">
          Запись на процедуру
        </h1>
        <p class="text-lg text-mocha-300 font-light mb-16 leading-relaxed">
          Оставьте заявку — мы уточним запрос, предложим удобное время и подтвердим запись. Можно сразу написать в Telegram или WhatsApp.
        </p>

        <div class="space-y-12">
          <div>
            <h3 class="text-sm font-medium text-mocha-400 uppercase tracking-widest mb-4">Адрес</h3>
            <p class="text-mocha-100 text-lg font-light leading-relaxed">г. Сочи, ул. Макаренко, 30А<br><span class="text-mocha-500 text-base mt-2 block">Ежедневно с 10:00 до 22:00</span></p>
          </div>

          <div>
            <h3 class="text-sm font-medium text-mocha-400 uppercase tracking-widest mb-4">Телефон</h3>
            <a href="tel:+79384880307" class="text-mocha-100 text-2xl font-light hover:text-mocha-500 transition-colors block font-serif">
              +7 (938) 488-03-07
            </a>
          </div>

          <div>
            <h3 class="text-sm font-medium text-mocha-400 uppercase tracking-widest mb-4">Связь</h3>
            <div class="flex gap-6">
              <a href="https://t.me/stasya_girl_22" target="_blank" class="flex items-center gap-2 text-mocha-100 hover:text-mocha-500 transition-colors text-sm uppercase tracking-widest">
                <UIcon name="i-lucide-send" class="w-4 h-4" /> Telegram
              </a>
              <a href="https://wa.me/79384880307" target="_blank" class="flex items-center gap-2 text-mocha-100 hover:text-mocha-500 transition-colors text-sm uppercase tracking-widest">
                <UIcon name="i-lucide-message-circle" class="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://www.instagram.com/massaz_sochi_" target="_blank" class="flex items-center gap-2 text-mocha-100 hover:text-mocha-500 transition-colors text-sm uppercase tracking-widest">
                <UIcon name="i-lucide-camera" class="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="bg-mocha-950 p-8 md:p-12 shadow-sm border border-mocha-800/50">
        <div class="mb-10">
          <h2 class="text-2xl font-medium text-mocha-100 font-serif mb-3">Записаться</h2>
          <p class="text-sm text-mocha-400 font-light">Оставьте контакты — администратор подтвердит запись в ближайшее время.</p>
        </div>

        <UForm :validate="validate" :state="state" class="space-y-8" @submit="onSubmit">
          <UFormField name="name" required>
            <template #label><span class="text-xs uppercase tracking-widest text-mocha-500">Ваше имя</span></template>
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
            <template #label><span class="text-xs uppercase tracking-widest text-mocha-500">Телефон</span></template>
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
            <template #label><span class="text-xs uppercase tracking-widest text-mocha-500">Услуга</span></template>
            <USelect 
              v-model="state.service" 
              :items="['Массаж лица', 'Аппаратная косметология', 'Эстетический уход', 'Консультация']" 
              placeholder="Выберите услугу"
              variant="none"
              class="border-b border-mocha-800 rounded-none px-0 focus:ring-0 w-full"
              size="lg"
            />
          </UFormField>

          <UButton type="submit" color="primary" variant="solid" block size="xl" class="mt-8 rounded-none py-4 uppercase tracking-widest text-sm font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100" :loading="isSubmitting">
            Отправить
          </UButton>
          
          <p class="text-xs text-center text-mocha-500 mt-6 font-light leading-relaxed">
            Нажимая на кнопку, вы даете согласие на обработку персональных данных.
          </p>
        </UForm>
      </div>
    </div>
  </UContainer>
</template>

<script setup>
import { ref, reactive } from 'vue'

const toast = useToast()

useSeoMeta({
  title: 'Контакты и запись — NAS Beauty Сочи',
  description: 'Запись в NAS Beauty: массаж и эстетическая косметология в Сочи. Удобная заявка онлайн, быстрый ответ администратора и подбор процедуры под ваш запрос.',
  ogTitle: 'Контакты — NAS Beauty Сочи',
  ogDescription: 'Запишитесь в NAS Beauty: Сочи, ул. Макаренко, 30А. Ежедневно с 10:00 до 22:00.',
  keywords: 'массаж сочи запись, массаж сочи адрес, косметолог сочи запись, NAS Beauty контакты',
})

const validate = (state) => {
  const errors = []
  if (!state.name) errors.push({ name: 'name', message: 'Обязательное поле' })
  if (!state.phone) errors.push({ name: 'phone', message: 'Обязательное поле' })
  else if (!/^\+?[0-9\s\-\(\)]+$/.test(state.phone)) errors.push({ name: 'phone', message: 'Некорректный формат' })
  return errors
}

const state = reactive({
  name: '',
  phone: '',
  service: ''
})

const isSubmitting = ref(false)

async function onSubmit(event) {
  isSubmitting.value = true
  
  try {
    await $fetch('/api/send-telegram', {
      method: 'POST',
      body: {
        name: state.name,
        phone: state.phone,
        service: state.service,
      }
    })
    
    toast.add({
      title: 'Заявка отправлена!',
      description: 'Спасибо! Скоро свяжемся с вами для подтверждения записи.',
      color: 'success',
      icon: 'i-lucide-check-circle',
    })
    
    // reset
    state.name = ''
    state.phone = ''
    state.service = ''
  } catch (error) {
    toast.add({
      title: 'Ошибка отправки',
      description: 'Не удалось отправить форму. Позвоните нам или напишите в Telegram.',
      color: 'error',
      icon: 'i-lucide-alert-circle',
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>
