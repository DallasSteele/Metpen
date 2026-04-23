<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const { data: bookings } = await useFetch('/api/bookings')

const items = computed<TimelineItem[]>(() =>
  (bookings.value || []).map((booking) => ({
    date: `${booking.date} · ${booking.time}`,
    title: booking.service,
    description: `${booking.id} · ${booking.status} · Rp ${booking.price.toLocaleString('id-ID')}`,
    icon:
      booking.status === 'Confirmed'
        ? 'i-lucide-calendar-check-2'
        : booking.status === 'In Progress'
          ? 'i-lucide-loader-circle'
          : 'i-lucide-check-circle-2'
  }))
)
</script>

<template>
  <UCard class="rounded-3xl">
    <template #header>
      <div>
        <p class="text-lg font-semibold text-neutral-900">Booking activity</p>
        <p class="mt-2 text-sm leading-6 text-neutral-600">
          A cleaner timeline view of recent activity instead of only stacked cards.
        </p>
      </div>
    </template>

    <UTimeline :items="items" color="neutral" />
  </UCard>
</template>