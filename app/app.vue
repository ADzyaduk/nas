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
  script: [
    {
      hid: 'yandex-metrika',
      type: 'text/javascript',
      children: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107256121', 'ym');

      ym(107256121, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
    },
  ],
  noscript: [
    {
      hid: 'yandex-metrika-noscript',
      children: '<div><img src="https://mc.yandex.ru/watch/107256121" style="position:absolute; left:-9999px;" alt="" /></div>',
    },
  ],
})
</script>
