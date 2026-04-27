<script setup lang="ts">
const auth = useAuthStore()

const links = [
  { label: 'Dasbor', to: '/dashboard', icon: 'i-lucide-layout-dashboard' },
  { label: 'Layanan', to: '/services', icon: 'i-lucide-briefcase-business' },
  { label: 'Pemesanan', to: '/bookings', icon: 'i-lucide-calendar-days' },
  { label: 'Favorit', to: '/favorites', icon: 'i-lucide-heart' },
  { label: 'Profil', to: '/profile', icon: 'i-lucide-user-round' }
]
</script>

<template>
  <div class="mb-6 lg:hidden">
    <div class="soft-card-strong flex items-center justify-between px-4 py-4">
      <div>
        <p class="text-xs uppercase tracking-[0.18em] text-neutral-400">Dasbor</p>
        <p class="mt-1 text-sm font-semibold text-neutral-900">
          {{ auth.user?.name || 'Pengguna Demo' }}
        </p>
      </div>

      <UDrawer direction="left" title="Menu dasbor">
        <UButton
          color="primary"
          variant="soft"
          icon="i-lucide-panel-left"
        >
          Menu
        </UButton>

        <template #body>
          <div class="space-y-3">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="flex items-center gap-3 rounded-2xl border border-[var(--tt-line)] bg-white px-4 py-3 text-sm font-medium text-neutral-900"
            >
              <UIcon :name="link.icon" class="h-4 w-4" />
              <span>{{ link.label }}</span>
            </NuxtLink>
          </div>
        </template>
      </UDrawer>
    </div>
  </div>
</template>