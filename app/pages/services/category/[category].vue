<script setup lang="ts">
import type { Service } from '~/shared/types'

const route = useRoute()
const { data: services } = await useFetch<Service[]>('/api/services')

const categoryTitleMap: Record<string, string> = {
  'home-care': 'Home Care',
  'laundry': 'Laundry',
  'deep-cleaning': 'Deep Cleaning',
  'business': 'Business',
  'specialty': 'Specialty'
}

const filtered = computed(() =>
  (services.value || []).filter(item => item.category === route.params.category)
)

useSeoMeta({
  title: `${categoryTitleMap[String(route.params.category)] || 'Services'} - Tidy Tidys`
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Category"
        :title="categoryTitleMap[String(route.params.category)] || 'Services'"
        description="A deeper layer of service browsing based on category."
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
          title="No services in this category yet"
          description="Add more category data later or redirect users back to all services."
        />
      </div>
    </div>
  </section>
</template>