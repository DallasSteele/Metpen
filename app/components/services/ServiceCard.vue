<script setup lang="ts">
const props = defineProps<{
  service: {
    id: number
    slug: string
    title: string
    description: string
    priceFrom: number
    rating: number
  }
}>()

const iconMap: Record<string, string> = {
  'home-cleaning': 'i-lucide-house',
  'laundry-pickup': 'i-lucide-shirt',
  'deep-cleaning': 'i-lucide-sparkles'
}

const imageMap: Record<string, string> = {
  'home-cleaning': '/images/services/home-cleaning.jpg',
  'laundry-pickup': '/images/services/laundry-pickup.jpg',
  'deep-cleaning': '/images/services/deep-cleaning.jpg'
}

const serviceIcon = computed(() => iconMap[props.service.slug] || 'i-lucide-briefcase-business')
const serviceImage = computed(() => imageMap[props.service.slug] || '/images/hero/tidy-hero-3.jpg')
</script>

<template>
  <NuxtLink
    :to="`/services/${service.slug}`"
    class="group block overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
  >
    <NuxtImg
      :src="serviceImage"
      :alt="service.title"
      width="1200"
      height="800"
      sizes="100vw md:50vw lg:33vw"
      class="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
    />

    <div class="p-6">
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-start gap-3">
          <div class="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
            <UIcon :name="serviceIcon" class="h-5 w-5" />
          </div>

          <div>
            <h3 class="text-xl font-semibold tracking-tight text-neutral-900">
              {{ service.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-neutral-600">
              {{ service.description }}
            </p>
          </div>
        </div>

        <div class="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700">
          ★ {{ service.rating }}
        </div>
      </div>

      <div class="mt-8 flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Mulai dari</p>
          <p class="mt-2 text-lg font-semibold text-neutral-900">
            Rp {{ service.priceFrom.toLocaleString('id-ID') }}
          </p>
        </div>

        <span class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)] transition group-hover:translate-x-1">
          <span>Lihat detail</span>
          <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>