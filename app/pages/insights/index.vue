<script setup lang="ts">
import type { Insight } from '~/components/shared/types'

const { data: insights } = await useFetch<Insight[]>('/api/insights')

useSeoMeta({
  title: 'Insight - Tidy Tidys',
  description: 'Konten editorial untuk pengalaman produk yang lebih kaya.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Insight"
        title="Panduan, pemikiran, dan catatan produk"
        description="Halaman ini memberikan kedalaman editorial pada aplikasi, bukan hanya halaman transaksional."
      />

      <div class="mt-10 grid gap-6 xl:grid-cols-3">
        <InsightCard
          v-for="insight in insights"
          :key="insight.id"
          :insight="insight"
        />
      </div>
    </div>
  </section>
</template>