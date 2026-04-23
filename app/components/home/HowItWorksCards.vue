<script setup lang="ts">
const steps = [
  {
    step: '01',
    title: 'Choose a service',
    description: 'Browse categories, compare options, and find the right fit quickly.',
    icon: 'i-lucide-search'
  },
  {
    step: '02',
    title: 'Select a time slot',
    description: 'Pick a schedule that feels clear and dependable.',
    icon: 'i-lucide-calendar-range'
  },
  {
    step: '03',
    title: 'Confirm the details',
    description: 'Review address, notes, and price expectations before submitting.',
    icon: 'i-lucide-clipboard-check'
  },
  {
    step: '04',
    title: 'Track the booking',
    description: 'Follow progress through a cleaner dashboard and timeline.',
    icon: 'i-lucide-timer-reset'
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Flow</p>
        <h2 class="section-title mt-4">A clearer path from interest to booking</h2>
        <p class="body-muted mt-4">
          More content, but still structured. This section explains the product without becoming heavy.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="step in steps"
          :key="step.step"
          class="soft-card p-6"
        >
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
              <UIcon :name="step.icon" class="h-5 w-5" />
            </div>
            <span class="text-sm font-semibold text-neutral-400">{{ step.step }}</span>
          </div>

          <h3 class="mt-6 text-lg font-semibold text-neutral-900">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-neutral-600">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>