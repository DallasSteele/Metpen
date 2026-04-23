<script setup lang="ts">
useSeoMeta({
  title: 'Service Detail - Tidy Tidys',
  description: 'Premium service detail experience with richer information architecture.'
})

const route = useRoute()
const { data: services } = await useFetch('/api/services')

const service = computed(() =>
  services.value?.find((item) => item.slug === route.params.slug)
)

const serviceImages: Record<string, string> = {
  'home-cleaning': '/images/services/home-cleaning.jpg',
  'laundry-pickup': '/images/services/laundry-pickup.jpg',
  'deep-cleaning': '/images/services/deep-cleaning.jpg'
}

const detailMap: Record<string, {
  tags: string[]
  includes: string[]
  process: string[]
  overview: string
}> = {
  'home-cleaning': {
    tags: ['Routine', 'Residential', 'Fast turnaround'],
    overview: 'A reliable recurring home cleaning service designed for modern households that want consistency, speed, and a visibly polished result.',
    includes: ['Surface dusting', 'Floor vacuuming', 'Bathroom wipe-down', 'Kitchen reset', 'Trash collection'],
    process: ['Pick your preferred slot', 'Confirm address and access notes', 'Assigned specialist arrives', 'Service completion and review']
  },
  'laundry-pickup': {
    tags: ['Pickup', 'Convenient', 'Lightweight'],
    overview: 'A simple pickup and return flow for everyday laundry, styled to feel premium and predictable rather than chaotic.',
    includes: ['Scheduled pickup', 'Garment sorting', 'Cleaning process', 'Neat packing', 'Return handoff'],
    process: ['Select pickup slot', 'Confirm address', 'Laundry is collected', 'Cleaning and packing', 'Return delivery']
  },
  'deep-cleaning': {
    tags: ['Premium', 'Detailed', 'Reset service'],
    overview: 'A more comprehensive cleaning experience for move-ins, post-event resets, or homes that need a full refresh instead of a quick touch-up.',
    includes: ['Room-by-room deep reset', 'Targeted stain attention', 'Bathroom detail work', 'Kitchen deep wipe-down', 'Final finishing pass'],
    process: ['Select deep-cleaning slot', 'Add instructions', 'Specialist team assigned', 'Service performed', 'Final check and review']
  }
}

const detail = computed(() => {
  if (!service.value) return null
  return detailMap[service.value.slug]
})

const carouselImages = computed(() => {
  if (!service.value) return []

  const image = serviceImages[service.value.slug]

  return image ? [image, image, image] : []
})

const faqMap: Record<string, { label: string; icon: string; content: string }[]> = {
  'home-cleaning': [
    {
      label: 'How long does the service usually take?',
      icon: 'i-lucide-circle-help',
      content: 'Most sessions take around 2 to 4 hours depending on unit size and condition.'
    },
    {
      label: 'Do I need to provide cleaning tools?',
      icon: 'i-lucide-circle-help',
      content: 'For now, the mock flow assumes the specialist arrives prepared.'
    }
  ],
  'laundry-pickup': [
    {
      label: 'How fast is pickup arranged?',
      icon: 'i-lucide-circle-help',
      content: 'Pickup timing depends on your selected slot and area coverage.'
    },
    {
      label: 'Can I include special garment notes?',
      icon: 'i-lucide-circle-help',
      content: 'Yes, notes can be added during the booking step.'
    }
  ],
  'deep-cleaning': [
    {
      label: 'Is this suitable for move-in cleaning?',
      icon: 'i-lucide-circle-help',
      content: 'Yes, deep cleaning is positioned as a full-reset option for move-ins and major refreshes.'
    },
    {
      label: 'Does the price change for larger spaces?',
      icon: 'i-lucide-circle-help',
      content: 'The starting price shown is the base estimate; final backend rules can refine this later.'
    }
  ]
}

const faqItems = computed(() => {
  if (!service.value) return []
  return faqMap[service.value.slug] || []
})

const breadcrumbItems = computed(() => [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/'
  },
  {
    label: 'Services',
    icon: 'i-lucide-briefcase-business',
    to: '/services'
  },
  {
    label: service.value?.title || 'Detail'
  }
])

const tabItems = [
  {
    label: 'Overview',
    icon: 'i-lucide-layout-panel-top',
    slot: 'overview'
  },
  {
    label: 'Included',
    icon: 'i-lucide-check-check',
    slot: 'included'
  },
  {
    label: 'Process',
    icon: 'i-lucide-list-ordered',
    slot: 'process'
  }
]
</script>

<template>
  <section class="section-space">
    <div class="container-shell max-w-6xl">
      <div v-if="service && detail" class="space-y-8">
        <UBreadcrumb :items="breadcrumbItems" />

        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-6">
            <UCarousel
              v-slot="{ item }"
              arrows
              dots
              loop
              :items="carouselImages"
              :ui="{
                item: 'basis-full ps-0',
                container: 'ms-0',
                prev: 'sm:start-6',
                next: 'sm:end-6'
              }"
            >
              <div class="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white">
                <NuxtImg
                  :src="item"
                  :alt="service.title"
                  width="1600"
                  height="1000"
                  class="h-[340px] w-full object-cover"
                />
              </div>
            </UCarousel>

            <div>
              <div class="mb-4 flex flex-wrap gap-2">
                <UBadge
                  v-for="tag in detail.tags"
                  :key="tag"
                  color="primary"
                  variant="subtle"
                  class="rounded-full"
                >
                  {{ tag }}
                </UBadge>
              </div>

              <h1 class="section-title">{{ service.title }}</h1>
              <p class="body-muted mt-5 max-w-3xl">
                {{ detail.overview }}
              </p>
            </div>

            <UCard class="rounded-3xl">
              <UTabs :items="tabItems" class="w-full">
                <template #overview>
                  <div class="space-y-4 pt-2">
                    <p class="text-sm leading-7 text-neutral-600">
                      {{ detail.overview }}
                    </p>

                    <div class="grid gap-4 sm:grid-cols-3">
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Starting price</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          Rp {{ service.priceFrom.toLocaleString('id-ID') }}
                        </p>
                      </div>
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Rating</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          ★ {{ service.rating }}
                        </p>
                      </div>
                      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
                        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Availability</p>
                        <p class="mt-2 text-lg font-semibold text-neutral-900">
                          Daily
                        </p>
                      </div>
                    </div>
                  </div>
                </template>

                <template #included>
                  <div class="grid gap-3 pt-2">
                    <div
                      v-for="item in detail.includes"
                      :key="item"
                      class="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3"
                    >
                      <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
                      <span class="text-sm font-medium text-neutral-900">{{ item }}</span>
                    </div>
                  </div>
                </template>

                <template #process>
                  <div class="grid gap-3 pt-2">
                    <div
                      v-for="(step, index) in detail.process"
                      :key="step"
                      class="flex items-start gap-4 rounded-2xl border border-neutral-200 px-4 py-4"
                    >
                      <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--tt-brand-soft)] text-sm font-semibold text-[var(--tt-brand)]">
                        {{ index + 1 }}
                      </div>
                      <p class="text-sm font-medium leading-6 text-neutral-900">
                        {{ step }}
                      </p>
                    </div>
                  </div>
                </template>
              </UTabs>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <p class="text-lg font-semibold text-neutral-900">Frequently asked questions</p>
              </template>

              <UAccordion :items="faqItems">
                <template #body="{ item }">
                  <p class="text-sm leading-7 text-neutral-600">
                    {{ item.content }}
                  </p>
                </template>
              </UAccordion>
            </UCard>
          </div>

          <div class="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <UCard class="rounded-3xl">
              <template #header>
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-lg font-semibold text-neutral-900">Book this service</p>
                    <p class="mt-2 text-sm leading-6 text-neutral-600">
                      Cleaner conversion panel with stronger visual confidence.
                    </p>
                  </div>

                  <div class="rounded-full bg-[var(--tt-success-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-success)]">
                    Available
                  </div>
                </div>
              </template>

              <div class="space-y-4">
                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Starting price</p>
                  <p class="mt-1 text-lg font-semibold text-neutral-900">
                    Rp {{ service.priceFrom.toLocaleString('id-ID') }}
                  </p>
                </div>

                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Estimated visit</p>
                  <p class="mt-1 text-sm font-medium text-neutral-900">2–4 hours</p>
                </div>

                <div class="rounded-2xl border border-neutral-200 px-4 py-3">
                  <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Service area</p>
                  <p class="mt-1 text-sm font-medium text-neutral-900">City coverage enabled</p>
                </div>

                <NuxtLink
                  to="/bookings/new"
                  class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--tt-brand)] px-4 py-3 text-sm font-medium text-white"
                >
                  <UIcon name="i-lucide-calendar-plus-2" class="h-4 w-4" />
                  <span>Continue booking</span>
                </NuxtLink>
              </div>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <p class="text-lg font-semibold text-neutral-900">Assigned specialists</p>
              </template>

              <div class="space-y-4">
                <div class="flex items-center gap-3 rounded-2xl border border-neutral-200 p-3">
                  <UAvatar src="/images/avatars/demo-user.jpg" alt="Rachel Tan" size="lg" />
                  <div>
                    <p class="text-sm font-semibold text-neutral-900">Rachel Tan</p>
                    <p class="text-xs text-neutral-500">Lead specialist</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 rounded-2xl border border-neutral-200 p-3">
                  <UAvatar src="/images/avatars/demo-user.jpg" alt="Noah Lee" size="lg" />
                  <div>
                    <p class="text-sm font-semibold text-neutral-900">Noah Lee</p>
                    <p class="text-xs text-neutral-500">Service coordinator</p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard class="rounded-3xl">
              <template #header>
                <div>
                  <p class="text-lg font-semibold text-neutral-900">Frequently asked questions</p>
                  <p class="mt-2 text-sm leading-6 text-neutral-600">
                    A small FAQ block makes the detail page feel more complete and more trustworthy.
                  </p>
                </div>
              </template>

              <UAccordion :items="faqItems" />
              <div class="space-y-5">
                <div>
                  <p class="eyebrow">Related services</p>
                  <h2 class="section-title mt-4">Explore more options</h2>
                </div>

                <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  <ServiceCard
                    v-for="item in services?.filter(s => s.slug !== service.slug).slice(0, 3)"
                    :key="item.id"
                    :service="item"
                  />
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <EmptyState
        v-else
        title="Service not found"
        description="This service page does not have matching mock data yet."
      />
    </div>
  </section>
</template>