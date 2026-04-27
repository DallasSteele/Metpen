<script setup lang="ts">
const open = ref(false)
const searchTerm = ref('')

function go(path: string) {
  open.value = false
  searchTerm.value = ''
  return navigateTo(path)
}

defineShortcuts({
  meta_k: () => open.value = true,
  ctrl_k: () => open.value = true
})

const groups = computed(() => [
  {
    id: 'pages',
    label: 'Halaman',
    items: [
      {
        label: 'Beranda',
        icon: 'i-lucide-house',
        suffix: '/',
        onSelect: () => go('/')
      },
      {
        label: 'Layanan',
        icon: 'i-lucide-briefcase-business',
        suffix: '/services',
        onSelect: () => go('/services')
      },
      {
        label: 'Dasbor',
        icon: 'i-lucide-layout-dashboard',
        suffix: '/dashboard',
        onSelect: () => go('/dashboard')
      },
      {
        label: 'Pemesanan',
        icon: 'i-lucide-calendar-days',
        suffix: '/bookings',
        onSelect: () => go('/bookings')
      },
      {
        label: 'Profil',
        icon: 'i-lucide-user-round',
        suffix: '/profile',
        onSelect: () => go('/profile')
      }
    ]
  },
  {
    id: 'services',
    label: 'Shortcut layanan',
    items: [
      {
        label: 'Pembersihan Rumah',
        icon: 'i-lucide-house',
        suffix: 'Layanan',
        onSelect: () => go('/services/home-cleaning')
      },
      {
        label: 'Penjemputan Laundry',
        icon: 'i-lucide-shirt',
        suffix: 'Layanan',
        onSelect: () => go('/services/laundry-pickup')
      },
      {
        label: 'Pembersihan Mendalam',
        icon: 'i-lucide-sparkles',
        suffix: 'Layanan',
        onSelect: () => go('/services/deep-cleaning')
      }
    ]
  },
  {
    id: 'actions',
    label: 'Aksi',
    items: [
      {
        label: 'Buat pemesanan baru',
        icon: 'i-lucide-calendar-plus-2',
        onSelect: () => go('/bookings/new')
      },
      {
        label: 'Konfirmasi draft pemesanan',
        icon: 'i-lucide-calendar-check-2',
        onSelect: () => go('/bookings/confirm')
      }
    ]
  }
])
</script>

<template>
  <UModal
    v-model:open="open"
    title="Pencarian cepat"
    description="Langsung menuju halaman, layanan, atau aksi dengan cepat."
    :ui="{ content: 'max-w-2xl' }"
  >
    <UButton
      color="neutral"
      variant="outline"
      icon="i-lucide-search"
      class="rounded-2xl"
    >
      Cari
      <span class="ml-2 rounded-lg border border-neutral-200 px-2 py-0.5 text-xs text-neutral-500">
        ⌘K
      </span>
    </UButton>

    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :groups="groups"
        placeholder="Cari halaman, layanan, atau aksi..."
        class="h-96"
      />
    </template>
  </UModal>
</template>