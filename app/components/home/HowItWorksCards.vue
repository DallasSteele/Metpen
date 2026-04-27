<script setup lang="ts">
const steps = [
  {
    step: '01',
    title: 'Pilih layanan',
    description: 'Jelajahi kategori, bandingkan pilihan, dan temukan yang paling sesuai dengan cepat.',
    icon: 'i-lucide-search'
  },
  {
    step: '02',
    title: 'Pilih jadwal',
    description: 'Tentukan waktu yang jelas dan dapat diandalkan.',
    icon: 'i-lucide-calendar-range'
  },
  {
    step: '03',
    title: 'Konfirmasi detail',
    description: 'Tinjau alamat, catatan, dan estimasi harga sebelum melanjutkan.',
    icon: 'i-lucide-clipboard-check'
  },
  {
    step: '04',
    title: 'Lacak pemesanan',
    description: 'Pantau progres melalui dasbor dan timeline yang lebih rapi.',
    icon: 'i-lucide-timer-reset'
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Alur</p>
        <h2 class="section-title mt-4">Alur yang lebih jelas dari minat hingga pemesanan</h2>
        <p class="body-muted mt-4">
          Lebih banyak konten, namun tetap terstruktur. Bagian ini menjelaskan produk tanpa terasa berat.
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