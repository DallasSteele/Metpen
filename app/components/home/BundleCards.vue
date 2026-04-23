<script setup lang="ts">
const bundles = [
  {
    title: 'Essential Care',
    subtitle: 'For lighter routine needs',
    price: 'Rp 299.000',
    features: ['Basic home care', 'Flexible time slots', 'Quick turnaround'],
    highlight: false
  },
  {
    title: 'Premium Reset',
    subtitle: 'For a fuller, deeper service pass',
    price: 'Rp 649.000',
    features: ['Deep cleaning', 'Priority scheduling', 'Assigned specialist'],
    highlight: true
  },
  {
    title: 'Business Care',
    subtitle: 'For recurring operational requests',
    price: 'Custom quote',
    features: ['Custom scope', 'Coordinated schedule', 'Dedicated handling'],
    highlight: false
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Packages</p>
        <h2 class="section-title mt-4">More commercial content, without the cheap look</h2>
        <p class="body-muted mt-4">
          These cards add business-facing depth and make the product feel more complete.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <div
          v-for="bundle in bundles"
          :key="bundle.title"
          :class="[
            'rounded-[2rem] border p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)]',
            bundle.highlight
              ? 'border-[var(--tt-brand)] bg-white'
              : 'border-neutral-200 bg-white'
          ]"
        >
          <div
            v-if="bundle.highlight"
            class="mb-4 inline-flex rounded-full bg-[var(--tt-brand-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-brand)]"
          >
            Most popular
          </div>

          <p class="text-sm text-neutral-500">{{ bundle.subtitle }}</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
            {{ bundle.title }}
          </h3>

          <p class="mt-5 text-3xl font-semibold text-neutral-900">{{ bundle.price }}</p>

          <div class="mt-6 space-y-3">
            <div
              v-for="feature in bundle.features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
              <span class="text-sm text-neutral-700">{{ feature }}</span>
            </div>
          </div>

          <NuxtLink
            to="/services"
            :class="[
              'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium',
              bundle.highlight
                ? 'bg-[var(--tt-brand)] text-white'
                : 'border border-neutral-300 bg-white text-neutral-900'
            ]"
          >
            <span>Explore package</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>