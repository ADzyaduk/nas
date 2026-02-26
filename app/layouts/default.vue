<template>
  <div class="min-h-screen flex flex-col font-sans transition-colors duration-500 selection:bg-mocha-800 selection:text-mocha-100">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#1A1613]/80 border-b border-mocha-800/50 transition-colors duration-500">
      <UContainer>
        <div class="flex items-center justify-between h-20 md:h-24">
          <NuxtLink to="/" class="transition-opacity hover:opacity-70">
            <img src="/logo.png" alt="NAS Beauty" class="h-12 md:h-14 w-auto" />
          </NuxtLink>
          <div class="hidden md:flex items-center gap-8">
            <UNavigationMenu :items="links" class="text-sm tracking-wide uppercase text-mocha-200" />
            
            <div class="w-px h-4 bg-mocha-700"></div>
            
            <div class="flex items-center gap-4 text-mocha-500">
              <a href="https://t.me/stasya_girl_22" target="_blank" class="hover:text-mocha-100 transition-colors" aria-label="Telegram">
                <UIcon name="i-lucide-send" class="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/massaz_sochi_" target="_blank" class="hover:text-mocha-100 transition-colors" aria-label="Instagram">
                <UIcon name="i-lucide-camera" class="w-4 h-4" />
              </a>
              <a href="tel:+79384880307" class="hover:text-mocha-100 transition-colors font-medium text-sm flex items-center gap-2" aria-label="Phone">
                <UIcon name="i-lucide-phone" class="w-4 h-4" />
                +7 (938) 488-03-07
              </a>
            </div>

            <div class="w-px h-4 bg-mocha-700"></div>
          </div>
          
          <!-- Mobile Menu Toggle -->
          <div class="md:hidden flex items-center gap-4">
            <UButton to="/services" variant="link" color="gray" label="Услуги" class="text-sm tracking-wide uppercase" />
            <UButton to="/contacts" variant="link" color="gray" label="Контакты" class="text-sm tracking-wide uppercase" />
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
        <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          <div class="text-center md:text-left">
            <NuxtLink to="/" class="transition-opacity hover:opacity-70 inline-block mb-4">
              <img src="/logo.png" alt="NAS Beauty" class="h-10 w-auto" />
            </NuxtLink>
            <p class="text-mocha-400 text-sm font-light mb-3">Эстетика естественной красоты</p>
            <div class="text-mocha-500 text-xs font-light uppercase tracking-widest">
              © {{ new Date().getFullYear() }} Все права защищены
            </div>
          </div>

          <div class="flex flex-col items-center md:items-end gap-6">
            <!-- Footer Social Links -->
            <div class="flex items-center gap-6 text-mocha-500">
              <a href="https://t.me/stasya_girl_22" target="_blank" class="hover:text-mocha-100 transition-colors" aria-label="Telegram">
                <UIcon name="i-lucide-send" class="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/massaz_sochi_" target="_blank" class="hover:text-mocha-100 transition-colors" aria-label="Instagram">
                <UIcon name="i-lucide-camera" class="w-5 h-5" />
              </a>
              <a href="tel:+79384880307" class="hover:text-mocha-100 transition-colors flex items-center gap-2 font-serif" aria-label="Phone">
                <UIcon name="i-lucide-phone" class="w-5 h-5" />
                +7 (938) 488-03-07
              </a>
            </div>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
const links = [
  { label: 'Услуги', to: '/services' },
  { label: 'Контакты', to: '/contacts' }
]
</script>
