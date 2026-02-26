<template>
  <div class="py-24 md:py-32">
    <UContainer class="max-w-4xl mx-auto">
      <div class="text-center mb-24">
        <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase mb-6 block font-medium">Services</span>
        <h1 class="text-4xl md:text-5xl font-normal tracking-tight text-mocha-100 font-serif mb-6">
          Меню услуг
        </h1>
        <p class="text-lg text-mocha-300 font-light max-w-xl mx-auto">
          Выберите процедуру и нажмите «Записаться» — мы поможем с подбором и предложим удобное время.
        </p>
      </div>

      <div v-for="category in serviceCategories" :key="category.name" class="mb-24 last:mb-0">
        <div class="border-b border-mocha-800 pb-4 mb-8 flex justify-between items-baseline">
          <h2 class="text-2xl font-serif text-mocha-100">{{ category.name }}</h2>
          <span class="text-mocha-400 text-sm italic font-serif">От {{ category.minPrice }} ₽</span>
        </div>

        <div class="space-y-6">
          <div 
            v-for="service in category.items" 
            :key="service.title"
            class="group flex flex-col sm:flex-row justify-between sm:items-center py-6 px-4 hover:bg-mocha-950/50 transition-colors duration-300 cursor-pointer"
            @click="openSlideover(service)"
          >
            <div class="sm:w-2/3 mb-4 sm:mb-0 pr-4">
              <h3 class="text-lg font-medium text-mocha-100 group-hover:text-mocha-200 transition-colors mb-2">
                {{ service.title }}
              </h3>
              <p class="text-sm text-mocha-400 font-light leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <div class="flex items-center gap-8 sm:w-1/3 justify-between sm:justify-end">
              <div class="text-right">
                <div class="text-base font-medium text-mocha-100">{{ service.price }} ₽</div>
                <div class="text-xs text-mocha-500 mt-1 uppercase tracking-widest">{{ service.time }} мин</div>
              </div>
              
              <UButton 
                to="/contacts" 
                color="mocha" 
                variant="outline" 
                label="Записаться" 
                class="rounded-none px-6 text-xs tracking-widest uppercase border-mocha-400 text-mocha-100 hover:bg-mocha-400 hover:text-mocha-950 transition-colors"
                @click.stop
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- Service Details Drawer -->
    <UDrawer 
      v-model:open="isDrawerOpen" 
      handle
      :title="selectedService?.title || 'Детали услуги'"
      :description="selectedService?.details || selectedService?.description || 'Описание выбранной услуги'"
      :ui="{
        overlay: 'bg-mocha-950/60',
        content: 'bg-[#1A1613] ring-mocha-800/50',
        handle: '!bg-mocha-700',
        container: 'px-8 pb-8 pt-4',
        header: '',
        body: '',
        footer: ''
      }"
    >
      <template #header>
        <div class="text-center pb-6 border-b border-mocha-800/50">
          <span class="text-xs tracking-[0.2em] text-mocha-400 uppercase block mb-3">{{ selectedService?.time }} мин</span>
          <h3 class="text-2xl md:text-3xl font-serif text-mocha-100 mb-2">{{ selectedService?.title }}</h3>
          <span class="text-xl font-light text-mocha-300">{{ selectedService?.price }} ₽</span>
        </div>
      </template>

      <template #body>
        <p class="text-mocha-300 leading-relaxed font-light text-base pt-6">
          {{ selectedService?.details || selectedService?.description }}
        </p>
      </template>

      <template #footer>
        <UButton 
          to="/contacts" 
          block 
          size="xl" 
          class="rounded-none py-4 uppercase tracking-widest text-sm font-medium bg-mocha-200 text-mocha-950 hover:bg-mocha-100 mt-4"
          label="Записаться"
        />
      </template>
    </UDrawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: 'Услуги и цены — NAS Beauty Сочи',
  description: 'Полный прайс NAS Beauty: массаж тела и лица, чистки, пилинги, карбокситерапия и микронидлинг. Экспертные процедуры с бережным подходом.',
  ogTitle: 'Услуги и цены — NAS Beauty Сочи',
  ogDescription: 'Массаж и эстетическая косметология в Сочи: подробное меню услуг, длительность и стоимость каждой процедуры.',
  keywords: 'массаж цены сочи, прайс массаж сочи, стоимость массажа сочи, чистка лица цена сочи, пилинг цена сочи',
})

const isDrawerOpen = ref(false)
const selectedService = ref(null)

function openSlideover(service) {
  selectedService.value = service
  isDrawerOpen.value = true
}

const serviceCategories = [
  {
    name: 'Массаж тела',
    minPrice: '1 500',
    items: [
      { title: 'Массаж спины', description: 'Снимает зажимы и напряжение в спине за 30 минут.', details: 'Прорабатываем воротниковую зону, грудной и поясничный отделы — там, где накапливается больше всего усталости. Улучшает кровообращение, уходит ощущение скованности. Особенно заметный эффект при сидячей работе и долгих нагрузках.', price: '1 500', time: '30' },
      { title: 'Коррекция фигуры', description: 'Убирает отёчность, выравнивает рельеф, питает кожу.', details: 'Выбираем формат под вашу задачу: лимфодренажный — если беспокоят отёки и ощущение тяжести в ногах; антицеллюлитный — для выравнивания кожи и улучшения рельефа; медовый — интенсивное питание и детокс. Курс из нескольких процедур даёт накопительный эффект.', price: '2 300', time: '60' },
      { title: 'Массаж тела', description: 'Расслабляющий, тонизирующий или классический — на ваш выбор.', details: 'Выбираете интенсивность и цель: расслабиться и снять стресс, взбодриться и почувствовать лёгкость — или классический вариант для общего восстановления. Используем профессиональные масла и средства, приятные для кожи.', price: '2 500', time: '60' },
      { title: 'Общий массаж тела', description: 'Всё тело за один сеанс — спина, ноги, руки, шея, стопы.', details: 'Прорабатываем все основные зоны: спину, ноги, руки, шейно-воротниковую зону и стопы. После сеанса уходит напряжение, тело становится подвижнее, возвращается ощущение лёгкости. Хороший выбор, когда нужна полноценная перезагрузка.', price: '3 500', time: '90' },
      { title: 'Общий массаж тела MAX', description: 'Двухчасовой сеанс: всё тело, голова, лицо, рефлексотерапия.', details: 'Самый полный формат: глубокая проработка всех мышечных групп, массаж головы и лица, рефлексотерапия стоп и кистей. Уходите с ощущением полного обнуления — как после долгого отдыха. Рекомендуем, когда накопилось по-настоящему много.', price: '4 400', time: '120' },
    ]
  },
  {
    name: 'Массаж лица',
    minPrice: '1 100',
    items: [
      { title: 'Классический массаж лица', description: 'Тонус, свежесть и отдохнувший вид без сложных техник.', details: 'Работаем по массажным линиям: улучшается микроциркуляция, спадает утренняя отёчность, кожа подтягивается и выглядит более живой. Комфортный и мягкий формат — хорошо как регулярный уход и как первое знакомство с ручными техниками.', price: '1 100', time: '30' },
      { title: 'Системный массаж лица', description: 'Чёткий овал, лифтинг и объём без уколов.', details: 'Подбираем технику под вашу задачу: скульптурно-лифтинговый для чёткости овала, коруги для моделирования скул, периорбитальный для зоны глаз, миофасциальный для глубокой проработки мышц. Результат — естественный, без «сделанного» эффекта.', price: '2 200', time: '60' },
      { title: 'Массаж лица + маска', description: 'Ручная проработка плюс маска — кожа сияет и отдыхает.', details: 'Массаж разгоняет кровообращение и подготавливает кожу — активы маски усваиваются глубже и работают эффективнее. После процедуры кожа выглядит отдохнувшей, выровненной и наполненной.', price: '2 700', time: '60+15' },
    ]
  },
  {
    name: 'Эстетическая косметология',
    minPrice: '500',
    items: [
      { title: 'Ультразвуковая чистка + маска', description: 'Чистые поры и ровный тон без боли и покраснений.', details: 'Ультразвуковые волны деликатно вымывают загрязнения из пор и убирают ороговевшие клетки — без давления и раздражения. Подходит для чувствительной кожи и перед важными мероприятиями. Завершаем маской по типу кожи для комфорта и свежести.', price: '1 500', time: '60' },
      { title: 'Механическая чистка + маска', description: 'Глубокая ручная чистка для заметного и надолго результата.', details: 'Мануальная проработка комедонов и плотных загрязнений там, где ультразвук не справляется в одиночку. Проводим аккуратно, с соблюдением всех правил гигиены. Завершаем успокаивающим уходом — кожа восстанавливается быстрее.', price: '2 000', time: '90' },
      { title: 'Комбинированная чистка + маска', description: 'Лучший результат: сначала ультразвук, потом ручная чистка.', details: 'Ультразвук размягчает и подготавливает кожу, ручная техника убирает то, что осталось глубоко. Самый эффективный формат чистки — рекомендуем раз в месяц для поддержания чистоты и здоровья кожи.', price: '2 500', time: '120' },
      { title: 'Чистка + пилинг + маска', description: 'Полное обновление: чистота, ровный тон, сияние — за один раз.', details: 'Три этапа в одной процедуре: очищение, пилинг для обновления кожи и маска для питания и восстановления. После сеанса кожа становится гладкой, тон выравнивается, появляется заметное сияние. Отличный выбор раз в 1–2 месяца.', price: '3 000 - 4 000', time: '120' },
      { title: 'Пилинг (LeviSsimo)', description: 'Пигментация, жирность или возрастные изменения — подберём состав.', details: 'Испанские пилинги LeviSsimo подбираются по состоянию кожи: осветляющий — для борьбы с пигментными пятнами и неровным тоном; себорегулирующий — для жирной и склонной к высыпаниям кожи; омолаживающий — при потере упругости. Обновление заметно, восстановление — лёгкое.', price: '2 000', time: '30' },
      { title: 'Безынъекционная карбокситерапия', description: 'Лифтинг, сияние и упругость — без игл и реабилитации.', details: 'Углекислый газ через специальную маску насыщает ткани кислородом и запускает естественное обновление кожи. Улучшается цвет лица, кожа становится более упругой и свежей. Эффект заметен сразу, больно не бывает.', price: '1 500', time: '45' },
      { title: 'Микронидлинг', description: 'Запускает обновление кожи изнутри — текстура, тонус, постакне.', details: 'Микроиглы создают контролируемые микроканалы, которые запускают выработку коллагена и эластина. Уменьшаются следы постакне, выравнивается текстура, кожа становится плотнее. Курс из 3–5 процедур — и результат держится долго.', price: 'от 1 700', time: '30' },
      { title: 'Дополнительные уходы', description: 'Дарсонваль, альгинатная маска, маска по типу кожи.', details: 'Усиливающие процедуры, которые можно добавить к любому уходу: дарсонваль — для тонуса и антибактериального эффекта; альгинатная маска — лифтинг и глубокое увлажнение; маска по типу кожи — индивидуальный уход.', price: 'от 500', time: '15' },
    ]
  }
]
</script>
