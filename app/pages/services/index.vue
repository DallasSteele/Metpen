<script setup lang="ts">
useSeoMeta({
  title: 'Layanan - Tidy Tidys',
  description: 'Jelajahi dan bandingkan layanan yang tersedia.'
})

const search = ref('')
const sort = ref('recommended')
const activeCategory = ref('all')

const categories = [
  { label: 'Semua', value: 'all', icon: 'i-lucide-grid-2x2' },
  { label: 'Rumah', value: 'home', icon: 'i-lucide-house' },
  { label: 'Laundry', value: 'laundry', icon: 'i-lucide-shirt' },
  { label: 'Premium', value: 'premium', icon: 'i-lucide-sparkles' }
]

const { data: services, pending } = await useFetch('/api/services')

function matchesCategory(service: { slug: string }) {
  if (activeCategory.value === 'all') return true
  if (activeCategory.value === 'home') return service.slug === 'home-cleaning'
  if (activeCategory.value === 'laundry') return service.slug === 'laundry-pickup'
  if (activeCategory.value === 'premium') return service.slug === 'deep-cleaning'
  return true
}

const filteredServices = computed(() => {
  const items = [...(services.value || [])]

  const searched = items.filter((service) => {
    const keyword = search.value.toLowerCase()
    return (
      matchesCategory(service) &&
      (service.title.toLowerCase().includes(keyword) ||
        service.description.toLowerCase().includes(keyword))
    )
  })

  if (sort.value === 'price-asc') return searched.sort((a, b) => a.priceFrom - b.priceFrom)
  if (sort.value === 'price-desc') return searched.sort((a, b) => b.priceFrom - a.priceFrom)
  if (sort.value === 'rating') return searched.sort((a, b) => b.rating - a.rating)

  return searched
})
</script>

<template>
  <section class="section-space">
    <div class="container-shell">
      <PageHeading
        eyebrow="Jelajahi layanan"
        title="Pilih layanan yang Anda butuhkan"
        description="Kini dengan fitur pencarian dan pengurutan agar pengalaman menjelajah terasa lebih nyata."
      />

      <div class="mt-8 flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category.value"
          :class="[
            'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
            activeCategory === category.value
              ? 'bg-[var(--tt-brand)] text-white'
              : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
          ]"
          @click="activeCategory = category.value"
        >
          <UIcon :name="category.icon" class="h-4 w-4" />
          <span>{{ category.label }}</span>
        </button>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-[1fr_240px]">
        <UInput
          v-model="search"
          placeholder="Cari layanan"
          size="lg"
        />

        <USelect
          v-model="sort"
          size="lg"
          :items="[
            { label: 'Rekomendasi', value: 'recommended' },
            { label: 'Harga: Rendah ke Tinggi', value: 'price-asc' },
            { label: 'Harga: Tinggi ke Rendah', value: 'price-desc' },
            { label: 'Rating Tertinggi', value: 'rating' }
          ]"
        />
      </div>

      <div v-if="pending" class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="n in 6"
          :key="n"
          class="rounded-3xl border border-neutral-200 bg-white p-6"
        >
          <div class="h-5 w-32 rounded bg-neutral-200" />
          <div class="mt-4 h-4 w-full rounded bg-neutral-100" />
          <div class="mt-2 h-4 w-4/5 rounded bg-neutral-100" />
          <div class="mt-8 h-5 w-24 rounded bg-neutral-200" />
        </div>
      </div>

      <div v-else-if="filteredServices.length === 0" class="mt-10">
        <EmptyState
          title="Tidak ada layanan yang cocok"
          description="Coba kata kunci lain atau reset filter pencarian dan pengurutan."
        />
      </div>

      <div v-else class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard
          v-for="service in filteredServices"
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>