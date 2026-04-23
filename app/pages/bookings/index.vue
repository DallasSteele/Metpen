<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Bookings - Tidy Tidys',
  description: 'Review booking history and statuses.'
})

const { data: bookings, pending } = await useFetch('/api/bookings')
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Bookings"
      title="Your bookings"
      description="A dedicated page for service history and current booking statuses."
    />

    <div class="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
  <UCard class="rounded-3xl">
    <template #header>
      <div>
        <p class="text-lg font-semibold text-neutral-900">Status summary</p>
        <p class="mt-2 text-sm leading-6 text-neutral-600">
          A cleaner overview before the full booking list.
        </p>
      </div>
    </template>

    <div class="grid gap-4 sm:grid-cols-3">
      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Confirmed</p>
        <p class="mt-2 text-2xl font-semibold text-neutral-900">
          {{ bookings?.filter(item => item.status === 'Confirmed').length || 0 }}
        </p>
      </div>

      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">In Progress</p>
        <p class="mt-2 text-2xl font-semibold text-neutral-900">
          {{ bookings?.filter(item => item.status === 'In Progress').length || 0 }}
        </p>
      </div>

      <div class="rounded-2xl border border-neutral-200 px-4 py-4">
        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Completed</p>
        <p class="mt-2 text-2xl font-semibold text-neutral-900">
          {{ bookings?.filter(item => item.status === 'Completed').length || 0 }}
        </p>
      </div>
    </div>
  </UCard>

  <BookingTimeline />
</div>

    <div v-if="pending" class="grid gap-4">
      <div
        v-for="n in 4"
        :key="n"
        class="rounded-3xl border border-neutral-200 bg-white p-6"
      >
        <div class="h-5 w-40 rounded bg-neutral-200" />
        <div class="mt-3 h-4 w-60 rounded bg-neutral-100" />
      </div>
    </div>

    <div v-else-if="!bookings?.length">
      <EmptyState
        title="No bookings yet"
        description="Your booking history will appear here once you start requesting services."
      />
    </div>

    <div v-else class="grid gap-4">
      <UCard
        v-for="booking in bookings"
        :key="booking.id"
        class="rounded-3xl"
      >
        <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-sm font-semibold text-neutral-900">{{ booking.service }}</p>
            <p class="mt-1 text-sm text-neutral-500">
              {{ booking.id }} · {{ booking.date }} · {{ booking.time }}
            </p>
          </div>

          <div class="flex items-center gap-3">
            <span
              class="rounded-full px-3 py-1 text-xs font-medium"
              :class="{
                'bg-emerald-50 text-emerald-700': booking.status === 'Confirmed',
                'bg-amber-50 text-amber-700': booking.status === 'In Progress',
                'bg-neutral-100 text-neutral-700': booking.status === 'Completed'
              }"
            >
              {{ booking.status }}
            </span>

            <span class="text-sm font-medium text-neutral-900">
              Rp {{ booking.price.toLocaleString('id-ID') }}
            </span>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>