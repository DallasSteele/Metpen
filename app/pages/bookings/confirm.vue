<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Konfirmasi Pemesanan - Tidy Tidys',
  description: 'Tinjau dan konfirmasi permintaan pemesanan Anda.'
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
    title: 'Pemesanan dikonfirmasi',
    description: 'Permintaan pemesanan Anda berhasil disimpan.',
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
      eyebrow="Alur pemesanan"
      title="Konfirmasi pemesanan Anda"
      description="Langkah 2 — peninjauan akhir sebelum dikirim ke backend."
    />

    <div v-if="service" class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Tinjau detail</p>
        </template>

        <div class="space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Layanan</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">{{ service.title }}</p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Tanggal & Waktu</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.date }} · {{ bookingStore.draft.time }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Alamat</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.address }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Catatan</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ bookingStore.draft.notes || 'Tidak ada catatan tambahan' }}
            </p>
          </div>
        </div>
      </UCard>

      <UCard class="rounded-3xl">
        <template #header>
          <p class="text-lg font-semibold text-neutral-900">Ringkasan harga</p>
        </template>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-neutral-500">Harga mulai</span>
            <span class="text-sm font-medium text-neutral-900">
              Rp {{ service.priceFrom.toLocaleString('id-ID') }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-neutral-500">Biaya layanan</span>
            <span class="text-sm font-medium text-neutral-900">Termasuk</span>
          </div>

          <div class="border-t border-neutral-200 pt-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-neutral-900">Estimasi total</span>
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
              Konfirmasi pemesanan
            </UButton>

            <UButton
              color="neutral"
              variant="outline"
              size="lg"
              block
              @click="handleBack"
            >
              Kembali untuk edit
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <EmptyState
      v-else
      title="Draft pemesanan tidak ditemukan"
      description="Mulai pemesanan baru terlebih dahulu agar halaman ini dapat menampilkan ringkasan."
    />
  </div>
</template>