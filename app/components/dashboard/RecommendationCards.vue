<script setup lang="ts">
const recommendations = [
  {
    title: 'Rekomendasi untuk Anda',
    description: 'Pembersihan Mendalam saat ini direkomendasikan berdasarkan pola penggunaan terbaru.',
    icon: 'i-lucide-sparkles',
    accent: 'bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]'
  },
  {
    title: 'Hemat waktu untuk pemesanan berulang',
    description: 'Simpan alamat dan catatan Anda untuk proses konfirmasi yang lebih cepat.',
    icon: 'i-lucide-history',
    accent: 'bg-[var(--tt-success-soft)] text-[var(--tt-success)]'
  },
  {
    title: 'Dukungan prioritas tersedia',
    description: 'Alur premium nantinya dapat terhubung dengan dukungan yang lebih cepat dan penjadwalan yang lebih fleksibel.',
    icon: 'i-lucide-headset',
    accent: 'bg-amber-50 text-amber-700'
  }
]
</script>

<template>
  <div class="grid gap-6 xl:grid-cols-3">
    <div
      v-for="item in recommendations"
      :key="item.title"
      class="soft-card p-6"
    >
      <div
        :class="[
          'flex h-12 w-12 items-center justify-center rounded-2xl',
          item.accent
        ]"
      >
        <UIcon :name="item.icon" class="h-5 w-5" />
      </div>

      <h3 class="mt-5 text-lg font-semibold text-neutral-900">{{ item.title }}</h3>
      <p class="mt-3 text-sm leading-6 text-neutral-600">{{ item.description }}</p>
    </div>
  </div>
</template>