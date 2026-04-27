<script setup lang="ts">
const actions = [
  {
    title: 'Buat pemesanan',
    description: 'Mulai permintaan layanan baru dengan alur pemesanan yang lebih baik.',
    icon: 'i-lucide-calendar-plus-2',
    to: '/bookings/new'
  },
  {
    title: 'Jelajahi layanan',
    description: 'Temukan lebih banyak layanan dan bandingkan pilihan dengan lebih mudah.',
    icon: 'i-lucide-search',
    to: '/services'
  },
  {
    title: 'Tinjau profil',
    description: 'Perbarui detail, alamat utama, dan preferensi akun Anda.',
    icon: 'i-lucide-user-round',
    to: '/profile'
  }
]
</script>

<template>
  <div class="grid gap-6 xl:grid-cols-3">
    <NuxtLink
      v-for="action in actions"
      :key="action.title"
      :to="action.to"
      class="soft-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--tt-brand-soft)] text-[var(--tt-brand)]">
        <UIcon :name="action.icon" class="h-5 w-5" />
      </div>

      <h3 class="mt-5 text-lg font-semibold text-neutral-900">{{ action.title }}</h3>
      <p class="mt-3 text-sm leading-6 text-neutral-600">{{ action.description }}</p>

      <div class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--tt-brand)]">
        <span>Buka</span>
        <UIcon name="i-lucide-arrow-right" class="h-4 w-4" />
      </div>
    </NuxtLink>
  </div>
</template>