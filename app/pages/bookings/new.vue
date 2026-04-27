<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Buat Pemesanan Baru - Tidy Tidys',
  description: 'Buat permintaan pemesanan baru.'
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
      eyebrow="Alur pemesanan"
      title="Buat pemesanan baru"
      description="Langkah 1 — pilih layanan, jadwal, dan alamat layanan."
    />

    <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <UCard class="rounded-3xl">
        <div class="grid gap-5">
          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Pilih layanan</label>
            <USelect
              v-model="form.service"
              :items="services?.map(service => ({ label: service.title, value: service.slug })) || []"
              placeholder="Pilih layanan"
              class="w-full"
            />
          </div>

          <div class="grid gap-5 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Tanggal yang diinginkan</label>
              <UInput v-model="form.date" type="date" />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-neutral-700">Waktu yang diinginkan</label>
              <UInput v-model="form.time" type="time" />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Alamat layanan</label>
            <textarea
              v-model="form.address"
              rows="4"
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-neutral-700">Catatan</label>
            <textarea
              v-model="form.notes"
              rows="4"
              placeholder="Tambahkan info parkir, instruksi akses, atau catatan penanganan."
              class="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          <UButton
            color="neutral"
            size="lg"
            block
            @click="handleContinue"
          >
            Lanjut ke konfirmasi
          </UButton>
        </div>
      </UCard>

      <UCard class="rounded-3xl">
        <template #header>
          <div>
            <p class="text-lg font-semibold text-neutral-900">Ringkasan pemesanan</p>
            <p class="mt-2 text-sm leading-6 text-neutral-600">
              Tampilkan ringkasan agar tetap terlihat saat pengguna mengisi formulir.
            </p>
          </div>
        </template>

        <div class="space-y-4">
          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Layanan</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ selectedService?.title || 'Belum dipilih' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Harga mulai</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ selectedService ? `Rp ${selectedService.priceFrom.toLocaleString('id-ID')}` : '—' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Jadwal pilihan</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ form.date || 'Tanggal belum dipilih' }} {{ form.time ? `· ${form.time}` : '' }}
            </p>
          </div>

          <div class="rounded-2xl border border-neutral-200 px-4 py-3">
            <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Alamat</p>
            <p class="mt-1 text-sm font-medium text-neutral-900">
              {{ form.address || 'Alamat belum diisi' }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>