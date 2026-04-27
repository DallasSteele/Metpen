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
      eyebrow="Detail pemesanan"
      :title="booking ? booking.service : 'Pemesanan'"
      description="Halaman detail khusus membuat alur pemesanan terasa lebih lengkap."
    />

    <div v-if="booking" class="grid gap-6 xl:grid-cols-[1fr_1fr]">
      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Detail</p>
        </template>

        <div class="space-y-4">
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">ID Pemesanan</span>
            <span class="font-medium text-neutral-900">{{ booking.id }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Tanggal</span>
            <span class="font-medium text-neutral-900">{{ booking.date }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Waktu</span>
            <span class="font-medium text-neutral-900">{{ booking.time }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Status</span>
            <span class="font-medium text-neutral-900">{{ booking.status }}</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-500">Harga</span>
            <span class="font-medium text-neutral-900">Rp {{ booking.price.toLocaleString('id-ID') }}</span>
          </div>
        </div>
      </UCard>

      <BookingTimeline />
    </div>

    <EmptyState
      v-else
      title="Pemesanan tidak ditemukan"
      description="ID pemesanan ini tidak tersedia dalam data demo saat ini."
    />
  </div>
</template>