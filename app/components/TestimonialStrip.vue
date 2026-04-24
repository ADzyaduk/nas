<template>
  <section
    v-if="testimonials.length > 0"
    class="py-16 md:py-20 border-t border-mocha-800/50 bg-mocha-950/40"
  >
    <UContainer class="max-w-6xl">
      <div v-if="heading" class="text-center mb-12" v-reveal>
        <span v-if="eyebrow" class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-4 block font-medium">{{ eyebrow }}</span>
        <h2 class="text-2xl md:text-3xl font-normal text-mocha-100 font-serif">{{ heading }}</h2>
      </div>

      <div
        :class="[
          'grid gap-8 md:gap-10',
          testimonials.length === 1
            ? 'grid-cols-1 max-w-2xl mx-auto'
            : testimonials.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-3',
        ]"
      >
        <figure
          v-for="(t, i) in testimonials"
          :key="i"
          class="border-l-2 border-mocha-700 pl-6 py-2"
          v-reveal="{ delay: (i + 1) * 100 }"
        >
          <blockquote class="text-mocha-200 font-serif text-base md:text-lg leading-relaxed italic mb-4">
            «{{ t.quote }}»
          </blockquote>
          <figcaption class="text-xs text-mocha-500 font-light tracking-wide">
            <span class="text-mocha-300 font-medium not-italic">{{ t.name }}</span>
            <span v-if="t.meta"> · {{ t.meta }}</span>
            <span v-if="t.service" class="block mt-1 text-mocha-600">{{ t.service }}</span>
          </figcaption>
        </figure>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  quote: string
  name: string
  meta?: string
  service?: string
}

withDefaults(
  defineProps<{
    testimonials?: Testimonial[]
    heading?: string
    eyebrow?: string
  }>(),
  {
    testimonials: () => [],
    heading: '',
    eyebrow: '',
  },
)
</script>
