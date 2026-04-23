<script setup lang="ts">
const categories = [
  {
    title: 'Home Care',
    description: 'Routine home services with cleaner presentation and faster decision-making.',
    icon: 'i-lucide-house',
    color: 'bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]',
    count: '12 services'
  },
  {
    title: 'Laundry & Garment',
    description: 'Pickup, handling, and return flows that feel more premium and organized.',
    icon: 'i-lucide-shirt',
    color: 'bg-amber-50 text-amber-700',
    count: '6 services'
  },
  {
    title: 'Deep Reset',
    description: 'For move-ins, post-event cleanup, and more intensive service needs.',
    icon: 'i-lucide-sparkles',
    color: 'bg-[var(--tt-success-soft)] text-[var(--tt-success)]',
    count: '5 services'
  },
  {
    title: 'Business Requests',
    description: 'Larger scoped service requests with stronger planning and coordination.',
    icon: 'i-lucide-briefcase-business',
    color: 'bg-neutral-100 text-neutral-800',
    count: '4 services'
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Categories</p>
        <h2 class="section-title mt-4">Explore service categories more naturally</h2>
        <p class="body-muted mt-4">
          This gives the homepage more content depth and makes discovery feel less flat.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <NuxtLink
          v-for="category in categories"
          :key="category.title"
          to="/services"
          class="group soft-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
        >
          <div
            :class="[
              'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl',
              category.color
            ]"
          >
            <UIcon :name="category.icon" class="h-5 w-5" />
          </div>

          <div class="mb-3 inline-flex rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600">
            {{ category.count }}
          </div>

          <h3 class="text-xl font-semibold tracking-tight text-neutral-900">
            {{ category.title }}
          </h3>

          <p class="mt-3 text-sm leading-6 text-neutral-600">
            {{ category.description }}
          </p>

          <div class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)] transition group-hover:translate-x-1">
            <span>Browse</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>