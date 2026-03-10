<template>
  <div class="min-h-screen flex flex-col font-sans transition-colors duration-500 selection:bg-mocha-800 selection:text-mocha-100">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#1A1613]/80 border-b border-mocha-800/50 transition-colors duration-500">
      <UContainer>
        <div class="flex items-center justify-between h-20 md:h-24">
          <NuxtLink to="/" class="transition-opacity hover:opacity-70">
            <NuxtImg src="/logo.png" alt="Кабинет Анастасии Дзядук" width="112" height="112" format="webp" class="h-12 md:h-14 w-auto" />
          </NuxtLink>
          <div class="hidden md:flex items-center gap-8">
            <UNavigationMenu :items="links" class="text-sm tracking-wide uppercase text-mocha-200" />

            <div class="w-px h-4 bg-mocha-700"></div>

            <div class="flex items-center gap-4 text-mocha-500">
              <a href="https://t.me/stasya_girl_22" target="_blank" rel="noopener" class="hover:text-mocha-100 transition-colors" aria-label="Telegram">
                <UIcon name="i-lucide-send" class="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/massaz_sochi_" target="_blank" rel="noopener" class="hover:text-mocha-100 transition-colors" aria-label="Instagram">
                <UIcon name="i-lucide-camera" class="w-4 h-4" />
              </a>
              <a href="tel:+79384880307" class="hover:text-mocha-100 transition-colors font-medium text-sm flex items-center gap-2" aria-label="Phone">
                <UIcon name="i-lucide-phone" class="w-4 h-4" />
                +7 (938) 488-03-07
              </a>
            </div>

            <div class="w-px h-4 bg-mocha-700"></div>
          </div>

          <!-- Mobile Menu -->
          <div class="md:hidden flex items-center gap-4">
            <UButton to="/services" variant="link" color="neutral" label="Услуги" class="text-xs tracking-wide uppercase" />
            <UButton to="/about" variant="link" color="neutral" label="О нас" class="text-xs tracking-wide uppercase" />
            <UButton
              to="/contacts"
              variant="outline"
              color="neutral"
              label="Записаться"
              class="text-xs tracking-wide uppercase rounded-none border-mocha-700 text-mocha-200 hover:border-mocha-500 hover:text-mocha-100 hover:bg-transparent transition-colors px-3 py-1.5"
            />
          </div>
        </div>
      </UContainer>
    </header>

    <!-- Main Content -->
    <main class="grow flex flex-col">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#1A1613] border-t border-mocha-800/50 mt-auto transition-colors duration-500">
      <UContainer class="py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          <!-- Brand -->
          <div>
            <NuxtLink to="/" class="transition-opacity hover:opacity-70 inline-block mb-4">
              <NuxtImg src="/logo.png" alt="Кабинет Анастасии Дзядук" width="80" height="80" format="webp" class="h-10 w-auto" />
            </NuxtLink>
            <p class="text-mocha-400 text-sm font-light mb-2 leading-relaxed">Эстетика естественной красоты</p>
            <p class="text-mocha-600 text-xs font-light leading-relaxed">г. Сочи, ул. Макаренко, 30А<br />Ежедневно с 10:00 до 22:00</p>
          </div>

          <!-- Navigation -->
          <div>
            <p class="text-xs uppercase tracking-widest text-mocha-600 mb-5 font-medium">Навигация</p>
            <nav class="flex flex-col gap-3" aria-label="Навигация в футере">
              <NuxtLink to="/services" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light">Услуги и цены</NuxtLink>
              <NuxtLink to="/about" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light">О нас</NuxtLink>
              <NuxtLink to="/contacts" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light">Контакты и запись</NuxtLink>
            </nav>
          </div>

          <!-- Contact & Social -->
          <div>
            <p class="text-xs uppercase tracking-widest text-mocha-600 mb-5 font-medium">Связь</p>
            <div class="flex flex-col gap-3">
              <a href="tel:+79384880307" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light flex items-center gap-2" aria-label="Телефон">
                <UIcon name="i-lucide-phone" class="w-4 h-4 shrink-0" />
                +7 (938) 488-03-07
              </a>
              <a href="https://t.me/stasya_girl_22" target="_blank" rel="noopener" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light flex items-center gap-2" aria-label="Telegram">
                <UIcon name="i-lucide-send" class="w-4 h-4 shrink-0" />
                Telegram
              </a>
              <a href="https://www.instagram.com/massaz_sochi_" target="_blank" rel="noopener" class="text-mocha-400 hover:text-mocha-100 transition-colors text-sm font-light flex items-center gap-2" aria-label="Instagram">
                <UIcon name="i-lucide-camera" class="w-4 h-4 shrink-0" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-mocha-800/50 mt-10 pt-8">
          <div class="text-mocha-600 text-xs font-light uppercase tracking-widest text-center">
            © {{ new Date().getFullYear() }} Кабинет Анастасии Дзядук — Все права защищены
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup lang="ts">
const links = [
  { label: 'Услуги', to: '/services' },
  { label: 'О нас', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
]
</script>
