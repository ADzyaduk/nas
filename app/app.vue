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
      ? `${titleChunk} — Кабинет Анастасии Дзядук`
      : 'Кабинет Анастасии Дзядук — Массаж и косметология в Сочи'
  },
})
</script>
