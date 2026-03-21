<template>
  <Transition
    enter-active-class="transition-transform duration-500 ease-out"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1613]/95 backdrop-blur-md border-t border-mocha-800/50"
    >
      <UContainer>
        <div class="py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">

          <!-- Icon + Text -->
          <div class="flex items-start gap-4 flex-1 min-w-0">
            <UIcon name="i-lucide-cookie" class="w-4 h-4 text-mocha-600 shrink-0 mt-0.5" />
            <p class="text-xs text-mocha-400 font-light leading-relaxed">
              Мы используем файлы cookie для корректной работы сайта.
              Продолжая, вы соглашаетесь с их использованием согласно нашей
              <NuxtLink to="/privacy" class="text-mocha-300 underline underline-offset-2 hover:text-mocha-100 transition-colors">
                Политике конфиденциальности
              </NuxtLink>.
            </p>
          </div>

          <!-- Buttons -->
          <div class="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              @click="decline"
              class="flex-1 sm:flex-none px-5 py-2 border border-mocha-800 text-mocha-500 hover:border-mocha-600 hover:text-mocha-300 transition-colors text-xs uppercase tracking-widest font-medium"
            >
              Отклонить
            </button>
            <button
              @click="accept"
              class="flex-1 sm:flex-none px-5 py-2 bg-mocha-200 text-mocha-950 hover:bg-mocha-100 transition-colors text-xs uppercase tracking-widest font-medium"
            >
              Принять
            </button>
          </div>

        </div>
      </UContainer>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookie_consent')) {
    visible.value = true
  }
})

function accept() {
  localStorage.setItem('cookie_consent', 'accepted')
  visible.value = false
}

function decline() {
  localStorage.setItem('cookie_consent', 'declined')
  visible.value = false
}
</script>
