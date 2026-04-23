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
    label: 'Pages',
    items: [
      {
        label: 'Home',
        icon: 'i-lucide-house',
        suffix: '/',
        onSelect: () => go('/')
      },
      {
        label: 'Services',
        icon: 'i-lucide-briefcase-business',
        suffix: '/services',
        onSelect: () => go('/services')
      },
      {
        label: 'Dashboard',
        icon: 'i-lucide-layout-dashboard',
        suffix: '/dashboard',
        onSelect: () => go('/dashboard')
      },
      {
        label: 'Bookings',
        icon: 'i-lucide-calendar-days',
        suffix: '/bookings',
        onSelect: () => go('/bookings')
      },
      {
        label: 'Profile',
        icon: 'i-lucide-user-round',
        suffix: '/profile',
        onSelect: () => go('/profile')
      }
    ]
  },
  {
    id: 'services',
    label: 'Service shortcuts',
    items: [
      {
        label: 'Home Cleaning',
        icon: 'i-lucide-house',
        suffix: 'Service',
        onSelect: () => go('/services/home-cleaning')
      },
      {
        label: 'Laundry Pickup',
        icon: 'i-lucide-shirt',
        suffix: 'Service',
        onSelect: () => go('/services/laundry-pickup')
      },
      {
        label: 'Deep Cleaning',
        icon: 'i-lucide-sparkles',
        suffix: 'Service',
        onSelect: () => go('/services/deep-cleaning')
      }
    ]
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      {
        label: 'Create new booking',
        icon: 'i-lucide-calendar-plus-2',
        onSelect: () => go('/bookings/new')
      },
      {
        label: 'Confirm draft booking',
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
    title="Quick search"
    description="Jump to pages, services, and actions instantly."
    :ui="{ content: 'max-w-2xl' }"
  >
    <UButton
      color="neutral"
      variant="outline"
      icon="i-lucide-search"
      class="rounded-2xl"
    >
      Search
      <span class="ml-2 rounded-lg border border-neutral-200 px-2 py-0.5 text-xs text-neutral-500">
        ⌘K
      </span>
    </UButton>

    <template #content>
      <UCommandPalette
        v-model:search-term="searchTerm"
        :groups="groups"
        placeholder="Search pages, services, actions..."
        class="h-96"
      />
    </template>
  </UModal>
</template>