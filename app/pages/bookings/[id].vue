<script setup lang="ts">
const route = useRoute()
const { data: bookings } = await useFetch('/api/bookings')

const booking = computed(() =>
  (bookings.value || []).find(item => item.id === route.params.id)
)

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Booking detail"
      :title="booking ? booking.service : 'Booking'"
      description="A dedicated detail page makes the booking flow feel much deeper."
    />

    <div v-if="booking" class="grid gap-6 xl:grid-cols-[1fr_1fr]">
      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Details</p>
        </template>

        <div class="space-y-4">
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Booking ID</span>
            <span class="font-medium text-neutral-900">{{ booking.id }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Date</span>
            <span class="font-medium text-neutral-900">{{ booking.date }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Time</span>
            <span class="font-medium text-neutral-900">{{ booking.time }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Status</span>
            <span class="font-medium text-neutral-900">{{ booking.status }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Price</span>
            <span class="font-medium text-neutral-900">Rp {{ booking.price.toLocaleString('id-ID') }}</span>
          </div>
        </div>
      </UCard>

      <BookingTimeline />
    </div>

    <EmptyState
      v-else
      title="Booking not found"
      description="This booking ID is not present in the current mock set."
    />
  </div>
</template>