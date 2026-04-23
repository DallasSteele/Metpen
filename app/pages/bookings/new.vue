<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'New Booking - Tidy Tidys',
  description: 'Create a new booking request.'
})

const bookingStore = useBookingStore()
const { data: services } = await useFetch('/api/services')
const { data: me } = await useFetch('/api/me')

const form = reactive({
  service: bookingStore.draft.service || '',
  date: bookingStore.draft.date || '',
  time: bookingStore.draft.time || '',
  address: bookingStore.draft.address || me.value?.preferredAddress || '',
  notes: bookingStore.draft.notes || ''
})

const selectedService = computed(() =>
  services.value?.find(item => item.slug === form.service)
)

function handleContinue() {
  bookingStore.setDraft({ ...form })
  return navigateTo('/bookings/confirm')
}
</script>

<template>
  <div class="space-y-8">
    <PageHeading
      eyebrow="Booking flow"
      title="Create a new booking"
      description="Step 1 — choose the service, slot, and service address."
    />

    <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <UCard class="rounded-3xl">
        <div class="grid gap-5">
          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Select service</label>
            <USelect
              v-model="form.service"
              :items="services?.map(service => ({ label: service.title, value: service.slug })) || []"
              placeholder="Choose a service"
              class="w-full"
            />
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Preferred date</label>
              <UInput v-model="form.date" type="date" />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Preferred time</label>
              <UInput v-model="form.time" type="time" />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Service address</label>
            <textarea
              v-model="form.address"
              rows="4"
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Notes</label>
            <textarea
              v-model="form.notes"
              rows="4"
              placeholder="Add parking info, access instructions, or handling notes."
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          <UButton
            color="neutral"
            size="lg"
            block
            @click="handleContinue"
          >
            Continue to confirmation
          </UButton>
        </div>
      </UCard>

      <UCard class="rounded-3xl">
        <template #header>
          <div>
            <p class="text-lg font-semibold text-neutral-900">Booking summary</p>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              Keep the summary visible while the user fills the form.
            </p>
          </div>
        </template>

        <div class="space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Service</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ selectedService?.title || 'Not selected yet' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Starting price</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ selectedService ? `Rp ${selectedService.priceFrom.toLocaleString('id-ID')}` : '—' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Preferred slot</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ form.date || 'Date not selected' }} {{ form.time ? `· ${form.time}` : '' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Address</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ form.address || 'Address not entered' }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>