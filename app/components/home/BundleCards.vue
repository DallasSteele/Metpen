<script setup lang="ts">
const bundles = [
  {
    title: 'Perawatan Esensial',
    subtitle: 'Untuk kebutuhan rutin yang ringan',
    price: 'Rp 299.000',
    features: ['Perawatan rumah dasar', 'Waktu fleksibel', 'Proses cepat'],
    highlight: false
  },
  {
    title: 'Reset Premium',
    subtitle: 'Untuk layanan yang lebih menyeluruh dan mendalam',
    price: 'Rp 649.000',
    features: ['Pembersihan mendalam', 'Penjadwalan prioritas', 'Spesialis khusus'],
    highlight: true
  },
  {
    title: 'Perawatan Bisnis',
    subtitle: 'Untuk kebutuhan operasional berulang',
    price: 'Harga khusus',
    features: ['Ruang lingkup kustom', 'Jadwal terkoordinasi', 'Penanganan khusus'],
    highlight: false
  }
]
</script>

<template>
  <section class="pb-20 lg:pb-28">
    <div class="container-shell">
      <div class="mb-10 max-w-2xl">
        <p class="eyebrow">Paket</p>
        <h2 class="section-title mt-4">Konten komersial yang lebih kuat tanpa terlihat murahan</h2>
        <p class="body-muted mt-4">
          Kartu ini menambahkan kedalaman dari sisi bisnis dan membuat produk terasa lebih lengkap.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-3">
        <div
          v-for="bundle in bundles"
          :key="bundle.title"
          :class="[
            'rounded-[2rem] border p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)]',
            bundle.highlight
              ? 'border-[var(--tt-brand)] bg-white'
              : 'border-neutral-200 bg-white'
          ]"
        >
          <div
            v-if="bundle.highlight"
            class="mb-4 inline-flex rounded-full bg-[var(--tt-brand-soft)] px-3 py-1 text-xs font-medium text-[var(--tt-brand)]"
          >
            Paling populer
          </div>

          <p class="text-sm text-neutral-500">{{ bundle.subtitle }}</p>
          <h3 class="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
            {{ bundle.title }}
          </h3>

          <p class="mt-5 text-3xl font-semibold text-neutral-900">{{ bundle.price }}</p>

          <div class="mt-6 space-y-3">
            <div
              v-for="feature in bundle.features"
              :key="feature"
              class="flex items-center gap-3"
            >
              <UIcon name="i-lucide-check-circle-2" class="h-4 w-4 text-[var(--tt-success)]" />
              <span class="text-sm text-neutral-700">{{ feature }}</span>
            </div>
          </div>

          <NuxtLink
            to="/services"
            :class="[
              'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium',
              bundle.highlight
                ? 'bg-[var(--tt-brand)] text-white'
                : 'border border-neutral-300 bg-white text-neutral-900'
            ]"
          >
            <span>Jelajahi paket</span>
            <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>