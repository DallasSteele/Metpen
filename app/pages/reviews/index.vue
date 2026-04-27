<script setup lang="ts">
const selectedService = ref('all')
const page = ref(1)
const perPage = 6

const { data: reviews } = await useFetch('/api/reviews')
const { data: services } = await useFetch('/api/services')

const filteredReviews = computed(() => {
  const items = reviews.value || []
  if (selectedService.value === 'all') return items
  return items.filter(item => item.serviceSlug === selectedService.value)
})

const total = computed(() => filteredReviews.value.length)

const paginatedReviews = computed(() => {
  const start = (page.value - 1) * perPage
  return filteredReviews.value.slice(start, start + perPage)
})

useSeoMeta({
  title: 'Ulasan - Tidy Tidys',
  description: 'Ulasan pelanggan untuk membangun kepercayaan yang lebih kuat.'
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Ulasan"
        title="Suara pelanggan dan feedback layanan"
        description="Halaman kepercayaan khusus membuat platform terasa jauh lebih lengkap."
      />

      <div class="mt-8 max-w-sm">
        <label class="mb-2 block text-sm font-medium text-neutral-700">Filter berdasarkan layanan</label>
        <USelect
          v-model="selectedService"
          :items="[
            { label: 'Semua layanan', value: 'all' },
            ...(services || []).map(service => ({
              label: service.title,
              value: service.slug
            }))
          ]"
        />
      </div>

      <div class="mt-10 grid gap-6 xl:grid-cols-3">
        <ReviewCard
          v-for="review in paginatedReviews"
          :key="review.id"
          :review="review"
        />
      </div>

      <div class="mt-10 flex justify-center" v-if="total > perPage">
        <UPagination
          v-model:page="page"
          :total="total"
          :items-per-page="perPage"
        />
      </div>
    </div>
  </section>
</template>