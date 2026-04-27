<script setup lang="ts">
const categories = [
  {
    title: 'Perawatan Rumah',
    description: 'Layanan rumah tangga rutin dengan tampilan lebih rapi dan pengambilan keputusan yang lebih cepat.',
    icon: 'i-lucide-house',
    color: 'bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]',
    count: '12 layanan'
  },
  {
    title: 'Laundry & Pakaian',
    description: 'Alur penjemputan, penanganan, dan pengembalian yang terasa lebih premium dan terorganisir.',
    icon: 'i-lucide-shirt',
    color: 'bg-amber-50 text-amber-700',
    count: '6 layanan'
  },
  {
    title: 'Pembersihan Mendalam',
    description: 'Untuk pindahan, pembersihan setelah acara, dan kebutuhan layanan yang lebih intensif.',
    icon: 'i-lucide-sparkles',
    color: 'bg-[var(--tt-success-soft)] text-[var(--tt-success)]',
    count: '5 layanan'
  },
  {
    title: 'Layanan Bisnis',
    description: 'Permintaan layanan dengan cakupan lebih besar dan perencanaan serta koordinasi yang lebih matang.',
    icon: 'i-lucide-briefcase-business',
    color: 'bg-neutral-100 text-neutral-800',
    count: '4 layanan'
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Kategori</p>
        <h2 class="section-title mt-4">Jelajahi kategori layanan dengan lebih mudah</h2>
        <p class="body-muted mt-4">
          Ini menambah kedalaman konten di halaman utama dan membuat eksplorasi terasa lebih dinamis.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="category in categories"
          :key="category.title"
          to="/services"
          class="group soft-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
        >
          <div
            :class="[
              'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl',
              category.color
            ]"
          >
            <UIcon :name="category.icon" class="h-5 w-5" />
          </div>

          <div class="mb-3 inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
            {{ category.count }}
          </div>

          <h3 class="text-xl font-semibold tracking-tight text-neutral-900">
            {{ category.title }}
          </h3>

          <p class="mt-3 text-sm leading-6 text-neutral-600">
            {{ category.description }}
          </p>

          <div class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)] transition group-hover:translate-x-1">
            <span>Jelajahi</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>