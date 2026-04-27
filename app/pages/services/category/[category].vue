<script setup lang="ts">
import type { Service } from '~/shared/types'

const route = useRoute()
const { data: services } = await useFetch<Service[]>('/api/services')

const categoryTitleMap: Record<string, string> = {
  'home-care': 'Perawatan Rumah',
  'laundry': 'Laundry',
  'deep-cleaning': 'Pembersihan Mendalam',
  'business': 'Bisnis',
  'specialty': 'Khusus'
}

const filtered = computed(() =>
  (services.value || []).filter(item => item.category === route.params.category)
)

useSeoMeta({
  title: `${categoryTitleMap[String(route.params.category)] || 'Layanan'} - Tidy Tidys`
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Kategori"
        :title="categoryTitleMap[String(route.params.category)] || 'Layanan'"
        description="Lapisan eksplorasi layanan yang lebih dalam berdasarkan kategori."
      />

      <div v-if="filtered.length" class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard
          v-for="service in filtered"
          :key="service.id"
          :service="service"
        />
      </div>

      <div v-else class="mt-10">
        <EmptyState
          title="Belum ada layanan di kategori ini"
          description="Tambahkan data kategori nanti atau arahkan pengguna kembali ke semua layanan."
        />
      </div>
    </div>
  </section>
</template>