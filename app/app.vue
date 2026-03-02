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
      ? `${titleChunk} — NAS Beauty Сочи`
      : 'NAS Beauty — Массаж и косметология в Сочи'
  },
})
</script>
