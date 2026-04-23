<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Confirm Booking - Tidy Tidys',
  description: 'Review and confirm your booking request.'
})

const toast = useToast()
const bookingStore = useBookingStore()
const { data: services } = await useFetch('/api/services')

const service = computed(() =>
  services.value?.find(item => item.slug === bookingStore.draft.service)
)

function handleBack() {
  return navigateTo('/bookings/new')
}

function handleConfirm() {
  toast.add({
    title: 'Booking confirmed',
    description: 'Your booking request has been staged successfully.',
    icon: 'i-lucide-calendar-check-2',
    color: 'success'
  })

  bookingStore.clearDraft()
  return navigateTo('/dashboard')
}
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Booking flow"
      title="Confirm your booking"
      description="Step 2 — final review before backend submission exists."
    />

    <div v-if="service" class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Review details</p>
        </template>

        <div class="space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Service</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ service.title }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Date & Time</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.date }} · {{ bookingStore.draft.time }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Address</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.address }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Notes</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.notes || 'No additional notes' }}
            </p>
          </div>
        </div>
      </UCard>

      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Price summary</p>
        </template>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-neutral-500">Starting price</span>
            <span class="text-sm font-medium text-neutral-900">
              Rp {{ service.priceFrom.toLocaleString('id-ID') }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-neutral-500">Service fee</span>
            <span class="text-sm font-medium text-neutral-900">Included</span>
          </div>

          <div class="border-t border-neutral-200 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-neutral-900">Estimated total</span>
              <span class="text-lg font-semibold text-neutral-900">
                Rp {{ service.priceFrom.toLocaleString('id-ID') }}
              </span>
            </div>
          </div>

          <div class="grid gap-3 pt-4">
            <UButton
              color="neutral"
              size="lg"
              block
              @click="handleConfirm"
            >
              Confirm booking
            </UButton>

            <UButton
              color="neutral"
              variant="outline"
              size="lg"
              block
              @click="handleBack"
            >
              Back to edit
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <EmptyState
      v-else
      title="No booking draft found"
      description="Start a new booking first so the confirmation page has something to review."
    />
  </div>
</template>