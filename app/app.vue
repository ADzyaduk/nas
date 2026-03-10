<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} — Студия Анастасии Дзядук`
      : 'Студия Анастасии Дзядук — Массаж и косметология в Сочи'
  },
})
</script>
