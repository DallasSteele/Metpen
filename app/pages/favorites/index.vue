<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { data: favorites } = await useFetch('/api/favorites')
const { data: services } = await useFetch('/api/services')

const items = computed(() => {
  const favoriteSlugs = (favorites.value || []).map(item => item.serviceSlug)
  return (services.value || []).filter(service => favoriteSlugs.includes(service.slug))
})

useSeoMeta({
  title: 'Favorit - Tidy Tidys',
  description: 'Layanan favorit yang disimpan.'
})
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Favorit"
      title="Layanan tersimpan dan pilihan pribadi"
      description="Halaman ini membuat platform terasa lebih personal."
    />

    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ServiceCard
        v-for="service in items"
        :key="service.id"
        :service="service"
      />
    </div>
  </div>
</template>