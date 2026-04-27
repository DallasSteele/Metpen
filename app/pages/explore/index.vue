<script setup lang="ts">
const { data: services } = await useFetch('/api/services')
const { data: insights } = await useFetch('/api/insights')
const { data: offers } = await useFetch('/api/offers')

useSeoMeta({
  title: 'Jelajahi - Tidy Tidys',
  description: 'Halaman kurasi untuk penemuan, cerita, dan konten unggulan.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Jelajahi"
        title="Temukan layanan, cerita, dan peluncuran terbatas"
        description="Halaman bergaya editorial membuat produk terasa lebih kaya dan terkurasi."
      />

      <div class="mt-10 space-y-14">
        <div>
          <h2 class="mb-5 text-2xl font-semibold text-neutral-900">Layanan unggulan</h2>
          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ServiceCard
              v-for="service in services?.slice(0, 6)"
              :key="service.id"
              :service="service"
            />
          </div>
        </div>

        <div>
          <h2 class="mb-5 text-2xl font-semibold text-neutral-900">Penawaran</h2>
          <div class="grid gap-6 xl:grid-cols-3">
            <div
              v-for="offer in offers"
              :key="offer.id"
              class="soft-card p-6"
            >
              <p class="text-lg font-semibold text-neutral-900">{{ offer.title }}</p>
              <p class="mt-3 text-sm leading-6 text-neutral-600">{{ offer.subtitle }}</p>
              <p class="mt-4 text-sm font-medium text-[var(--tt-brand)]">{{ offer.discount }}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="mb-5 text-2xl font-semibold text-neutral-900">Insight terbaru</h2>
          <div class="grid gap-6 xl:grid-cols-3">
            <InsightCard
              v-for="insight in insights?.slice(0, 3)"
              :key="insight.id"
              :insight="insight"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>