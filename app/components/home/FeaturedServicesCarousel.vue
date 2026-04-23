<script setup lang="ts">
const { data: services } = await useFetch('/api/services')

const imageMap: Record<string, string> = {
  'home-cleaning': '/images/services/home-cleaning.jpg',
  'laundry-pickup': '/images/services/laundry-pickup.jpg',
  'deep-cleaning': '/images/services/deep-cleaning.jpg'
}

const items = computed(() =>
  (services.value || []).map((service) => ({
    ...service,
    image: imageMap[service.slug] || '/images/hero/tidy-hero-3.jpg'
  }))
)
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Featured discovery</p>
        <h2 class="section-title mt-4">Browse services in a more editorial way</h2>
        <p class="body-muted mt-4">
          This adds movement and makes service discovery feel less like a flat product grid.
        </p>
      </div>

      <UCarousel
        v-slot="{ item }"
        loop
        arrows
        dots
        wheel-gestures
        :autoplay="{ delay: 3500 }"
        :items="items"
        :prev="{ variant: 'solid', color: 'neutral' }"
        :next="{ variant: 'solid', color: 'neutral' }"
        :ui="{
          item: 'basis-[88%] md:basis-1/2 xl:basis-1/3 ps-0',
          container: 'ms-0',
          prev: 'sm:start-6',
          next: 'sm:end-6'
        }"
      >
        <NuxtLink
          :to="`/services/${item.slug}`"
          class="group block overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
        >
          <div class="overflow-hidden">
            <NuxtImg
              :src="item.image"
              :alt="item.title"
              width="1200"
              height="900"
              class="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div class="p-6">
            <div class="mb-3 inline-flex rounded-full bg-[var(--tt-brand-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-brand)]">
              Featured service
            </div>

            <h3 class="text-2xl font-semibold tracking-tight text-neutral-900">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-neutral-600">
              {{ item.description }}
            </p>

            <div class="mt-6 flex items-center justify-between">
              <span class="text-sm text-neutral-500">
                From Rp {{ item.priceFrom.toLocaleString('id-ID') }}
              </span>

              <span class="inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)] transition group-hover:translate-x-1">
                <span>Explore</span>
                <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
              </span>
            </div>
          </div>
        </NuxtLink>
      </UCarousel>
    </div>
  </section>
</template>